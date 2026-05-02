"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";

/* ─── Unified breed shape after normalisation ─── */
interface Breed {
  id: string;
  name: string;
  image: string;
  description: string;
  lifeSpan: string;
  weight: string;
  temperament: string;
  origin: string;
  hypoallergenic: string;
}

type Category = "Dogs" | "Cats";
const CATEGORIES: Category[] = ["Dogs", "Cats"];

/* ─── API helpers ─── */

async function fetchDogBreeds(): Promise<Breed[]> {
  const res = await fetch("https://dogapi.dog/api/v2/breeds?page[number]=1&page[size]=60");
  const json = await res.json();

  // Fetch images from Dog CEO for each breed
  return Promise.all(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    json.data.map(async (d: any) => {
      const breedSlug = d.attributes.name.toLowerCase().replace(/ /g, "/").replace(/\(.*\)/, "").trim();
      let image = "";
      try {
        const imgRes = await fetch(`https://dog.ceo/api/breed/${breedSlug}/images/random`);
        if (imgRes.ok) {
          const imgJson = await imgRes.json();
          if (imgJson.status === "success") image = imgJson.message;
        }
      } catch {
        /* fallback below */
      }
      if (!image) {
        // Use a predictable Unsplash fallback
        image = `https://images.unsplash.com/photo-1587300003388-59208cc962cb?q=80&w=400&h=300&auto=format&fit=crop`;
      }

      return {
        id: d.id,
        name: d.attributes.name,
        image,
        description: d.attributes.description || "—",
        lifeSpan: d.attributes.life
          ? `${d.attributes.life.min}–${d.attributes.life.max} years`
          : "—",
        weight: d.attributes.male_weight
          ? `${d.attributes.male_weight.min}–${d.attributes.male_weight.max} kg`
          : "—",
        temperament: d.attributes.description?.split(".")[0] || "—",
        origin: "—",
        hypoallergenic: d.attributes.hypoallergenic ? "Yes" : "No",
      } satisfies Breed;
    })
  );
}

async function fetchCatBreeds(): Promise<Breed[]> {
  const res = await fetch("https://api.thecatapi.com/v1/breeds?limit=60");
  const json = await res.json();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return json.map((c: any) => ({
    id: c.id,
    name: c.name,
    image: c.reference_image_id
      ? `https://cdn2.thecatapi.com/images/${c.reference_image_id}.jpg`
      : `https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=400&h=300&auto=format&fit=crop`,
    description: c.description || "—",
    lifeSpan: c.life_span ? `${c.life_span} years` : "—",
    weight: c.weight?.metric ? `${c.weight.metric} kg` : "—",
    temperament: c.temperament || "—",
    origin: c.origin || "—",
    hypoallergenic: c.hypoallergenic ? "Yes" : "No",
  }));
}

