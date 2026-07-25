import { NextRequest, NextResponse } from "next/server";
import { Binary, ObjectId } from "mongodb";
import { getDb } from "@/lib/mongodb";

export const runtime = "nodejs";

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
    const doc = await db.collection("images").findOne({ _id: new ObjectId(id) });

    if (!doc) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    const binary = doc.data as Binary;
    const bytes = binary?.buffer ?? binary;

    return new NextResponse(Buffer.from(bytes as Uint8Array), {
      status: 200,
      headers: {
        "Content-Type": doc.contentType || "application/octet-stream",
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    });
  } catch (err) {
    console.error("GET /api/images/[id] error:", err);
    return NextResponse.json({ error: "Failed to load image" }, { status: 500 });
  }
}
