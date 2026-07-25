"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import BreedCardFull from '@/components/BreedCardFull';
import CharacteristicsFilter from '@/components/CharacteristicsFilter';
import { CAT_CHARACTERISTICS, matchesCharacteristics } from '@/lib/breedCharacteristics';
import { apiGet } from '@/utils/api';

export default function CatsCategoryPage() {
  const [selectedBreed, setSelectedBreed] = useState("All Breeds");
  const [selectedSize, setSelectedSize] = useState("All Sizes");
  const [showFilters, setShowFilters] = useState(false);
  const [breedSearchQuery, setBreedSearchQuery] = useState("");
  const [selectedCharacteristics, setSelectedCharacteristics] = useState<string[]>([]);

  // Real-time state
  const [pets, setPets] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleCharacteristicToggle = (label: string) => {
    setSelectedCharacteristics(prev =>
      prev.includes(label)
        ? prev.filter(c => c !== label)
        : [...prev, label]
    );
  };

  // Fetch cats and subscribe to real-time changes
  useEffect(() => {
    const fetchPets = async () => {
      try {
        const data = await apiGet<any[]>('/api/pets?category=Cat&sort=desc');
        setPets(data);
      } catch (err) {
        console.error('Fetch pets error:', err);
      }
      setIsLoading(false);
    };

    fetchPets();
  }, []);

  // Unique breed names from fetched cats
  const dynamicBreeds = Array.from(new Set(pets.map(p => p.breed))).filter(Boolean) as string[];
  const filteredBreeds = dynamicBreeds.filter(breed =>
    breed.toLowerCase().includes(breedSearchQuery.toLowerCase())
  );

  // Group pets by breed — prefer Breed Profile image over individual pets
  const groupedPets = React.useMemo(() => {
    const map = new Map<string, any>();
    const isBreedProfile = (p: any) => !p.name || p.name === p.breed;

    for (const pet of pets) {
      if (!pet.breed) continue;
      const existing = map.get(pet.breed);
      if (!existing) {
        map.set(pet.breed, pet);
        continue;
      }
      // Always prefer the breed profile as the card representative
      if (isBreedProfile(pet) && !isBreedProfile(existing)) {
        map.set(pet.breed, pet);
      }
    }
    return Array.from(map.values());
  }, [pets]);

  // Weight-based size filter for cats
  const displayBreeds = groupedPets.filter(pet => {
    if (selectedBreed !== "All Breeds" && pet.breed !== selectedBreed) return false;

    if (selectedSize === "X-Small" && !(pet.weight <= 2)) return false;
    if (selectedSize === "Small"   && !(pet.weight > 2 && pet.weight <= 4)) return false;
    if (selectedSize === "Medium"  && !(pet.weight > 4 && pet.weight <= 6)) return false;
    if (selectedSize === "Large"   && !(pet.weight > 6 && pet.weight <= 8)) return false;
    if (selectedSize === "X-Large" && !(pet.weight > 8)) return false;

    if (!matchesCharacteristics(pet, selectedCharacteristics, CAT_CHARACTERISTICS)) return false;

    return true; // All Sizes
  });

  // The 5 cat size boxes
  const sizeOptions = [
    { name: "X-Small", desc: "UPTO 2 KGS",  image: "/images/munchkin_cat_xsmall.png",     position: "object-[center_20%]" },
    { name: "Small",   desc: "2 – 4 KGS",   image: "/images/siamese_cat_small.png",       position: "object-[center_25%]" },
    { name: "Medium",  desc: "4 – 6 KGS",   image: "/images/british_shorthair_medium.png", position: "object-[center_20%]" },
    { name: "Large",   desc: "6 – 8 KGS",   image: "/images/ragdoll_cat_large.png",       position: "object-[center_30%]" },
    { name: "X-Large", desc: "ABOVE 8 KGS", image: "/images/maine_coon_cat_xlarge.png",    position: "object-[center_30%]" },
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
          <span className="text-black text-[14px] font-medium">Cats</span>
        </div>
      </div>

      {/* Category Switcher & Mobile Filter Toggle */}
      <div className="w-full bg-white border-b border-gray-100">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 pt-6 pb-4">
          <div className="flex items-center justify-between gap-6">
            <div className="inline-flex p-1 bg-[#F3F4F6] rounded-full w-full sm:w-auto overflow-x-auto whitespace-nowrap">
              <Link href="/pet-categories/dogs" className="flex-1 sm:flex-initial text-center px-4 md:px-8 py-2 rounded-full bg-transparent text-[#4F4F4F] text-[13px] sm:text-sm font-bold hover:text-black transition-all active:scale-95">Dogs</Link>
              <Link href="/pet-categories/cats" className="flex-1 sm:flex-initial text-center px-4 md:px-8 py-2 rounded-full bg-black text-white text-[13px] sm:text-sm font-bold shadow-sm transition-all active:scale-95">Cats</Link>
              <Link href="/pet-categories/exotic-birds" className="flex-1 sm:flex-initial text-center px-4 md:px-8 py-2 rounded-full bg-transparent text-[#4F4F4F] text-[13px] sm:text-sm font-bold hover:text-black transition-all active:scale-95">Exotic Birds</Link>
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden flex items-center justify-center w-[48px] h-[48px] bg-white border border-[#E4E7E9] rounded-full text-black shadow-sm hover:bg-gray-50 transition-all active:scale-95 flex-shrink-0"
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

          {/* ── Size Filter ── */}
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

            {/* 5-column grid — single row on lg, compact rounded pills on mobile */}
            <div className="flex flex-row gap-1.5 sm:grid sm:grid-cols-5 lg:grid-cols-5 sm:gap-3 w-full">
              {sizeOptions.map((size) => {
                const isSelected = selectedSize === size.name;
                return (
                  <button
                    key={size.name}
                    type="button"
                    onClick={() => setSelectedSize(isSelected ? "All Sizes" : size.name)}
                    className={`group relative flex flex-row sm:flex-col items-center justify-center border-2 transition-all duration-200 cursor-pointer focus:outline-none flex-1 py-1.5 px-2 rounded-full sm:rounded-xl sm:p-0 sm:overflow-hidden
                      ${isSelected
                        ? 'border-[#FFC501] bg-[#FFC501]/10 sm:bg-transparent ring-2 ring-[#FFC501]/30 shadow-sm'
                        : 'border-[#E4E7E9] hover:border-[#FFC501]/60 hover:shadow-sm bg-white'
                      }`}
                  >
                    {/* Image */}
                    <div className="hidden sm:block w-full overflow-hidden" style={{ height: '72px' }}>
                      <img
                        src={size.image}
                        alt={size.name}
                        className={`w-full h-full object-cover ${size.position || 'object-center'} transition-all duration-500 ${isSelected ? 'grayscale-0 scale-105' : 'grayscale group-hover:grayscale-0 group-hover:scale-105'}`}
                      />
                    </div>
                    {/* Text */}
                    <div className="w-full flex flex-col items-center gap-0.5 justify-center">
                      <span className={`text-[10px] sm:text-[12px] font-bold leading-tight text-center ${isSelected ? 'text-[#0F172A]' : 'text-[#374151]'}`}>
                        {size.name}
                      </span>
                      <span className="hidden sm:block text-[9px] sm:text-[10px] text-[#94A3B8] uppercase tracking-wide leading-tight text-center font-medium">
                        {size.desc}
                      </span>
                    </div>
                    {/* Active dot */}
                    {isSelected && (
                      <div className="hidden sm:block absolute top-1.5 right-1.5 w-2 h-2 bg-[#FFC501] rounded-full shadow" />
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
                placeholder="Search for cats..."
                className="w-full h-[48px] pl-4 pr-12 border border-[#E4E7E9] text-[15px] focus:outline-none focus:border-[#8B5E3C] rounded-none"
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#191C1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
                </svg>
              </div>
            </div>
            <CharacteristicsFilter
              characteristics={CAT_CHARACTERISTICS}
              selected={selectedCharacteristics}
              onToggle={handleCharacteristicToggle}
              onClear={() => setSelectedCharacteristics([])}
            />
          </div>

          {/* Active filter badges */}
          {(selectedSize !== "All Sizes" || selectedCharacteristics.length > 0) && (
            <div className="flex flex-wrap items-center gap-2 -mt-4">
              <span className="text-[13px] text-gray-500">Filtering by:</span>

              {selectedSize !== "All Sizes" && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#FFF8E1] border border-[#FFC501] rounded-full text-[12px] font-bold text-[#7B5800]">
                  {selectedSize}
                  <button onClick={() => setSelectedSize("All Sizes")} className="ml-1 text-[#7B5800] hover:text-black transition-colors">×</button>
                </span>
              )}

              {selectedCharacteristics.map(label => (
                <span key={label} className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#F3F7F0] border border-[#7BA05B]/60 rounded-full text-[12px] font-bold text-[#3E5C2A]">
                  {label}
                  <button onClick={() => handleCharacteristicToggle(label)} className="ml-1 text-[#3E5C2A] hover:text-black transition-colors font-bold text-sm">×</button>
                </span>
              ))}
            </div>
          )}

          {/* Pet Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {isLoading ? (
              <div className="col-span-full py-16 flex flex-col items-center gap-4">
                <div className="w-10 h-10 border-4 border-[#FFC501] border-t-transparent rounded-full animate-spin"/>
                <span className="text-gray-500 font-medium">Loading cats...</span>
              </div>
            ) : displayBreeds.length > 0 ? (
              displayBreeds.map((cat) => {
                const slug = cat.breed.toLowerCase().replace(/\s+/g, '-');
                return (
                  <BreedCardFull
                    key={cat.id}
                    name={cat.breed}
                    image={cat.main_image || '/images/labrador.png'}
                    weight={cat.weight}
                    href={`/pet-categories/cats/${slug}`}
                  />
                );
              })
            ) : (
              <div className="col-span-full py-16 text-center flex flex-col items-center gap-3">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#D1D5DB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
                </svg>
                <span className="text-xl font-bold text-gray-800">No cats match this criteria.</span>
                <span className="text-gray-500">Try adjusting your filters or add a new pet from the dashboard!</span>
                {(selectedSize !== "All Sizes" || selectedCharacteristics.length > 0) && (
                  <button
                    onClick={() => { setSelectedSize("All Sizes"); setSelectedCharacteristics([]); }}
                    className="mt-2 px-6 py-2 bg-black text-white rounded-full text-sm font-semibold hover:bg-gray-900 transition-all"
                  >
                    Clear Filters
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
              {["01","02","03"].map((num, i) => (
                <button key={num} className={`w-12 h-12 rounded-full flex items-center justify-center text-[16px] font-bold transition-all ${i === 0 ? 'bg-black text-white' : 'bg-white text-black border border-[#E4E7E9] hover:border-gray-400'}`}>{num}</button>
              ))}
            </div>
            <button className="w-12 h-12 rounded-full border border-black flex items-center justify-center hover:bg-gray-50 transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
          </div>

          {/* Explore Dogs CTA */}
          <div className="w-full bg-[#FFFBF8] rounded-[24px] p-8 md:p-12 mb-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex flex-col gap-4 text-center md:text-left">
              <h3 className="text-black text-[24px] md:text-[32px] font-normal leading-tight">Want a <span className="text-[#FFC501]">Canine Companion?</span></h3>
              <p className="text-[#5F6C72] text-[16px]">Browse our collection of loyal and energetic dog breeds.</p>
            </div>
            <Link href="/pet-categories/dogs" className="bg-black text-white px-10 h-[56px] rounded-full flex items-center justify-center font-bold hover:bg-gray-900 transition-all active:scale-95 whitespace-nowrap">
              Browse Dogs
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
