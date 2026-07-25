import { NextRequest, NextResponse } from "next/server";
import { ObjectId } from "mongodb";
import { getDb, serialize } from "@/lib/mongodb";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    if (!ObjectId.isValid(id)) {
      return NextResponse.json({ error: "Invalid id" }, { status: 400 });
    }
    const db = await getDb();
    const doc = await db.collection("pets").findOne({ _id: new ObjectId(id) });
    if (!doc) {
      return NextResponse.json({ error: "Pet not found" }, { status: 404 });
    }
    return NextResponse.json(serialize(doc));
  } catch (err) {
    console.error("GET /api/pets/[id] error:", err);
    return NextResponse.json({ error: "Failed to fetch pet" }, { status: 500 });
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    if (!ObjectId.isValid(id)) {
      return NextResponse.json({ error: "Invalid id" }, { status: 400 });
    }

    const body = await request.json();
    const {
      id: _clientId,
      _id,
      created_at,
      ...rest
    } = body as Record<string, unknown>;

    const update = {
      ...rest,
      updated_at: new Date().toISOString(),
    };

    const db = await getDb();
    const result = await db.collection("pets").findOneAndUpdate(
      { _id: new ObjectId(id) },
      { $set: update },
      { returnDocument: "after" }
    );

    if (!result) {
      return NextResponse.json({ error: "Pet not found" }, { status: 404 });
    }

    return NextResponse.json(serialize(result));
  } catch (err) {
    console.error("PUT /api/pets/[id] error:", err);
    return NextResponse.json({ error: "Failed to update pet" }, { status: 500 });
  }
}

export async function DELETE(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    if (!ObjectId.isValid(id)) {
      return NextResponse.json({ error: "Invalid id" }, { status: 400 });
    }
    const db = await getDb();
    await db.collection("pets").deleteOne({ _id: new ObjectId(id) });
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("DELETE /api/pets/[id] error:", err);
    return NextResponse.json({ error: "Failed to delete pet" }, { status: 500 });
  }
}
