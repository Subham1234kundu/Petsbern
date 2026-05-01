"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import BreedCard from '@/components/BreedCard';

const breeds = [
  "Labrador Retriever",
  "German Shepherd",
  "Golden Retriever",
  "French Bulldog",
  "Poodle",
  "Beagle",
  "Rottweiler",
  "Yorkshire Terrier",
  "Dachshund",
  "Siberian Husky"
];

export default function DogsCategoryPage() {
  const [selectedBreed, setSelectedBreed] = useState("Labrador Retriever");
  const [selectedSize, setSelectedSize] = useState("X-Small");

  return (
    <div className="flex flex-col min-h-screen bg-white font-sans">
      
      {/* Breadcrumb Section */}
      <div className="w-full bg-[#F2F4F5] h-[72px] flex items-center">
        <div className="max-w-[1440px] mx-auto w-full px-4 sm:px-6 lg:px-12 flex items-center gap-2">
          {/* Home Icon */}
          <Link href="/" className="flex items-center">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 9.5L12 4L21 9.5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V9.5Z" stroke="#5F6C72" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9 21V12H15V21" stroke="#5F6C72" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
          
          <span className="text-[#5F6C72] text-[14px]">Home</span>
          
          {/* Arrow */}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 18L15 12L9 6" stroke="#77878F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          
          <span className="text-[#5F6C72] text-[14px]">Our Pets</span>
          
          {/* Arrow */}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 18L15 12L9 6" stroke="#77878F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          
          <span className="text-black text-[14px] font-medium">Dogs</span>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="max-w-[1440px] mx-auto w-full px-4 sm:px-6 lg:px-12 py-8 flex gap-8">
        
        {/* Left Sidebar (25% space) */}
        <div className="w-1/4 flex-shrink-0">
          <div className="flex flex-col gap-8">
            <h2 className="text-black font-bold text-[18px] tracking-wide uppercase">
              FILTER WITH BREEDS
            </h2>
            
            <div className="flex flex-col gap-6">
              {breeds.map((breed) => (
                <div 
                  key={breed} 
                  className="flex items-center gap-4 cursor-pointer group"
                  onClick={() => setSelectedBreed(breed)}
                >
                  {/* Custom Radio Button */}
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                    selectedBreed === breed 
                    ? 'border-[#E2001A]' 
                    : 'border-[#D1D5DB] group-hover:border-gray-400'
                  }`}>
                    {selectedBreed === breed && (
                      <div className="w-3 h-3 rounded-full bg-[#E2001A]" />
                    )}
                  </div>
                  
                  <span className={`text-[16px] transition-all ${
                    selectedBreed === breed 
                    ? 'text-black font-medium' 
                    : 'text-[#4F4F4F]'
                  }`}>
                    {breed}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Content Area (75% space) */}
        <div className="w-3/4 flex flex-col gap-10 pr-0">
          
          {/* Filter with Size Section */}
          <div className="flex flex-col gap-6 mr-10">
            <h2 className="text-[#191C1F] font-bold text-[16px] uppercase tracking-wide">
              Filter with Size
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: "X-Small", desc: "FOR DOGS UPTO 4KGS", image: "https://images.unsplash.com/photo-1591768226451-3444216831ce?q=80&w=182&h=158&auto=format&fit=crop" },
                { name: "Small", desc: "FOR DOGS 5-10KGS", image: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?q=80&w=182&h=158&auto=format&fit=crop" },
                { name: "Medium", desc: "FOR DOGS UPTO 11-25KGS", image: "https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=182&h=158&auto=format&fit=crop" },
                { name: "Large", desc: "FOR DOGS UPTO 26-4KGS", image: "https://images.unsplash.com/photo-1534361960057-19889db9621e?q=80&w=182&h=158&auto=format&fit=crop" }
              ].map((size) => {
                const isSelected = selectedSize === size.name;
                return (
                  <div 
                    key={size.name}
                    onClick={() => setSelectedSize(size.name)}
                    className={`cursor-pointer rounded-[12px] border transition-all flex flex-col items-center justify-center gap-3 bg-white w-full mx-auto max-w-[216px] h-[235px] ${
                      isSelected 
                      ? 'border-[#FFC501] ring-1 ring-[#FFC501]' 
                      : 'border-[#E4E7E9] hover:border-gray-300'
                    }`}
                  >
                    {/* Image Container */}
                    <div className="overflow-hidden rounded-[8px] w-[90%] h-[158px]">
                      <img 
                        src={size.image} 
                        alt={size.name}
                        className={`w-full h-full object-cover transition-all duration-500 ${
                          isSelected ? 'grayscale-0 scale-105' : 'grayscale'
                        }`}
                      />
                    </div>
                    
                    {/* Text Container */}
                    <div className="flex flex-col items-start w-full px-4 gap-1">
                      <span className="text-[#0F172A] font-bold text-[14px]">
                        {size.name}
                      </span>
                      <span 
                        className="text-[#94A3B8] font-light uppercase tracking-wider" 
                        style={{ 
                          fontSize: "11px", 
                          lineHeight: "16.5px",
                          fontFamily: "Inter, sans-serif" 
                        }}
                      >
                        {size.desc}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Search and Sort Section */}
          <div className="flex items-center justify-between mt-4">
            <div className="relative" style={{ width: "424px" }}>
              <input 
                type="text" 
                placeholder="Search for pets..." 
                className="w-full h-[44px] pl-4 pr-12 border border-[#E4E7E9] text-[15px] focus:outline-none focus:border-[#8B5E3C] rounded-none"
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#191C1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
                </svg>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <span className="text-[#4F4F4F] text-[15px] self-center">Sort by:</span>
              <div 
                className="h-[44px] px-4 border border-[#E4E7E9] flex items-center justify-between gap-4 cursor-pointer text-[15px] font-medium text-black rounded-none"
                style={{ width: "180px" }}
              >
                Most Popular
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </div>
            </div>
          </div>

          {/* Breed Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {[
              { name: "Labrador Retriever", image: "https://images.unsplash.com/photo-1552053831-71594a27632d?q=80&w=288&h=341&auto=format&fit=crop" },
              { name: "German Shepherd", image: "https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?q=80&w=288&h=341&auto=format&fit=crop" },
              { name: "Golden Retriever", image: "https://images.unsplash.com/photo-1552053831-71594a27632d?q=80&w=288&h=341&auto=format&fit=crop" },
              { name: "French Bulldog", image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?q=80&w=288&h=341&auto=format&fit=crop" },
              { name: "Poodle", image: "https://images.unsplash.com/photo-1591768226451-3444216831ce?q=80&w=288&h=341&auto=format&fit=crop" },
              { name: "Beagle", image: "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?q=80&w=288&h=341&auto=format&fit=crop" }
            ].map((dog, idx) => (
              <BreedCard key={idx} name={dog.name} image={dog.image} />
            ))}
          </div>

          {/* Pagination Section */}
          <div className="flex items-center justify-center gap-4 mt-12 mb-8">
            {/* Left Arrow */}
            <button className="w-12 h-12 rounded-full border border-black flex items-center justify-center hover:bg-gray-50 transition-colors group">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {/* Page Numbers */}
            <div className="flex items-center gap-2">
              {[ "01", "02", "03", "04", "05", "06" ].map((num, i) => (
                <button 
                  key={num}
                  className={`w-12 h-12 rounded-full flex items-center justify-center text-[16px] font-bold transition-all ${
                    i === 0 
                    ? 'bg-black text-white' 
                    : 'bg-white text-black border border-[#E4E7E9] hover:border-gray-400'
                  }`}
                >
                  {num}
                </button>
              ))}
            </div>

            {/* Right Arrow */}
            <button className="w-12 h-12 rounded-full border border-black flex items-center justify-center hover:bg-gray-50 transition-colors group">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

        </div>

      </div>

    </div>
  );
}
