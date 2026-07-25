import { NextRequest, NextResponse } from "next/server";
import { ObjectId } from "mongodb";
import { getDb, serialize, escapeRegex } from "@/lib/mongodb";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  try {
    const db = await getDb();
    const col = db.collection("pets");
    const sp = request.nextUrl.searchParams;

    // Count only
    if (sp.get("count") === "1") {
      const q: Record<string, unknown> = {};
      if (sp.get("category")) q.category = sp.get("category");
      const count = await col.countDocuments(q);
      return NextResponse.json({ count });
    }

    // Single document by id
    const id = sp.get("id");
    if (id !== null) {
      if (!ObjectId.isValid(id)) return NextResponse.json(null);
      const q: Record<string, unknown> = { _id: new ObjectId(id) };
      if (sp.get("category")) q.category = sp.get("category");
      const doc = await col.findOne(q);
      return NextResponse.json(serialize(doc));
    }

    const query: Record<string, unknown> = {};
    if (sp.get("category")) query.category = sp.get("category");

    if (sp.has("breed")) {
      query.breed = { $regex: escapeRegex(sp.get("breed")!), $options: "i" };
    }
    if (sp.has("breedExact")) {
      query.breed = { $regex: `^${escapeRegex(sp.get("breedExact")!)}$`, $options: "i" };
    }
    if (sp.has("name")) {
      query.name = { $regex: escapeRegex(sp.get("name")!), $options: "i" };
    }
    if (sp.has("nameExact")) {
      query.name = { $regex: `^${escapeRegex(sp.get("nameExact")!)}$`, $options: "i" };
    }
    if (sp.has("excludeId") && ObjectId.isValid(sp.get("excludeId")!)) {
      query._id = { $ne: new ObjectId(sp.get("excludeId")!) };
    }

    const sortDir = sp.get("sort") === "asc" ? 1 : -1;
    let cursor = col.find(query).sort({ _id: sortDir });

    const limit = sp.get("limit");
    if (limit) cursor = cursor.limit(parseInt(limit, 10));

    const docs = await cursor.toArray();
    return NextResponse.json(docs.map((d) => serialize(d)));
  } catch (err) {
    console.error("GET /api/pets error:", err);
    return NextResponse.json({ error: "Failed to fetch pets" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const db = await getDb();
    const body = await request.json();
    const doc = { ...body, created_at: new Date().toISOString() };
    const result = await db.collection("pets").insertOne(doc);
    return NextResponse.json({ id: String(result.insertedId), ...doc }, { status: 201 });
  } catch (err) {
    console.error("POST /api/pets error:", err);
    return NextResponse.json({ error: "Failed to create pet" }, { status: 500 });
  }
}
