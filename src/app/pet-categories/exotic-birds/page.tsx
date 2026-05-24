"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import BreedCardFull from '@/components/BreedCardFull';
import { supabase } from '@/utils/supabase';

export default function ExoticBirdsCategoryPage() {
  const [selectedBreed, setSelectedBreed] = useState("All Breeds");
  const [selectedSize, setSelectedSize] = useState("All Sizes");
  const [showFilters, setShowFilters] = useState(false);
  const [breedSearchQuery, setBreedSearchQuery] = useState("");

  // Real-time state
  const [pets, setPets] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch exotic pets and subscribe to real-time changes
  useEffect(() => {
    const fetchPets = async () => {
      const { data } = await supabase
        .from('pets')
        .select('*')
        .eq('category', 'Exotic')
        .order('id', { ascending: false });

      if (data) setPets(data);
      setIsLoading(false);
    };

    fetchPets();

    const channel = supabase
      .channel('public:pets:exotic-birds')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'pets', filter: "category=eq.Exotic" }, (payload) => {
        if (payload.eventType === 'INSERT') {
          setPets((prev) => [payload.new, ...prev]);
        } else if (payload.eventType === 'DELETE') {
          setPets((prev) => prev.filter(p => p.id !== payload.old.id));
        } else if (payload.eventType === 'UPDATE') {
          setPets((prev) => prev.map(p => p.id === payload.new.id ? payload.new : p));
        }
      })
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  // Unique breed names from fetched exotic birds
  const dynamicBreeds = Array.from(new Set(pets.map(p => p.breed))).filter(Boolean) as string[];
  const filteredBreeds = dynamicBreeds.filter(breed =>
    breed.toLowerCase().includes(breedSearchQuery.toLowerCase())
  );

  // Group pets by breed to show one card per breed
  const groupedPets = React.useMemo(() => {
    const map = new Map<string, any>();
    for (const pet of pets) {
      if (!pet.breed) continue;
      if (!map.has(pet.breed)) {
        map.set(pet.breed, pet); // keep first pet as representative
      }
    }
    return Array.from(map.values());
  }, [pets]);

  // Weight-based size filter for birds (in kgs)
  const displayBreeds = groupedPets.filter(pet => {
    if (selectedBreed !== "All Breeds" && pet.breed !== selectedBreed) return false;

    const w = pet.weight || 0;
    if (selectedSize === "X-Small")    return w <= 0.25;
    if (selectedSize === "Small")      return w > 0.25 && w <= 0.5;
    if (selectedSize === "Medium")     return w > 0.5  && w <= 1.0;
    if (selectedSize === "Large")      return w > 1.0  && w <= 2.0;
    if (selectedSize === "X-Large")    return w > 2.0;

    return true; // All Sizes
  });

  // The 5 bird size boxes
  const sizeOptions = [
    { name: "X-Small", desc: "UPTO 0.25 KGS", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=300&auto=format&fit=crop" },
    { name: "Small",   desc: "0.25 – 0.5 KGS", image: "https://images.unsplash.com/photo-1522850959076-58c71a3a531a?q=80&w=300&auto=format&fit=crop" },
    { name: "Medium",  desc: "0.5 – 1.0 KGS",  image: "https://images.unsplash.com/photo-1607990283143-e81e7a2c93ab?q=80&w=300&auto=format&fit=crop" },
    { name: "Large",   desc: "1.0 – 2.0 KGS",  image: "https://images.unsplash.com/photo-1552728089-57bdde30ebd3?q=80&w=300&auto=format&fit=crop" },
    { name: "X-Large", desc: "ABOVE 2.0 KGS", image: "https://images.unsplash.com/photo-1452570053594-1b985d6ea890?q=80&w=300&auto=format&fit=crop" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white font-sans">

      {/* Breadcrumb */}
      <div className="w-full bg-[#F2F4F5] h-auto py-4 md:h-[72px] flex items-center">
        <div className="max-w-[1440px] mx-auto w-full px-4 sm:px-6 lg:px-12 flex flex-wrap items-center gap-2">
          <Link href="/" className="flex items-center">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 9.5L12 4L21 9.5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V9.5Z" stroke="#5F6C72" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9 21V12H15V21" stroke="#5F6C72" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
          <span className="text-[#5F6C72] text-[14px]">Home</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M9 18L15 12L9 6" stroke="#77878F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          <span className="text-[#5F6C72] text-[14px]">Our Pets</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M9 18L15 12L9 6" stroke="#77878F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          <span className="text-black text-[14px] font-medium">Exotic Birds</span>
        </div>
      </div>

      {/* Category Switcher & Mobile Filter Toggle */}
      <div className="w-full bg-white border-b border-gray-100">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 pt-6 pb-4">
          <div className="flex items-center justify-between gap-6">
            <div className="inline-flex p-1 bg-[#F3F4F6] rounded-full">
              <Link href="/pet-categories/dogs" className="px-6 md:px-8 py-2 rounded-full bg-transparent text-[#4F4F4F] text-sm font-bold hover:text-black transition-all active:scale-95">Dogs</Link>
              <Link href="/pet-categories/cats" className="px-6 md:px-8 py-2 rounded-full bg-transparent text-[#4F4F4F] text-sm font-bold hover:text-black transition-all active:scale-95">Cats</Link>
              <Link href="/pet-categories/exotic-birds" className="px-6 md:px-8 py-2 rounded-full bg-black text-white text-sm font-bold shadow-sm transition-all active:scale-95">Exotic Birds</Link>
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden flex items-center justify-center w-[48px] h-[48px] bg-white border border-[#E4E7E9] rounded-full text-black shadow-sm hover:bg-gray-50 transition-all active:scale-95"
            >
              {showFilters ? (
                <span className="text-xs font-bold uppercase tracking-wider">Hide</span>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/>
                  <line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/>
                  <line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/>
                  <line x1="1" y1="14" x2="7" y2="14"/><line x1="9" y1="8" x2="15" y2="8"/>
                  <line x1="17" y1="16" x2="23" y2="16"/>
                </svg>
              )}
            </button>
          </div>
          <div className="lg:hidden flex items-center gap-2 mt-4 pt-4 border-t border-gray-100">
            <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">Showing:</span>
            <span className="text-sm font-bold text-black bg-[#F8FBFF] px-3 py-1 rounded-full border border-blue-100">{selectedBreed}</span>
          </div>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="max-w-[1440px] mx-auto w-full px-4 sm:px-6 lg:px-12 py-8 flex flex-col lg:flex-row gap-8 lg:gap-10">

        {/* ── Left Sidebar – wider on desktop ── */}
        <div className={`w-full lg:w-[280px] xl:w-[320px] flex-shrink-0 transition-all duration-300 ${showFilters ? 'block' : 'hidden lg:block'}`}>
          <div className="flex flex-col gap-6 bg-[#F9FAFB] lg:bg-transparent p-6 lg:p-0 rounded-[20px] lg:rounded-none border lg:border-none border-gray-100">

            <h2 className="text-black font-bold text-[18px] tracking-wide uppercase">Filter with Breeds</h2>

            {/* Breed Search */}
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
                  <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
                </svg>
              </div>
            </div>

            {/* Breed List */}
            <div className="flex flex-col gap-2 max-h-[340px] lg:max-h-none overflow-y-auto pr-1 custom-scrollbar">

              {/* All Breeds */}
              <div
                className={`flex items-center gap-3 cursor-pointer group px-3 py-2.5 rounded-xl transition-all ${selectedBreed === "All Breeds" ? 'bg-black text-white' : 'hover:bg-gray-100'}`}
                onClick={() => { setSelectedBreed("All Breeds"); if (typeof window !== 'undefined' && window.innerWidth < 1024) setShowFilters(false); }}
              >
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all ${selectedBreed === "All Breeds" ? 'border-white' : 'border-[#D1D5DB] group-hover:border-gray-400'}`}>
                  {selectedBreed === "All Breeds" && <div className="w-2.5 h-2.5 rounded-full bg-white"/>}
                </div>
                <span className={`text-[14px] font-semibold leading-tight transition-all ${selectedBreed === "All Breeds" ? 'text-white' : 'text-[#4F4F4F] group-hover:text-black'}`}>All Breeds</span>
              </div>

              {filteredBreeds.length > 0 ? (
                filteredBreeds.map((breed) => (
                  <div
                    key={breed}
                    className={`flex items-center gap-3 cursor-pointer group px-3 py-2.5 rounded-xl transition-all ${selectedBreed === breed ? 'bg-black text-white' : 'hover:bg-gray-100'}`}
                    onClick={() => { setSelectedBreed(breed); if (typeof window !== 'undefined' && window.innerWidth < 1024) setShowFilters(false); }}
                  >
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all ${selectedBreed === breed ? 'border-white' : 'border-[#D1D5DB] group-hover:border-gray-400'}`}>
                      {selectedBreed === breed && <div className="w-2.5 h-2.5 rounded-full bg-white"/>}
                    </div>
                    <span className={`text-[14px] leading-tight transition-all ${selectedBreed === breed ? 'text-white font-bold' : 'text-[#4F4F4F] group-hover:text-black'}`}>{breed}</span>
                  </div>
                ))
              ) : (
                <div className="text-sm text-gray-500 italic px-3">No breeds found</div>
              )}
            </div>
          </div>
        </div>

        {/* ── Right Content Area ── */}
        <div className="flex-1 min-w-0 flex flex-col gap-8">

          {/* ── Size Filter: 5 compact boxes in ONE row on lg ── */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <h2 className="text-[#191C1F] font-bold text-[16px] md:text-[18px] uppercase tracking-wide">Filter with Size</h2>
              {selectedSize !== "All Sizes" && (
                <button
                  onClick={() => setSelectedSize("All Sizes")}
                  className="text-[12px] font-semibold text-gray-500 hover:text-black underline underline-offset-2 transition-colors"
                >
                  Clear
                </button>
              )}
            </div>

            {/* 5-column grid — single row on lg */}
            <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-5 gap-2 sm:gap-3">
              {sizeOptions.map((size) => {
                const isSelected = selectedSize === size.name;
                return (
                  <button
                    key={size.name}
                    type="button"
                    onClick={() => setSelectedSize(isSelected ? "All Sizes" : size.name)}
                    className={`group relative flex flex-col items-center gap-0 p-0 overflow-hidden rounded-xl border-2 transition-all duration-200 cursor-pointer focus:outline-none
                      ${isSelected
                        ? 'border-[#FFC501] ring-2 ring-[#FFC501]/30 shadow-md'
                        : 'border-[#E4E7E9] hover:border-[#FFC501]/60 hover:shadow-sm'
                      }`}
                  >
                    {/* Image */}
                    <div className="w-full overflow-hidden" style={{ height: '72px' }}>
                      <img
                        src={size.image}
                        alt={size.name}
                        className={`w-full h-full object-cover transition-all duration-500 ${isSelected ? 'grayscale-0 scale-105' : 'grayscale group-hover:grayscale-0 group-hover:scale-105'}`}
                      />
                    </div>
                    {/* Text */}
                    <div className="w-full px-1.5 py-2 flex flex-col items-center gap-0.5">
                      <span className={`text-[11px] sm:text-[12px] font-bold leading-tight text-center ${isSelected ? 'text-[#0F172A]' : 'text-[#374151]'}`}>
                        {size.name}
                      </span>
                      <span className="text-[9px] sm:text-[10px] text-[#94A3B8] uppercase tracking-wide leading-tight text-center font-medium">
                        {size.desc}
                      </span>
                    </div>
                    {/* Active dot */}
                    {isSelected && (
                      <div className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#FFC501] rounded-full shadow" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Search and Sort */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="relative w-full md:w-[424px]">
              <input
                type="text"
                placeholder="Search for exotic birds..."
                className="w-full h-[48px] pl-4 pr-12 border border-[#E4E7E9] text-[15px] focus:outline-none focus:border-[#8B5E3C] rounded-none"
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#191C1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
                </svg>
              </div>
            </div>
            <div className="flex items-center gap-4 w-full md:w-auto">
              <span className="text-[#4F4F4F] text-[15px] hidden sm:block">Sort by:</span>
              <div className="h-[48px] px-4 border border-[#E4E7E9] flex items-center justify-between gap-4 cursor-pointer text-[15px] font-medium text-black rounded-none w-full md:w-[180px]">
                Most Popular
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
              </div>
            </div>
          </div>

          {/* Active filter badge */}
          {selectedSize !== "All Sizes" && (
            <div className="flex items-center gap-2 -mt-4">
              <span className="text-[13px] text-gray-500">Filtering by:</span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#FFF8E1] border border-[#FFC501] rounded-full text-[12px] font-bold text-[#7B5800]">
                {selectedSize}
                <button onClick={() => setSelectedSize("All Sizes")} className="ml-1 text-[#7B5800] hover:text-black transition-colors">×</button>
              </span>
            </div>
          )}

          {/* Pet Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {isLoading ? (
              <div className="col-span-full py-16 flex flex-col items-center gap-4">
                <div className="w-10 h-10 border-4 border-[#FFC501] border-t-transparent rounded-full animate-spin"/>
                <span className="text-gray-500 font-medium">Loading exotic birds...</span>
              </div>
            ) : displayBreeds.length > 0 ? (
              displayBreeds.map((bird) => {
                const slug = bird.breed.toLowerCase().replace(/\s+/g, '-');
                return (
                  <BreedCardFull
                    key={bird.id}
                    name={bird.breed}
                    image={bird.main_image || '/placeholder.png'}
                    weight={bird.weight}
                    href={`/pet-categories/exotic-birds/${slug}`}
                  />
                );
              })
            ) : (
              <div className="col-span-full py-16 text-center flex flex-col items-center gap-3">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#D1D5DB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
                </svg>
                <span className="text-xl font-bold text-gray-800">No exotic birds match this criteria.</span>
                <span className="text-gray-500">Try adjusting your filters or add a new bird from the dashboard!</span>
                {selectedSize !== "All Sizes" && (
                  <button onClick={() => setSelectedSize("All Sizes")} className="mt-2 px-6 py-2 bg-black text-white rounded-full text-sm font-semibold hover:bg-gray-900 transition-all">
                    Clear Size Filter
                  </button>
                )}
              </div>
            )}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center gap-4 mt-4 mb-16">
            <button className="w-12 h-12 rounded-full border border-black flex items-center justify-center hover:bg-gray-50 transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            <div className="flex items-center gap-2">
              <button className="w-12 h-12 rounded-full flex items-center justify-center text-[16px] font-bold bg-black text-white">01</button>
            </div>
            <button className="w-12 h-12 rounded-full border border-black flex items-center justify-center hover:bg-gray-50 transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
          </div>

          {/* Explore Cats CTA */}
          <div className="w-full bg-[#FFFBF8] rounded-[24px] p-8 md:p-12 mb-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex flex-col gap-4 text-center md:text-left">
              <h3 className="text-black text-[24px] md:text-[32px] font-normal leading-tight">Want to browse <span className="text-[#FFC501]">Felines?</span></h3>
              <p className="text-[#5F6C72] text-[16px]">Browse our collection of healthy and playful cat breeds.</p>
            </div>
            <Link href="/pet-categories/cats" className="bg-black text-white px-10 h-[56px] rounded-full flex items-center justify-center font-bold hover:bg-gray-900 transition-all active:scale-95 whitespace-nowrap">
              Browse Cats
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