/* ─── Page component ─── */
export default function ComparePetsPage() {
  const [category, setCategory] = useState<Category>("Dogs");
  const [breeds, setBreeds] = useState<Breed[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [breed1Id, setBreed1Id] = useState("");
  const [breed2Id, setBreed2Id] = useState("");

  /* Fetch breeds when category changes */
  const loadBreeds = useCallback(async (cat: Category) => {
    setLoading(true);
    setError("");
    try {
      const data = cat === "Dogs" ? await fetchDogBreeds() : await fetchCatBreeds();
      setBreeds(data);
      if (data.length >= 2) {
        setBreed1Id(data[0].id);
        setBreed2Id(data[1].id);
      } else if (data.length === 1) {
        setBreed1Id(data[0].id);
        setBreed2Id(data[0].id);
      }
    } catch {
      setError("Failed to load breed data. Please try again.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadBreeds(category);
  }, [category, loadBreeds]);

  const breed1 = breeds.find((b) => b.id === breed1Id) || breeds[0];
  const breed2 = breeds.find((b) => b.id === breed2Id) || breeds[1] || breeds[0];

  return (
    <div className="flex flex-col min-h-screen bg-white font-sans">
      {/* Compare Header Section */}
      <section
        className="w-full h-[268px] relative flex flex-col items-center justify-center overflow-hidden text-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/compare.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
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
            Compare Your Future Companions
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
            <span className="font-medium text-white">Compare Pets</span>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-12 flex-grow">
        {/* Unified Container */}
        <div className="border border-[#E4E4E4] overflow-hidden bg-white">
          {/* Top Selection Row */}
          <div className="p-8 bg-[#F9FAFB]/80 border-b border-[#E4E4E4]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Category Selector */}
              <div className="relative">
                <select
                  className="w-full h-[48px] px-5 border border-[#E4E4E4] bg-white text-black appearance-none outline-none focus:ring-2 focus:ring-[#FFC501]/20 transition-all font-medium text-[14px]"
                  value={category}
                  onChange={(e) => setCategory(e.target.value as Category)}
                >
                  {CATEGORIES.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
                <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </div>
              </div>

              {/* Breed 1 Selector */}
              <div className="relative">
                <select
                  className="w-full h-[48px] px-5 border border-[#E4E4E4] bg-white text-black appearance-none outline-none focus:ring-2 focus:ring-[#FFC501]/20 transition-all font-medium text-[14px]"
                  value={breed1Id}
                  onChange={(e) => setBreed1Id(e.target.value)}
                  disabled={loading}
                >
                  {breeds.map((b) => (
                    <option key={b.id} value={b.id}>
                      {b.name}
                    </option>
                  ))}
                </select>
                <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </div>
              </div>

              {/* Breed 2 Selector */}
              <div className="relative">
                <select
                  className="w-full h-[48px] px-5 border border-[#E4E4E4] bg-white text-black appearance-none outline-none focus:ring-2 focus:ring-[#FFC501]/20 transition-all font-medium text-[14px]"
                  value={breed2Id}
                  onChange={(e) => setBreed2Id(e.target.value)}
                  disabled={loading}
                >
                  {breeds.map((b) => (
                    <option key={b.id} value={b.id}>
                      {b.name}
                    </option>
                  ))}
                </select>
                <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Loading / Error State */}
          {loading && (
            <div className="flex items-center justify-center py-20">
              <div className="flex flex-col items-center gap-4">
                <div className="w-10 h-10 border-4 border-[#E4E4E4] border-t-[#FFC501] rounded-full animate-spin" />
                <p className="text-[#4B5563] text-[14px]">
                  Loading {category.toLowerCase()} breeds from API…
                </p>
              </div>
            </div>
          )}

          {error && (
            <div className="flex items-center justify-center py-20">
              <div className="flex flex-col items-center gap-4 text-center">
                <p className="text-red-500 text-[16px] font-medium">{error}</p>
                <button
                  onClick={() => loadBreeds(category)}
                  className="bg-black text-white h-[40px] px-6 rounded-full text-[12px] font-bold uppercase tracking-wider hover:bg-gray-800 transition-all"
                >
                  Retry
                </button>
              </div>
            </div>
          )}

          {/* Comparison Content (only when data loaded) */}
          {!loading && !error && breed1 && breed2 && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-3">
                {/* Left Spacer */}
                <div className="hidden md:block" />

                {/* Breed 1 Card */}
                <div className="p-8 flex flex-col items-center border-b md:border-b-0 md:border-r border-[#E4E4E4]">
                  <div className="w-[240px] h-[160px] overflow-hidden mb-5 shadow-sm bg-gray-100">
                    <img
                      src={breed1.image}
                      alt={breed1.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          "https://images.unsplash.com/photo-1587300003388-59208cc962cb?q=80&w=400&h=300&auto=format&fit=crop";
                      }}
                    />
                  </div>
                  <h3 className="text-[20px] font-bold text-black mb-5">
                    {breed1.name}
                  </h3>
                  <div className="flex items-center gap-3">
                    <button className="bg-black text-white h-[40px] w-[160px] rounded-full text-[12px] font-bold uppercase tracking-wider hover:bg-gray-800 transition-all shadow-md">
                      Call Us Now
                    </button>
                    <Link href="#" className="w-8 h-8 transition-transform hover:scale-110">
                      <img src="/images/whatsApp.png" alt="WhatsApp" className="w-full h-full object-contain" />
                    </Link>
                  </div>
                </div>

                {/* Breed 2 Card */}
                <div className="p-8 flex flex-col items-center">
                  <div className="w-[240px] h-[160px] overflow-hidden mb-5 shadow-sm bg-gray-100">
                    <img
                      src={breed2.image}
                      alt={breed2.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=400&h=300&auto=format&fit=crop";
                      }}
                    />
                  </div>
                  <h3 className="text-[20px] font-bold text-black mb-5">
                    {breed2.name}
                  </h3>
                  <div className="flex items-center gap-3">
                    <button className="bg-black text-white h-[40px] w-[160px] rounded-full text-[12px] font-bold uppercase tracking-wider hover:bg-gray-800 transition-all shadow-md">
                      Call Us Now
                    </button>
                    <Link href="#" className="w-8 h-8 transition-transform hover:scale-110">
                      <img src="/images/whatsApp.png" alt="WhatsApp" className="w-full h-full object-contain" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Comparison Table */}
              <div className="flex flex-col border-t border-[#E4E4E4]">
                {[
                  { label: "Breed:", val1: breed1.name, val2: breed2.name },
                  { label: "Life Span:", val1: breed1.lifeSpan, val2: breed2.lifeSpan },
                  { label: "Weight:", val1: breed1.weight, val2: breed2.weight },
                  { label: "Temperament:", val1: breed1.temperament, val2: breed2.temperament },
                  { label: "Origin:", val1: breed1.origin, val2: breed2.origin },
                  { label: "Hypoallergenic:", val1: breed1.hypoallergenic, val2: breed2.hypoallergenic },
                ].map((row, i) => (
                  <div
                    key={i}
                    className={`grid grid-cols-3 min-h-[50px] items-center border-b border-[#E4E4E4] last:border-b-0 ${
                      i % 2 === 0 ? "bg-[#F9FAFB]" : "bg-white"
                    }`}
                  >
                    <div className="pl-8 py-3 text-[14px] font-medium text-[#4B5563]">
                      {row.label}
                    </div>
                    <div className="pl-8 py-3 text-[14px] text-black border-l border-[#E4E4E4] h-full flex items-center">
                      {row.val1}
                    </div>
                    <div className="pl-8 py-3 text-[14px] text-black border-l border-[#E4E4E4] h-full flex items-center">
                      {row.val2}
                    </div>
                  </div>
                ))}
              </div>

              {/* Description Comparison */}
              <div className="border-t border-[#E4E4E4]">
                <div className="grid grid-cols-1 md:grid-cols-3 min-h-[80px]">
                  <div className="pl-8 py-4 text-[14px] font-medium text-[#4B5563] flex items-start bg-[#F9FAFB]">
                    Description:
                  </div>
                  <div className="pl-8 pr-4 py-4 text-[13px] text-[#374151] border-l border-[#E4E4E4] bg-[#F9FAFB] leading-relaxed">
                    {breed1.description}
                  </div>
                  <div className="pl-8 pr-4 py-4 text-[13px] text-[#374151] border-l border-[#E4E4E4] bg-[#F9FAFB] leading-relaxed">
                    {breed2.description}
                  </div>
                </div>
              </div>
            </>
          )}
        </div>


      </main>

      {/* 3 Simple Steps Section */}
      <section className="bg-white w-full">
        <div className="max-w-[1440px] mx-auto w-full px-4 sm:px-6 lg:px-12 mb-14 mt-10">
          <h2 className="text-black text-[36px] font-normal text-center mb-10">
            Bringing Your Pet Home in <span className="text-[#FFC501]">3 Simple Steps</span>
          </h2>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-2 relative ">
            {/* Step 1 */}
            <div className="w-[356px] h-[356px] border border-[#C8C8C8] rounded-xl p-8 flex flex-col items-center text-center justify-center">
              <div className="h-[90px] flex items-center justify-center mb-6">
                <img src="/images/choosePet.png" alt="Choose Your Pet" className="h-full object-contain" />
              </div>
              <h3 className="text-black text-[20px] font-bold mb-4">Choose Your Pet</h3>
              <p className="text-[#4A5565] text-[14px] leading-relaxed">
                Explore our carefully selected range of healthy dogs, cats, and birds. Compare breeds, understand their temperament.
              </p>
            </div>

            {/* Arrow 1 */}
            <div className="hidden lg:flex w-10 h-10 rounded-full bg-[#FFC501] items-center justify-center z-10 -mx-5 flex-shrink-0">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </div>

            {/* Step 2 */}
            <div className="w-[356px] h-[356px] border border-[#C8C8C8] rounded-xl p-8 flex flex-col items-center text-center justify-center">
              <div className="h-[90px] flex items-center justify-center mb-6">
                <img src="/images/healthAndVerification.png" alt="Health & Verification" className="h-full object-contain" />
              </div>
              <h3 className="text-black text-[20px] font-bold mb-4">Health & Verification</h3>
              <p className="text-[#4A5565] text-[14px] leading-relaxed">
                Every pet undergoes thorough veterinary health checks, age-appropriate vaccinations, and proper documentation.
              </p>
            </div>

            {/* Arrow 2 */}
            <div className="hidden lg:flex w-10 h-10 rounded-full bg-[#FFC501] items-center justify-center z-10 -mx-5 flex-shrink-0">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </div>

            {/* Step 3 */}
            <div className="w-[356px] h-[356px] border border-[#C8C8C8] rounded-xl p-8 flex flex-col items-center text-center justify-center">
              <div className="h-[90px] flex items-center justify-center mb-6">
                <img src="/images/PetHome.png" alt="Get Your Pet Home" className="h-full object-contain" />
              </div>
              <h3 className="text-black text-[20px] font-bold mb-4">Get Your Pet Home</h3>
              <p className="text-[#4A5565] text-[14px] leading-relaxed">
                Your new family member is transported with comfort and care through secure travel arrangements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Waiting Section */}
      <section className="w-full bg-[#F6F5F2] flex items-center justify-center overflow-visible relative" style={{ height: "510px" }}>
        <div className="max-w-[1440px] mx-auto w-full px-4 sm:px-6 lg:px-12 flex justify-between items-center h-full relative">
          
          {/* Text Content */}
          <div className="flex flex-col z-10 w-full md:w-1/2">
            <h2 className="text-black leading-tight mb-6" style={{ fontSize: "36px", fontFamily: "var(--font-public-sans), 'Public Sans', sans-serif", fontWeight: 400 }}>
              Your New Best Friend<br />
              Is <span className="text-[#FFC501]">Waiting</span>
            </h2>
            <p className="text-[#4A5565] mb-10" style={{ fontSize: "18px" }}>
              Bring home love, joy, and companionship today.
            </p>
            
            <div className="flex items-center gap-3">
              <button className="bg-black text-white rounded-full flex items-center justify-center transition-all hover:bg-gray-800" style={{ width: "184px", height: "47px", fontSize: "15px", fontFamily: "var(--font-work-sans), 'Work Sans', sans-serif" }}>
                Browse Available Pets
              </button>
              <button className="bg-black text-white rounded-full flex items-center justify-center transition-all hover:bg-gray-800" style={{ width: "47px", height: "47px" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="absolute right-0 bottom-0 lg:right-12 flex items-end justify-center pointer-events-none z-0">
            <img src="/images/waiting.png" alt="Waiting Dog" className="object-cover" style={{ width: "420px", height: "485px" }} />
          </div>

        </div>
      </section>

    </div>
  );
}
