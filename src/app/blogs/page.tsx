"use client";

import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import BlogCard from "@/components/BlogCard";
import { apiGet } from "@/utils/api";

type Blog = {
  id: string;
  title: string;
  slug: string;
  category: string;
  author: string;
  date: string;
  image_url: string;
};

const PAGE_SIZE = 6;

export default function BlogsPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const data = await apiGet<Blog[]>("/api/blogs");
        setBlogs(data);
      } catch (err) {
        console.error("Fetch blogs error:", err);
      }
      setLoading(false);
    };
    fetchBlogs();
  }, []);

  const totalPages = Math.max(1, Math.ceil(blogs.length / PAGE_SIZE));

  useEffect(() => {
    if (page > totalPages) setPage(totalPages);
  }, [page, totalPages]);

  const pageBlogs = useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return blogs.slice(start, start + PAGE_SIZE);
  }, [blogs, page]);

  const pageNumbers = useMemo(
    () => Array.from({ length: totalPages }, (_, i) => String(i + 1).padStart(2, "0")),
    [totalPages]
  );

  return (
    <div className="flex flex-col min-h-screen bg-white font-sans">
      {/* Blogs Header */}
      <section
        className="w-full h-[268px] relative flex flex-col items-center justify-center overflow-hidden text-center"
        style={{
          backgroundImage: "linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url('/images/blogs.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center 20%",
        }}
      >
        <div className="z-10 flex flex-col items-center gap-1">
          <h1 className="text-white tracking-tight leading-tight" style={{ fontFamily: "var(--font-public-sans), sans-serif", fontSize: "32px", fontWeight: 600 }}>
            Blogs
          </h1>
          <div className="flex items-center gap-2 text-white/90 text-[14px]">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="text-white/60 font-light">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
            </span>
            <span className="font-medium text-white">Blogs</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-16 flex-grow">
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <div className="flex flex-col items-center gap-4">
              <div className="w-10 h-10 border-4 border-[#E4E4E4] border-t-[#FFC501] rounded-full animate-spin" />
              <p className="text-gray-500 text-sm">Loading blogs…</p>
            </div>
          </div>
        ) : blogs.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-gray-400">
            <span className="text-5xl mb-4">📝</span>
            <p className="font-semibold text-lg">No blogs published yet</p>
            <p className="text-sm mt-1">Check back soon for new content!</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
              {pageBlogs.map((blog) => (
                <BlogCard
                  key={blog.id}
                  image={blog.image_url || "/images/blogs.jpg"}
                  category={blog.category}
                  title={blog.title}
                  date={blog.date}
                  author={blog.author}
                  slug={blog.slug}
                />
              ))}
            </div>

            {/* Pagination — same numbering style as pet-categories */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-4 mt-12 mb-4">
                <button
                  type="button"
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  disabled={page === 1}
                  className="w-12 h-12 rounded-full border border-black flex items-center justify-center hover:bg-gray-50 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                  aria-label="Previous page"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>
                <div className="flex items-center gap-2 flex-wrap justify-center">
                  {pageNumbers.map((num, i) => (
                    <button
                      key={num}
                      type="button"
                      onClick={() => {
                        setPage(i + 1);
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      className={`w-12 h-12 rounded-full flex items-center justify-center text-[16px] font-bold transition-all ${
                        page === i + 1
                          ? "bg-black text-white"
                          : "bg-white text-black border border-[#E4E7E9] hover:border-gray-400"
                      }`}
                    >
                      {num}
                    </button>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                  disabled={page === totalPages}
                  className="w-12 h-12 rounded-full border border-black flex items-center justify-center hover:bg-gray-50 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                  aria-label="Next page"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>
              </div>
            )}
          </>
        )}
      </main>
    </div>
  );
}
