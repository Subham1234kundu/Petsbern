"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import BlogCard from "@/components/BlogCard";
import { supabase } from "@/utils/supabase";

type Blog = {
  id: number;
  title: string;
  slug: string;
  category: string;
  author: string;
  date: string;
  image_url: string;
};

export default function BlogsPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      const { data } = await supabase
        .from("blogs")
        .select("id, title, slug, category, author, date, image_url")
        .order("id", { ascending: false });
      if (data) setBlogs(data);
      setLoading(false);
    };
    fetchBlogs();

    const channel = supabase
      .channel("blogs-public")
      .on("postgres_changes", { event: "*", schema: "public", table: "blogs" }, (payload) => {
        if (payload.eventType === "INSERT") setBlogs((p) => [payload.new as Blog, ...p]);
        else if (payload.eventType === "DELETE") setBlogs((p) => p.filter((b) => b.id !== payload.old.id));
        else if (payload.eventType === "UPDATE") setBlogs((p) => p.map((b) => (b.id === (payload.new as Blog).id ? (payload.new as Blog) : b)));
      })
      .subscribe();

    return () => { supabase.removeChannel(channel); };
  }, []);

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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
            {blogs.map((blog) => (
              <BlogCard
                key={blog.id}
                image={blog.image_url || "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=600&auto=format&fit=crop"}
                category={blog.category}
                title={blog.title}
                date={blog.date}
                author={blog.author}
                slug={blog.slug}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
