from flask import Blueprint, request, render_template, redirect, url_for

from app import db
from app.models import Card
from config import S3_BUCKET_NAME, AWS_S3_RESION, KAKAOLINK_KEY, AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY

bp = Blueprint("card", __name__)

@bp.route("/create", methods=["GET", "POST"])
def create_card():
    if request.method == "GET":
        type = request.args.get("type") or "1"
        card = Card()
        return render_template("form.html", type=type, card=card, aws_id=AWS_ACCESS_KEY_ID, aws_secret=AWS_SECRET_ACCESS_KEY, s3_bucket=S3_BUCKET_NAME, aws_resion=AWS_S3_RESION)
    else:
        if request.form:
            title = request.form.get("title")
            content = request.form.get("content")
            receiver = request.form.get("receiver")
            writer = request.form.get("writer")
            card_type = request.form.get("card_type")
            img_url = request.form.get("img_url")
            print(img_url)

            card = Card(title, content, receiver, writer, card_type, img_url)
            db.session.add(card)
            db.session.commit()
        return redirect(url_for('card.get_card', secret_code=card.secret_code))

@bp.route("/<secret_code>")
def get_card(secret_code):
    card = Card.query.filter_by(secret_code=secret_code).first()
    return render_template("card.html", card=card, kakaolink=KAKAOLINK_KEY)