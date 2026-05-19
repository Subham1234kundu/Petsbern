"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { supabase } from "@/utils/supabase";

interface Breed {
  id: number;
  name: string;
  category: string;
  image_url: string;
  life_span: string;
  weight: string;
  temperament: string;
  origin: string;
  hypoallergenic: string;
  description: string;
}

type Category = "Dog" | "Cat" | "Exotic";

export default function ComparePetsPage() {
  const [category, setCategory] = useState<Category>("Dog");
  const [breeds, setBreeds] = useState<Breed[]>([]);
  const [loading, setLoading] = useState(true);
  const [breed1Id, setBreed1Id] = useState<number | null>(null);
  const [breed2Id, setBreed2Id] = useState<number | null>(null);
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [search1, setSearch1] = useState("");
  const [search2, setSearch2] = useState("");

  // Fetch breeds from Supabase + real-time
  useEffect(() => {
    setLoading(true);
    const fetchBreeds = async () => {
      const { data } = await supabase
        .from("compare_pets")
        .select("*")
        .eq("category", category)
        .order("name", { ascending: true });
      if (data) {
        setBreeds(data);
        setBreed1Id(data[0]?.id ?? null);
        setBreed2Id(data[1]?.id ?? data[0]?.id ?? null);
      }
      setLoading(false);
    };
    fetchBreeds();

    const channel = supabase
      .channel(`compare-${category}`)
      .on("postgres_changes", { event: "*", schema: "public", table: "compare_pets", filter: `category=eq.${category}` }, (payload) => {
        if (payload.eventType === "INSERT") setBreeds((p) => [...p, payload.new as Breed].sort((a, b) => a.name.localeCompare(b.name)));
        else if (payload.eventType === "DELETE") setBreeds((p) => p.filter((b) => b.id !== payload.old.id));
        else if (payload.eventType === "UPDATE") setBreeds((p) => p.map((b) => (b.id === (payload.new as Breed).id ? (payload.new as Breed) : b)));
      })
      .subscribe();

    return () => { supabase.removeChannel(channel); };
  }, [category]);

  const breed1 = breeds.find((b) => b.id === breed1Id) || breeds[0];
  const breed2 = breeds.find((b) => b.id === breed2Id) || breeds[1] || breeds[0];

  const BreedSelector = ({ value, onChange, isOpen, setIsOpen, search, setSearch, label, otherClose }: any) => (
    <div className="relative flex-1 w-[calc(50%-1.5rem)]">
      <label className="block text-[#4B5563] text-[10px] md:text-[12px] font-bold uppercase tracking-wider mb-2 text-center md:text-left">{label}</label>
      <div onClick={() => { setIsOpen(!isOpen); otherClose(); setSearch(""); }} className="w-full h-[48px] md:h-[56px] px-3 md:px-5 border border-[#E4E4E4] bg-white rounded-xl flex items-center justify-between cursor-pointer hover:border-black transition-all shadow-sm">
        <span className="text-black font-semibold text-[13px] md:text-[15px] truncate pr-2">{breeds.find((b) => b.id === value)?.name || "Select..."}</span>
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
              {breeds.filter((b) => b.name.toLowerCase().includes(search.toLowerCase())).map((b) => (
                <div key={b.id} onClick={() => { onChange(b.id); setIsOpen(false); }} className={`px-4 py-4 md:py-3 cursor-pointer text-[14px] md:text-sm hover:bg-gray-50 border-b border-gray-50 last:border-0 transition-colors ${value === b.id ? "font-bold text-black bg-blue-50/50" : "text-gray-600"}`}>{b.name}</div>
              ))}
              {breeds.filter((b) => b.name.toLowerCase().includes(search.toLowerCase())).length === 0 && (
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
          {/* Real-time badge */}
          <div className="flex items-center gap-2 mt-2 text-[10px] font-bold text-green-300 bg-green-900/40 px-3 py-1 rounded-full border border-green-500/30">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            LIVE DATA
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-8 md:py-12 flex-grow">
        <div className="border border-[#E4E4E4] overflow-hidden bg-white rounded-xl md:rounded-none">
          {/* Selection Row */}
          <div className="p-4 md:p-8 bg-[#F9FAFB]/80 border-b border-[#E4E4E4] flex flex-col items-center">
            {/* Category Toggle */}
            <div className="mb-8 flex items-center justify-center p-1 bg-white border border-[#E4E4E4] rounded-full shadow-sm">
              {(["Dog", "Cat", "Exotic"] as Category[]).map((c) => (
                <button key={c} onClick={() => setCategory(c)} className={`px-6 md:px-8 py-2 rounded-full text-sm font-bold transition-all ${category === c ? "bg-black text-white shadow-md" : "bg-transparent text-[#4F4F4F] hover:text-black"}`}>{c}s</button>
              ))}
            </div>

            <div className="flex items-center justify-between w-full max-w-3xl gap-2 md:gap-6 relative">
              <BreedSelector value={breed1Id} onChange={setBreed1Id} isOpen={isOpen1} setIsOpen={setIsOpen1} search={search1} setSearch={setSearch1} label={`${category} 1`} otherClose={() => setIsOpen2(false)} />
              <div className="w-8 h-8 md:w-12 md:h-12 shrink-0 rounded-full bg-[#FFC501] text-black font-black flex items-center justify-center text-[11px] md:text-[14px] shadow-sm mt-6">VS</div>
              <BreedSelector value={breed2Id} onChange={setBreed2Id} isOpen={isOpen2} setIsOpen={setIsOpen2} search={search2} setSearch={setSearch2} label={`${category} 2`} otherClose={() => setIsOpen1(false)} />
            </div>
          </div>

          {/* Loading */}
          {loading && (
            <div className="flex items-center justify-center py-20">
              <div className="flex flex-col items-center gap-4">
                <div className="w-10 h-10 border-4 border-[#E4E4E4] border-t-[#FFC501] rounded-full animate-spin" />
                <p className="text-[#4B5563] text-[14px]">Loading {category.toLowerCase()} breeds…</p>
              </div>
            </div>
          )}

          {/* No data */}
          {!loading && breeds.length === 0 && (
            <div className="flex items-center justify-center py-20 text-center">
              <div className="flex flex-col items-center gap-3">
                <span className="text-5xl">🐾</span>
                <p className="text-gray-500 font-medium">No {category.toLowerCase()} breeds available yet.</p>
                <p className="text-gray-400 text-sm">Admin needs to add breeds from the dashboard.</p>
              </div>
            </div>
          )}

          {/* Comparison */}
          {!loading && breed1 && breed2 && (
            <>
              <div className="flex flex-row md:grid md:grid-cols-3">
                <div className="hidden md:block" />
                {[breed1, breed2].map((breed, idx) => (
                  <div key={breed.id} className={`flex-1 p-4 md:p-8 flex flex-col items-center w-1/2 md:w-auto ${idx === 0 ? "border-r border-[#E4E4E4]" : ""}`}>
                    <div className="w-full max-w-[280px] md:w-[240px] aspect-[3/2] overflow-hidden mb-3 md:mb-5 shadow-sm bg-gray-100 rounded-lg">
                      {breed.image_url ? (
                        <img src={breed.image_url} alt={breed.name} className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1587300003388-59208cc962cb?q=80&w=400&h=300&auto=format&fit=crop"; }} />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-4xl text-gray-300">🐾</div>
                      )}
                    </div>
                    <h3 className="text-[14px] md:text-[20px] font-bold text-black mb-4 md:mb-5 text-center min-h-[40px] md:min-h-0 flex items-center justify-center">{breed.name}</h3>
                    <div className="flex items-center gap-2 md:gap-3 w-full justify-center">
                      <a href="tel:#" className="w-8 h-8 md:w-10 md:h-10 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-all shadow-md shrink-0">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="md:w-[18px] md:h-[18px]"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                      </a>
                      <Link href="#" className="w-8 h-8 md:w-10 md:h-10 transition-transform hover:scale-110 shrink-0">
                        <img src="/images/whatsapp.png" alt="WhatsApp" className="w-full h-full object-contain" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>

              {/* Comparison Table */}
              <div className="flex flex-col border-t border-[#E4E4E4]">
                {[
                  { label: "Breed Name", val1: breed1.name, val2: breed2.name },
                  { label: "Life Span", val1: breed1.life_span || "—", val2: breed2.life_span || "—" },
                  { label: "Weight", val1: breed1.weight || "—", val2: breed2.weight || "—" },
                  { label: "Temperament", val1: breed1.temperament || "—", val2: breed2.temperament || "—" },
                  { label: "Origin", val1: breed1.origin || "—", val2: breed2.origin || "—" },
                  { label: "Hypoallergenic", val1: breed1.hypoallergenic || "No", val2: breed2.hypoallergenic || "No" },
                ].map((row, i) => (
                  <div key={i} className="flex flex-col md:grid md:grid-cols-3 border-b border-[#E4E4E4] last:border-b-0">
                    <div className="w-full md:w-auto px-4 md:pl-8 py-2 md:py-3 text-[11px] md:text-[14px] font-bold uppercase tracking-wider md:normal-case md:font-medium text-[#4B5563] bg-gray-100 md:bg-transparent border-b md:border-b-0 border-[#E4E4E4] text-center md:text-left flex items-center justify-center md:justify-start">{row.label}</div>
                    <div className="w-full flex md:contents bg-white">
                      <div className="flex-1 p-4 md:pl-8 md:py-3 text-[13px] md:text-[14px] text-black md:border-l border-[#E4E4E4] flex items-center justify-center md:justify-start text-center md:text-left border-r md:border-r-0">{row.val1}</div>
                      <div className="flex-1 p-4 md:pl-8 md:py-3 text-[13px] md:text-[14px] text-black border-l border-[#E4E4E4] flex items-center justify-center md:justify-start text-center md:text-left">{row.val2}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Description */}
              <div className="border-t border-[#E4E4E4]">
                <div className="flex flex-col md:grid md:grid-cols-3">
                  <div className="px-4 md:pl-8 py-2 md:py-4 text-[11px] md:text-[14px] font-bold uppercase tracking-wider md:normal-case md:font-medium text-[#4B5563] bg-gray-100 md:bg-transparent border-b md:border-b-0 border-[#E4E4E4] text-center md:text-left flex items-center justify-center md:justify-start">Description</div>
                  <div className="w-full flex flex-row md:contents bg-white">
                    <div className="flex-1 p-4 md:pl-8 md:py-4 text-[12px] md:text-[13px] text-[#374151] md:border-l border-[#E4E4E4] leading-relaxed text-center md:text-left border-r md:border-r-0">{breed1.description || "—"}</div>
                    <div className="flex-1 p-4 md:pr-4 md:py-4 text-[12px] md:text-[13px] text-[#374151] border-l border-[#E4E4E4] leading-relaxed text-center md:text-left">{breed2.description || "—"}</div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
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
