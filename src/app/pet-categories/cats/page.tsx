"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import BreedCard from '@/components/BreedCard';

const breeds = [
  "Persian",
  "Maine Coon",
  "Siamese",
  "Bengal",
  "Ragdoll",
  "British Shorthair",
  "Sphynx",
  "Scottish Fold",
  "Abyssinian",
  "Russian Blue"
];

export default function CatsCategoryPage() {
  const [selectedBreed, setSelectedBreed] = useState("Persian");
  const [selectedSize, setSelectedSize] = useState("Small");
  const [showFilters, setShowFilters] = useState(false);
  const [breedSearchQuery, setBreedSearchQuery] = useState("");

  const filteredBreeds = breeds.filter(breed => 
    breed.toLowerCase().includes(breedSearchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen bg-white font-sans">
      
      {/* Breadcrumb Section */}
      <div className="w-full bg-[#F2F4F5] h-auto py-4 md:h-[72px] flex items-center">
        <div className="max-w-[1440px] mx-auto w-full px-4 sm:px-6 lg:px-12 flex flex-wrap items-center gap-2">
          {/* Home Icon */}
          <Link href="/" className="flex items-center">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 9.5L12 4L21 9.5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V9.5Z" stroke="#5F6C72" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9 21V12H15V21" stroke="#5F6C72" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
          
          <span className="text-[#5F6C72] text-[14px]">Home</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 18L15 12L9 6" stroke="#77878F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          <span className="text-[#5F6C72] text-[14px]">Our Pets</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 18L15 12L9 6" stroke="#77878F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          <span className="text-black text-[14px] font-medium">Cats</span>
        </div>
      </div>

      {/* Category Switcher & Mobile Filter Toggle */}
      <div className="w-full bg-white border-b border-gray-100">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 pt-6 pb-4">
          <div className="flex items-center justify-between gap-6">
            {/* Slick Toggle Switcher */}
            <div className="inline-flex p-1 bg-[#F3F4F6] rounded-full">
              <Link 
                href="/pet-categories/dogs" 
                className="px-8 py-2 rounded-full bg-transparent text-[#4F4F4F] text-sm font-bold hover:text-black transition-all active:scale-95"
              >
                Dogs
              </Link>
              <Link 
                href="/pet-categories/cats" 
                className="px-8 py-2 rounded-full bg-black text-white text-sm font-bold shadow-sm transition-all active:scale-95"
              >
                Cats
              </Link>
            </div>

            {/* Mobile Toggle Button (Icon Only) */}
            <button 
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden flex items-center justify-center w-[48px] h-[48px] bg-white border border-[#E4E7E9] rounded-full text-black shadow-sm hover:bg-gray-50 transition-all active:scale-95"
            >
              {showFilters ? (
                <span className="text-xs font-bold uppercase tracking-wider">Hide</span>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="4" y1="21" x2="4" y2="14" /><line x1="4" y1="10" x2="4" y2="3" /><line x1="12" y1="21" x2="12" y2="12" /><line x1="12" y1="8" x2="12" y2="3" /><line x1="20" y1="21" x2="20" y2="16" /><line x1="20" y1="12" x2="20" y2="3" /><line x1="1" y1="14" x2="7" y2="14" /><line x1="9" y1="8" x2="15" y2="8" /><line x1="17" y1="16" x2="23" y2="16" />
                </svg>
              )}
            </button>
          </div>

          {/* Selected Breed Indicator (Mobile & Tablet) */}
          <div className="lg:hidden flex items-center gap-2 mt-4 pt-4 border-t border-gray-100">
            <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">Showing:</span>
            <span className="text-sm font-bold text-black bg-[#F8FBFF] px-3 py-1 rounded-full border border-blue-100">{selectedBreed}</span>
          </div>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="max-w-[1440px] mx-auto w-full px-4 sm:px-6 lg:px-12 py-8 flex flex-col lg:flex-row gap-8">
        
        {/* Left Sidebar (Responsive Toggle) */}
        <div className={`w-full lg:w-1/4 flex-shrink-0 transition-all duration-300 ${showFilters ? 'block' : 'hidden lg:block'}`}>
          <div className="flex flex-col gap-6 bg-[#F9FAFB] lg:bg-transparent p-6 lg:p-0 rounded-[20px] lg:rounded-none border lg:border-none border-gray-100">
            <h2 className="text-black font-bold text-[18px] tracking-wide uppercase">
              FILTER WITH BREEDS
            </h2>

            {/* Breed Search Input */}
            <div className="relative w-full">
              <input 
                type="text" 
                placeholder="Search breeds..." 
                value={breedSearchQuery}
                onChange={(e) => setBreedSearchQuery(e.target.value)}
                className="w-full h-[44px] pl-10 pr-4 rounded-xl border border-[#E4E7E9] text-[14px] focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all bg-white"
              />
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
                </svg>
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-2 lg:flex lg:flex-col gap-5 max-h-[300px] lg:max-h-none overflow-y-auto pr-2 custom-scrollbar">
              {filteredBreeds.length > 0 ? (
                filteredBreeds.map((breed) => (
                  <div 
                    key={breed} 
                    className="flex items-center gap-3 cursor-pointer group"
                    onClick={() => {
                      setSelectedBreed(breed);
                      // Auto-close on mobile after selection
                      if (window.innerWidth < 1024) setShowFilters(false);
                    }}
                  >
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all flex-shrink-0 ${
                      selectedBreed === breed 
                      ? 'border-[#E2001A]' 
                      : 'border-[#D1D5DB] group-hover:border-gray-400'
                    }`}>
                      {selectedBreed === breed && (
                        <div className="w-2.5 h-2.5 rounded-full bg-[#E2001A]" />
                      )}
                    </div>
                    <span className={`text-[14px] md:text-[15px] transition-all leading-tight ${
                      selectedBreed === breed 
                      ? 'text-black font-bold' 
                      : 'text-[#4F4F4F] group-hover:text-black'
                    }`}>
                      {breed}
                    </span>
                  </div>
                ))
              ) : (
                <div className="text-sm text-gray-500 italic col-span-2">No breeds found</div>
              )}
            </div>
          </div>
        </div>

        {/* Right Content Area (75% space) */}
        <div className="w-full lg:w-3/4 flex flex-col gap-10">
          
          {/* Filter with Size Section */}
          <div className="flex flex-col gap-6">
            <h2 className="text-[#191C1F] font-bold text-[16px] uppercase tracking-wide">
              Filter with Size
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: "Small", desc: "FOR CATS UPTO 3KGS", image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=182&h=158&auto=format&fit=crop" },
                { name: "Medium", desc: "FOR CATS 4-6KGS", image: "https://images.unsplash.com/photo-1573865526739-10659fef78a5?q=80&w=182&h=158&auto=format&fit=crop" },
                { name: "Large", desc: "FOR CATS 7-10KGS", image: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?q=80&w=182&h=158&auto=format&fit=crop" },
                { name: "X-Large", desc: "FOR CATS ABOVE 10KGS", image: "https://images.unsplash.com/photo-1513245538863-174d31210021?q=80&w=182&h=158&auto=format&fit=crop" }
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
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="relative w-full md:w-[424px]">
              <input 
                type="text" 
                placeholder="Search for cats..." 
                className="w-full h-[48px] pl-4 pr-12 border border-[#E4E7E9] text-[15px] focus:outline-none focus:border-[#8B5E3C] rounded-none"
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#191C1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
                </svg>
              </div>
            </div>
            
            <div className="flex items-center gap-4 w-full md:w-auto">
              <span className="text-[#4F4F4F] text-[15px] hidden sm:block">Sort by:</span>
              <div 
                className="h-[48px] px-4 border border-[#E4E7E9] flex items-center justify-between gap-4 cursor-pointer text-[15px] font-medium text-black rounded-none w-full md:w-[180px]"
              >
                Most Popular
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </div>
            </div>
          </div>

          {/* Breed Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Persian Cat", image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=288&h=341&auto=format&fit=crop" },
              { name: "Maine Coon", image: "https://images.unsplash.com/photo-1573865526739-10659fef78a5?q=80&w=288&h=341&auto=format&fit=crop" },
              { name: "Siamese Cat", image: "https://images.unsplash.com/photo-1513245538863-174d31210021?q=80&w=288&h=341&auto=format&fit=crop" },
              { name: "Bengal Cat", image: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?q=80&w=288&h=341&auto=format&fit=crop" },
              { name: "Ragdoll", image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=288&h=341&auto=format&fit=crop" },
              { name: "British Shorthair", image: "https://images.unsplash.com/photo-1513245538863-174d31210021?q=80&w=288&h=341&auto=format&fit=crop" }
            ].map((cat, idx) => (
              <BreedCard key={idx} name={cat.name} image={cat.image} />
            ))}
          </div>

          {/* Pagination Section */}
          <div className="flex items-center justify-center gap-4 mt-12 mb-16">
            <button className="w-12 h-12 rounded-full border border-black flex items-center justify-center hover:bg-gray-50 transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <div className="flex items-center gap-2">
              {[ "01", "02", "03" ].map((num, i) => (
                <button key={num} className={`w-12 h-12 rounded-full flex items-center justify-center text-[16px] font-bold transition-all ${i === 0 ? 'bg-black text-white' : 'bg-white text-black border border-[#E4E7E9] hover:border-gray-400'}`}>{num}</button>
              ))}
            </div>
            <button className="w-12 h-12 rounded-full border border-black flex items-center justify-center hover:bg-gray-50 transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          {/* Explore Other Section (New) */}
          <div className="w-full bg-[#FFFBF8] rounded-[24px] p-8 md:p-12 mb-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex flex-col gap-4 text-center md:text-left">
              <h3 className="text-black text-[24px] md:text-[32px] font-normal leading-tight">Want a <span className="text-[#FFC501]">Canine Companion?</span></h3>
              <p className="text-[#5F6C72] text-[16px]">Browse our collection of loyal and energetic dog breeds.</p>
            </div>
            <Link 
              href="/pet-categories/dogs"
              className="bg-black text-white px-10 h-[56px] rounded-full flex items-center justify-center font-bold hover:bg-gray-900 transition-all active:scale-95 whitespace-nowrap"
            >
              Browse Dogs
            </Link>
          </div>

        </div>

      </div>

    </div>
  );
}
