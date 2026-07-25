"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { apiGet } from '@/utils/api';

type Pet = {
  id: string;
  name: string;
  category: string;
  description?: string;
  gender?: string;
  age?: string;
  weight?: number;
  color?: string;
  location?: string;
  main_image?: string;
  vaccinated?: string;
  created_at?: string;
  breed?: string;
};

const CATEGORIES = ['Dog', 'Cat', 'Exotic'] as const;
type Category = typeof CATEGORIES[number];

const CATEGORY_CONFIG: Record<Category, { icon: string; color: string; bg: string; border: string; glow: string }> = {
  Dog: { icon: '🐕', color: '#FFC501', bg: 'rgba(255,197,1,0.08)', border: 'rgba(255,197,1,0.3)', glow: '0 0 20px rgba(255,197,1,0.15)' },
  Cat: { icon: '🐈', color: '#5B92BD', bg: 'rgba(91,146,189,0.08)', border: 'rgba(91,146,189,0.3)', glow: '0 0 20px rgba(91,146,189,0.15)' },
  Exotic: { icon: '🦜', color: '#91C79B', bg: 'rgba(145,199,155,0.08)', border: 'rgba(145,199,155,0.3)', glow: '0 0 20px rgba(145,199,155,0.15)' },
};

export default function SellerDashboard() {
  const [activeCategory, setActiveCategory] = useState<Category>('Dog');
  const [pets, setPets] = useState<Pet[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [counts, setCounts] = useState<Record<Category, number>>({ Dog: 0, Cat: 0, Exotic: 0 });
  const [errorMsg, setErrorMsg] = useState<string>('');

  // Fetch pets for active category
  useEffect(() => {
    setIsLoading(true);
    setErrorMsg('');

    const fetchPets = async () => {
      try {
        const data = await apiGet<Pet[]>(`/api/pets?category=${encodeURIComponent(activeCategory)}&sort=desc`);
        setPets(data);
      } catch (err: any) {
        console.error('Fetch pets error:', err);
        setErrorMsg(err.message || String(err));
      }
      setIsLoading(false);
    };

    fetchPets();
  }, [activeCategory]);

  // Fetch counts for all categories
  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const results: Record<string, number> = {};
        for (const cat of CATEGORIES) {
          const { count } = await apiGet<{ count: number }>(`/api/pets?category=${encodeURIComponent(cat)}&count=1`);
          results[cat] = count ?? 0;
        }
        setCounts(results as Record<Category, number>);
      } catch (err: any) {
        console.error('Fetch counts error:', err);
        setErrorMsg(err.message || String(err));
      }
    };
    fetchCounts();
  }, []);

  const handleDelete = async (id: string) => {
    try {
      const res = await fetch(`/api/pets/${id}`, { method: 'DELETE' });
      if (!res.ok) throw new Error('Delete failed');
      setPets((prev) => prev.filter((p) => p.id !== id));
      setCounts((prev) => ({ ...prev, [activeCategory]: Math.max(0, prev[activeCategory] - 1) }));
    } catch (err) {
      console.error('Delete error:', err);
    }
  };

  const cfg = CATEGORY_CONFIG[activeCategory];

  return (
    <div className="min-h-screen bg-gray-50 pt-4 pb-20 px-4 sm:px-6 lg:px-12">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-black text-[#111] uppercase tracking-tight">Seller Dashboard</h1>
            <p className="text-gray-500 mt-1">Browse and manage your pet listings in real-time.</p>
          </div>
        </div>

        {/* Error Banner */}
        {errorMsg && (
          <div className="mb-8 p-5 bg-red-50 border border-red-200 rounded-2xl shadow-sm flex items-start justify-between gap-4">
            <div className="flex gap-3 items-start">
              <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center text-xl border border-red-500/20 shrink-0">
                ⚠️
              </div>
              <div>
                <h3 className="text-base font-black text-[#111] uppercase tracking-tight">
                  Something went wrong
                </h3>
                <p className="text-sm font-semibold text-red-600 mt-1 break-words">
                  {errorMsg}
                </p>
                <p className="mt-2 text-xs text-gray-500 leading-relaxed max-w-2xl">
                  Please check your connection to the database and try again.
                </p>
              </div>
            </div>
            <button
              onClick={() => setErrorMsg('')}
              className="text-gray-400 hover:text-gray-600 font-bold uppercase text-[10px] tracking-wider px-3 py-1.5 rounded-lg border border-gray-200 hover:bg-gray-50 transition-all cursor-pointer shrink-0"
            >
              Dismiss
            </button>
          </div>
        )}

        {/* Category Tabs */}
        <div className="flex gap-3 mb-8">
          {CATEGORIES.map((cat) => {
            const c = CATEGORY_CONFIG[cat];
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="relative flex-1 py-4 rounded-xl font-bold text-sm uppercase tracking-wider transition-all duration-300"
                style={{
                  background: isActive ? c.bg : '#fff',
                  border: `2px solid ${isActive ? c.color : '#e5e7eb'}`,
                  color: isActive ? c.color : '#9ca3af',
                  boxShadow: isActive ? c.glow : 'none',
                  transform: isActive ? 'translateY(-2px)' : 'none',
                }}
              >
                <span className="text-xl block mb-1">{c.icon}</span>
                {cat}
                <span
                  className="ml-2 text-[10px] px-2 py-0.5 rounded-full inline-block"
                  style={{ background: isActive ? c.color : '#e5e7eb', color: isActive ? '#fff' : '#6b7280' }}
                >
                  {counts[cat]}
                </span>
              </button>
            );
          })}
        </div>

        {/* Category Indicator */}
        <div className="flex items-center gap-2 mb-4">
          <span className="w-2 h-2 rounded-full" style={{ background: cfg.color }} />
          <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: cfg.color }}>
            {activeCategory}s
          </span>
        </div>

        {/* Pet Grid */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 min-h-[400px]">
          {isLoading ? (
            <div className="flex flex-col items-center justify-center h-[300px] gap-3">
              <div className="w-8 h-8 border-3 rounded-full animate-spin" style={{ borderColor: `${cfg.color} transparent ${cfg.color} transparent` }} />
              <p className="text-sm text-gray-400">Loading {activeCategory}s…</p>
            </div>
          ) : pets.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-[300px] text-gray-400">
              <span className="text-5xl mb-4">{cfg.icon}</span>
              <p className="font-semibold">No {activeCategory}s listed yet</p>
              <p className="text-xs mt-1">Add one from the &quot;Add Pet&quot; page.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {pets.map((pet) => (
                <div
                  key={pet.id}
                  className="group rounded-xl border overflow-hidden transition-all duration-300 hover:shadow-lg"
                  style={{ borderColor: cfg.border }}
                >
                  {/* Image */}
                  <div className="relative h-44 bg-gray-100 overflow-hidden">
                    {pet.main_image ? (
                      <img src={pet.main_image} alt={pet.name || pet.breed} referrerPolicy="no-referrer" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    ) : (
                      <div className="flex items-center justify-center h-full text-4xl text-gray-300">{cfg.icon}</div>
                    )}
                    <span className="absolute top-2 left-2 text-[10px] font-bold uppercase px-2 py-1 rounded-md" style={{ background: cfg.color, color: '#fff' }}>
                      {pet.category}
                    </span>
                  </div>

                  {/* Info */}
                  <div className="p-4">
                    <h3 className="font-bold text-[#111] text-sm truncate">
                      {pet.name || `${pet.breed} (Breed Profile)`}
                    </h3>
                    <div className="flex flex-wrap gap-2 mt-2 text-[11px] text-gray-500">
                      {!pet.name && (
                        <span className="bg-blue-50 text-blue-600 border border-blue-100 px-2 py-0.5 rounded font-bold uppercase tracking-wider text-[9px]">
                          Breed Profile
                        </span>
                      )}
                      {pet.gender && <span className="bg-gray-50 px-2 py-0.5 rounded">{pet.gender}</span>}
                      {pet.age && <span className="bg-gray-50 px-2 py-0.5 rounded">{pet.age}</span>}
                      {pet.color && <span className="bg-gray-50 px-2 py-0.5 rounded">{pet.color}</span>}
                    </div>
                    {pet.location && <p className="text-[11px] text-gray-400 mt-2">📍 {pet.location}</p>}

                    <div className="mt-3 flex gap-2 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-all">
                      <Link
                        href={`/dashboard/edit-pet/${pet.id}`}
                        className="flex-1 text-center text-[11px] font-bold uppercase tracking-wider py-2 rounded-lg border border-[#FFC501]/60 text-[#7B5800] bg-[#FFF8E1] hover:bg-[#FFC501]/20 transition-all"
                      >
                        Edit
                      </Link>
                      <button
                        onClick={() => handleDelete(pet.id)}
                        className="flex-1 text-[11px] font-bold uppercase tracking-wider py-2 rounded-lg border border-red-200 text-red-400 hover:bg-red-50 hover:text-red-600 transition-all"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
