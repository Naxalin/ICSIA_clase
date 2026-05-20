import { NextResponse } from 'next/server';
import clientPromise from '../../../lib/mongodb';

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const q = searchParams.get('q') || '';

    const terms = q
      .split(',')
      .map(t => t.trim().toLowerCase())
      .filter(Boolean)
      .slice(0, 3);

    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB);
    const collection = db.collection('images');

    let images;

    if (terms.length === 0) {
      images = await collection.find({}).sort({ createdAt: -1 }).toArray();
    } else {
      const regexConditions = terms.map(term => ({
        elements: { $elemMatch: { $regex: term, $options: 'i' } },
      }));

      images = await collection
        .find({ $and: regexConditions })
        .sort({ createdAt: -1 })
        .toArray();
    }

    return NextResponse.json(images);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
