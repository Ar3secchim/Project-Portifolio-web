import { GetObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { fileURLToPath } from "url";

const s3 = new S3Client({
  region: "us-east-1",
  credentials: {
    accessKeyId: process.env.S3_ACCESS_KEY,
    secretAccessKey: process.env.S3_ACCESS_SECRET,
  },
});

const getS3Object = async () => {
  const command = new GetObjectCommand({
    Bucket: process.env.S3_BUCKET,
    Key: "81eT2pjx4jL._SL1500_.jpg",
  });

  try {
    const response = await s3.send(command);
    s3.getSignedUrl("putObject", params, function (err, url) {
      console.log("The URL is", url);
    });
    //const str = response.Body.transformToWebStream();
    return url;
  } catch (err) {
    console.error(err);
  }
};

export default getS3Object;
