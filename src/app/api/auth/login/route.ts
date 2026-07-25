import { NextRequest, NextResponse } from "next/server";
import {
  ADMIN_COOKIE,
  createAdminSessionToken,
  validateAdminLogin,
} from "@/lib/auth";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const email = String(body.email || "");
    const password = String(body.password || "");

    if (!validateAdminLogin(email, password)) {
      return NextResponse.json(
        { error: "Invalid email or password" },
        { status: 401 }
      );
    }

    const token = createAdminSessionToken(email.trim().toLowerCase());
    const response = NextResponse.json({ success: true });

    response.cookies.set(ADMIN_COOKIE, token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });

    return response;
  } catch (err) {
    console.error("POST /api/auth/login error:", err);
    return NextResponse.json({ error: "Login failed" }, { status: 500 });
  }
}
