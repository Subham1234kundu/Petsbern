"use client";

import { useState, useEffect } from 'react';
import { supabase } from '@/utils/supabase';

type Pet = {
  id: number;
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
      const { data, error } = await supabase
        .from('pets')
        .select('*')
        .eq('category', activeCategory)
        .order('id', { ascending: false });

      if (error) {
        console.error('Fetch pets error:', error);
        setErrorMsg(error.message || String(error));
      } else if (data) {
        setPets(data);
      }
      setIsLoading(false);
    };

    fetchPets();

    // Real-time subscription filtered by category
    const channel = supabase
      .channel(`pets-${activeCategory}`)
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'pets', filter: `category=eq.${activeCategory}` },
        (payload) => {
          if (payload.eventType === 'INSERT') {
            setPets((prev) => [payload.new as Pet, ...prev]);
            setCounts((prev) => ({ ...prev, [activeCategory]: prev[activeCategory] + 1 }));
          } else if (payload.eventType === 'DELETE') {
            setPets((prev) => prev.filter((p) => p.id !== payload.old.id));
            setCounts((prev) => ({ ...prev, [activeCategory]: Math.max(0, prev[activeCategory] - 1) }));
          } else if (payload.eventType === 'UPDATE') {
            setPets((prev) => prev.map((p) => (p.id === (payload.new as Pet).id ? (payload.new as Pet) : p)));
          }
        }
      )
      .subscribe();

    return () => { supabase.removeChannel(channel); };
  }, [activeCategory]);

  // Fetch counts for all categories
  useEffect(() => {
    const fetchCounts = async () => {
      const results: Record<string, number> = {};
      let hasError = false;
      let errorObj: any = null;

      for (const cat of CATEGORIES) {
        const { count, error } = await supabase.from('pets').select('*', { count: 'exact', head: true }).eq('category', cat);
        if (error) {
          hasError = true;
          errorObj = error;
        }
        results[cat] = count ?? 0;
      }
      
      if (!hasError) {
        setCounts(results as Record<Category, number>);
      } else {
        console.error('Fetch counts error:', errorObj);
        setErrorMsg(errorObj.message || String(errorObj));
      }
    };
    fetchCounts();
  }, []);

  const handleDelete = async (id: number) => {
    const { error } = await supabase.from('pets').delete().eq('id', id);
    if (error) console.error('Delete error:', error);
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

        {/* Database Error Banner */}
        {errorMsg && (
          <div className="mb-8 p-6 bg-red-50/90 backdrop-blur-sm border-2 border-red-500/20 rounded-2xl shadow-xl flex flex-col md:flex-row gap-5 items-start justify-between relative overflow-hidden animate-in fade-in slide-in-from-top-4 duration-300">
            <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-red-500 to-rose-600" />
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center text-2xl border border-red-500/20 shadow-inner shrink-0">
                ⚠️
              </div>
              <div>
                <h3 className="text-lg font-black text-[#111] uppercase tracking-tight flex items-center gap-2">
                  Database Schema Error
                  <span className="text-[10px] bg-red-100 text-red-700 px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">
                    PostgREST Cache
                  </span>
                </h3>
                <p className="text-sm font-semibold text-red-600 mt-1">
                  {errorMsg}
                </p>
                <div className="mt-4 p-4 bg-white/80 border border-red-200/50 rounded-xl text-xs text-gray-600 leading-relaxed max-w-2xl font-mono">
                  <p className="font-bold text-red-800 mb-1">🛠️ How to fix this in your Supabase Database:</p>
                  <ol className="list-decimal pl-4 space-y-1.5 mt-1 text-gray-700">
                    <li>Go to your <strong className="text-gray-900">Supabase SQL Editor</strong>.</li>
                    <li>Verify that the table <code className="bg-red-50 px-1 py-0.2 rounded font-bold text-red-700">pets</code> contains the column <code className="bg-red-50 px-1 py-0.2 rounded font-bold text-red-700">barking</code> of type <code className="bg-red-50 px-1 py-0.2 rounded font-bold text-red-700">numeric</code> (or integer).</li>
                    <li>If you recently added it, PostgREST might have a stale schema cache. Reload the schema cache by running:
                      <pre className="bg-[#111] text-[#fff] p-2.5 rounded-md mt-2 overflow-x-auto text-[11px] font-medium leading-normal shadow-md">
{`-- Reload the Supabase PostgREST schema cache
NOTIFY pgrst, 'reload schema';`}
                      </pre>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
            <button 
              onClick={() => setErrorMsg('')} 
              className="text-gray-400 hover:text-gray-600 font-bold uppercase text-[10px] tracking-wider px-3 py-1.5 rounded-lg border border-gray-200 hover:bg-gray-50 transition-all cursor-pointer shrink-0 mt-2 md:mt-0"
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

        {/* Live Indicator & Dev Controls */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: cfg.color }} />
            <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: cfg.color }}>
              Real-Time · {activeCategory}s
            </span>
          </div>

          <button
            onClick={() => setErrorMsg("Could not find the 'barking' column of 'pets' in the schema cache")}
            className="text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md border border-red-200 hover:bg-red-50 text-red-500 transition-all flex items-center gap-1.5 cursor-pointer shadow-sm hover:shadow active:translate-y-[0.5px]"
            title="Simulate schema cache database error to preview the premium error handling UI"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping" />
            Simulate Schema Error
          </button>
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
                      <img src={pet.main_image} alt={pet.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    ) : (
                      <div className="flex items-center justify-center h-full text-4xl text-gray-300">{cfg.icon}</div>
                    )}
                    <span className="absolute top-2 left-2 text-[10px] font-bold uppercase px-2 py-1 rounded-md" style={{ background: cfg.color, color: '#fff' }}>
                      {pet.category}
                    </span>
                  </div>

                  {/* Info */}
                  <div className="p-4">
                    <h3 className="font-bold text-[#111] text-sm truncate">{pet.name}</h3>
                    <div className="flex flex-wrap gap-2 mt-2 text-[11px] text-gray-500">
                      {pet.gender && <span className="bg-gray-50 px-2 py-0.5 rounded">{pet.gender}</span>}
                      {pet.age && <span className="bg-gray-50 px-2 py-0.5 rounded">{pet.age}</span>}
                      {pet.color && <span className="bg-gray-50 px-2 py-0.5 rounded">{pet.color}</span>}
                    </div>
                    {pet.location && <p className="text-[11px] text-gray-400 mt-2">📍 {pet.location}</p>}

                    {/* Delete */}
                    <button
                      onClick={() => handleDelete(pet.id)}
                      className="mt-3 w-full text-[11px] font-bold uppercase tracking-wider py-2 rounded-lg border border-red-200 text-red-400 opacity-0 group-hover:opacity-100 transition-all hover:bg-red-50 hover:text-red-600"
                    >
                      Remove Listing
                    </button>
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
