from app import db
import uuid

class Card(db.Model):
    __tablename__ = "card"
    id = db.Column(db.Integer, primary_key=True)
    hash = db.Column(db.String, unique=True)
    title = db.Column(db.String)
    content = db.Column(db.Text)
    receiver = db.Column(db.String(20))
    writer = db.Column(db.String(20))
    template_type = db.Column(db.Integer)
    img_url = db.Column(db.String)

    def __init__(self, title, content, receiver, writer, img_url):
        self.title = title
        self.hash = str(uuid.uuid4())
        self.content = content
        self.receiver = receiver
        self.writer = writer
        self.img_url = img_url