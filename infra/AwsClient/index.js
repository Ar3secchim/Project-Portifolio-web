import { S3Client } from '@aws-sdk/client-s3';

const AwsClientS3 = new S3Client({
  region: 'us-east-1',
  credentials: {
    accessKeyId: process.env.S3_ACCESS_KEY,
    secretAccessKey: process.env.S3_ACCESS_SECRET,
  },
});

export default AwsClientS3;
