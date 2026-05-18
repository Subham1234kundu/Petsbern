"use client";

import { useState } from 'react';
import { supabase } from '@/utils/supabase';

export default function AddPetPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    category: 'Dog',
    description: '',
    gender: 'Male',
    vaccinated: 'Yes',
    shedding: 'Yes',
    age: '',
    weight: '',
    location: '',
    exercise: '',
    color: '',
    barking: 60,
    temperament_with_kids: 60,
    playfulness: 60,
    friendliness: 60,
    need_for_attention: 80,
    compatibility_with_dogs: 25,
  });

  // Image Upload State
  const [mainImageFile, setMainImageFile] = useState<File | null>(null);
  const [mainImagePreview, setMainImagePreview] = useState<string>('');
  const [galleryImageFiles, setGalleryImageFiles] = useState<File[]>([]);
  const [galleryImagePreviews, setGalleryImagePreviews] = useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const uploadImage = async (file: File) => {
    const fileExt = file.name.split('.').pop();
    const fileName = `${Math.random()}.${fileExt}`;
    const filePath = `${fileName}`;

    const { error: uploadError, data } = await supabase.storage
      .from('pet-images')
      .upload(filePath, file);

    if (uploadError) {
      throw uploadError;
    }

    const { data: { publicUrl } } = supabase.storage
      .from('pet-images')
      .getPublicUrl(filePath);

    return publicUrl;
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
      // Upload main image
      const mainImageUrl = await uploadImage(mainImageFile);

      // Upload gallery images
      const galleryUrls = [];
      for (const file of galleryImageFiles) {
        const url = await uploadImage(file);
        galleryUrls.push(url);
      }

      const payload = {
        name: formData.name,
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
        barking: Number(formData.barking) || 0,
        temperament_with_kids: Number(formData.temperament_with_kids) || 0,
        playfulness: Number(formData.playfulness) || 0,
        friendliness: Number(formData.friendliness) || 0,
        need_for_attention: Number(formData.need_for_attention) || 0,
        compatibility_with_dogs: Number(formData.compatibility_with_dogs) || 0,
        main_image: mainImageUrl,
        gallery: galleryUrls,
      };

      // Insert into Supabase
      const { error } = await supabase.from('pets').insert([payload]);

      if (error) throw error;

      setSuccessMsg(`Successfully added ${formData.name} to the ${formData.category} category!`);
      // Reset form
      setFormData({
        name: '',
        category: 'Dog',
        description: '',
        gender: 'Male',
        vaccinated: 'Yes',
        shedding: 'Yes',
        age: '',
        weight: '',
        location: '',
        exercise: '',
        color: '',
        barking: 60,
        temperament_with_kids: 60,
        playfulness: 60,
        friendliness: 60,
        need_for_attention: 80,
        compatibility_with_dogs: 25,
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
          
          {/* Section 1: Basic Info */}
          <section>
            <h2 className="text-sm font-bold uppercase tracking-wider text-[#FFC501] mb-4">1. Basic Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Pet Name / Title *</label>
                <input required type="text" name="name" value={formData.name} onChange={handleChange} placeholder="e.g. Golden Retriever Puppy" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFC501] focus:bg-white transition-all" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Category *</label>
                <select required name="category" value={formData.category} onChange={handleChange} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFC501] focus:bg-white transition-all appearance-none cursor-pointer">
                  <option value="Dog">Dog</option>
                  <option value="Cat">Cat</option>
                  <option value="Exotic">Exotic</option>
                </select>
              </div>
              <div className="md:col-span-2">
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
                { label: 'Barking', name: 'barking' },
                { label: 'Temperament with Kids', name: 'temperament_with_kids' },
                { label: 'Playfulness', name: 'playfulness' },
                { label: 'Friendliness', name: 'friendliness' },
                { label: 'Need for Attention', name: 'need_for_attention' },
                { label: 'Compatibility with Dogs', name: 'compatibility_with_dogs' },
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

              {/* Gallery Images Upload */}
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

        <div className="mt-12 bg-blue-50 border border-blue-100 rounded-xl p-6">
          <h3 className="text-blue-800 font-bold mb-2 flex items-center gap-2 text-sm">
            Supabase Setup Needed for Pets
          </h3>
          <p className="text-xs text-blue-900 leading-relaxed">
            To make this save to your database, create a table named <code className="bg-white px-1 py-0.5 rounded border border-gray-200">pets</code> with the following columns: <br/>
            <code>name, category, description, gender, vaccinated, shedding, age, weight (numeric), location, exercise, color, barking (numeric), temperament_with_kids (numeric), playfulness (numeric), friendliness (numeric), need_for_attention (numeric), compatibility_with_dogs (numeric), main_image, gallery (text array)</code>
          </p>
        </div>

      </div>
    </div>
  );
}
