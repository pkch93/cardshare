import os
# POSTGRESQL CONFIG
USERNAME = os.environ.get("DB_USERNAME")
PASSWORD = os.environ.get("DB_PASSWORD")
DB_NAME = os.environ.get("DB_NAME")
SQLALCHEMY_DATABASE_URI = f"postgresql://{USERNAME}:{PASSWORD}@localhost:5432/{DB_NAME}"

# AWS BUCKET CONFIG
S3_BUCKET_NAME = os.environ.get("S3_BUCKET")
AWS_ACCESS_KEY_ID = os.environ.get("S3_KEY")
AWS_SECRET_ACCESS_KEY = os.environ.get("S3_SECRET_ACCESS_KEY")
AWS_S3_RESION = os.environ.get("S3_RESION")

# KAKAO KEY
KAKAOLINK_KEY = os.environ.get("KAKAOLINK_KEY")