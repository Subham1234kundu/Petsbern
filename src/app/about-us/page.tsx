"use client";

import React, { useState, useEffect } from "react";

function TestimonialSlider() {
  const [current, setCurrent] = useState(0);
  const slides = [
    {
      image: "/images/clienttalk.png",
      title: "“An Amazing Experience From Start to Finish”",
      desc: "Bringing our Golden Retriever home was the best decision we made for our family. The team kept us informed at every step, ensured all health checks were completed, and delivered him safely to our doorstep. You can truly see the care and love they have for their pets. Highly recommended for anyone looking for a healthy and happy companion.",
      author: "Rohan Mehta, Bangalore"
    },
    {
      image: "/images/familyy.png",
      title: "“Truly a Passionate Team”",
      desc: "We were looking for a Siamese cat for months. The team at Pets Barn made the process so smooth and transparent. Our new kitten is healthy, playful, and has adjusted perfectly to our home. The follow-up care they provide is exceptional.",
      author: "Ananya Sharma, Delhi"
    },
    {
      image: "/images/avilablePets.png",
      title: "“The Best Pet Adoption Service”",
      desc: "I was skeptical about home delivery for a puppy, but the care they took was incredible. Our Labrador arrived happy and energetic. They provided all the necessary documentation and a starter kit. Thank you for everything!",
      author: "Vikram Singh, Mumbai"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="w-full py-24 bg-white overflow-hidden">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative">
        <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${current * 100}%)` }}>
          {slides.map((slide, index) => (
            <div key={index} className="w-full flex-shrink-0 px-4">
              <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] gap-8 items-stretch h-full">
                {/* Left Side: Client Image Card */}
                <div className="rounded-[20px] overflow-hidden h-[560px]">
                  <img src={slide.image} className="w-full h-full object-cover" alt="Client with Pet" />
                </div>

                {/* Right Side: Text Card */}
                <div 
                  className="rounded-[20px] p-16 lg:p-20 flex flex-col justify-between h-[560px]"
                  style={{ backgroundColor: "#F6F5F2" }}
                >
                  <div className="flex flex-col gap-10">
                    <h3 className="text-black font-normal leading-tight" style={{ 
                      fontSize: "28px",
                      fontFamily: "var(--font-public-sans), sans-serif"
                    }}>
                      {slide.title}
                    </h3>
                    <p className="text-[#4F4F4F] leading-relaxed" style={{ 
                      fontSize: "18px",
                      fontFamily: "var(--font-public-sans), sans-serif"
                    }}>
                      {slide.desc}
                    </p>
                  </div>
                  
                  {/* Author at the bottom */}
                  <div className="flex items-center gap-3">
                    <span className="text-[#4F4F4F] font-normal" style={{ 
                      fontSize: "18px",
                      fontFamily: "var(--font-public-sans), sans-serif"
                    }}>
                      — {slide.author}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Slider Controls */}
        <div className="flex justify-center gap-3 mt-12">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 rounded-full transition-all duration-300 ${current === i ? 'w-10 bg-black' : 'w-2 bg-gray-300'
                }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function AboutUsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans">
      {/* About Us Header Section */}
      <section
        className="w-full h-[268px] relative flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/images/aboutusHeader.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <h1 className="text-white font-semibold tracking-tight z-10" style={{ fontSize: "32px", fontFamily: "var(--font-public-sans), 'Public Sans', sans-serif" }}>
          About Us
        </h1>
      </section>

      {/* Hero Section: About Pets Barn */}
      <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left Side: Dog Image */}
          <div className="relative flex justify-center lg:justify-start">
            <div className="relative">
              <img
                src="/images/about-dog.png"
                alt="About Pets Barn Dog"
                style={{ width: "478px", height: "749px" }}
                className="rounded-[32px] object-cover shadow-lg"
              />
            </div>
          </div>

          {/* Right Side: Text Content */}
          <div className="flex flex-col lg:pt-12">
            <span className="text-[#555] font-semibold uppercase tracking-widest mb-4" style={{ fontSize: "13px" }}>
              ABOUT PETS BARN
            </span>
            <h2 className="text-black font-normal leading-tight mb-8" style={{ fontSize: "36px" }}>
              Pets Barn was born from a simple belief — pets aren&apos;t just animals, they&apos;re family.
            </h2>
            <p className="leading-relaxed mb-6" style={{ fontSize: "18.6px", color: "#4F4F4F" }}>
              What started as a small passion project by pet lovers has grown into a trusted destination for pet parents who want only the best for their companions. From nutritious food to playful toys and everyday essentials, we created Pets Barn to make caring for pets easier, happier, and more rewarding.
            </p>

            {/* Divider Line */}
            <div className="w-full h-[1px] bg-[#DFDFDF] my-10"></div>

            <div className="flex items-center mt-4">
              {/* Button */}
              <button className="bg-black text-white px-6 h-[60px] w-[260px] rounded-full flex items-center justify-between hover:bg-gray-800 transition-all group shadow-md">
                <span className="text-[16px] font-semibold">Get Your Pet</span>
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </div>
              </button>
            </div>

            {/* Stats - Moved to bottom right */}
            <div className="flex flex-col items-center self-end pr-4 mt-8">
              <div className="flex items-start">
                <span className="text-[100px] font-bold text-black leading-[0.8] tracking-tighter">25</span>
                <span className="text-[50px] font-bold text-[#FFC501] leading-none ml-1">+</span>
              </div>
              <span className="text-[12px] font-bold text-[#777] uppercase tracking-widest mt-4">
                Years of Experiences
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-20">
        <div className="flex flex-col gap-32">

          {/* Our Mission */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            <div>
              <h3 className="text-black font-normal leading-tight" style={{ fontSize: "36px" }}>
                Our <span className="text-[#FFC501]">Mission</span>
              </h3>
            </div>
            <div className="pt-2">
              <p className="text-[#4F4F4F] leading-relaxed max-w-[500px]" style={{ fontSize: "20px" }}>
                To help every pet live a healthier, happier, and longer life by providing high-quality products, trusted guidance, and a community that truly cares.
              </p>
            </div>
          </div>

          {/* Our Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            <div>
              <h3 className="text-black font-normal leading-tight" style={{ fontSize: "36px" }}>
                Our <span className="text-[#FFC501]">Vision</span>
              </h3>
            </div>
            <div className="pt-2">
              <p className="text-[#4F4F4F] leading-relaxed max-w-[500px]" style={{ fontSize: "20px" }}>
                To become the most loved pet brand — where every wag, purr, and chirp begins with something from Pets Barn.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different Section */}
      <section className="py-24 w-full bg-gradient-to-b from-[#F6F5F2] to-white">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-black font-normal leading-tight" style={{ fontSize: "36px" }}>
              What Makes <span className="text-[#FFC501]">Us Different</span>?
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Pet-First Philosophy",
                description: "Every product we offer is carefully selected with your pet’s comfort, safety, and joy in mind.",
                image: "/images/aboutDiff1.png"
              },
              {
                title: "Quality You Can Trust",
                description: "We partner with trusted suppliers and brands to ensure premium quality across food, grooming, toys, and accessories.",
                image: "/images/aboutdiff2.png"
              },
              {
                title: "Built by Pet Lovers",
                description: "Our team includes passionate pet parents who understand what your furry friends truly need.",
                image: "/images/aboutdiff3.png"
              },
              {
                title: "Convenience for Pet Parents",
                description: "Easy shopping, reliable delivery, and friendly support — because caring for pets should feel effortless.",
                image: "/images/aboutdiff4.png"
              }
            ].map((box, index) => (
              <div
                key={index}
                className="bg-white rounded-[32px] overflow-hidden flex flex-col"
                style={{ height: "683px" }}
              >
                {/* Image Area */}
                <div className="h-[403px] w-full overflow-hidden">
                  <img
                    src={box.image}
                    alt={box.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Content Area */}
                <div className="p-8 flex flex-col gap-4 bg-[#F6F5F2] flex-grow">
                  <h3 className="text-black font-bold text-[20px] leading-tight">
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

      {/* Why Choose Us Section */}
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
                {/* Image Area with stylized background */}
                <div className="w-full h-[220px] relative flex items-center justify-center overflow-hidden rounded-[24px] bg-[#F9F9F9] border border-[#FFBAC2]/30">
                  <img
                    src={box.image}
                    alt={box.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Title */}
                <h3 className="text-black font-medium leading-snug" style={{ fontSize: "22px" }}>
                  {box.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Promise Section */}
      <section className="py-32 bg-white w-full border-t border-gray-100">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">

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
                className={`p-12 flex flex-col items-center text-center gap-8 border-gray-200 ${
                  index === 0 ? 'border-t border-r' : 
                  index === 1 ? 'border-t border-r' : 
                  'border-t'
                }`}
              >
                <div className="w-[84px] h-[84px] flex items-center justify-center flex-shrink-0">
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

      {/* Happy Families Served Section */}
      <section className="py-24 bg-white w-full">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-black font-normal leading-tight" style={{
              fontFamily: "var(--font-public-sans), sans-serif",
              fontSize: "42px"
            }}>
              <span className="text-[#E2001A]">10,000+</span> Happy Families Served
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Image 1: Large Portrait */}
            <div className="lg:col-span-2 lg:row-span-2 rounded-[32px] overflow-hidden h-[624px]">
              <img src="/images/happyfamily1.png" className="w-full h-full object-cover" alt="Happy Family with Dog" />
            </div>

            {/* Image 2 */}
            <div className="rounded-[32px] overflow-hidden h-[300px]">
              <img src="/images/happyfamily2.png" className="w-full h-full object-cover" alt="Happy Dog" />
            </div>

            {/* Image 3 */}
            <div className="rounded-[32px] overflow-hidden h-[300px]">
              <img src="/images/happyFamily3.png" className="w-full h-full object-cover" alt="Owner with Pet" />
            </div>

            {/* Image 4 */}
            <div className="rounded-[32px] overflow-hidden h-[300px]">
              <img src="/images/happyFamily4.png" className="w-full h-full object-cover" alt="Happy Pet" />
            </div>

            {/* Image 5 */}
            <div className="rounded-[32px] overflow-hidden h-[300px]">
              <img src="/images/happyFamily5.png" className="w-full h-full object-cover" alt="Happy Cat" />
            </div>

            {/* Image 6 - Enhanced Bottom Fade */}
            <div className="rounded-[32px] overflow-hidden h-[300px] relative">
              <img src="/images/happyFamily6.png" className="w-full h-full object-cover" alt="Happy Family" />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent"></div>
            </div>

            {/* Image 7 - Enhanced Bottom Fade */}
            <div className="rounded-[32px] overflow-hidden h-[300px] relative">
              <img src="/images/happyFamily7.png" className="w-full h-full object-cover" alt="Pet Playtime" />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent"></div>
            </div>

            {/* Image 8: Wide Landscape - Enhanced Bottom Fade */}
            <div className="lg:col-span-2 rounded-[32px] overflow-hidden h-[300px] relative">
              <img src="/images/happyFamily8.png" className="w-full h-full object-cover" alt="Happy Corgi" />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Slider Section */}
      <TestimonialSlider />

      {/* Contact CTA Section */}
      <section className="relative w-full h-[400px] overflow-hidden flex items-center">
        {/* Background Image with Black Tint */}
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

        {/* Content */}
        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <h2 className="text-white font-normal leading-tight max-w-[700px]" style={{
            fontSize: "42px",
            fontFamily: "var(--font-public-sans), sans-serif"
          }}>
            Let us help you discover the one that fits you perfectly.
          </h2>
          <button className="bg-white text-black rounded-full h-[50px] flex items-center justify-center font-semibold transition-all hover:bg-gray-100 shadow-xl" style={{
            width: "267px",
            fontSize: "18px",
            fontFamily: "var(--font-public-sans), sans-serif"
          }}>
            Contact Us
          </button>
        </div>
      </section>

    </div>
  );
}
