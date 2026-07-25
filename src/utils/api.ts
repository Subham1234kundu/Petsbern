// Client-side helpers for talking to the MongoDB-backed API routes.

/** Upload an image file to Cloudinary via /api/upload and return its CDN URL. */
export async function uploadImage(file: File, folder = "petsbarn"): Promise<string> {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("folder", folder);

  const res = await fetch("/api/upload", { method: "POST", body: formData });
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.error || "Image upload failed");
  }
  const { url } = await res.json();
  return url as string;
}

/** GET JSON from an API route, returning the parsed body. */
export async function apiGet<T = unknown>(path: string): Promise<T> {
  const res = await fetch(path, { cache: "no-store" });
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.error || `Request failed: ${res.status}`);
  }
  return res.json();
}
