"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import BreedCard from '@/components/BreedCard';

export default function PetDetailsPage() {
  const params = useParams();
  const slug = params.slug as string;
  
  // Format slug back to display name (e.g. golden-retriever -> Golden Retriever)
  const petName = slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  const [activeImage, setActiveImage] = useState("https://images.unsplash.com/photo-1552053831-71594a27632d?q=80&w=600&h=600&auto=format&fit=crop");

  const thumbnails = [
    "https://images.unsplash.com/photo-1552053831-71594a27632d?q=80&w=600&h=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?q=80&w=600&h=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?q=80&w=600&h=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?q=80&w=600&h=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1591768226451-3444216831ce?q=80&w=600&h=600&auto=format&fit=crop"
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white font-sans">
      
      {/* Breadcrumb Section */}
      <div className="w-full bg-[#F2F4F5] h-[72px] flex items-center">
        <div className="max-w-[1440px] mx-auto w-full px-4 sm:px-6 lg:px-12 flex items-center gap-2">
          <Link href="/" className="flex items-center">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 9.5L12 4L21 9.5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V9.5Z" stroke="#5F6C72" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9 21V12H15V21" stroke="#5F6C72" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
          
          <span className="text-[#5F6C72] text-[14px]">Home</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 18L15 12L9 6" stroke="#77878F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          
          <Link href="/pet-categories/dogs" className="text-[#5F6C72] text-[14px] hover:text-[#8B5E3C]">Our Pets</Link>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 18L15 12L9 6" stroke="#77878F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>

          <Link href="/pet-categories/dogs" className="text-[#5F6C72] text-[14px] hover:text-[#8B5E3C]">Dogs</Link>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 18L15 12L9 6" stroke="#77878F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          
          <span className="text-black text-[14px] font-bold">{petName}</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1440px] mx-auto w-full px-4 sm:px-6 lg:px-12 flex gap-12">
        
        {/* Left Section: Images */}
        <div className="relative w-[600px] h-[600px]">
          {/* Thumbnails Overlay */}
          <div className="absolute top-4 left-4 z-10 flex flex-col gap-3">
            {thumbnails.map((thumb, idx) => (
              <div 
                key={idx} 
                className={`w-[80px] h-[80px] overflow-hidden border-2 cursor-pointer transition-all shadow-md ${
                  activeImage.includes(thumb.split('&')[0]) ? 'border-[#8B5E3C]' : 'border-white opacity-80 hover:opacity-100'
                }`}
                onClick={() => setActiveImage(thumb)}
              >
                <img src={thumb} alt="Pet thumbnail" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
          
          {/* Main Image */}
          <div className="w-full h-full overflow-hidden border border-[#E4E7E9]">
            <img src={activeImage} alt={petName} className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Right Section: Details */}
        <div className="flex-1 flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <h1 className="text-[36px] font-normal text-black leading-tight">
              {petName}
            </h1>
            
            <p className="text-[14px] font-normal text-[#1E1E1E] leading-[1.6]">
              The {petName} is a friendly, intelligent, and devoted family dog known for its gentle nature and beautiful coat. They are highly social and love being around people, making them excellent companions for families, children, and first-time pet owners.
              <br /><br />
              With their loving personality, patience, and loyalty, {petName}s quickly become a cherished member of any home. They thrive in environments where they receive plenty of attention, exercise, and affection.
            </p>
          </div>

          {/* Info Grid */}
          <div className="grid grid-cols-[1fr_1fr_1fr] gap-x-4 border-b border-[#F2F4F5] pb-10">
            {/* Column 1 items */}
            <div className="flex flex-col gap-8">
              <div>
                <p className="text-[#686363] text-[14px] mb-0.5 font-normal">Gender</p>
                <p className="text-[#1E1E1E] text-[18px] font-normal">Female & Male</p>
              </div>
              <div>
                <p className="text-[#686363] text-[14px] mb-0.5 font-normal">Vaccinated</p>
                <p className="text-[#1E1E1E] text-[18px] font-normal">Yes</p>
              </div>
              <div>
                <p className="text-[#686363] text-[14px] mb-0.5 font-normal">Shedding</p>
                <p className="text-[#1E1E1E] text-[18px] font-normal">Yes</p>
              </div>
            </div>

            {/* Column 2 items */}
            <div className="flex flex-col gap-8">
              <div>
                <p className="text-[#686363] text-[14px] mb-0.5 font-normal">Age</p>
                <p className="text-[#1E1E1E] text-[18px] font-normal">0-18 Years</p>
              </div>
              <div>
                <p className="text-[#686363] text-[14px] mb-0.5 font-normal">Location</p>
                <p className="text-[#1E1E1E] text-[18px] font-normal">Available for Delivery</p>
              </div>
              <div>
                <p className="text-[#686363] text-[14px] mb-0.5 font-normal">Exercise</p>
                <p className="text-[#1E1E1E] text-[18px] font-normal">30 Mins Daily</p>
              </div>
            </div>

            {/* Column 3 items */}
            <div className="flex flex-col gap-8">
              <div>
                <p className="text-[#686363] text-[14px] mb-0.5 font-normal">Color</p>
                <p className="text-[#1E1E1E] text-[18px] font-normal">Golden, Black, Brown</p>
              </div>
            </div>
          </div>

          {/* Action Section */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <button 
                style={{ width: '193px' }}
                className="bg-black text-white h-[44px] rounded-full text-[15px] font-medium hover:bg-gray-900 transition-all flex items-center justify-center"
              >
                Call Us
              </button>
              
              <div className="w-[1px] h-6 bg-black" />
              
              <button 
                style={{ width: '225px' }}
                className="bg-[#E4E7E9] text-black h-[44px] rounded-full text-[15px] font-medium hover:bg-gray-300 transition-all flex items-center justify-center"
              >
                WhatsApp Now
              </button>
            </div>
            
            <div className="flex items-center gap-1 mt-2">
              <span className="text-[#FFC107] font-bold text-[14px]">100+</span>
              <span className="text-[#5F6C72] text-[14px]">People Viewing This Pet</span>
            </div>
          </div>
        </div>
      </div>

      {/* Features Bar Section */}
      <div className="max-w-[1440px] mx-auto w-full px-4 sm:px-6 lg:px-12 pt-[7px] pb-16">
        <div className="w-full border border-[#E4E7E9] rounded-sm flex flex-wrap md:flex-nowrap items-center justify-between bg-white py-8 px-4 sm:px-6">
          {/* Delivery */}
          <div className="flex items-center gap-4 px-4 flex-1 min-w-[250px] justify-center md:border-r border-[#E4E7E9] last:border-r-0 py-4 md:py-0">
            <img src="/images/delivery.png" className="w-12 h-12 object-contain" alt="Delivery" />
            <div className="flex flex-col">
              <h4 className="font-bold text-[14px] text-black uppercase leading-tight whitespace-nowrap tracking-tight">
                DELIVERY AVAILABLE
              </h4>
              <p className="text-[14px] text-[#5F6C72] leading-tight mt-1">
                Safe Doorstep Pet Delivery
              </p>
            </div>
          </div>

          {/* Healthy */}
          <div className="flex items-center gap-4 px-4 flex-1 min-w-[250px] justify-center md:border-r border-[#E4E7E9] last:border-r-0 py-4 md:py-0">
            <img src="/images/healthy.png" className="w-12 h-12 object-contain" alt="Healthy" />
            <div className="flex flex-col">
              <h4 className="font-bold text-[14px] text-black uppercase leading-tight whitespace-nowrap tracking-tight">
                HEALTHY
              </h4>
              <p className="text-[14px] text-[#5F6C72] leading-tight mt-1">
                Vet Checked Perfect Health
              </p>
            </div>
          </div>

          {/* Vaccinated */}
          <div className="flex items-center gap-4 px-4 flex-1 min-w-[250px] justify-center md:border-r border-[#E4E7E9] last:border-r-0 py-4 md:py-0">
            <img src="/images/vaccinated.png" className="w-12 h-12 object-contain" alt="Vaccinated" />
            <div className="flex flex-col">
              <h4 className="font-bold text-[14px] text-black uppercase leading-tight whitespace-nowrap tracking-tight">
                VACCINATED
              </h4>
              <p className="text-[14px] text-[#5F6C72] leading-tight mt-1">
                Up To Date Vaccinations
              </p>
            </div>
          </div>

          {/* Ready for Home */}
          <div className="flex items-center gap-4 px-4 flex-1 min-w-[250px] justify-center last:border-r-0 py-4 md:py-0">
            <img src="/images/readyForHome.png" className="w-12 h-12 object-contain" alt="Ready For Home" />
            <div className="flex flex-col">
              <h4 className="font-bold text-[14px] text-black uppercase leading-tight whitespace-nowrap tracking-tight">
                READY FOR HOME
              </h4>
              <p className="text-[14px] text-[#5F6C72] leading-tight mt-1">
                Prepared For Loving Homes
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Available Pets Section */}
      <div className="max-w-[1440px] mx-auto w-full px-4 sm:px-6 lg:px-12 pb-16">
        <h2 className="text-black text-[30px] font-semibold mb-10">
          Available {petName}
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <BreedCard name={petName} image="https://images.unsplash.com/photo-1552053831-71594a27632d?q=80&w=400&h=400&auto=format&fit=crop" />
          <BreedCard name={petName} image="https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?q=80&w=400&h=400&auto=format&fit=crop" />
          <BreedCard name={petName} image="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?q=80&w=400&h=400&auto=format&fit=crop" />
          <BreedCard name={petName} image="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?q=80&w=400&h=400&auto=format&fit=crop" />
        </div>
      </div>
    </div>
  );
}
