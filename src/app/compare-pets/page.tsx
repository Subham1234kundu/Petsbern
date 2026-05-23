"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { supabase } from "@/utils/supabase";

interface Pet {
  id: number;
  name: string;
  category: string;
  main_image?: string;
  gender?: string;
  age?: string;
  weight?: number;
  color?: string;
  location?: string;
  vaccinated?: string;
  breed?: string;
  description?: string;
  shedding?: string;
  exercise?: string;
}

const attributes = [
  {
    key: "breed",
    label: "Breed",
    icon: (
      <svg className="w-4 h-4 md:w-5 md:h-5 text-[#C5A059] mr-2 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    getValue: (p: Pet) => p.breed || "—"
  },
  {
    key: "gender",
    label: "Gender",
    icon: (
      <svg className="w-4 h-4 md:w-5 md:h-5 text-[#C5A059] mr-2 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    getValue: (p: Pet) => p.gender || "—"
  },
  {
    key: "age",
    label: "Age",
    icon: (
      <svg className="w-4 h-4 md:w-5 md:h-5 text-[#C5A059] mr-2 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    getValue: (p: Pet) => p.age || "—"
  },
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
    key: "color",
    label: "Color",
    icon: (
      <svg className="w-4 h-4 md:w-5 md:h-5 text-[#C5A059] mr-2 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    getValue: (p: Pet) => p.color || "—"
  },
  {
    key: "vaccinated",
    label: "Vaccinated",
    icon: (
      <svg className="w-4 h-4 md:w-5 md:h-5 text-[#C5A059] mr-2 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    getValue: (p: Pet) => p.vaccinated || "—"
  },
  {
    key: "location",
    label: "Location",
    icon: (
      <svg className="w-4 h-4 md:w-5 md:h-5 text-[#C5A059] mr-2 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    getValue: (p: Pet) => p.location || "—"
  },
  {
    key: "exercise",
    label: "Exercise",
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
    key: "shedding",
    label: "Shedding",
    icon: (
      <svg className="w-4 h-4 md:w-5 md:h-5 text-[#C5A059] mr-2 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 6c0 3-4 3-4 6s4 3 4 6M12 6c0 3-4 3-4 6s4 3 4 6M16 6c0 3-4 3-4 6s4 3 4 6" />
      </svg>
    ),
    getValue: (p: Pet) => p.shedding || "—"
  }
];

type Category = "Dog" | "Cat" | "Exotic";

export default function ComparePetsPage() {
  const [category, setCategory] = useState<Category>("Dog");
  const [pets, setPets] = useState<Pet[]>([]);
  const [loading, setLoading] = useState(true);
  const [pet1Id, setPet1Id] = useState<number | null>(null);
  const [pet2Id, setPet2Id] = useState<number | null>(null);
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [search1, setSearch1] = useState("");
  const [search2, setSearch2] = useState("");

  useEffect(() => {
    setLoading(true);
    const fetchPets = async () => {
      const { data } = await supabase
        .from("pets")
        .select("*")
        .eq("category", category)
        .order("name", { ascending: true });
      if (data) {
        setPets(data);
        setPet1Id(data[0]?.id ?? null);
        setPet2Id(data[1]?.id ?? data[0]?.id ?? null);
      }
      setLoading(false);
    };
    fetchPets();

    const channel = supabase
      .channel(`compare-pets-${category}`)
      .on("postgres_changes", { event: "*", schema: "public", table: "pets", filter: `category=eq.${category}` }, (payload) => {
        if (payload.eventType === "INSERT") setPets((p) => [...p, payload.new as Pet].sort((a, b) => a.name.localeCompare(b.name)));
        else if (payload.eventType === "DELETE") setPets((p) => p.filter((b) => b.id !== payload.old.id));
        else if (payload.eventType === "UPDATE") setPets((p) => p.map((b) => (b.id === (payload.new as Pet).id ? (payload.new as Pet) : b)));
      })
      .subscribe();

    return () => { supabase.removeChannel(channel); };
  }, [category]);

  const pet1 = pets.find((p) => p.id === pet1Id) || pets[0];
  const pet2 = pets.find((p) => p.id === pet2Id) || pets[1] || pets[0];

  const PetSelector = ({ value, onChange, isOpen, setIsOpen, search, setSearch, label, otherClose }: any) => (
    <div className="relative flex-1 w-[calc(50%-1.5rem)]">
      <label className="block text-[#4B5563] text-[10px] md:text-[12px] font-bold uppercase tracking-wider mb-2 text-center md:text-left">{label}</label>
      <div onClick={() => { setIsOpen(!isOpen); otherClose(); setSearch(""); }} className="w-full h-[48px] md:h-[56px] px-3 md:px-5 border border-[#E4E4E4] bg-white rounded-xl flex items-center justify-between cursor-pointer hover:border-black transition-all shadow-sm">
        <span className="text-black font-semibold text-[13px] md:text-[15px] truncate pr-2">{pets.find((p) => p.id === value)?.name || "Select..."}</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform text-gray-400 shrink-0 ${isOpen ? "rotate-180" : ""}`}><path d="m6 9 6 6 6-6" /></svg>
      </div>
      {isOpen && (
        <>
          <div className="fixed inset-0 bg-black/40 z-[100] md:hidden" onClick={() => setIsOpen(false)} />
          <div className="fixed inset-x-4 top-[10vh] bottom-[10vh] md:absolute md:top-[calc(100%+8px)] md:inset-auto md:left-0 w-auto md:w-[120%] bg-white md:border border-[#E4E4E4] rounded-xl shadow-2xl z-[101] overflow-hidden flex flex-col">
            <div className="p-3 border-b border-[#E4E4E4] bg-gray-50 flex items-center shrink-0">
              <input type="text" placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)} className="flex-1 h-[40px] px-3 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-black transition-colors w-full" autoFocus />
              <button onClick={() => setIsOpen(false)} className="md:hidden ml-3 p-2 text-gray-500 bg-white rounded-lg border border-gray-200 shadow-sm shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6 6 18M6 6l12 12" /></svg>
              </button>
            </div>
            <div className="flex-1 overflow-y-auto custom-scrollbar md:max-h-[250px]">
              {pets.filter((p) => p.name.toLowerCase().includes(search.toLowerCase())).map((p) => (
                <div key={p.id} onClick={() => { onChange(p.id); setIsOpen(false); }} className={`px-4 py-4 md:py-3 cursor-pointer text-[14px] md:text-sm hover:bg-gray-50 border-b border-gray-50 last:border-0 transition-colors ${value === p.id ? "font-bold text-black bg-blue-50/50" : "text-gray-600"}`}>{p.name}</div>
              ))}
              {pets.filter((p) => p.name.toLowerCase().includes(search.toLowerCase())).length === 0 && (
                <div className="px-4 py-8 text-center text-gray-400 text-sm">No results found</div>
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
        {!loading && pets.length === 0 && (
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
            <div className="bg-[#005A43] p-4 md:p-6 flex items-center gap-3 md:gap-4 text-white border-t border-x border-[#E4E4E4] rounded-t-2xl md:rounded-t-[32px] overflow-hidden min-w-0">
              <div className="w-10 h-10 md:w-16 md:h-16 rounded-full border-2 border-white bg-white overflow-hidden shrink-0 flex items-center justify-center">
                {pet1.main_image ? (
                  <img src={pet1.main_image} alt={pet1.name} className="w-full h-full object-cover" />
                ) : (
                  <span className="text-xl md:text-3xl">🐾</span>
                )}
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-white/80 text-[9px] md:text-xs font-bold uppercase tracking-wider truncate">
                  {pet1.breed || pet1.category}
                </span>
                <span className="text-white text-[14px] md:text-[22px] font-bold leading-tight break-words overflow-hidden">
                  {pet1.name}
                </span>
              </div>
            </div>
            <div className="bg-[#005A43] p-4 md:p-6 flex items-center gap-3 md:gap-4 text-white border-t border-x border-[#E4E4E4] rounded-t-2xl md:rounded-t-[32px] overflow-hidden min-w-0">
              <div className="w-10 h-10 md:w-16 md:h-16 rounded-full border-2 border-white bg-white overflow-hidden shrink-0 flex items-center justify-center">
                {pet2.main_image ? (
                  <img src={pet2.main_image} alt={pet2.name} className="w-full h-full object-cover" />
                ) : (
                  <span className="text-xl md:text-3xl">🐾</span>
                )}
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-white/80 text-[9px] md:text-xs font-bold uppercase tracking-wider truncate">
                  {pet2.breed || pet2.category}
                </span>
                <span className="text-white text-[14px] md:text-[22px] font-bold leading-tight break-words overflow-hidden">
                  {pet2.name}
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
                  <div className="text-[13px] md:text-[16px] font-medium text-[#1F2937] pl-6 md:pl-7">
                    {attr.getValue(pet1)}
                  </div>
                </div>
                <div className="bg-[#F5F7F6] px-4 py-3 md:px-8 md:py-4 border-x border-[#E4E4E4] flex flex-col gap-1">
                  <div className="flex items-center text-[11px] md:text-sm font-bold text-[#4A5565] tracking-wide">
                    {attr.icon}
                    <span>{attr.label}</span>
                  </div>
                  <div className="text-[13px] md:text-[16px] font-medium text-[#1F2937] pl-6 md:pl-7">
                    {attr.getValue(pet2)}
                  </div>
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

            {/* 5. Contact Actions (Bottom Row) */}
            <div className="bg-[#F5F7F6] p-4 md:px-8 md:pb-8 border-x border-b border-[#E4E4E4] rounded-b-2xl md:rounded-b-[32px] flex flex-col sm:flex-row gap-2 md:gap-3 w-full">
              <a href="tel:+911212121211" className="flex-1 h-9 md:h-12 bg-black hover:bg-gray-800 text-white rounded-xl flex items-center justify-center gap-2 transition-all font-semibold text-xs md:text-sm">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="md:w-4 md:h-4"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                Call Us
              </a>
              <a href={`https://wa.me/911212121211?text=Hi,%20I'm%20interested%20in%20comparing%20${pet1.name}%20from%20Petsbarn.`} target="_blank" rel="noopener noreferrer" className="flex-1 h-9 md:h-12 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-xl flex items-center justify-center gap-2 transition-all font-semibold text-xs md:text-sm">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 md:w-5 md:h-5 shrink-0">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.46h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp
              </a>
            </div>
            <div className="bg-[#F5F7F6] p-4 md:px-8 md:pb-8 border-x border-b border-[#E4E4E4] rounded-b-2xl md:rounded-b-[32px] flex flex-col sm:flex-row gap-2 md:gap-3 w-full">
              <a href="tel:+911212121211" className="flex-1 h-9 md:h-12 bg-black hover:bg-gray-800 text-white rounded-xl flex items-center justify-center gap-2 transition-all font-semibold text-xs md:text-sm">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="md:w-4 md:h-4"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                Call Us
              </a>
              <a href={`https://wa.me/911212121211?text=Hi,%20I'm%20interested%20in%20comparing%20${pet2.name}%20from%20Petsbarn.`} target="_blank" rel="noopener noreferrer" className="flex-1 h-9 md:h-12 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-xl flex items-center justify-center gap-2 transition-all font-semibold text-xs md:text-sm">
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
