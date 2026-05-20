"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import BreedCard2 from '@/components/BreedCard2';
import { TestimonialSlider } from "@/components/TestimonialSlider";
import { supabase } from '@/utils/supabase';

export default function PetDetailsPage() {
  const params = useParams();
  const slug = params.slug as string;

  const [pet, setPet] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [activeImage, setActiveImage] = useState("");
  const [thumbnails, setThumbnails] = useState<string[]>([]);
  const [relatedPets, setRelatedPets] = useState<any[]>([]);

  useEffect(() => {
    async function fetchPet() {
      const isUUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(slug);
      
      let query = supabase.from('pets').select('*');
      if (isUUID) {
        query = query.eq('id', slug);
      } else {
        const formattedName = slug.split('-').join(' ');
        query = query.ilike('name', `%${formattedName}%`);
      }

      const { data, error } = await query.single();
      
      if (data) {
        setPet(data);
        setActiveImage(data.main_image || "https://images.unsplash.com/photo-1552053831-71594a27632d?q=80&w=600&h=600&auto=format&fit=crop");
        
        let allImages = [];
        if (data.main_image) allImages.push(data.main_image);
        if (data.gallery && data.gallery.length > 0) {
          allImages = [...allImages, ...data.gallery];
        } else {
          // Fallback thumbnails if none in gallery
          allImages.push("https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?q=80&w=600&h=600&auto=format&fit=crop");
        }
        setThumbnails(allImages);

        // Fetch related pets based on breed
        if (data.breed) {
          const { data: relatedData } = await supabase
            .from('pets')
            .select('*')
            .eq('breed', data.breed)
            .neq('id', data.id)
            .limit(4);
          if (relatedData) setRelatedPets(relatedData);
        }
      }
      setLoading(false);
    }
    fetchPet();
  }, [slug]);

  // Fallback name if pet not found yet
  const petName = pet ? pet.name : slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  if (loading) {
    return (
      <div className="flex flex-col min-h-screen bg-white font-sans items-center justify-center">
        <div className="w-16 h-16 border-4 border-[#FFC501] border-t-transparent rounded-full animate-spin"></div>
        <p className="mt-4 text-gray-500 font-medium">Loading pet details...</p>
      </div>
    );
  }

  if (!pet && !loading) {
    return (
      <div className="flex flex-col min-h-screen bg-white font-sans items-center justify-center">
        <h1 className="text-3xl font-bold mb-4">Pet Not Found</h1>
        <p className="text-gray-500 mb-8">We couldn't find the pet you're looking for.</p>
        <Link href="/pet-categories/dogs" className="bg-[#FFC501] text-black px-8 py-3 rounded-full font-bold">
          Go Back to Dogs
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-white font-sans">

      {/* Breadcrumb Section */}
      <div className="w-full bg-[#F2F4F5] h-[72px] flex items-center">
        <div className="max-w-[1440px] mx-auto w-full px-4 sm:px-6 lg:px-12 flex items-center gap-2">
          <Link href="/" className="flex items-center">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 9.5L12 4L21 9.5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V9.5Z" stroke="#5F6C72" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M9 21V12H15V21" stroke="#5F6C72" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>

          <span className="text-[#5F6C72] text-[14px]">Home</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 18L15 12L9 6" stroke="#77878F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>

          <Link href="/pet-categories/dogs" className="text-[#5F6C72] text-[14px] hover:text-[#8B5E3C]">Our Pets</Link>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 18L15 12L9 6" stroke="#77878F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>

          <Link href="/pet-categories/dogs" className="text-[#5F6C72] text-[14px] hover:text-[#8B5E3C]">Dogs</Link>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 18L15 12L9 6" stroke="#77878F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>

          <span className="text-black text-[14px] font-bold">{petName}</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1440px] mx-auto w-full px-4 sm:px-6 lg:px-12 flex gap-12 pt-4">

        {/* Left Section: Images */}
        <div className="relative w-[600px] h-[600px]">
          {/* Thumbnails Overlay */}
          <div className="absolute top-4 left-4 z-10 flex flex-col gap-3">
            {thumbnails.map((thumb, idx) => (
              <div
                key={idx}
                className={`w-[80px] h-[80px] overflow-hidden border-2 cursor-pointer transition-all shadow-md ${activeImage.includes(thumb.split('&')[0]) ? 'border-[#8B5E3C]' : 'border-white opacity-80 hover:opacity-100'
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
            <div>
              <h1 className="text-[36px] font-normal text-black leading-tight">
                {petName}
              </h1>
              {pet?.breed && (
                <h2 className="text-[20px] font-medium text-[#FFC501] mt-1">
                  Breed: {pet.breed}
                </h2>
              )}
            </div>

            <p className="text-[14px] font-normal text-[#1E1E1E] leading-[1.6]">
              {pet?.description || `The ${petName} is a friendly, intelligent, and devoted family dog known for its gentle nature and beautiful coat. They are highly social and love being around people, making them excellent companions for families, children, and first-time pet owners.`}
            </p>
          </div>

          {/* Info Grid */}
          <div className="grid grid-cols-[1fr_1fr_1fr] gap-x-4 border-b border-[#F2F4F5] pb-10">
            {/* Column 1 items */}
            <div className="flex flex-col gap-8">
              <div>
                <p className="text-[#686363] text-[14px] mb-0.5 font-normal">Gender</p>
                <p className="text-[#1E1E1E] text-[18px] font-normal">{pet?.gender || "Female & Male"}</p>
              </div>
              <div>
                <p className="text-[#686363] text-[14px] mb-0.5 font-normal">Vaccinated</p>
                <p className="text-[#1E1E1E] text-[18px] font-normal">{pet?.vaccinated || "Yes"}</p>
              </div>
              <div>
                <p className="text-[#686363] text-[14px] mb-0.5 font-normal">Shedding</p>
                <p className="text-[#1E1E1E] text-[18px] font-normal">{pet?.shedding || "Yes"}</p>
              </div>
            </div>

            {/* Column 2 items */}
            <div className="flex flex-col gap-8">
              <div>
                <p className="text-[#686363] text-[14px] mb-0.5 font-normal">Age</p>
                <p className="text-[#1E1E1E] text-[18px] font-normal">{pet?.age || "0-18 Years"}</p>
              </div>
              <div>
                <p className="text-[#686363] text-[14px] mb-0.5 font-normal">Location</p>
                <p className="text-[#1E1E1E] text-[18px] font-normal">{pet?.location || "Available for Delivery"}</p>
              </div>
              <div>
                <p className="text-[#686363] text-[14px] mb-0.5 font-normal">Exercise</p>
                <p className="text-[#1E1E1E] text-[18px] font-normal">{pet?.exercise || "30 Mins Daily"}</p>
              </div>
            </div>

            {/* Column 3 items */}
            <div className="flex flex-col gap-8">
              <div>
                <p className="text-[#686363] text-[14px] mb-0.5 font-normal">Color</p>
                <p className="text-[#1E1E1E] text-[18px] font-normal">{pet?.color || "Golden, Black, Brown"}</p>
              </div>
              {pet?.weight > 0 && (
                <div>
                  <p className="text-[#686363] text-[14px] mb-0.5 font-normal">Weight</p>
                  <p className="text-[#1E1E1E] text-[18px] font-normal">{pet.weight} kg</p>
                </div>
              )}
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

      {/* Personality Highlights */}
      <div className="max-w-[1440px] mx-auto w-full px-4 sm:px-6 lg:px-12 pb-16">
        <div className="flex flex-col gap-6 max-w-[800px] mx-auto">
          <h3 className="text-center text-[36px] font-normal text-black mb-6">
            Personality <span className="text-[#D63B3B]">Highlights</span>
          </h3>
          
          <div className="flex flex-col gap-6">
            {[
              { label: "Barking", value: pet?.barking ?? 60, color: "bg-[#FCC83C]" },
              { label: "Temperament with Kids", value: pet?.temperament_with_kids ?? 60, color: "bg-[#FCC83C]" },
              { label: "Playfulness", value: pet?.playfulness ?? 60, color: "bg-[#FCC83C]" },
              { label: "Friendliness", value: pet?.friendliness ?? 60, color: "bg-[#FCC83C]" },
              { label: "Need for attention", value: pet?.need_for_attention ?? 80, color: "bg-[#91C79B]" },
              { label: "Compatibility with Dogs", value: pet?.compatibility_with_dogs ?? 25, color: "bg-[#D63B3B]" }
            ].map((item, idx) => {
              const totalBars = 60;
              const activeBars = Math.floor((item.value / 100) * totalBars);
              return (
                <div key={idx} className="flex flex-col gap-2">
                  <div className="flex justify-between items-center px-2">
                    <span className="text-[15px] font-semibold text-[#5F6C72]">Low</span>
                    <span className="text-[20px] font-normal text-black">{item.label}</span>
                    <span className="text-[15px] font-semibold text-[#D63B3B]">High</span>
                  </div>
                  <div className="flex gap-[3px]">
                    {[...Array(totalBars)].map((_, i) => (
                      <div
                        key={i}
                        className={`h-7 flex-1 rounded-sm ${i < activeBars ? item.color : 'bg-[#E6E6E6]'}`}
                      />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Available Pets Section */}
      {relatedPets.length > 0 && (
        <div className="max-w-[1440px] mx-auto w-full px-4 sm:px-6 lg:px-12 pb-16">
          <h2 className="text-black text-[30px] font-semibold mb-10">
            More {pet?.breed || 'Pets'} Like {petName}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedPets.map((p) => (
              <BreedCard2 key={p.id} name={p.name} image={p.main_image} />
            ))}
          </div>
        </div>
      )}

      {/* Promise Section */}
      <section className="py-32 bg-white w-full border-t border-gray-100">
        <div className="max-w-[1440px] mx-auto w-full px-4 sm:px-6 lg:px-12">

          {/* Header Area */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-6">
            <div className="max-w-[700px]">
              <h2 className="text-black font-normal leading-tight mb-4" style={{ fontSize: "36px" }}>
                Experience the <span className="text-[#FFC501]">Pets Barn</span> Promise of Pawsome Care
              </h2>
              <p className="text-[#6E6E6E] leading-relaxed" style={{ fontSize: "18px" }}>
                Discover the difference with Pet Barns, where our commitment to ethical standards and lifelong pet wellness ensures you find more than just a pet—you find a family member.
              </p>
            </div>
            <button className="bg-black text-white rounded-full font-normal hover:bg-gray-800 transition-all shadow-lg flex items-center justify-center" style={{
              width: "193px",
              height: "44px",
              fontSize: "15px"
            }}>
              Call Us Now
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Expert Guidance",
                description: "Offering expert guidance in post-adoption pet care to support your journey as a new pet parent from day one.",
                image: "/images/exAbout1.png"
              },
              {
                title: "Health Checked",
                description: "Every puppy undergoes a thorough health check by certified veterinarians to ensure they are active and healthy.",
                image: "/images/exAbout2.png"
              },
              {
                title: "Verified Lineage",
                description: "Providing a verified pedigree and lineage with an included microchip, ensuring your puppy's heritage is documented.",
                image: "/images/exAbout3.png"
              }
            ].map((box, index) => (
              <div
                key={index}
                className={`p-12 flex flex-col items-center text-center gap-8 border-gray-200 ${index === 0 ? 'border-t border-r' :
                  index === 1 ? 'border-t border-r' :
                    'border-t'
                  }`}
              >
                <div className="w-[84px] h-[84px] bg-[#E2001A1A] rounded-2xl flex items-center justify-center flex-shrink-0">
                  <img src={box.image} alt={box.title} className="w-[84px] h-[84px] object-contain" />
                </div>
                <div className="flex flex-col gap-4">
                  <h3 className="text-black font-bold text-[22px] leading-tight">
                    {box.title}
                  </h3>
                  <p className="text-[#6E6E6E] text-[16px] leading-relaxed">
                    {box.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Available Pets (General) Section */}
      <div className="max-w-[1440px] mx-auto w-full px-4 sm:px-6 lg:px-12 pb-16">
        <h2 className="text-black text-[30px] font-semibold mb-10">
          Available Pets
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
          <BreedCard2 name="Labrador" image="https://images.unsplash.com/photo-1552053831-71594a27632d?q=80&w=400&h=400&auto=format&fit=crop" />
          <BreedCard2 name="Pug" image="https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?q=80&w=400&h=400&auto=format&fit=crop" />
          <BreedCard2 name="Husky" image="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?q=80&w=400&h=400&auto=format&fit=crop" />
          <BreedCard2 name="Doodle" image="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?q=80&w=400&h=400&auto=format&fit=crop" />
          <BreedCard2 name="Rottweiler" image="https://images.unsplash.com/photo-1552053831-71594a27632d?q=80&w=400&h=400&auto=format&fit=crop" />
          <BreedCard2 name="Shitzu" image="https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?q=80&w=400&h=400&auto=format&fit=crop" />
          <BreedCard2 name="Beagle" image="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?q=80&w=400&h=400&auto=format&fit=crop" />
          <BreedCard2 name="Bulldog" image="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?q=80&w=400&h=400&auto=format&fit=crop" />
        </div>
      </div>

      {/* 3 Simple Steps Section */}
      <section className="bg-white w-full">
        <div className="max-w-[1440px] mx-auto w-full px-4 sm:px-6 lg:px-12 mb-14">
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
      {/* Why Choose Pet Barns Section */}
      <section className="py-24 bg-[#F6F5F2] w-full">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          {/* Header Area */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <div className="max-w-[700px]">
              <h2 className="text-black font-normal leading-tight mb-4" style={{ fontSize: "36px" }}>
                Why Choose <span className="text-[#FFC501]">Pet Barns</span>?
              </h2>
              <p className="text-[#4F4F4F] leading-relaxed" style={{ fontSize: "16px" }}>
                Discover the difference with Pet Barns, where our commitment to ethical standards and lifetime pet wellness ensures you find more than just a pet — you find a family member.
              </p>
            </div>
            <button className="bg-black text-white px-8 py-3 rounded-full text-[14px] font-semibold hover:bg-gray-800 transition-all shadow-md">
              Contact Us
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Ethical Breeding Standards",
                image: "/images/aboutChoose1.png"
              },
              {
                title: "Up-to-Date Vaccinations",
                image: "/images/aboutchoose2.png"
              },
              {
                title: "Certified Lineage",
                image: "/images/aboutChoose3.png"
              },
              {
                title: "Doorstep Joy (Home Delivery)",
                image: "/images/aboutchoose4.png"
              }
            ].map((box, index) => (
              <div
                key={index}
                className="bg-white rounded-[32px] border border-[#FFBAC2] p-8 flex flex-col gap-8 group hover:shadow-lg transition-all"
                style={{ height: "420px" }}
              >
                <div className="w-full h-[220px] relative flex items-center justify-center overflow-hidden rounded-[24px] bg-[#F9F9F9] border border-[#FFBAC2]/30">
                  <img
                    src={box.image}
                    alt={box.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-black font-medium leading-snug" style={{ fontSize: "22px" }}>
                  {box.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Happy Families Served Section */}
      <section className="py-24 bg-white w-full">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-black font-normal leading-tight" style={{
              fontFamily: "var(--font-public-sans), sans-serif",
              fontSize: "42px"
            }}>
              <span className="text-[#FFC501]">10,000+</span> Happy Families Served
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="lg:col-span-2 lg:row-span-2 rounded-[32px] overflow-hidden h-[624px]">
              <img src="/images/happyfamily1.png" className="w-full h-full object-cover" alt="Happy Family with Dog" />
            </div>
            <div className="rounded-[32px] overflow-hidden h-[300px]">
              <img src="/images/happyfamily2.png" className="w-full h-full object-cover" alt="Happy Dog" />
            </div>
            <div className="rounded-[32px] overflow-hidden h-[300px]">
              <img src="/images/happyFamily3.png" className="w-full h-full object-cover" alt="Owner with Pet" />
            </div>
            <div className="rounded-[32px] overflow-hidden h-[300px]">
              <img src="/images/happyFamily4.png" className="w-full h-full object-cover" alt="Happy Pet" />
            </div>
            <div className="rounded-[32px] overflow-hidden h-[300px]">
              <img src="/images/happyFamily5.png" className="w-full h-full object-cover" alt="Happy Cat" />
            </div>
            <div className="rounded-[32px] overflow-hidden h-[300px] relative">
              <img src="/images/happyFamily6.png" className="w-full h-full object-cover" alt="Happy Family" />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent"></div>
            </div>
            <div className="rounded-[32px] overflow-hidden h-[300px] relative">
              <img src="/images/happyFamily7.png" className="w-full h-full object-cover" alt="Pet Playtime" />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent"></div>
            </div>
            <div className="lg:col-span-2 rounded-[32px] overflow-hidden h-[300px] relative">
              <img src="/images/happyFamily8.png" className="w-full h-full object-cover" alt="Happy Corgi" />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>


      <TestimonialSlider />

      {/* Contact CTA Section (Bottom) */}
      <section className="relative w-full h-[400px] overflow-hidden flex items-center">
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: "url('/images/contactAbout.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <h2 className="text-white font-normal leading-tight max-w-[700px]" style={{ fontSize: "42px", fontFamily: "var(--font-public-sans), sans-serif" }}>
            Let us help you discover the one that fits you perfectly.
          </h2>
          <button className="bg-white text-black rounded-full h-[50px] flex items-center justify-center font-semibold transition-all hover:bg-gray-100 shadow-xl" style={{ width: "267px", fontSize: "18px", fontFamily: "var(--font-public-sans), sans-serif" }}>
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
}
