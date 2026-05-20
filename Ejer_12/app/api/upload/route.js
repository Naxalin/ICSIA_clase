import { NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';
import clientPromise from '../../../lib/mongodb';
import { uploadToFilebase } from '../../../lib/filebase';
import { analyzeImage } from '../../../lib/groq';

export async function POST(req) {
  try {
    const formData = await req.formData();
    const file = formData.get('image');

    if (!file) {
      return NextResponse.json({ error: 'No se recibió imagen' }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const originalName = file.name;
    const ext = originalName.split('.').pop();
    const uuid = uuidv4();
    const filename = `${uuid}.${ext}`;
    const mimetype = file.type;

    const imageUrl = await uploadToFilebase(buffer, filename, mimetype);

    const elements = await analyzeImage(buffer, mimetype)
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB);
    const collection = db.collection('images');

    const doc = {
      filename,
      url: imageUrl,
      elements,
      createdAt: new Date(),
    };

    const result = await collection.insertOne(doc);

    return NextResponse.json({
      _id: result.insertedId,
      ...doc,
    });
  } catch (error) {
    console.error('Error upload:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
