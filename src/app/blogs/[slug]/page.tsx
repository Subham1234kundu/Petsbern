"use client";

import React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import BlogCard from "@/components/BlogCard";

export default function BlogDetailedPage() {
  const params = useParams();
  const slug = params?.slug as string;
  
  // Format title from slug
  const formattedTitle = slug 
    ? slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
    : "10 Things Every New Pet Owner Should Know";

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

          <span className="text-[#E2001A] text-[14px] font-medium">{formattedTitle}</span>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto w-full px-4 sm:px-6 lg:px-12 py-12">
      {/* Blog Header Info */}
      <div className="mt-8">
        <h1 
          className="text-[#181A2A] tracking-tight" 
          style={{ 
            fontSize: '36px', 
            fontFamily: 'var(--font-public-sans), "Public Sans", sans-serif', 
            fontWeight: 600 
          }}
        >
          {formattedTitle}
        </h1>
        
        <div className="mt-4">
          <button 
            className="bg-[#4B6BFB] text-white rounded-md flex items-center justify-center" 
            style={{ 
              width: '101px', 
              height: '32px', 
              fontSize: '14px', 
              fontFamily: 'var(--font-work-sans), "Work Sans", sans-serif', 
              fontWeight: 500 
            }}
          >
            Technology
          </button>
        </div>
        
        <p className="mt-4 text-[#696A75] font-light" style={{ fontSize: '14px' }}>
          August 20, 2022
        </p>
      </div>

      {/* Blog Main Image */}
      <div className="mt-8 w-full rounded-xl overflow-hidden" style={{ height: '462px' }}>
        <img 
          src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?q=80&w=1440&auto=format&fit=crop" 
          alt={formattedTitle} 
          className="w-full h-full object-cover" 
        />
      </div>

      {/* Blog Content */}
      <div className="mt-12 text-[#3B3C4A] max-w-[900px]" style={{ fontSize: '20px', lineHeight: '1.2' }}>
        <p className="mb-6">
          Bringing a pet into your home is one of life's most joyful experiences. Whether you're welcoming a playful puppy, a curious kitten, or a calm older companion, every pet deserves a life filled with love, comfort, and good health. But what truly makes a pet happy and thriving? The secret lies in a balance of proper care, attention, and understanding their needs.
        </p>
        
        <div className="mb-6">
          <strong className="font-semibold block mb-2">1. Love and Attention Come First</strong>
          Pets are family. They crave companionship, affection, and a sense of belonging. Spending quality time with your pet — whether it's cuddling on the couch, playing fetch, or simply talking to them — builds trust and emotional security. A loved pet is a happy pet.
        </div>

        <div className="mb-6">
          <strong className="font-semibold block mb-2">2. Nutrition Matters More Than You Think</strong>
          Just like humans, pets need a balanced diet to stay healthy. Choose high-quality food suited to your pet's age, size, and breed. Fresh water should always be available. Occasional healthy treats are great, but moderation is key to preventing obesity and related health issues.
        </div>

        <div className="mb-6">
          <strong className="font-semibold block mb-2">3. Regular Exercise and Play</strong>
          Exercise keeps pets physically fit and mentally stimulated. Dogs benefit from daily walks and playtime, while cats enjoy interactive toys and climbing spaces. Active pets are less likely to develop behavioral problems and more likely to stay healthy long-term.
        </div>

        <div className="mb-6">
          <strong className="font-semibold block mb-2">4. Grooming and Hygiene</strong>
          Routine grooming keeps your pet comfortable and prevents skin issues, infections, and excessive shedding. Brushing, bathing when necessary, nail trimming, and dental care all contribute to overall well-being.
        </div>

        <div className="mb-6">
          <strong className="font-semibold block mb-2">5. Preventive Healthcare</strong>
          Regular vet visits, vaccinations, and parasite prevention are essential. Early detection of health issues can make a huge difference in your pet's quality of life. Don't wait for symptoms — prevention is always better than cure.
        </div>
      </div>

      {/* More Blogs To Follow */}
      <div className="mt-20">
        <h2 className="text-[#181A2A] font-semibold mb-8" style={{ fontSize: '24px' }}>
          More Blogs To <span className="text-[#FFC501]">Follow</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
            image="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?q=80&w=600&auto=format&fit=crop"
            category="Pet Care"
            title="Fun Indoor Activities for Active Pets"
            date="August 27, 2026"
          />
        </div>
      </div>

      </div>
    </div>
  );
}
