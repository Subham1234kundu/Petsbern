"use client";

import { FormEvent, Suspense, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const nextPath = searchParams.get("next") || "/dashboard";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setError(data.error || "Invalid email or password");
        setLoading(false);
        return;
      }

      router.replace(nextPath.startsWith("/") ? nextPath : "/dashboard");
      router.refresh();
    } catch {
      setError("Something went wrong. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8">
      <h1 className="text-xl font-bold text-[#111] mb-1">Welcome back</h1>
      <p className="text-sm text-gray-500 mb-6">
        Sign in with your admin credentials to manage pets and blogs.
      </p>

      {error && (
        <div className="mb-4 p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm font-medium">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-1.5">
            Email
          </label>
          <input
            type="email"
            required
            autoComplete="username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="admin@petsbern.com"
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFC501] focus:bg-white transition-all"
          />
        </div>

        <div>
          <label className="block text-sm font-bold text-gray-700 mb-1.5">
            Password
          </label>
          <input
            type="password"
            required
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFC501] focus:bg-white transition-all"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-black hover:bg-[#222] text-white font-bold py-3.5 rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-wider text-sm"
        >
          {loading ? "Signing in…" : "Sign In"}
        </button>
      </form>
    </div>
  );
}

export default function AdminLoginPage() {
  return (
    <div className="min-h-screen bg-[#F5F5F5] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-[440px]">
        <div className="text-center mb-8">
          <Link href="/" className="inline-block">
            <span
              className="text-[28px] font-bold tracking-tight text-black"
              style={{ fontFamily: "var(--font-public-sans), 'Public Sans', sans-serif" }}
            >
              Pets<span className="text-[#FFC501]">Barn</span>
            </span>
          </Link>
          <p className="mt-2 text-sm text-gray-500">Admin Dashboard Login</p>
        </div>

        <Suspense
          fallback={
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 text-center text-gray-400 text-sm">
              Loading…
            </div>
          }
        >
          <LoginForm />
        </Suspense>

        <p className="text-center mt-6">
          <Link href="/" className="text-sm text-gray-500 hover:text-black transition-colors">
            ← Back to website
          </Link>
        </p>
      </div>
    </div>
  );
}
