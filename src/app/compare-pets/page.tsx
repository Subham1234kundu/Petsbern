"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { apiGet } from "@/utils/api";

interface Pet {
  id: string;
  name: string;
  breed: string;
  category: string;
  main_image?: string;
  description?: string;
  gender?: string;
  vaccinated?: string;
  shedding?: string;
  age?: string;
  weight?: number;
  location?: string;
  exercise?: string;
  color?: string;
  coat_length?: string;
  grooming?: string;
  apartment_size?: string;
  apartment_friendly?: number;
  family_friendly?: number;
  kid_friendly?: number;
  guard_dog?: number;
  intelligent?: number;
  easy_to_train?: number;
  active_energetic?: number;
  calm?: number;
  sociable?: number;
  hypoallergenic?: number;
  low_shedding?: number;
}

const attributes = [
  {
    key: "weight",
    label: "Weight",
    icon: (
      <svg className="w-4 h-4 md:w-5 md:h-5 text-[#C5A059] mr-2 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    ),
    getValue: (p: Pet) => p.weight ? `${p.weight} kg` : "—"
  },
  {
    key: "exercise",
    label: "Exercise Needs",
    icon: (
      <svg className="w-4 h-4 md:w-5 md:h-5 text-[#C5A059] mr-2 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        <path d="M2 12h20" />
      </svg>
    ),
    getValue: (p: Pet) => p.exercise || "—"
  },
  {
    key: "coat_length",
    label: "Coat Length",
    icon: (
      <svg className="w-4 h-4 md:w-5 md:h-5 text-[#C5A059] mr-2 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    ),
    getValue: (p: Pet) => p.coat_length || "—"
  },
  {
    key: "grooming",
    label: "Grooming Needs",
    icon: (
      <svg className="w-4 h-4 md:w-5 md:h-5 text-[#C5A059] mr-2 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    getValue: (p: Pet) => p.grooming || "—"
  },
  {
    key: "apartment_size",
    label: "Apartment Suitability",
    icon: (
      <svg className="w-4 h-4 md:w-5 md:h-5 text-[#C5A059] mr-2 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    getValue: (p: Pet) => p.apartment_size || "—"
  },
  {
    key: "apartment_friendly",
    label: "Apartment Friendly",
    type: "rating",
    icon: (
      <svg className="w-4 h-4 md:w-5 md:h-5 text-[#C5A059] mr-2 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    getValue: (p: Pet) => p.apartment_friendly ?? 60
  },
  {
    key: "family_friendly",
    label: "Family Friendly",
    type: "rating",
    icon: (
      <svg className="w-4 h-4 md:w-5 md:h-5 text-[#C5A059] mr-2 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    getValue: (p: Pet) => p.family_friendly ?? 60
  },
  {
    key: "kid_friendly",
    label: "Kid Friendly",
    type: "rating",
    icon: (
      <svg className="w-4 h-4 md:w-5 md:h-5 text-[#C5A059] mr-2 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    getValue: (p: Pet) => p.kid_friendly ?? 60
  },
  {
    key: "guard_dog",
    label: "Guard Potential",
    type: "rating",
    icon: (
      <svg className="w-4 h-4 md:w-5 md:h-5 text-[#C5A059] mr-2 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    getValue: (p: Pet) => p.guard_dog ?? 60
  },
  {
    key: "intelligent",
    label: "Intelligence",
    type: "rating",
    icon: (
      <svg className="w-4 h-4 md:w-5 md:h-5 text-[#C5A059] mr-2 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    getValue: (p: Pet) => p.intelligent ?? 60
  },
  {
    key: "easy_to_train",
    label: "Easy to Train",
    type: "rating",
    icon: (
      <svg className="w-4 h-4 md:w-5 md:h-5 text-[#C5A059] mr-2 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    getValue: (p: Pet) => p.easy_to_train ?? 60
  },
  {
    key: "active_energetic",
    label: "Energy Level",
    type: "rating",
    icon: (
      <svg className="w-4 h-4 md:w-5 md:h-5 text-[#C5A059] mr-2 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    getValue: (p: Pet) => p.active_energetic ?? 60
  },
  {
    key: "calm",
    label: "Calmness",
    type: "rating",
    icon: (
      <svg className="w-4 h-4 md:w-5 md:h-5 text-[#C5A059] mr-2 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
      </svg>
    ),
    getValue: (p: Pet) => p.calm ?? 60
  },
  {
    key: "sociable",
    label: "Sociability",
    type: "rating",
    icon: (
      <svg className="w-4 h-4 md:w-5 md:h-5 text-[#C5A059] mr-2 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    getValue: (p: Pet) => p.sociable ?? 60
  },
  {
    key: "hypoallergenic",
    label: "Hypoallergenic",
    type: "rating",
    icon: (
      <svg className="w-4 h-4 md:w-5 md:h-5 text-[#C5A059] mr-2 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.07 15.2c-.38-.076-.7-.297-.893-.618L3 11m0 0l2-2m-2 2h18m-6-6l-2-2m2 2h4" />
      </svg>
    ),
    getValue: (p: Pet) => p.hypoallergenic ?? 60
  },
  {
    key: "low_shedding",
    label: "Low Shedding",
    type: "rating",
    icon: (
      <svg className="w-4 h-4 md:w-5 md:h-5 text-[#C5A059] mr-2 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
      </svg>
    ),
    getValue: (p: Pet) => p.low_shedding ?? 60
  }
];

type Category = "Dog" | "Cat" | "Exotic";

export default function ComparePetsPage() {
  const [category, setCategory] = useState<Category>("Dog");
  const [allPets, setAllPets] = useState<Pet[]>([]);
  const [loading, setLoading] = useState(true);
  const [pet1Id, setPet1Id] = useState<string | null>(null);
  const [pet2Id, setPet2Id] = useState<string | null>(null);
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [search1, setSearch1] = useState("");
  const [search2, setSearch2] = useState("");

  useEffect(() => {
    setLoading(true);
    const fetchPets = async () => {
      try {
        const data = await apiGet<Pet[]>(`/api/pets?category=${encodeURIComponent(category)}&sort=asc`);
        setAllPets(data);
      } catch (err) {
        console.error("Fetch pets error:", err);
      }
      setLoading(false);
    };
    fetchPets();
  }, [category]);

  const groupedBreeds = React.useMemo(() => {
    const map = new Map<string, Pet>();
    // Prioritize breed profile entries (where name is null/empty)
    const sorted = [...allPets].sort((a, b) => {
      const aIsProfile = !a.name ? 1 : 0;
      const bIsProfile = !b.name ? 1 : 0;
      if (aIsProfile !== bIsProfile) {
        return bIsProfile - aIsProfile;
      }
      return (a.id || "").localeCompare(b.id || ""); // oldest first
    });

    for (const pet of sorted) {
      if (!pet.breed) continue;
      const breedKey = pet.breed.trim().toLowerCase();
      if (!map.has(breedKey)) {
        map.set(breedKey, pet);
      }
    }
    return Array.from(map.values()).sort((a, b) => (a.breed || "").localeCompare(b.breed || ""));
  }, [allPets]);

  useEffect(() => {
    if (groupedBreeds.length > 0) {
      setPet1Id(groupedBreeds[0]?.id ?? null);
      setPet2Id(groupedBreeds[1]?.id ?? groupedBreeds[0]?.id ?? null);
    } else {
      setPet1Id(null);
      setPet2Id(null);
    }
  }, [groupedBreeds]);

  const pet1 = groupedBreeds.find((p) => p.id === pet1Id) || groupedBreeds[0];
  const pet2 = groupedBreeds.find((p) => p.id === pet2Id) || groupedBreeds[1] || groupedBreeds[0];

  const PetSelector = ({ value, onChange, isOpen, setIsOpen, search, setSearch, label, otherClose }: any) => (
    <div className="relative flex-grow flex-1">
      <label className="block text-[#4B5563] text-[10px] md:text-[12px] font-bold uppercase tracking-wider mb-2 text-center md:text-left">{label}</label>
      <div onClick={() => { setIsOpen(!isOpen); otherClose(); setSearch(""); }} className="w-full h-[48px] md:h-[56px] px-3 md:px-5 border border-[#E4E4E4] bg-white rounded-xl flex items-center justify-between cursor-pointer hover:border-black transition-all shadow-sm">
        <span className="text-black font-semibold text-[13px] md:text-[15px] truncate pr-2">
          {groupedBreeds.find((p) => p.id === value)?.breed || "Select Breed..."}
        </span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform text-gray-400 shrink-0 ${isOpen ? "rotate-180" : ""}`}><path d="m6 9 6 6 6-6" /></svg>
      </div>
      {isOpen && (
        <>
          <div className="fixed inset-0 bg-black/40 z-[100] md:hidden" onClick={() => setIsOpen(false)} />
          <div className="fixed inset-x-4 top-[10vh] bottom-[10vh] md:absolute md:top-[calc(100%+8px)] md:inset-auto md:left-0 w-auto md:w-[120%] bg-white md:border border-[#E4E4E4] rounded-xl shadow-2xl z-[101] overflow-hidden flex flex-col">
            <div className="p-3 border-b border-[#E4E4E4] bg-gray-50 flex items-center shrink-0">
              <input type="text" placeholder="Search breeds..." value={search} onChange={(e) => setSearch(e.target.value)} className="flex-1 h-[40px] px-3 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-black transition-colors w-full" autoFocus />
              <button onClick={() => setIsOpen(false)} className="md:hidden ml-3 p-2 text-gray-500 bg-white rounded-lg border border-gray-200 shadow-sm shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6 6 18M6 6l12 12" /></svg>
              </button>
            </div>
            <div className="flex-1 overflow-y-auto custom-scrollbar md:max-h-[250px]">
              {groupedBreeds.filter((p) => p.breed?.toLowerCase().includes(search.toLowerCase())).map((p) => (
                <div key={p.id} onClick={() => { onChange(p.id); setIsOpen(false); }} className={`px-4 py-4 md:py-3 cursor-pointer text-[14px] md:text-sm hover:bg-gray-50 border-b border-gray-50 last:border-0 transition-colors ${value === p.id ? "font-bold text-black bg-yellow-50" : "text-gray-600"}`}>
                  {p.breed}
                </div>
              ))}
              {groupedBreeds.filter((p) => p.breed?.toLowerCase().includes(search.toLowerCase())).length === 0 && (
                <div className="px-4 py-8 text-center text-gray-400 text-sm">No breeds found</div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );

  return (
    <div className="flex flex-col min-h-screen bg-white font-sans">
      {/* Header */}
      <section className="w-full h-[200px] md:h-[268px] relative flex flex-col items-center justify-center overflow-hidden text-center px-4" style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url('/images/compare.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="z-10 flex flex-col items-center gap-2">
          <h1 className="text-white tracking-tight leading-tight text-[24px] md:text-[32px] font-semibold max-w-[90%]" style={{ fontFamily: "var(--font-public-sans), sans-serif" }}>Compare Your Future Companions</h1>
          <div className="flex items-center gap-2 text-white/90 text-[13px] md:text-[14px]">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="text-white/60"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg></span>
            <span className="font-medium text-white">Compare Pets</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-8 md:py-12 flex-grow">
        {/* Selection Row */}
        <div className="p-4 md:p-8 bg-[#F9FAFB]/80 border border-[#E4E4E4] bg-white rounded-2xl flex flex-col items-center max-w-3xl mx-auto mb-10 shadow-sm">
          {/* Category Toggle */}
          <div className="mb-8 flex items-center justify-center p-1 bg-white border border-[#E4E4E4] rounded-full shadow-sm">
            {(["Dog", "Cat", "Exotic"] as Category[]).map((c) => (
              <button key={c} onClick={() => setCategory(c)} className={`px-6 md:px-8 py-2 rounded-full text-sm font-bold transition-all ${category === c ? "bg-black text-white shadow-md" : "bg-transparent text-[#4F4F4F] hover:text-black"}`}>{c}s</button>
            ))}
          </div>

          <div className="flex items-center justify-between w-full max-w-3xl gap-2 md:gap-6 relative">
            <PetSelector value={pet1Id} onChange={setPet1Id} isOpen={isOpen1} setIsOpen={setIsOpen1} search={search1} setSearch={setSearch1} label={`${category} 1`} otherClose={() => setIsOpen2(false)} />
            <div className="w-8 h-8 md:w-12 md:h-12 shrink-0 rounded-full bg-[#FFC501] text-black font-black flex items-center justify-center text-[11px] md:text-[14px] shadow-sm mt-6">VS</div>
            <PetSelector value={pet2Id} onChange={setPet2Id} isOpen={isOpen2} setIsOpen={setIsOpen2} search={search2} setSearch={setSearch2} label={`${category} 2`} otherClose={() => setIsOpen1(false)} />
          </div>
        </div>

        {/* Loading */}
        {loading && (
          <div className="flex items-center justify-center py-20">
            <div className="flex flex-col items-center gap-4">
              <div className="w-10 h-10 border-4 border-[#E4E4E4] border-t-[#FFC501] rounded-full animate-spin" />
              <p className="text-[#4B5563] text-[14px]">Loading {category.toLowerCase()}s…</p>
            </div>
          </div>
        )}

        {/* No data */}
        {!loading && groupedBreeds.length === 0 && (
          <div className="flex items-center justify-center py-20 text-center border border-[#E4E4E4] bg-white rounded-2xl shadow-sm max-w-3xl mx-auto">
            <div className="flex flex-col items-center gap-3">
              <span className="text-5xl">🐾</span>
              <p className="text-gray-500 font-medium">No {category.toLowerCase()}s available yet.</p>
              <p className="text-gray-400 text-sm">Pets will appear here once added from the dashboard.</p>
            </div>
          </div>
        )}

        {/* Comparison Cards (Grid) */}
        {!loading && pet1 && pet2 && (
          <div className="grid grid-cols-2 gap-x-3 sm:gap-x-6 lg:gap-x-8 max-w-[960px] xl:max-w-[1024px] mx-auto w-full px-2 sm:px-4 py-4">
            {/* 1. Header Row */}
            <div className="bg-[#FFC501] p-4 md:p-6 flex items-center gap-3 md:gap-4 text-black border-t border-x border-[#E4E4E4] rounded-t-2xl md:rounded-t-[32px] overflow-hidden min-w-0">
              <div className="w-10 h-10 md:w-16 md:h-16 rounded-full border-2 border-white bg-white overflow-hidden shrink-0 flex items-center justify-center">
                {pet1.main_image ? (
                  <img src={pet1.main_image} alt={pet1.breed} className="w-full h-full object-cover" />
                ) : (
                  <span className="text-xl md:text-3xl">🐾</span>
                )}
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-black/60 text-[9px] md:text-xs font-bold uppercase tracking-wider truncate">
                  {pet1.category} Breed
                </span>
                <span className="text-black text-[14px] md:text-[22px] font-bold leading-tight break-words overflow-hidden">
                  {pet1.breed}
                </span>
              </div>
            </div>
            <div className="bg-[#FFC501] p-4 md:p-6 flex items-center gap-3 md:gap-4 text-black border-t border-x border-[#E4E4E4] rounded-t-2xl md:rounded-t-[32px] overflow-hidden min-w-0">
              <div className="w-10 h-10 md:w-16 md:h-16 rounded-full border-2 border-white bg-white overflow-hidden shrink-0 flex items-center justify-center">
                {pet2.main_image ? (
                  <img src={pet2.main_image} alt={pet2.breed} className="w-full h-full object-cover" />
                ) : (
                  <span className="text-xl md:text-3xl">🐾</span>
                )}
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-black/60 text-[9px] md:text-xs font-bold uppercase tracking-wider truncate">
                  {pet2.category} Breed
                </span>
                <span className="text-black text-[14px] md:text-[22px] font-bold leading-tight break-words overflow-hidden">
                  {pet2.breed}
                </span>
              </div>
            </div>

            {/* 2. Gold Divider Row */}
            <div className="h-[5px] md:h-[7px] bg-[#C5A059] border-x border-[#E4E4E4]" />
            <div className="h-[5px] md:h-[7px] bg-[#C5A059] border-x border-[#E4E4E4]" />

            {/* 3. Attribute List Rows */}
            {attributes.map((attr) => (
              <React.Fragment key={attr.key}>
                <div className="bg-[#F5F7F6] px-4 py-3 md:px-8 md:py-4 border-x border-[#E4E4E4] flex flex-col gap-1">
                  <div className="flex items-center text-[11px] md:text-sm font-bold text-[#4A5565] tracking-wide">
                    {attr.icon}
                    <span>{attr.label}</span>
                  </div>
                  {attr.type === "rating" ? (
                    <div className="flex items-center gap-3 pl-6 md:pl-7 mt-1 w-full">
                      <div className="flex-1 bg-gray-200 h-2 rounded-full overflow-hidden max-w-[200px]">
                        <div className="bg-[#FFC501] h-full rounded-full" style={{ width: `${attr.getValue(pet1)}%` }} />
                      </div>
                      <span className="text-[13px] md:text-sm font-bold text-[#1F2937]">{attr.getValue(pet1)}%</span>
                    </div>
                  ) : (
                    <div className="text-[13px] md:text-[16px] font-medium text-[#1F2937] pl-6 md:pl-7">
                      {attr.getValue(pet1)}
                    </div>
                  )}
                </div>
                <div className="bg-[#F5F7F6] px-4 py-3 md:px-8 md:py-4 border-x border-[#E4E4E4] flex flex-col gap-1">
                  <div className="flex items-center text-[11px] md:text-sm font-bold text-[#4A5565] tracking-wide">
                    {attr.icon}
                    <span>{attr.label}</span>
                  </div>
                  {attr.type === "rating" ? (
                    <div className="flex items-center gap-3 pl-6 md:pl-7 mt-1 w-full">
                      <div className="flex-1 bg-gray-200 h-2 rounded-full overflow-hidden max-w-[200px]">
                        <div className="bg-[#FFC501] h-full rounded-full" style={{ width: `${attr.getValue(pet2)}%` }} />
                      </div>
                      <span className="text-[13px] md:text-sm font-bold text-[#1F2937]">{attr.getValue(pet2)}%</span>
                    </div>
                  ) : (
                    <div className="text-[13px] md:text-[16px] font-medium text-[#1F2937] pl-6 md:pl-7">
                      {attr.getValue(pet2)}
                    </div>
                  )}
                </div>
              </React.Fragment>
            ))}

            {/* 4. Description Row */}
            <div className="bg-[#F5F7F6] px-4 py-3 md:px-8 md:py-4 border-x border-[#E4E4E4] flex flex-col gap-1">
              <div className="flex items-center text-[11px] md:text-sm font-bold text-[#4A5565] tracking-wide">
                <svg className="w-4 h-4 md:w-5 md:h-5 text-[#C5A059] mr-2 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>Description</span>
              </div>
              <div className="text-[12px] md:text-[14px] text-[#4A5565] pl-6 md:pl-7 leading-relaxed font-normal">
                {pet1.description || "—"}
              </div>
            </div>
            <div className="bg-[#F5F7F6] px-4 py-3 md:px-8 md:py-4 border-x border-[#E4E4E4] flex flex-col gap-1">
              <div className="flex items-center text-[11px] md:text-sm font-bold text-[#4A5565] tracking-wide">
                <svg className="w-4 h-4 md:w-5 md:h-5 text-[#C5A059] mr-2 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>Description</span>
              </div>
              <div className="text-[12px] md:text-[14px] text-[#4A5565] pl-6 md:pl-7 leading-relaxed font-normal">
                {pet2.description || "—"}
              </div>
            </div>

            {/* 5. Contact Actions */}
            <div className="bg-[#F5F7F6] p-4 md:px-8 md:pb-8 border-x border-b border-[#E4E4E4] rounded-b-2xl md:rounded-b-[32px] flex flex-col sm:flex-row gap-2 md:gap-3 w-full">
              <a href="tel:+911212121211" className="flex-1 h-9 md:h-12 bg-black hover:bg-gray-800 text-white rounded-xl flex items-center justify-center gap-2 transition-all font-semibold text-xs md:text-sm">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="md:w-4 md:h-4"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.5 19.5 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                Call Us
              </a>
              <a href={`https://wa.me/911212121211?text=Hi,%20I'm%20interested%20in%20comparing%20${pet1.breed}%20from%20Petsbarn.`} target="_blank" rel="noopener noreferrer" className="flex-1 h-9 md:h-12 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-xl flex items-center justify-center gap-2 transition-all font-semibold text-xs md:text-sm">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 md:w-5 md:h-5 shrink-0">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.46h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp
              </a>
            </div>
            <div className="bg-[#F5F7F6] p-4 md:px-8 md:pb-8 border-x border-b border-[#E4E4E4] rounded-b-2xl md:rounded-b-[32px] flex flex-col sm:flex-row gap-2 md:gap-3 w-full">
              <a href="tel:+911212121211" className="flex-1 h-9 md:h-12 bg-black hover:bg-gray-800 text-white rounded-xl flex items-center justify-center gap-2 transition-all font-semibold text-xs md:text-sm">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="md:w-4 md:h-4"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.5 19.5 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                Call Us
              </a>
              <a href={`https://wa.me/911212121211?text=Hi,%20I'm%20interested%20in%20comparing%20${pet2.breed}%20from%20Petsbarn.`} target="_blank" rel="noopener noreferrer" className="flex-1 h-9 md:h-12 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-xl flex items-center justify-center gap-2 transition-all font-semibold text-xs md:text-sm">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 md:w-5 md:h-5 shrink-0">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.46h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp
              </a>
            </div>
          </div>
        )}
      </main>

      {/* 3 Simple Steps */}
      <section className="bg-white w-full py-12 md:py-20">
        <div className="max-w-[1440px] mx-auto w-full px-4 sm:px-6 lg:px-12">
          <h2 className="text-black text-[28px] md:text-[36px] font-normal text-center mb-12 leading-tight">
            Bringing Your Pet Home in <br className="md:hidden" /> <span className="text-[#FFC501]">3 Simple Steps</span>
          </h2>
          <div className="flex flex-col lg:flex-row items-center justify-center gap-2 relative">
            {[
              { img: "/images/choosepet.png", title: "Choose Your Pet", desc: "Explore our carefully selected range of healthy dogs, cats, and birds. Compare breeds, understand their temperament." },
              { img: "/images/healthandverification.png", title: "Health & Verification", desc: "Every pet undergoes thorough veterinary health checks, age-appropriate vaccinations, and proper documentation." },
              { img: "/images/pethome.png", title: "Get Your Pet Home", desc: "Your new family member is transported with comfort and care through secure travel arrangements." },
            ].map((step, i) => (
              <React.Fragment key={i}>
                {i > 0 && (
                  <div className="hidden lg:flex w-10 h-10 rounded-full bg-[#FFC501] items-center justify-center z-10 -mx-5 flex-shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                  </div>
                )}
                <div className="w-full max-w-[356px] min-h-[320px] md:h-[356px] border border-[#C8C8C8] rounded-xl p-8 flex flex-col items-center text-center justify-center bg-white shadow-sm hover:shadow-md transition-shadow">
                  <div className="h-[80px] md:h-[90px] flex items-center justify-center mb-6">
                    <img src={step.img} alt={step.title} className="h-full object-contain" />
                  </div>
                  <h3 className="text-black text-[18px] md:text-[20px] font-bold mb-4">{step.title}</h3>
                  <p className="text-[#4A5565] text-[13px] md:text-[14px] leading-relaxed">{step.desc}</p>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* Waiting Section */}
      <section className="w-full bg-[#F6F5F2] py-16 md:py-0 md:h-[510px] flex items-center justify-center overflow-hidden relative">
        <div className="max-w-[1440px] mx-auto w-full px-4 sm:px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center h-full relative">
          <div className="flex flex-col z-10 w-full md:w-1/2 text-center md:text-left mb-12 md:mb-0">
            <h2 className="text-black leading-tight mb-6 text-[28px] md:text-[36px] font-normal" style={{ fontFamily: "var(--font-public-sans), 'Public Sans', sans-serif" }}>Your New Best Friend<br />Is <span className="text-[#FFC501]">Waiting</span></h2>
            <p className="text-[#4A5565] mb-10 text-[16px] md:text-[18px]">Bring home love, joy, and companionship today.</p>
            <div className="flex items-center justify-center md:justify-start gap-3">
              <button className="bg-black text-white rounded-full flex items-center justify-center transition-all hover:bg-gray-800 px-8 h-[47px] text-[14px] md:text-[15px] font-medium">Browse Available Pets</button>
              <button className="bg-black text-white rounded-full flex items-center justify-center transition-all hover:bg-gray-800 w-[47px] h-[47px]">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M17 7H7M17 7V17" /></svg>
              </button>
            </div>
          </div>
          <div className="relative md:absolute right-0 bottom-0 lg:right-12 flex items-end justify-center pointer-events-none z-0">
            <img src="/images/waiting.png" alt="Waiting Dog" className="w-[300px] md:w-[420px] h-auto object-contain" />
          </div>
        </div>
      </section>
    </div>
  );
}
