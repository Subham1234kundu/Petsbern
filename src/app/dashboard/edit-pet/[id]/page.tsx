"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { uploadImage, apiGet } from "@/utils/api";

const BREED_GROUPS = [
  "Herding (Pastoral) Group",
  "Hound Group",
  "Sporting (Gun Dog) Group",
  "Terrier Group",
  "Toy Group",
  "Working Group",
  "Non-Sporting (Utility) Group",
];

const EMPTY_FORM = {
  name: "",
  breed: "",
  category: "Dog",
  description: "",
  gender: "Male",
  vaccinated: "Yes",
  shedding: "Yes",
  age: "",
  weight: "",
  coat_length: "Medium",
  grooming: "Moderate",
  apartment_size: "Apartment Friendly",
  location: "",
  exercise: "",
  color: "",
  apartment_friendly: 60,
  family_friendly: 60,
  kid_friendly: 60,
  guard_dog: 60,
  intelligent: 60,
  easy_to_train: 60,
  active_energetic: 60,
  calm: 60,
  sociable: 60,
  hypoallergenic: 60,
  low_shedding: 60,
  breed_groups: [] as string[],
};

export default function EditPetPage() {
  const params = useParams();
  const router = useRouter();
  const petId = params.id as string;

  const [loadingPet, setLoadingPet] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [listingType, setListingType] = useState<"pet" | "breed">("pet");
  const [formData, setFormData] = useState(EMPTY_FORM);

  const [mainImageFile, setMainImageFile] = useState<File | null>(null);
  const [mainImagePreview, setMainImagePreview] = useState("");
  const [existingMainImage, setExistingMainImage] = useState("");
  const [galleryImageFiles, setGalleryImageFiles] = useState<File[]>([]);
  const [galleryImagePreviews, setGalleryImagePreviews] = useState<string[]>([]);
  const [existingGallery, setExistingGallery] = useState<string[]>([]);

  useEffect(() => {
    const loadPet = async () => {
      try {
        const pet = await apiGet<any>(`/api/pets/${petId}`);
        if (!pet || pet.error) {
          setErrorMsg("Pet not found.");
          setLoadingPet(false);
          return;
        }

        const isBreedProfile = !pet.name || pet.name === pet.breed;
        setListingType(isBreedProfile ? "breed" : "pet");

        setFormData({
          name: pet.name || "",
          breed: pet.breed || "",
          category: pet.category || "Dog",
          description: pet.description || "",
          gender: pet.gender || "Male",
          vaccinated: pet.vaccinated || "Yes",
          shedding: pet.shedding || "Yes",
          age: pet.age || "",
          weight: pet.weight != null ? String(pet.weight) : "",
          coat_length: pet.coat_length || "Medium",
          grooming: pet.grooming || "Moderate",
          apartment_size: pet.apartment_size || "Apartment Friendly",
          location: pet.location || "",
          exercise: pet.exercise || "",
          color: pet.color || "",
          apartment_friendly: Number(pet.apartment_friendly) || 60,
          family_friendly: Number(pet.family_friendly) || 60,
          kid_friendly: Number(pet.kid_friendly) || 60,
          guard_dog: Number(pet.guard_dog) || 60,
          intelligent: Number(pet.intelligent) || 60,
          easy_to_train: Number(pet.easy_to_train) || 60,
          active_energetic: Number(pet.active_energetic) || 60,
          calm: Number(pet.calm) || 60,
          sociable: Number(pet.sociable) || 60,
          hypoallergenic: Number(pet.hypoallergenic) || 60,
          low_shedding: Number(pet.low_shedding) || 60,
          breed_groups: Array.isArray(pet.breed_groups) ? pet.breed_groups : [],
        });

        if (pet.main_image) {
          setExistingMainImage(pet.main_image);
          setMainImagePreview(pet.main_image);
        }
        if (Array.isArray(pet.gallery) && pet.gallery.length > 0) {
          setExistingGallery(pet.gallery);
          setGalleryImagePreviews(pet.gallery);
        }
      } catch (err: any) {
        setErrorMsg(err.message || "Failed to load pet.");
      }
      setLoadingPet(false);
    };

    if (petId) loadPet();
  }, [petId]);

  const handleGroupToggle = (groupName: string) => {
    setFormData((prev) => {
      const current = prev.breed_groups || [];
      const updated = current.includes(groupName)
        ? current.filter((g) => g !== groupName)
        : [...current, groupName];
      return { ...prev, breed_groups: updated };
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setSuccessMsg("");
    setErrorMsg("");

    if (!mainImageFile && !existingMainImage) {
      setErrorMsg("Please select a main image.");
      setIsLoading(false);
      return;
    }

    try {
      const nameValue = listingType === "breed" ? "" : formData.name.trim();

      // Unique check — exclude current pet
      const existingPets = await apiGet<any[]>(
        `/api/pets?nameExact=${encodeURIComponent(nameValue)}&breedExact=${encodeURIComponent(formData.breed)}`
      );
      const conflict = (existingPets || []).find((p) => p.id !== petId);
      if (conflict) {
        setErrorMsg(
          listingType === "breed"
            ? `Cannot update: another breed profile for "${formData.breed}" already exists!`
            : `Cannot update: another listing with breed "${formData.breed}" and name "${nameValue || "(No Name)"}" already exists!`
        );
        setIsLoading(false);
        return;
      }

      let mainImageUrl = existingMainImage;
      if (mainImageFile) {
        mainImageUrl = await uploadImage(mainImageFile);
      }

      // Keep existing gallery URLs that weren't removed, plus new uploads
      const keptExisting = existingGallery.filter((url) =>
        galleryImagePreviews.includes(url)
      );
      const newGalleryUrls: string[] = [];
      for (const file of galleryImageFiles) {
        newGalleryUrls.push(await uploadImage(file));
      }
      const galleryUrls =
        listingType === "breed" ? [...keptExisting, ...newGalleryUrls] : [];

      const payload = {
        name: nameValue,
        breed: formData.breed,
        category: formData.category,
        description: formData.description,
        gender: formData.gender,
        vaccinated: formData.vaccinated,
        shedding: formData.shedding,
        age: formData.age,
        weight: parseFloat(formData.weight) || 0,
        location: formData.location,
        exercise: formData.exercise,
        color: formData.color,
        coat_length: formData.coat_length,
        grooming: formData.grooming,
        apartment_size: formData.apartment_size,
        apartment_friendly: Number(formData.apartment_friendly) || 0,
        family_friendly: Number(formData.family_friendly) || 0,
        kid_friendly: Number(formData.kid_friendly) || 0,
        guard_dog: Number(formData.guard_dog) || 0,
        intelligent: Number(formData.intelligent) || 0,
        easy_to_train: Number(formData.easy_to_train) || 0,
        active_energetic: Number(formData.active_energetic) || 0,
        calm: Number(formData.calm) || 0,
        sociable: Number(formData.sociable) || 0,
        hypoallergenic: Number(formData.hypoallergenic) || 0,
        low_shedding: Number(formData.low_shedding) || 0,
        main_image: mainImageUrl,
        gallery: galleryUrls,
        breed_groups: formData.category === "Dog" ? formData.breed_groups : [],
      };

      const res = await fetch(`/api/pets/${petId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.error || "Failed to update pet.");
      }

      setSuccessMsg(`Successfully updated ${nameValue || formData.breed}!`);
      setExistingMainImage(mainImageUrl);
      setMainImageFile(null);
      setExistingGallery(galleryUrls);
      setGalleryImageFiles([]);
      setGalleryImagePreviews(galleryUrls);

      setTimeout(() => {
        router.push("/dashboard");
        router.refresh();
      }, 900);
    } catch (error: any) {
      console.error("Error updating pet:", error);
      setErrorMsg(error.message || "Failed to update pet. Please try again.");
    }
    setIsLoading(false);
  };

  if (loadingPet) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <div className="w-10 h-10 border-4 border-[#FFC501] border-t-transparent rounded-full animate-spin" />
          <p className="text-sm text-gray-500">Loading pet…</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-8 pb-20 px-4 sm:px-6 lg:px-12">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-10">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4 mb-8 border-b border-gray-100 pb-6">
          <div>
            <h1 className="text-3xl font-black text-[#111111] uppercase tracking-tight">
              Edit Pet
            </h1>
            <p className="text-gray-500 mt-1">
              Update this listing and save your changes.
            </p>
          </div>
          <Link
            href="/dashboard"
            className="text-sm font-bold text-gray-500 hover:text-black transition-colors"
          >
            ← Back to Dashboard
          </Link>
        </div>

        {successMsg && (
          <div className="mb-8 p-4 bg-green-50 border border-green-200 text-green-800 rounded-lg flex items-center gap-3">
            <span className="font-medium">{successMsg}</span>
          </div>
        )}

        {errorMsg && (
          <div className="mb-8 p-4 bg-red-50 border border-red-200 text-red-800 rounded-lg flex items-center gap-3">
            <span className="font-medium">{errorMsg}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-10">
          <div className="mb-6 p-1.5 bg-gray-100/70 border border-gray-200/50 rounded-xl flex gap-3 max-w-md">
            <button
              type="button"
              onClick={() => setListingType("pet")}
              className={`flex-1 py-3 px-4 text-center rounded-lg font-bold text-xs uppercase tracking-wider transition-all ${
                listingType === "pet"
                  ? "bg-black text-white shadow-sm"
                  : "text-gray-500 hover:text-black hover:bg-gray-200/50"
              }`}
            >
              Individual Pet
            </button>
            <button
              type="button"
              onClick={() => {
                setListingType("breed");
                setFormData((prev) => ({ ...prev, name: "" }));
              }}
              className={`flex-1 py-3 px-4 text-center rounded-lg font-bold text-xs uppercase tracking-wider transition-all ${
                listingType === "breed"
                  ? "bg-black text-white shadow-sm"
                  : "text-gray-500 hover:text-black hover:bg-gray-200/50"
              }`}
            >
              Breed Profile
            </button>
          </div>

          <section>
            <h2 className="text-sm font-bold uppercase tracking-wider text-[#FFC501] mb-4">
              1. Basic Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                {listingType === "pet" ? (
                  <>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Pet Name *
                    </label>
                    <input
                      required
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFC501] focus:bg-white transition-all"
                    />
                  </>
                ) : (
                  <>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Listing type
                    </label>
                    <div className="w-full px-4 py-3 bg-blue-50 border border-blue-100 rounded-lg text-sm font-semibold text-blue-700">
                      Breed Profile (no pet name)
                    </div>
                  </>
                )}
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Breed *</label>
                <input
                  required
                  type="text"
                  name="breed"
                  value={formData.breed}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFC501] focus:bg-white transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Category *</label>
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

              {formData.category === "Dog" && (
                <div className="md:col-span-3 bg-yellow-50/40 border border-yellow-100 rounded-xl p-5 mt-2">
                  <label className="block text-sm font-bold text-gray-800 mb-3">
                    Dog Breed Groups
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                    {BREED_GROUPS.map((group) => {
                      const isChecked = formData.breed_groups?.includes(group);
                      return (
                        <button
                          key={group}
                          type="button"
                          onClick={() => handleGroupToggle(group)}
                          className={`flex items-center gap-3 p-3 rounded-lg border text-left text-xs font-semibold transition-all select-none ${
                            isChecked
                              ? "bg-yellow-50 border-[#FFC501] text-yellow-900 shadow-sm"
                              : "bg-white border-gray-200 text-gray-600 hover:bg-gray-50"
                          }`}
                        >
                          <div
                            className={`w-4 h-4 rounded flex items-center justify-center border ${
                              isChecked
                                ? "bg-[#FFC501] border-[#FFC501] text-white"
                                : "border-gray-300 bg-white"
                            }`}
                          >
                            {isChecked && (
                              <svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 20 20">
                                <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                              </svg>
                            )}
                          </div>
                          <span>{group}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              <div className="md:col-span-3">
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Detailed Description
                </label>
                <textarea
                  rows={4}
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFC501] focus:bg-white transition-all resize-none"
                />
              </div>
            </div>
          </section>

          <hr className="border-gray-100" />

          <section>
            <h2 className="text-sm font-bold uppercase tracking-wider text-[#5B92BD] mb-4">
              2. Physical & Health Details
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Gender</label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5B92BD] focus:bg-white transition-all appearance-none"
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Male & Female">Male & Female (Litter)</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Age</label>
                <input
                  type="text"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5B92BD] focus:bg-white transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Weight (kg)</label>
                <input
                  type="number"
                  step="0.1"
                  name="weight"
                  value={formData.weight}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5B92BD] focus:bg-white transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Color</label>
                <input
                  type="text"
                  name="color"
                  value={formData.color}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5B92BD] focus:bg-white transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Vaccinated?</label>
                <select
                  name="vaccinated"
                  value={formData.vaccinated}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5B92BD] focus:bg-white transition-all appearance-none"
                >
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                  <option value="Partial">Partial</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Shedding?</label>
                <select
                  name="shedding"
                  value={formData.shedding}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5B92BD] focus:bg-white transition-all appearance-none"
                >
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                  <option value="Minimal">Minimal</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Coat Length *</label>
                <select
                  name="coat_length"
                  value={formData.coat_length}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5B92BD] focus:bg-white transition-all appearance-none"
                >
                  <option value="Short">Short</option>
                  <option value="Medium">Medium</option>
                  <option value="Long">Long</option>
                  <option value="Curly/Wire">Curly / Wire</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Grooming Needs *</label>
                <select
                  name="grooming"
                  value={formData.grooming}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5B92BD] focus:bg-white transition-all appearance-none"
                >
                  <option value="Low">Low (Minimal Care)</option>
                  <option value="Moderate">Moderate (Regular Brushing)</option>
                  <option value="High">High (Professional Grooming)</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Apartment Suitability *
                </label>
                <select
                  name="apartment_size"
                  value={formData.apartment_size}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5B92BD] focus:bg-white transition-all appearance-none"
                >
                  <option value="Apartment Friendly">Apartment Friendly</option>
                  <option value="Requires Yard">Requires Small/Medium Yard</option>
                  <option value="Large Yard">Requires Large Yard / Farm</option>
                </select>
              </div>
            </div>
          </section>

          <hr className="border-gray-100" />

          <section>
            <h2 className="text-sm font-bold uppercase tracking-wider text-[#FFC107] mb-4">
              3. Care & Logistics
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Daily Exercise Needs
                </label>
                <input
                  type="text"
                  name="exercise"
                  value={formData.exercise}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFC107] focus:bg-white transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Location / Availability
                </label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFC107] focus:bg-white transition-all"
                />
              </div>
            </div>
          </section>

          <hr className="border-gray-100" />

          <section>
            <h2 className="text-sm font-bold uppercase tracking-wider text-[#91C79B] mb-4">
              4. Personality Highlights
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { label: "Apartment Friendly", name: "apartment_friendly" },
                { label: "Family Friendly", name: "family_friendly" },
                { label: "Kid Friendly", name: "kid_friendly" },
                { label: "Guard Dog", name: "guard_dog" },
                { label: "Intelligent", name: "intelligent" },
                { label: "Easy to Train", name: "easy_to_train" },
                { label: "Active / Energetic", name: "active_energetic" },
                { label: "Calm", name: "calm" },
                { label: "Sociable", name: "sociable" },
                { label: "Hypoallergenic", name: "hypoallergenic" },
                { label: "Low Shedding", name: "low_shedding" },
              ].map((trait) => (
                <div key={trait.name}>
                  <div className="flex justify-between items-center mb-2">
                    <label className="block text-sm font-bold text-gray-700">
                      {trait.label}
                    </label>
                    <span className="text-sm font-medium text-gray-500">
                      {(formData as any)[trait.name]}%
                    </span>
                  </div>
                  <input
                    type="range"
                    name={trait.name}
                    min="0"
                    max="100"
                    value={(formData as any)[trait.name]}
                    onChange={handleChange}
                    className="w-full accent-[#FFC501]"
                  />
                </div>
              ))}
            </div>
          </section>

          <hr className="border-gray-100" />

          <section>
            <h2 className="text-sm font-bold uppercase tracking-wider text-black mb-4">
              5. Media
            </h2>
            <div className="grid grid-cols-1 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Main Image {existingMainImage ? "(optional replace)" : "*"}
                </label>
                <div
                  className="relative border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:bg-gray-50 transition-colors cursor-pointer"
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={(e) => {
                    e.preventDefault();
                    if (e.dataTransfer.files?.[0]) {
                      const file = e.dataTransfer.files[0];
                      setMainImageFile(file);
                      setMainImagePreview(URL.createObjectURL(file));
                    }
                  }}
                  onClick={() => document.getElementById("editMainImageInput")?.click()}
                >
                  <input
                    id="editMainImageInput"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => {
                      if (e.target.files?.[0]) {
                        const file = e.target.files[0];
                        setMainImageFile(file);
                        setMainImagePreview(URL.createObjectURL(file));
                      }
                    }}
                  />
                  {mainImagePreview ? (
                    <div className="flex flex-col items-center">
                      <img
                        src={mainImagePreview}
                        alt="Main Preview"
                        className="h-40 w-auto object-contain rounded-lg shadow-sm"
                      />
                      <p className="mt-4 text-sm text-gray-500">
                        Click or drag to replace image
                      </p>
                    </div>
                  ) : (
                    <p className="text-sm text-gray-400 py-6">Upload a main image</p>
                  )}
                </div>
              </div>

              {listingType === "breed" && (
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Gallery Images
                  </label>
                  <div
                    className="relative border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:bg-gray-50 transition-colors cursor-pointer"
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={(e) => {
                      e.preventDefault();
                      if (e.dataTransfer.files?.length) {
                        const files = Array.from(e.dataTransfer.files);
                        setGalleryImageFiles((prev) => [...prev, ...files]);
                        setGalleryImagePreviews((prev) => [
                          ...prev,
                          ...files.map((f) => URL.createObjectURL(f)),
                        ]);
                      }
                    }}
                    onClick={() => document.getElementById("editGalleryInput")?.click()}
                  >
                    <input
                      id="editGalleryInput"
                      type="file"
                      accept="image/*"
                      multiple
                      className="hidden"
                      onChange={(e) => {
                        if (e.target.files?.length) {
                          const files = Array.from(e.target.files);
                          setGalleryImageFiles((prev) => [...prev, ...files]);
                          setGalleryImagePreviews((prev) => [
                            ...prev,
                            ...files.map((f) => URL.createObjectURL(f)),
                          ]);
                        }
                      }}
                    />
                    <p className="text-sm text-gray-400">
                      Click or drag to add more gallery images
                    </p>
                  </div>

                  {galleryImagePreviews.length > 0 && (
                    <div className="mt-4 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
                      {galleryImagePreviews.map((preview, index) => (
                        <div key={`${preview}-${index}`} className="relative group">
                          <img
                            src={preview}
                            alt={`Gallery ${index}`}
                            className="h-24 w-full object-cover rounded-lg shadow-sm"
                          />
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              const removed = galleryImagePreviews[index];
                              setGalleryImagePreviews((prev) =>
                                prev.filter((_, i) => i !== index)
                              );
                              if (removed.startsWith("blob:")) {
                                let blobIdx = -1;
                                for (let i = 0; i <= index; i++) {
                                  if (galleryImagePreviews[i]?.startsWith("blob:")) blobIdx++;
                                }
                                setGalleryImageFiles((prev) =>
                                  prev.filter((_, i) => i !== blobIdx)
                                );
                              } else {
                                setExistingGallery((prev) =>
                                  prev.filter((u) => u !== removed)
                                );
                              }
                            }}
                            className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-md"
                          >
                            &times;
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          </section>

          <div className="pt-6 border-t border-gray-200 flex flex-col sm:flex-row justify-end gap-3">
            <Link
              href="/dashboard"
              className="text-center bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold py-4 px-8 rounded-xl transition-all uppercase tracking-wider text-sm"
            >
              Cancel
            </Link>
            <button
              type="submit"
              disabled={isLoading}
              className="bg-[#111111] hover:bg-[#333333] text-white font-bold py-4 px-10 rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-xl uppercase tracking-wider"
            >
              {isLoading ? "Saving Changes…" : "Save Changes"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
