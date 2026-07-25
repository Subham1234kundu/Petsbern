import { NextRequest, NextResponse } from "next/server";
import { getDb, serialize } from "@/lib/mongodb";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const db = await getDb();
    const docs = await db
      .collection("blogs")
      .find({})
      .sort({ _id: -1 })
      .toArray();
    return NextResponse.json(docs.map((d) => serialize(d)));
  } catch (err) {
    console.error("GET /api/blogs error:", err);
    return NextResponse.json({ error: "Failed to fetch blogs" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const db = await getDb();
    const body = await request.json();
    const doc = { ...body, created_at: new Date().toISOString() };
    const result = await db.collection("blogs").insertOne(doc);
    return NextResponse.json({ id: String(result.insertedId), ...doc }, { status: 201 });
  } catch (err) {
    console.error("POST /api/blogs error:", err);
    return NextResponse.json({ error: "Failed to create blog" }, { status: 500 });
  }
}
