import { createHmac, timingSafeEqual } from "crypto";
import { cookies } from "next/headers";

export const ADMIN_COOKIE = "petsbarn_admin_session";

export function getAdminCredentials() {
  return {
    email: process.env.ADMIN_EMAIL || "admin@petsbern.com",
    password: process.env.ADMIN_PASSWORD || "123456",
  };
}

function getSessionSecret() {
  return (
    process.env.ADMIN_SESSION_SECRET ||
    process.env.CLOUDINARY_API_SECRET ||
    "petsbarn-admin-session-secret"
  );
}

export function createAdminSessionToken(email: string): string {
  return createHmac("sha256", getSessionSecret()).update(`admin:${email}`).digest("hex");
}

export function verifyAdminSessionToken(token: string | undefined | null): boolean {
  if (!token) return false;
  const { email } = getAdminCredentials();
  const expected = createAdminSessionToken(email);
  try {
    const a = Buffer.from(token);
    const b = Buffer.from(expected);
    if (a.length !== b.length) return false;
    return timingSafeEqual(a, b);
  } catch {
    return false;
  }
}

export async function isAdminAuthenticated(): Promise<boolean> {
  const cookieStore = await cookies();
  return verifyAdminSessionToken(cookieStore.get(ADMIN_COOKIE)?.value);
}

export function validateAdminLogin(email: string, password: string): boolean {
  const creds = getAdminCredentials();
  return (
    email.trim().toLowerCase() === creds.email.toLowerCase() &&
    password === creds.password
  );
}
