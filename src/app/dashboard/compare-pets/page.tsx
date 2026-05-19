"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/utils/supabase";

type ComparePet = {
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
};

const EMPTY_FORM = {
  name: "",
  category: "Dog",
  image_url: "",
  life_span: "",
  weight: "",
  temperament: "",
  origin: "",
  hypoallergenic: "No",
  description: "",
};

export default function DashboardComparePets() {
  const [formData, setFormData] = useState(EMPTY_FORM);
  const [pets, setPets] = useState<ComparePet[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState("");
  const [filterCat, setFilterCat] = useState<string>("All");

  // Fetch all compare pets
  useEffect(() => {
    const fetchPets = async () => {
      const { data } = await supabase
        .from("compare_pets")
        .select("*")
        .order("id", { ascending: false });
      if (data) setPets(data);
    };
    fetchPets();

    // Real-time
    const channel = supabase
      .channel("compare-pets-admin")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "compare_pets" },
        (payload) => {
          if (payload.eventType === "INSERT") {
            setPets((prev) => [payload.new as ComparePet, ...prev]);
          } else if (payload.eventType === "DELETE") {
            setPets((prev) => prev.filter((p) => p.id !== payload.old.id));
          } else if (payload.eventType === "UPDATE") {
            setPets((prev) =>
              prev.map((p) =>
                p.id === (payload.new as ComparePet).id
                  ? (payload.new as ComparePet)
                  : p
              )
            );
          }
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setSuccessMsg("");
    setErrorMsg("");

    try {
      let imageUrl = formData.image_url;

      // Upload image if file selected
      if (imageFile) {
        const fileExt = imageFile.name.split(".").pop();
        const fileName = `compare-${Date.now()}.${fileExt}`;
        const { error: uploadError } = await supabase.storage
          .from("pet-images")
          .upload(fileName, imageFile);

        if (uploadError) throw uploadError;

        const {
          data: { publicUrl },
        } = supabase.storage.from("pet-images").getPublicUrl(fileName);
        imageUrl = publicUrl;
      }

      const payload = { ...formData, image_url: imageUrl };

      const { error } = await supabase
        .from("compare_pets")
        .insert([payload]);
      if (error) throw error;

      setSuccessMsg(`Added "${formData.name}" to compare list!`);
      setFormData(EMPTY_FORM);
      setImageFile(null);
      setImagePreview("");
    } catch (err: any) {
      setErrorMsg(err.message || "Failed to add pet.");
    }
    setIsLoading(false);
  };

  const handleDelete = async (id: number) => {
    const { error } = await supabase
      .from("compare_pets")
      .delete()
      .eq("id", id);
    if (error) setErrorMsg("Failed to delete.");
  };

  const filteredPets =
    filterCat === "All" ? pets : pets.filter((p) => p.category === filterCat);

  return (
    <div className="min-h-screen bg-gray-50 pt-4 pb-20 px-4 sm:px-6 lg:px-12">
      <div className="max-w-5xl mx-auto">
        <div className="mb-6">
          <h1 className="text-3xl font-black text-[#111] uppercase tracking-tight">
            Compare Pets Manager
          </h1>
          <p className="text-gray-500 mt-1">
            Add pets with comparison values. Users will compare them in
            real-time.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Add Form — left 3 cols */}
          <div className="lg:col-span-3 bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <h2 className="text-sm font-bold uppercase tracking-wider text-[#FFC501] mb-5">
              Add Compare Pet
            </h2>

            {successMsg && (
              <div className="mb-4 p-3 bg-green-50 border border-green-200 text-green-800 rounded-lg text-sm font-medium">
                ✅ {successMsg}
              </div>
            )}
            {errorMsg && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-800 rounded-lg text-sm font-medium">
                ❌ {errorMsg}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">
                    Name *
                  </label>
                  <input
                    required
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Golden Retriever"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFC501] focus:bg-white transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">
                    Category *
                  </label>
                  <select
                    required
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFC501] focus:bg-white transition-all appearance-none cursor-pointer"
                  >
                    <option value="Dog">Dog</option>
                    <option value="Cat">Cat</option>
                    <option value="Exotic">Exotic</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">
                    Life Span
                  </label>
                  <input
                    type="text"
                    name="life_span"
                    value={formData.life_span}
                    onChange={handleChange}
                    placeholder="e.g. 10–12 years"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5B92BD] focus:bg-white transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">
                    Weight
                  </label>
                  <input
                    type="text"
                    name="weight"
                    value={formData.weight}
                    onChange={handleChange}
                    placeholder="e.g. 25–34 kg"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5B92BD] focus:bg-white transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">
                    Origin
                  </label>
                  <input
                    type="text"
                    name="origin"
                    value={formData.origin}
                    onChange={handleChange}
                    placeholder="e.g. Scotland"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#91C79B] focus:bg-white transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">
                    Hypoallergenic
                  </label>
                  <select
                    name="hypoallergenic"
                    value={formData.hypoallergenic}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#91C79B] focus:bg-white transition-all appearance-none cursor-pointer"
                  >
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">
                  Temperament
                </label>
                <input
                  type="text"
                  name="temperament"
                  value={formData.temperament}
                  onChange={handleChange}
                  placeholder="e.g. Friendly, Loyal, Playful"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFC501] focus:bg-white transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">
                  Description
                </label>
                <textarea
                  rows={3}
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="A brief description of the breed…"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFC501] focus:bg-white transition-all resize-none"
                />
              </div>

              {/* Image Upload */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">
                  Image
                </label>
                <div
                  className="border-2 border-dashed border-gray-300 rounded-xl p-4 text-center hover:bg-gray-50 transition-colors cursor-pointer"
                  onClick={() =>
                    document.getElementById("compareImageInput")?.click()
                  }
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={(e) => {
                    e.preventDefault();
                    if (e.dataTransfer.files?.[0]) {
                      const f = e.dataTransfer.files[0];
                      setImageFile(f);
                      setImagePreview(URL.createObjectURL(f));
                    }
                  }}
                >
                  <input
                    id="compareImageInput"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => {
                      if (e.target.files?.[0]) {
                        const f = e.target.files[0];
                        setImageFile(f);
                        setImagePreview(URL.createObjectURL(f));
                      }
                    }}
                  />
                  {imagePreview ? (
                    <img
                      src={imagePreview}
                      alt="Preview"
                      className="h-28 mx-auto object-contain rounded-lg"
                    />
                  ) : (
                    <p className="text-sm text-gray-400">
                      Click or drag an image here
                    </p>
                  )}
                </div>
                <p className="text-[10px] text-gray-400 mt-1">
                  Or paste a URL in the field below:
                </p>
                <input
                  type="text"
                  name="image_url"
                  value={formData.image_url}
                  onChange={handleChange}
                  placeholder="https://example.com/image.jpg"
                  className="w-full mt-1 px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#FFC501] focus:bg-white transition-all"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading || !formData.name.trim()}
                className="w-full bg-[#111] hover:bg-[#333] text-white font-bold py-3 px-6 rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-wider text-sm"
              >
                {isLoading ? "Adding…" : "Add to Compare List"}
              </button>
            </form>
          </div>

          {/* Live List — right 2 cols */}
          <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-sm font-bold uppercase tracking-wider text-[#5B92BD]">
                Live Entries
              </h2>
              <div className="flex items-center gap-2 text-[10px] font-bold text-green-600 bg-green-50 px-3 py-1 rounded-full border border-green-200">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                REAL-TIME
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex gap-1 mb-4">
              {["All", "Dog", "Cat", "Exotic"].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilterCat(cat)}
                  className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase transition-all ${
                    filterCat === cat
                      ? "bg-[#111] text-white"
                      : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="flex-1 overflow-y-auto max-h-[600px] space-y-2 custom-scrollbar">
              {filteredPets.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-40 text-gray-400 text-sm">
                  <p>No entries yet.</p>
                </div>
              ) : (
                filteredPets.map((pet) => (
                  <div
                    key={pet.id}
                    className="group flex items-center gap-3 p-3 bg-gray-50 rounded-xl border border-gray-100 hover:border-[#5B92BD] transition-all"
                  >
                    {pet.image_url ? (
                      <img
                        src={pet.image_url}
                        alt={pet.name}
                        className="w-10 h-10 rounded-lg object-cover shrink-0"
                      />
                    ) : (
                      <div className="w-10 h-10 rounded-lg bg-gray-200 flex items-center justify-center text-gray-400 text-lg shrink-0">
                        🐾
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <p className="font-bold text-sm text-[#111] truncate">
                        {pet.name}
                      </p>
                      <p className="text-[10px] text-gray-400">
                        {pet.category} · {pet.origin || "—"}
                      </p>
                    </div>
                    <button
                      onClick={() => handleDelete(pet.id)}
                      className="text-gray-300 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-all"
                      title="Delete"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>


      </div>
    </div>
  );
}
