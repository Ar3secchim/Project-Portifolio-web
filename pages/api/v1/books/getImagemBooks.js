import { GetObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

const s3 = new S3Client({
  region: "us-east-1",
  credentials: {
    accessKeyId: process.env.S3_ACCESS_KEY,
    secretAccessKey: process.env.S3_ACCESS_SECRET,
  },
});

const getS3Object = async (keyObject) => {
  const command = new GetObjectCommand({
    Bucket: process.env.S3_BUCKET,
    Key: keyObject,
  });

  try {
    const url = await getSignedUrl(s3, command);
    return url;
  } catch (err) {
    console.error(err);
  }
};

export default getS3Object;
