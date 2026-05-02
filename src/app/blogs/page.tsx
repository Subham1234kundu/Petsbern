"use client";

import React from "react";
import Link from "next/link";
import BlogCard from "@/components/BlogCard";

export default function BlogsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans">
      {/* Blogs Header Section */}
      <section
        className="w-full h-[268px] relative flex flex-col items-center justify-center overflow-hidden text-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/blogs.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center 20%",
        }}
      >
        <div className="z-10 flex flex-col items-center gap-1">
          <h1
            className="text-white tracking-tight leading-tight"
            style={{
              fontFamily: "var(--font-public-sans), sans-serif",
              fontSize: "32px",
              fontWeight: 600,
            }}
          >
            Blogs
          </h1>
          <div className="flex items-center gap-2 text-white/90 text-[14px]">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span className="text-white/60 font-light">
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </span>
            <span className="font-medium text-white">Blogs</span>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-16 flex-grow">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
          <BlogCard 
            image="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=600&auto=format&fit=crop"
            category="Pet Training"
            title="How to Create the Perfect Home for Your Pet"
            date="August 20, 2026"
          />
          <BlogCard 
            image="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=600&auto=format&fit=crop"
            category="Pet Training"
            title="The Secret to Raising a Happy, Healthy Pet"
            date="August 20, 2026"
          />
          <BlogCard 
            image="https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=600&auto=format&fit=crop"
            category="Pet Care"
            title="Essential Tips for First-Time Dog Owners"
            date="August 21, 2026"
          />
          <BlogCard 
            image="https://images.unsplash.com/photo-1544568100-847a948585b9?q=80&w=600&auto=format&fit=crop"
            category="Pet Care"
            title="The Ultimate Guide to Pet Nutrition"
            date="August 22, 2026"
          />
          <BlogCard 
            image="https://images.unsplash.com/photo-1518717758536-85ae29035b6d?q=80&w=600&auto=format&fit=crop"
            category="Pet Care"
            title="5 Signs Your Pet Needs a Vet Visit"
            date="August 23, 2026"
          />
          <BlogCard 
            image="https://images.unsplash.com/photo-1450778869180-41d0601e046e?q=80&w=600&auto=format&fit=crop"
            category="Pet Training"
            title="Mastering Leash Walking in 7 Days"
            date="August 24, 2026"
          />
          <BlogCard 
            image="https://images.unsplash.com/photo-1527526029430-319f10814151?q=80&w=600&auto=format&fit=crop"
            category="Pet Care"
            title="Grooming Your Pet at Home: A Beginner's Guide"
            date="August 25, 2026"
          />
          <BlogCard 
            image="https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?q=80&w=600&auto=format&fit=crop"
            category="Pet Training"
            title="How to Stop Destructive Chewing"
            date="August 26, 2026"
          />
          <BlogCard 
            image="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?q=80&w=600&auto=format&fit=crop"
            category="Pet Care"
            title="Fun Indoor Activities for Active Pets"
            date="August 27, 2026"
          />
        </div>

        {/* Load More Button */}
        <div className="flex items-center justify-center mt-10">
          <button 
            className="bg-white rounded-md flex items-center justify-center hover:bg-gray-50 transition-colors shadow-none"
            style={{ 
              width: "123px", 
              height: "48px", 
              border: "1px solid #696A754D",
              color: "#696A75",
              fontSize: "16px",
              fontFamily: "var(--font-work-sans), 'Work Sans', sans-serif",
              fontWeight: 500
            }}
          >
            Load More
          </button>
        </div>
      </main>
    </div>
  );
}
