"use client";

import { useState, useEffect } from 'react';
import { supabase } from '@/utils/supabase';

export default function SellerDashboard() {
  const [breeds, setBreeds] = useState<{ id: number, name: string }[]>([]);
  const [newBreed, setNewBreed] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    // Initial fetch
    const fetchBreeds = async () => {
      const { data, error } = await supabase
        .from('breeds')
        .select('*')
        .order('id', { ascending: true });
        
      if (error) {
        console.error("Error fetching breeds:", error);
      } else {
        setBreeds(data || []);
      }
    };

    fetchBreeds();

    // Set up real-time subscription
    const channel = supabase
      .channel('schema-db-changes')
      .on(
        'postgres_changes',
        {
          event: '*', // Listen to INSERT, UPDATE, DELETE
          schema: 'public',
          table: 'breeds',
        },
        (payload) => {
          console.log('Real-time change received:', payload);
          if (payload.eventType === 'INSERT') {
            setBreeds((prev) => [...prev, payload.new as { id: number, name: string }]);
          } else if (payload.eventType === 'DELETE') {
            setBreeds((prev) => prev.filter(breed => breed.id !== payload.old.id));
          } else if (payload.eventType === 'UPDATE') {
            setBreeds((prev) => prev.map(breed => breed.id === payload.new.id ? payload.new as { id: number, name: string } : breed));
          }
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const handleAddBreed = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newBreed.trim()) return;
    
    setIsLoading(true);
    setError('');

    const { data, error } = await supabase
      .from('breeds')
      .insert([{ name: newBreed.trim() }])
      .select();

    if (error) {
      console.error("Error adding breed:", error);
      setError(error.message);
    } else {
      setNewBreed('');
    }
    
    setIsLoading(false);
  };

  const handleDelete = async (id: number) => {
    const { error } = await supabase
      .from('breeds')
      .delete()
      .eq('id', id);
      
    if (error) {
      console.error("Error deleting breed:", error);
      setError("Failed to delete breed.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-4 pb-20 px-4 sm:px-6 lg:px-12">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-10">
        <h1 className="text-3xl font-black mb-2 text-[#111111] uppercase tracking-tight">Seller Dashboard</h1>
        <p className="text-gray-500 mb-8">Manage pet breeds dynamically in real-time.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Add Breed Form */}
          <div>
            <h2 className="text-lg font-bold mb-4 uppercase tracking-wide text-[#FFC501]">Add New Breed</h2>
            
            <form onSubmit={handleAddBreed} className="flex flex-col gap-4">
              <div>
                <label htmlFor="breedName" className="block text-sm font-medium text-gray-700 mb-1">Breed Name</label>
                <input
                  type="text"
                  id="breedName"
                  value={newBreed}
                  onChange={(e) => setNewBreed(e.target.value)}
                  placeholder="e.g. Golden Retriever"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FFC501] focus:border-transparent transition-all"
                  disabled={isLoading}
                />
              </div>
              
              {error && <p className="text-red-500 text-sm">{error}</p>}
              
              <button
                type="submit"
                disabled={isLoading || !newBreed.trim()}
                className="bg-[#111111] hover:bg-[#333333] text-white font-bold py-3 px-6 rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed mt-2 uppercase tracking-wide text-sm"
              >
                {isLoading ? 'Adding...' : 'Add Breed'}
              </button>
            </form>
          </div>

          {/* Live Breeds List */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold uppercase tracking-wide text-[#5B92BD]">Live Breeds List</h2>
              <div className="flex items-center gap-2 text-[10px] font-bold text-green-600 bg-green-50 px-3 py-1 rounded-full border border-green-200">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                REAL-TIME SYNC
              </div>
            </div>
            
            <div className="bg-gray-50 border border-gray-200 rounded-xl overflow-hidden h-[300px] flex flex-col">
              <div className="overflow-y-auto flex-grow p-4 custom-scrollbar">
                {breeds.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-full text-gray-400 italic">
                    <p>No breeds added yet.</p>
                    <p className="text-xs mt-1">Add one from the panel.</p>
                  </div>
                ) : (
                  <ul className="space-y-2">
                    {breeds.map((breed) => (
                      <li 
                        key={breed.id} 
                        className="bg-white px-4 py-3 rounded-lg border border-gray-100 shadow-sm flex items-center justify-between group transition-all hover:border-[#5B92BD]"
                      >
                        <span className="font-medium text-gray-800 text-sm">{breed.name}</span>
                        <button 
                          onClick={() => handleDelete(breed.id)}
                          className="text-gray-400 hover:text-[#E2001A] opacity-0 group-hover:opacity-100 transition-opacity"
                          title="Delete Breed"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
        
        {/* Setup Instructions Card (for the user) */}
        <div className="mt-12 bg-blue-50 border border-blue-100 rounded-xl p-6">
          <h3 className="text-blue-800 font-bold mb-2 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            Supabase Setup Required
          </h3>
          <ol className="list-decimal list-inside text-sm text-blue-900 space-y-2 mt-3">
            <li>Create a Supabase project at <a href="https://supabase.com" target="_blank" className="underline font-bold">supabase.com</a></li>
            <li>In the SQL Editor, run: <code className="bg-white px-2 py-0.5 rounded text-xs font-mono text-[#E2001A] border border-gray-200">CREATE TABLE breeds (id SERIAL PRIMARY KEY, name TEXT NOT NULL);</code></li>
            <li>In Database &rarr; Replication, enable <strong>Realtime</strong> for the <code className="bg-white px-1 py-0.5 rounded text-xs font-mono border border-gray-200">breeds</code> table.</li>
            <li>Create a <code className="bg-white px-1 py-0.5 rounded text-xs font-mono border border-gray-200">.env.local</code> file in the root of your project.</li>
            <li>Add <code className="bg-white px-1 py-0.5 rounded text-xs font-mono border border-gray-200">NEXT_PUBLIC_SUPABASE_URL=your_url</code> and <code className="bg-white px-1 py-0.5 rounded text-xs font-mono border border-gray-200">NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key</code>.</li>
            <li>Set appropriate Row Level Security (RLS) policies to allow inserts and selects!</li>
          </ol>
        </div>
      </div>
    </div>
  );
}
