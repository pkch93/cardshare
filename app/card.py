from flask import Blueprint, request, render_template, redirect, url_for
from app.models import Card
from app import db, s3_resource
from config import S3_BUCKET_NAME, AWS_S3_RESION, KAKAOLINK_KEY
import datetime

bp = Blueprint("card", __name__)

@bp.route("/create", methods=["GET", "POST"])
def create_card():
    if request.method == "GET":
        type = request.args.get("type")
        card = Card()
        return render_template("form.html", type=type, card=card)
    else:
        if request.form:
            title = request.form.get("title")
            content = request.form.get("content")
            receiver = request.form.get("receiver")
            writer = request.form.get("writer")
            card_type = request.form.get("card_type")
            img = request.files["img"]

            img_url = _s3_img_upload(img)
            card = Card(title, content, receiver, writer, card_type, img_url)
            db.session.add(card)
            db.session.commit()
        return redirect(url_for('card.get_card', secret_code=card.secret_code))

def _s3_img_upload(img):
    my_bucket = s3_resource.Bucket(S3_BUCKET_NAME)
    filename = f"{datetime.datetime.now().strftime('%Y%m%d%f%z')}_{img.filename}"
    my_bucket.put_object(Key=filename, Body=img)
    return f"https://s3.{AWS_S3_RESION}.amazonaws.com/{S3_BUCKET_NAME}/{filename}"

@bp.route("/<secret_code>")
def get_card(secret_code):
    card = Card.query.filter_by(secret_code=secret_code).first()
    return render_template("card.html", card=card, kakaolink=KAKAOLINK_KEY)