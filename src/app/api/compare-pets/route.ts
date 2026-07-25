import { NextRequest, NextResponse } from "next/server";
import { getDb, serialize } from "@/lib/mongodb";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  try {
    const db = await getDb();
    const sp = request.nextUrl.searchParams;
    const query: Record<string, unknown> = {};
    if (sp.get("category")) query.category = sp.get("category");
    const sortDir = sp.get("sort") === "asc" ? 1 : -1;
    const docs = await db
      .collection("compare_pets")
      .find(query)
      .sort({ _id: sortDir })
      .toArray();
    return NextResponse.json(docs.map((d) => serialize(d)));
  } catch (err) {
    console.error("GET /api/compare-pets error:", err);
    return NextResponse.json({ error: "Failed to fetch compare pets" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const db = await getDb();
    const body = await request.json();
    const doc = { ...body, created_at: new Date().toISOString() };
    const result = await db.collection("compare_pets").insertOne(doc);
    return NextResponse.json({ id: String(result.insertedId), ...doc }, { status: 201 });
  } catch (err) {
    console.error("POST /api/compare-pets error:", err);
    return NextResponse.json({ error: "Failed to create compare pet" }, { status: 500 });
  }
}
