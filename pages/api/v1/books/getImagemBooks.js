import AwsClientS3 from "@/infra/AwsClient";
import { GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

const getImagemBooks = async (keyObject) => {
  const GetObjectS3 = new GetObjectCommand({
    Bucket: process.env.S3_BUCKET,
    Key: keyObject,
  });

  try {
    const urlImagem = await getSignedUrl(AwsClientS3, GetObjectS3);
    return urlImagem;
  } catch (err) {
    console.error(err);
  }
};

export default getImagemBooks;
