from flask import Flask, render_template
from flask_sqlalchemy import SQLAlchemy
from config import *
import boto3

s3_resource = boto3.resource(
    "s3",
    aws_access_key_id=AWS_ACCESS_KEY_ID,
    aws_secret_access_key=AWS_SECRET_ACCESS_KEY
)

app = Flask(__name__, instance_relative_config=True)
app.config.from_mapping(
    SECRET_KEY="dev",
    MAX_CONTENT_LENGTH=5 * 1024 * 1024,
    SQLALCHEMY_DATABASE_URI=SQLALCHEMY_DATABASE_URI,
    SQLALCHEMY_TRACK_MODIFICATIONS=True
)

db = SQLAlchemy(app)
db.init_app(app)

from app.models import *
db.create_all()

from . import card
app.register_blueprint(card.bp, url_prefix="/card")

@app.route("/")
def index():
    return render_template("index.html")