from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
import boto3
import os

load_dotenv()


def listAllBuckets():

    access_key = os.environ.get("AWS_ACCESS_TOKEN_KEY")
    secret_key = os.environ.get("AWS_SECRET_ACCESS_TOKEN")
    s3 = boto3.resource(
        service_name='s3',
        region_name='us-east-1',
        aws_access_key_id=access_key,
        aws_secret_access_key=secret_key
    )
    for bucket in s3.buckets.all():
        print(bucket.name)


app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

print("Server is running!")

listAllBuckets()


@app.get("/nis")
async def nis():
    return {"message": "Server is ready"}
