"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import BlogCard from "@/components/BlogCard";
import { renderBlogContent } from "@/lib/blogContent";
import { apiGet } from "@/utils/api";

type Blog = {
  id: string;
  title: string;
  slug: string;
  category: string;
  author: string;
  date: string;
  image_url: string;
  content: string;
};

export default function BlogDetailedPage() {
  const params = useParams();
  const slug = params?.slug as string;

  const [blog, setBlog] = useState<Blog | null>(null);
  const [moreBlogs, setMoreBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (!slug) return;

    const load = async () => {
      setLoading(true);
      setNotFound(false);
      try {
        const [current, all] = await Promise.all([
          apiGet<Blog>(`/api/blogs?slug=${encodeURIComponent(slug)}`),
          apiGet<Blog[]>("/api/blogs"),
        ]);
        setBlog(current);
        setMoreBlogs(
          (all || [])
            .filter((b) => b.slug !== slug)
            .slice(0, 3)
        );
      } catch {
        setNotFound(true);
        setBlog(null);
        try {
          const all = await apiGet<Blog[]>("/api/blogs");
          setMoreBlogs((all || []).slice(0, 3));
        } catch {
          setMoreBlogs([]);
        }
      }
      setLoading(false);
    };

    load();
  }, [slug]);

  const title = blog?.title || (slug
    ? slug.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")
    : "Blog");

  return (
    <div className="flex flex-col min-h-screen bg-white font-sans w-full">

      {/* Breadcrumb Section */}
      <div className="w-full bg-[#F2F4F5] h-[72px] flex items-center">
        <div className="max-w-[1440px] mx-auto w-full px-4 sm:px-6 lg:px-12 flex items-center gap-2">
          <Link href="/" className="flex items-center">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 9.5L12 4L21 9.5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V9.5Z" stroke="#5F6C72" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M9 21V12H15V21" stroke="#5F6C72" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>

          <span className="text-[#5F6C72] text-[14px]">Home</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 18L15 12L9 6" stroke="#77878F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>

          <Link href="/blogs" className="text-[#5F6C72] text-[14px] hover:text-[#8B5E3C]">Blogs</Link>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 18L15 12L9 6" stroke="#77878F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>

          <span className="text-[#E2001A] text-[14px] font-medium line-clamp-1">{title}</span>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto w-full px-4 sm:px-6 lg:px-12 py-12">
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <div className="flex flex-col items-center gap-4">
              <div className="w-10 h-10 border-4 border-[#E4E4E4] border-t-[#FFC501] rounded-full animate-spin" />
              <p className="text-gray-500 text-sm">Loading blog…</p>
            </div>
          </div>
        ) : notFound || !blog ? (
          <div className="flex flex-col items-center justify-center py-20 text-gray-400">
            <p className="font-semibold text-lg text-gray-800">Blog not found</p>
            <p className="text-sm mt-1">This post may have been removed.</p>
            <Link href="/blogs" className="mt-6 px-6 py-2 bg-black text-white rounded-full text-sm font-semibold hover:bg-gray-900 transition-all">
              Back to Blogs
            </Link>
          </div>
        ) : (
          <>
            {/* Blog Header Info */}
            <div className="mt-8">
              <h1
                className="text-[#181A2A] tracking-tight"
                style={{
                  fontSize: "36px",
                  fontFamily: 'var(--font-public-sans), "Public Sans", sans-serif',
                  fontWeight: 600,
                }}
              >
                {blog.title}
              </h1>

              <div className="mt-4">
                <button
                  className="bg-[#4B6BFB] text-white rounded-md flex items-center justify-center px-4"
                  style={{
                    height: "32px",
                    fontSize: "14px",
                    fontFamily: 'var(--font-work-sans), "Work Sans", sans-serif',
                    fontWeight: 500,
                  }}
                >
                  {blog.category || "Pet Care"}
                </button>
              </div>

              <p className="mt-4 text-[#696A75] font-light" style={{ fontSize: "14px" }}>
                {blog.author ? `${blog.author} · ` : ""}
                {blog.date}
              </p>
            </div>

            {/* Blog Main Image — natural height based on width */}
            {blog.image_url && (
              <div className="mt-8 w-full rounded-xl overflow-hidden">
                <img
                  src={blog.image_url}
                  alt={blog.title}
                  className="w-full h-auto block"
                  referrerPolicy="no-referrer"
                />
              </div>
            )}

            {/* Blog Content */}
            <div className="mt-12 text-[#3B3C4A] max-w-[900px]" style={{ fontSize: "20px", lineHeight: "1.2" }}>
              {renderBlogContent(blog.content)}
            </div>
          </>
        )}

        {/* More Blogs To Follow */}
        {moreBlogs.length > 0 && (
          <div className="mt-20">
            <h2 className="text-[#181A2A] font-semibold mb-8" style={{ fontSize: "24px" }}>
              More Blogs To <span className="text-[#FFC501]">Follow</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {moreBlogs.map((item) => (
                <BlogCard
                  key={item.id}
                  image={item.image_url || "/images/blogs.jpg"}
                  category={item.category}
                  title={item.title}
                  date={item.date}
                  author={item.author}
                  slug={item.slug}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
