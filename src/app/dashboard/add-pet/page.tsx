"use client";

import { useState } from 'react';
import { uploadImage, apiGet } from '@/utils/api';

export default function AddPetPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [listingType, setListingType] = useState<'pet' | 'breed'>('pet');

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    breed: '',
    category: 'Dog',
    description: '',
    gender: 'Male',
    vaccinated: 'Yes',
    shedding: 'Yes',
    age: '',
    weight: '',
    coat_length: 'Medium',
    grooming: 'Moderate',
    apartment_size: 'Apartment Friendly',
    location: '',
    exercise: '',
    color: '',
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
  });

  const BREED_GROUPS = [
    "Herding (Pastoral) Group",
    "Hound Group",
    "Sporting (Gun Dog) Group",
    "Terrier Group",
    "Toy Group",
    "Working Group",
    "Non-Sporting (Utility) Group"
  ];

  const handleGroupToggle = (groupName: string) => {
    setFormData(prev => {
      const current = prev.breed_groups || [];
      const updated = current.includes(groupName)
        ? current.filter(g => g !== groupName)
        : [...current, groupName];
      return { ...prev, breed_groups: updated };
    });
  };

  // Image Upload State
  const [mainImageFile, setMainImageFile] = useState<File | null>(null);
  const [mainImagePreview, setMainImagePreview] = useState<string>('');
  const [galleryImageFiles, setGalleryImageFiles] = useState<File[]>([]);
  const [galleryImagePreviews, setGalleryImagePreviews] = useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setSuccessMsg('');
    setErrorMsg('');

    if (!mainImageFile) {
      setErrorMsg('Please select a main image.');
      setIsLoading(false);
      return;
    }

    try {
      // UNIQUE VALIDATION: Check if same name AND same breed exists
      const nameValue = listingType === 'breed' ? (formData.name.trim() || '') : formData.name.trim();
      const existingPets = await apiGet<any[]>(
        `/api/pets?nameExact=${encodeURIComponent(nameValue)}&breedExact=${encodeURIComponent(formData.breed)}`
      );

      if (existingPets && existingPets.length > 0) {
        setErrorMsg(`Cannot add listing: A listing with breed "${formData.breed}" and name "${nameValue || '(No Name)'}" already exists!`);
        setIsLoading(false);
        return;
      }

      // Upload main image
      const mainImageUrl = await uploadImage(mainImageFile);

      // Upload gallery images (only for Breed Profile mode)
      const galleryUrls = [];
      if (listingType === 'breed') {
        for (const file of galleryImageFiles) {
          const url = await uploadImage(file);
          galleryUrls.push(url);
        }
      }

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
        breed_groups: formData.category === 'Dog' ? formData.breed_groups : [],
      };

      // Insert into MongoDB via API route
      const res = await fetch('/api/pets', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.error || 'Failed to add pet.');
      }

      setSuccessMsg(`Successfully added ${nameValue || formData.breed} to the ${formData.category} category!`);
      setFormData({
        name: '',
        breed: '',
        category: 'Dog',
        description: '',
        gender: 'Male',
        vaccinated: 'Yes',
        shedding: 'Yes',
        age: '',
        weight: '',
        coat_length: 'Medium',
        grooming: 'Moderate',
        apartment_size: 'Apartment Friendly',
        location: '',
        exercise: '',
        color: '',
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
        breed_groups: [],
      });
      setMainImageFile(null);
      setMainImagePreview('');
      setGalleryImageFiles([]);
      setGalleryImagePreviews([]);
    } catch (error: any) {
      console.error("Error adding pet:", error);
      setErrorMsg(error.message || "Failed to add pet. Please check your connection and try again.");
    }
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-8 pb-20 px-4 sm:px-6 lg:px-12">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-10">
        
        <div className="flex justify-between items-end mb-8 border-b border-gray-100 pb-6">
          <div>
            <h1 className="text-3xl font-black text-[#111111] uppercase tracking-tight">Add New Pet</h1>
            <p className="text-gray-500 mt-1">Publish a new pet listing across Dog, Cat, or Exotic categories.</p>
          </div>
        </div>

        {successMsg && (
          <div className="mb-8 p-4 bg-green-50 border border-green-200 text-green-800 rounded-lg flex items-center gap-3">
            <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
            <span className="font-medium">{successMsg}</span>
          </div>
        )}

        {errorMsg && (
          <div className="mb-8 p-4 bg-red-50 border border-red-200 text-red-800 rounded-lg flex items-center gap-3">
            <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" /></svg>
            <span className="font-medium">{errorMsg}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-10">

          {/* Listing Type Toggle */}
          <div className="mb-6 p-1.5 bg-gray-100/70 border border-gray-200/50 rounded-xl flex gap-3 max-w-md">
            <button
              type="button"
              onClick={() => setListingType('pet')}
              className={`flex-1 py-3 px-4 text-center rounded-lg font-bold text-xs uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 ${
                listingType === 'pet'
                  ? 'bg-black text-white shadow-sm'
                  : 'text-gray-500 hover:text-black hover:bg-gray-200/50'
              }`}
            >
              🐾 Individual Pet
            </button>
            <button
              type="button"
              onClick={() => setListingType('breed')}
              className={`flex-1 py-3 px-4 text-center rounded-lg font-bold text-xs uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 ${
                listingType === 'breed'
                  ? 'bg-black text-white shadow-sm'
                  : 'text-gray-500 hover:text-black hover:bg-gray-200/50'
              }`}
            >
              📋 Breed Profile
            </button>
          </div>
          
          {/* Section 1: Basic Info */}
          <section>
            <h2 className="text-sm font-bold uppercase tracking-wider text-[#FFC501] mb-4">1. Basic Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Pet Name {listingType === 'pet' ? '*' : '(Optional)'}
                </label>
                <input 
                  required={listingType === 'pet'} 
                  type="text" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  placeholder={listingType === 'pet' ? 'e.g. Shiro' : 'Leave empty for Breed profile'} 
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFC501] focus:bg-white transition-all" 
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Breed *</label>
                <input required type="text" name="breed" value={formData.breed} onChange={handleChange} placeholder="e.g. Golden Retriever" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFC501] focus:bg-white transition-all" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Category *</label>
                <select required name="category" value={formData.category} onChange={handleChange} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFC501] focus:bg-white transition-all appearance-none cursor-pointer">
                  <option value="Dog">Dog</option>
                  <option value="Cat">Cat</option>
                  <option value="Exotic">Exotic</option>
                </select>
              </div>

              {formData.category === 'Dog' && (
                <div className="md:col-span-3 bg-yellow-50/40 border border-yellow-100 rounded-xl p-5 mt-2">
                  <label className="block text-sm font-bold text-gray-800 mb-3">Dog Breed Groups (Select all that apply) *</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                    {BREED_GROUPS.map((group) => {
                      const isChecked = formData.breed_groups?.includes(group);
                      return (
                        <button
                          key={group}
                          type="button"
                          onClick={() => handleGroupToggle(group)}
                          className={`flex items-center gap-3 p-3 rounded-lg border text-left text-xs font-semibold transition-all select-none
                            ${isChecked 
                              ? 'bg-yellow-50 border-[#FFC501] text-yellow-900 shadow-sm' 
                              : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50 hover:border-gray-300'}`}
                        >
                          <div className={`w-4 h-4 rounded flex items-center justify-center border transition-all ${isChecked ? 'bg-[#FFC501] border-[#FFC501] text-white' : 'border-gray-300 bg-white'}`}>
                            {isChecked && (
                              <svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 20 20"><path d="M0 11l2-2 5 5L18 3l2 2L7 18z"/></svg>
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
                <label className="block text-sm font-bold text-gray-700 mb-2">Detailed Description</label>
                <textarea rows={4} name="description" value={formData.description} onChange={handleChange} placeholder="Describe the pet's personality, background, and why they make a great companion..." className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFC501] focus:bg-white transition-all resize-none"></textarea>
              </div>
            </div>
          </section>

          <hr className="border-gray-100" />

          {/* Section 2: Physical & Health Traits */}
          <section>
            <h2 className="text-sm font-bold uppercase tracking-wider text-[#5B92BD] mb-4">2. Physical & Health Details</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Gender</label>
                <select name="gender" value={formData.gender} onChange={handleChange} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5B92BD] focus:bg-white transition-all appearance-none cursor-pointer">
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Male & Female">Male & Female (Litter)</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Age</label>
                <input type="text" name="age" value={formData.age} onChange={handleChange} placeholder="e.g. 8 Weeks" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5B92BD] focus:bg-white transition-all" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Weight (kg)</label>
                <input type="number" step="0.1" name="weight" value={formData.weight} onChange={handleChange} placeholder="e.g. 15.5" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5B92BD] focus:bg-white transition-all" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Color</label>
                <input type="text" name="color" value={formData.color} onChange={handleChange} placeholder="e.g. Golden, Black, Brown" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5B92BD] focus:bg-white transition-all" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Vaccinated?</label>
                <select name="vaccinated" value={formData.vaccinated} onChange={handleChange} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5B92BD] focus:bg-white transition-all appearance-none cursor-pointer">
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                  <option value="Partial">Partial</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Shedding?</label>
                <select name="shedding" value={formData.shedding} onChange={handleChange} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5B92BD] focus:bg-white transition-all appearance-none cursor-pointer">
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                  <option value="Minimal">Minimal</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Coat Length *</label>
                <select name="coat_length" value={formData.coat_length} onChange={handleChange} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5B92BD] focus:bg-white transition-all appearance-none cursor-pointer">
                  <option value="Short">Short</option>
                  <option value="Medium">Medium</option>
                  <option value="Long">Long</option>
                  <option value="Curly/Wire">Curly / Wire</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Grooming Needs *</label>
                <select name="grooming" value={formData.grooming} onChange={handleChange} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5B92BD] focus:bg-white transition-all appearance-none cursor-pointer">
                  <option value="Low">Low (Minimal Care)</option>
                  <option value="Moderate">Moderate (Regular Brushing)</option>
                  <option value="High">High (Professional Grooming)</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Apartment Suitability *</label>
                <select name="apartment_size" value={formData.apartment_size} onChange={handleChange} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5B92BD] focus:bg-white transition-all appearance-none cursor-pointer">
                  <option value="Apartment Friendly">Apartment Friendly</option>
                  <option value="Requires Yard">Requires Small/Medium Yard</option>
                  <option value="Large Yard">Requires Large Yard / Farm</option>
                </select>
              </div>
            </div>
          </section>

          <hr className="border-gray-100" />

          {/* Section 3: Care & Logistics */}
          <section>
            <h2 className="text-sm font-bold uppercase tracking-wider text-[#FFC107] mb-4">3. Care & Logistics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Daily Exercise Needs</label>
                <input type="text" name="exercise" value={formData.exercise} onChange={handleChange} placeholder="e.g. 30 Mins Daily" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFC107] focus:bg-white transition-all" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Location / Availability</label>
                <input type="text" name="location" value={formData.location} onChange={handleChange} placeholder="e.g. Available for Delivery" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFC107] focus:bg-white transition-all" />
              </div>
            </div>
          </section>

          <hr className="border-gray-100" />

          {/* Section 4: Personality Highlights */}
          <section>
            <h2 className="text-sm font-bold uppercase tracking-wider text-[#91C79B] mb-4">4. Personality Highlights</h2>
            <p className="text-xs text-gray-500 mb-4">Set the personality traits from 0 (Low) to 100 (High).</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { label: 'Apartment Friendly', name: 'apartment_friendly' },
                { label: 'Family Friendly', name: 'family_friendly' },
                { label: 'Kid Friendly', name: 'kid_friendly' },
                { label: 'Guard Dog', name: 'guard_dog' },
                { label: 'Intelligent', name: 'intelligent' },
                { label: 'Easy to Train', name: 'easy_to_train' },
                { label: 'Active / Energetic', name: 'active_energetic' },
                { label: 'Calm', name: 'calm' },
                { label: 'Sociable', name: 'sociable' },
                { label: 'Hypoallergenic', name: 'hypoallergenic' },
                { label: 'Low Shedding', name: 'low_shedding' },
              ].map((trait) => (
                <div key={trait.name}>
                  <div className="flex justify-between items-center mb-2">
                    <label className="block text-sm font-bold text-gray-700">{trait.label}</label>
                    <span className="text-sm font-medium text-gray-500">{(formData as any)[trait.name]}%</span>
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

          {/* Section 5: Media */}
          <section>
            <h2 className="text-sm font-bold uppercase tracking-wider text-black mb-4">5. Media</h2>
            <div className="grid grid-cols-1 gap-6">
              
              {/* Main Image Upload */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Main Image *</label>
                <div 
                  className="relative border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:bg-gray-50 transition-colors cursor-pointer"
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={(e) => {
                    e.preventDefault();
                    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
                      const file = e.dataTransfer.files[0];
                      setMainImageFile(file);
                      setMainImagePreview(URL.createObjectURL(file));
                    }
                  }}
                  onClick={() => document.getElementById('mainImageInput')?.click()}
                >
                  <input 
                    id="mainImageInput"
                    type="file" 
                    accept="image/*" 
                    className="hidden" 
                    onChange={(e) => {
                      if (e.target.files && e.target.files[0]) {
                        const file = e.target.files[0];
                        setMainImageFile(file);
                        setMainImagePreview(URL.createObjectURL(file));
                      }
                    }} 
                  />
                  {mainImagePreview ? (
                    <div className="flex flex-col items-center">
                      <img src={mainImagePreview} alt="Main Preview" className="h-40 w-auto object-contain rounded-lg shadow-sm" />
                      <p className="mt-4 text-sm text-gray-500">Click or drag a different image to replace</p>
                    </div>
                  ) : (
                    <div>
                      <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                        <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <div className="mt-4 flex text-sm text-gray-600 justify-center">
                        <span className="relative cursor-pointer bg-white rounded-md font-medium text-[#FFC501] hover:text-yellow-600 focus-within:outline-none">
                          <span>Upload a file</span>
                        </span>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs text-gray-500 mt-2">PNG, JPG, GIF up to 5MB</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Gallery Images Upload (Only for Breed Profiles) */}
              {listingType === 'breed' && (
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Gallery Images</label>
                  <div 
                    className="relative border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:bg-gray-50 transition-colors cursor-pointer"
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={(e) => {
                      e.preventDefault();
                      if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
                        const files = Array.from(e.dataTransfer.files);
                        setGalleryImageFiles(prev => [...prev, ...files]);
                        
                        const newPreviews = files.map(file => URL.createObjectURL(file));
                        setGalleryImagePreviews(prev => [...prev, ...newPreviews]);
                      }
                    }}
                    onClick={() => document.getElementById('galleryImageInput')?.click()}
                  >
                    <input 
                      id="galleryImageInput"
                      type="file" 
                      accept="image/*" 
                      multiple
                      className="hidden" 
                      onChange={(e) => {
                        if (e.target.files && e.target.files.length > 0) {
                          const files = Array.from(e.target.files);
                          setGalleryImageFiles(prev => [...prev, ...files]);
                          
                          const newPreviews = files.map(file => URL.createObjectURL(file));
                          setGalleryImagePreviews(prev => [...prev, ...newPreviews]);
                        }
                      }} 
                    />
                    <div>
                      <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                        <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <div className="mt-4 flex text-sm text-gray-600 justify-center">
                        <span className="relative cursor-pointer bg-white rounded-md font-medium text-[#5B92BD] hover:text-blue-600 focus-within:outline-none">
                          <span>Upload files</span>
                        </span>
                        <p className="pl-1">or drag and drop multiple</p>
                      </div>
                    </div>
                  </div>

                  {galleryImagePreviews.length > 0 && (
                    <div className="mt-4 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
                      {galleryImagePreviews.map((preview, index) => (
                        <div key={index} className="relative group">
                          <img src={preview} alt={`Gallery Preview ${index}`} className="h-24 w-full object-cover rounded-lg shadow-sm" />
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setGalleryImageFiles(prev => prev.filter((_, i) => i !== index));
                              setGalleryImagePreviews(prev => prev.filter((_, i) => i !== index));
                            }}
                            className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-md hover:bg-red-600"
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

          <div className="pt-6 border-t border-gray-200 flex justify-end">
            <button
              type="submit"
              disabled={isLoading}
              className="bg-[#111111] hover:bg-[#333333] text-white font-bold py-4 px-10 rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-xl hover:shadow-2xl uppercase tracking-wider"
            >
              {isLoading ? 'Publishing Pet...' : 'Publish Pet Listing'}
            </button>
          </div>

        </form>

      </div>
    </div>
  );
}
