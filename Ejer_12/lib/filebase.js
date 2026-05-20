import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';

const s3 = new S3Client({
  endpoint: "https://s3.filebase.io",
  region: "auto",
  credentials: {
    accessKeyId: process.env.FILEBASE_ACCESS_KEY,
    secretAccessKey: process.env.FILEBASE_SECRET_KEY,
  },
  forcePathStyle: true,
});

export default s3;

export async function uploadToFilebase(buffer, filename, mimetype) {
  const command = new PutObjectCommand({
    Bucket: process.env.FILEBASE_BUCKET,
    Key: filename,
    Body: buffer,
    ContentType: mimetype,
    ACL: 'public-read',
  });

  await s3.send(command);

  // ✅ URL pública correcta
  const url = `https://s3.filebase.io/${process.env.FILEBASE_BUCKET}/${filename}`;
  return url;
}