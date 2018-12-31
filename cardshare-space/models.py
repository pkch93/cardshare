from app import db
import uuid

class Card(db.Model):
    __tablename__ = "card"
    id = db.Column(db.Integer, primary_key=True)
    secret_code = db.Column(db.String, unique=True)
    title = db.Column(db.String)
    content = db.Column(db.Text)
    receiver = db.Column(db.String(20))
    writer = db.Column(db.String(20))
    card_type = db.Column(db.String(1))
    img_url = db.Column(db.String)

    def __init__(self, title="", content="", receiver="", writer="", card_type="", img_url=""):
        self.title = title
        self.secret_code = str(uuid.uuid4())
        self.content = content
        self.receiver = receiver
        self.writer = writer
        self.card_type = card_type
        self.img_url = img_url