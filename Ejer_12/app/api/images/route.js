import { NextResponse } from 'next/server';
import clientPromise from '../../../lib/mongodb';

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB);
    const collection = db.collection('images');

    const images = await collection.find({}).sort({ createdAt: -1 }).toArray();

    return NextResponse.json(images);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
