import { v2 as cloudinary } from "cloudinary";

/** Strip wrapping quotes that often get pasted into Vercel env vars. */
function env(name: string): string {
  return (process.env[name] || "").replace(/^["']|["']$/g, "").trim();
}

const cloudName =
  env("NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME") ||
  env("CLOUDINARY_CLOUD_NAME") ||
  "gy0zusrn";
const apiKey = env("CLOUDINARY_API_KEY");
const apiSecret = env("CLOUDINARY_API_SECRET");

cloudinary.config({
  cloud_name: cloudName,
  api_key: apiKey || undefined,
  api_secret: apiSecret || undefined,
  secure: true,
});

export function assertCloudinaryConfigured() {
  if (!cloudName || !apiKey || !apiSecret) {
    throw new Error(
      "Cloudinary is not configured. Set NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, and CLOUDINARY_API_SECRET (without quotes) in your environment."
    );
  }
}

export function getCloudinaryCloudName() {
  return cloudName;
}

export default cloudinary;
