import { NextRequest, NextResponse } from "next/server";
import cloudinary, { assertCloudinaryConfigured } from "@/lib/cloudinary";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MAX_SIZE = 8 * 1024 * 1024;

export async function POST(request: NextRequest) {
  try {
    assertCloudinaryConfigured();

    const formData = await request.formData();
    const file = formData.get("file");

    if (!file || typeof file === "string") {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    if (file.size > MAX_SIZE) {
      return NextResponse.json({ error: "File too large (max 8MB)" }, { status: 413 });
    }

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const folder =
      ((formData.get("folder") as string) || "petsbarn").replace(/^["']|["']$/g, "") ||
      "petsbarn";

    const result = await new Promise<{
      secure_url: string;
      public_id: string;
      width: number;
      height: number;
      format: string;
    }>((resolve, reject) => {
      cloudinary.uploader
        .upload_stream(
          {
            folder,
            resource_type: "image",
            overwrite: false,
          },
          (error, uploadResult) => {
            if (error || !uploadResult?.secure_url) {
              reject(error || new Error("Cloudinary upload failed"));
              return;
            }
            resolve({
              secure_url: uploadResult.secure_url,
              public_id: uploadResult.public_id!,
              width: uploadResult.width!,
              height: uploadResult.height!,
              format: uploadResult.format!,
            });
          }
        )
        .end(buffer);
    });

    return NextResponse.json(
      {
        url: result.secure_url,
        public_id: result.public_id,
        width: result.width,
        height: result.height,
        format: result.format,
      },
      { status: 201 }
    );
  } catch (err) {
    console.error("POST /api/upload error:", err);
    const message =
      err instanceof Error ? err.message : "Failed to upload image to Cloudinary";
    const status = message.includes("not configured") ? 503 : 500;
    return NextResponse.json({ error: message }, { status });
  }
}
