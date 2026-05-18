"use client";

import React from "react";
import Link from "next/link";
import FAQSection from "@/components/FAQSection";
import ServiceAnimations from "@/components/ServiceAnimations";

export default function PetRelocationPage() {
  const relocationFAQs = [
    {
      question: "What documentation is required for international travel?",
      answer: "Requirements vary by country but generally include a microchip, rabies vaccination, and a health certificate."
    },
    {
      question: "How long does the relocation process take?",
      answer: "It depends on the destination; international moves typically take 1-4 months for preparation."
    },
    {
      question: "Are the travel crates IATA-approved?",
      answer: "Yes, we provide high-quality crates that meet all IATA standards for air travel."
    },
    {
      question: "Can someone accompany my pet during the flight?",
      answer: "Most pets travel as manifest cargo, but we can arrange for pet couriers in some cases."
    },
    {
      question: "How do you ensure my pet stays hydrated?",
      answer: "Crates are fitted with water bowls, and airline staff are trained to check on pets during layovers."
    }
  ];

  return (
    <ServiceAnimations>
    <div className="flex flex-col min-h-screen bg-white font-sans overflow-x-hidden">
      {/* Header Section */}
      <section
        className="w-full min-h-[220px] md:h-[268px] relative flex flex-col items-center justify-center overflow-hidden text-center py-10 md:py-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/petrelocation.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1
          data-animate="service-title"
          className="text-white font-semibold tracking-tight z-10 text-[28px] md:text-[32px]"
          style={{
            fontFamily: "var(--font-public-sans), 'Public Sans', sans-serif",
          }}
        >
          Pet Relocation
        </h1>
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mt-4 text-white/80 z-10 text-[13px] md:text-[14px]">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <span className="text-white/60 font-light">
            <svg
              width="10"
              height="10"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </span>
          <span data-animate="service-desc" className="text-white font-medium">Pet Relocation</span>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-12 md:py-16 lg:py-20 flex-grow">

        {/* Why Choose Section (Relocation) */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 md:gap-12 lg:gap-16">

          {/* Left Column: Image */}
          <div data-animate="service-image" className="w-full lg:w-1/2 flex justify-center">
            <img
              src="/images/handled.png"
              alt="Your Pet's Journey Handled With Care"
              className="rounded-[24px] lg:rounded-[32px] object-cover w-full max-w-[581px] h-auto aspect-[1/1.05]"
            />
          </div>

          {/* Right Column: Text Content */}
          <div data-animate="service-text" className="w-full lg:w-1/2 max-w-[580px] text-center lg:text-left">
            <h2 className="text-[26px] md:text-[32px] lg:text-[36px] font-normal text-[#0A0A0A] leading-tight" style={{ fontFamily: "var(--font-public-sans), 'Public Sans', sans-serif" }}>
              Your Pet’s Journey, <br className="hidden lg:block" />
              <span style={{ color: "#FFC501" }}>Handled With Care</span>
            </h2>

            <p className="mt-4 text-[15px] lg:text-[16px] text-[#4A5565] leading-relaxed">
              Relocating with pets can be complicated — paperwork, travel arrangements, safety, and comfort. Our relocation experts handle everything so you can focus on settling into your new home while we take care of your furry family member.
            </p>

            {/* Feature Grid */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-x-8 lg:gap-x-10 gap-y-10 items-start text-left">

              {/* Feature 1 */}
              <div data-animate="feature-item" className="flex flex-col gap-3">
                <div className="w-[40px] h-[40px] lg:w-[44px] lg:h-[44px] rounded-full flex items-center justify-center shadow-sm" style={{ backgroundColor: "#FFC501" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-0.5-3 0-4.5 1.5L13 8 4.8 6.2c-0.5-0.1-1.1 0.1-1.5 0.5l-0.3 0.3c-0.4 0.4-0.6 1.1-0.3 1.7l7.1 3.5-3.5 3.5-2.2-0.5c-0.4-0.1-0.9 0-1.2 0.3l-0.3 0.3c-0.4 0.4-0.5 1.1-0.1 1.5l2.2 2.2 2.2 2.2c0.4 0.4 1.1 0.3 1.5-0.1l0.3-0.3c0.3-0.3 0.4-0.8 0.3-1.2l-0.5-2.2 3.5-3.5 3.5 7.1c0.6 0.3 1.3 0.1 1.7-0.3l0.3-0.3c0.4-0.4 0.6-1 0.5-1.5z" /></svg>
                </div>
                <h3 className="text-[17px] lg:text-[18px] font-semibold text-[#0A0A0A]" style={{ fontFamily: "var(--font-public-sans), sans-serif" }}>Domestic & International Relocation</h3>
                <p className="text-[13px] lg:text-[14px] text-[#6E6E6E] leading-relaxed">Seamless moves across cities or countries with expert planning.</p>
              </div>

              {/* Feature 2 */}
              <div data-animate="feature-item" className="flex flex-col gap-3">
                <div className="w-[40px] h-[40px] lg:w-[44px] lg:h-[44px] rounded-full flex items-center justify-center shadow-sm" style={{ backgroundColor: "#FFC501" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" /></svg>
                </div>
                <h3 className="text-[17px] lg:text-[18px] font-semibold text-[#0A0A0A]" style={{ fontFamily: "var(--font-public-sans), sans-serif" }}>Vet-Approved Travel Preparation</h3>
                <p className="text-[13px] lg:text-[14px] text-[#6E6E6E] leading-relaxed">Health checks and clearances to ensure safe travel readiness.</p>
              </div>

              {/* Feature 3 */}
              <div data-animate="feature-item" className="flex flex-col gap-3">
                <div className="w-[40px] h-[40px] lg:w-[44px] lg:h-[44px] rounded-full flex items-center justify-center shadow-sm" style={{ backgroundColor: "#FFC501" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13" /><polyline points="16 8 20 8 23 11 23 16 16 16" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" /></svg>
                </div>
                <h3 className="text-[17px] lg:text-[18px] font-semibold text-[#0A0A0A]" style={{ fontFamily: "var(--font-public-sans), sans-serif" }}>Door-To-Door Pickup & Delivery</h3>
                <p className="text-[13px] lg:text-[14px] text-[#6E6E6E] leading-relaxed">Safe pickup from your home and delivery to your new doorstep.</p>
              </div>

              {/* Feature 4 */}
              <div data-animate="feature-item" className="flex flex-col gap-3">
                <div className="w-[40px] h-[40px] lg:w-[44px] lg:h-[44px] rounded-full flex items-center justify-center shadow-sm" style={{ backgroundColor: "#FFC501" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>
                </div>
                <h3 className="text-[17px] lg:text-[18px] font-semibold text-[#0A0A0A]" style={{ fontFamily: "var(--font-public-sans), sans-serif" }}>Documentation & Compliance Support</h3>
                <p className="text-[13px] lg:text-[14px] text-[#6E6E6E] leading-relaxed">Complete help with permits, certificates, and regulations.</p>
              </div>

            </div>
          </div>

        </div>
      </main>

      {/* How It Works Section */}
      <section className="bg-white w-full py-16 md:py-20 border-t border-gray-100">
        <div className="max-w-[1440px] mx-auto w-full px-4 sm:px-6 lg:px-12">
          <h2 data-animate="service-title" className="text-black text-[26px] md:text-[32px] lg:text-[36px] font-normal text-center mb-12 md:mb-16">
            How It <span className="text-[#FFC501]">Works?</span>
          </h2>

          <div className="flex flex-col lg:flex-row items-stretch justify-center gap-8 lg:gap-6 relative">
            {/* Step 1 */}
            <div data-animate="service-card" className="w-full max-w-[380px] border border-[#C8C8C8] rounded-2xl p-6 lg:p-8 pt-10 flex flex-col items-center text-center mx-auto lg:mx-0 transition-all hover:border-[#FFC501] group shadow-sm">
              <div className="h-[90px] lg:h-[110px] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <img src="/images/consultation&assessment.png" alt="Consultation & Assessment" className="h-full object-contain" />
              </div>
              <h3 className="text-black text-[18px] lg:text-[20px] font-bold mb-4">Consultation & Assessment</h3>
              <p className="text-[#4A5565] text-[13px] lg:text-[14px] leading-relaxed">
                We understand your pet’s needs, travel details, and relocation requirements. Comprehensive health examination to ensure your pet is fit to travel.
              </p>
            </div>

            {/* Arrow 1 */}
            <div className="flex lg:hidden items-center justify-center -my-4 z-10">
              <div className="w-8 h-8 rounded-full bg-[#FFC501] flex items-center justify-center shadow-sm">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 5v14M5 12l7 7 7-7"></path>
                </svg>
              </div>
            </div>

            <div className="hidden lg:flex items-center justify-center z-10 -mx-4 flex-shrink-0">
              <div className="w-10 h-10 rounded-full bg-[#FFC501] flex items-center justify-center shadow-md">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </div>
            </div>

            {/* Step 2 */}
            <div data-animate="service-card" className="w-full max-w-[380px] border border-[#C8C8C8] rounded-2xl p-6 lg:p-8 pt-10 flex flex-col items-center text-center mx-auto lg:mx-0 transition-all hover:border-[#FFC501] group shadow-sm">
              <div className="h-[90px] lg:h-[110px] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <img src="/images/travel.png" alt="Travel Plan & Documentation" className="h-full object-contain" />
              </div>
              <h3 className="text-black text-[18px] lg:text-[20px] font-bold mb-4">Travel Plan & Documentation</h3>
              <p className="text-[#4A5565] text-[13px] lg:text-[14px] leading-relaxed">
                A customized travel plan with complete paperwork and compliance handled.
              </p>
            </div>

            {/* Arrow 2 */}
            <div className="flex lg:hidden items-center justify-center -my-4 z-10">
              <div className="w-8 h-8 rounded-full bg-[#FFC501] flex items-center justify-center shadow-sm">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 5v14M5 12l7 7 7-7"></path>
                </svg>
              </div>
            </div>

            <div className="hidden lg:flex items-center justify-center z-10 -mx-4 flex-shrink-0">
              <div className="w-10 h-10 rounded-full bg-[#FFC501] flex items-center justify-center shadow-md">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </div>
            </div>

            {/* Step 3 */}
            <div data-animate="service-card" className="w-full max-w-[380px] border border-[#C8C8C8] rounded-2xl p-6 lg:p-8 pt-10 flex flex-col items-center text-center mx-auto lg:mx-0 transition-all hover:border-[#FFC501] group shadow-sm">
              <div className="h-[90px] lg:h-[110px] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <img src="/images/arival.png" alt="Arrival & Delivery" className="h-full object-contain" />
              </div>
              <h3 className="text-black text-[18px] lg:text-[20px] font-bold mb-4">Arrival & Delivery</h3>
              <p className="text-[#4A5565] text-[13px] lg:text-[14px] leading-relaxed">
                Comfortable, secure transit with trained handlers and regular monitoring. Smooth arrival coordination and safe handover at your destination.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What we Offer Section */}
      <section
        className="w-full py-16 md:py-20 flex flex-col items-center"
        style={{
          background: "linear-gradient(to bottom, #F6F5F2, #FFFFFF)"
        }}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 w-full">
          {/* Section Heading */}
          <h2 data-animate="service-title" className="text-center mb-12 md:mb-16 text-[26px] md:text-[32px] lg:text-[36px] font-normal text-[#0A0A0A]" style={{ fontFamily: "var(--font-public-sans), 'Public Sans', sans-serif" }}>
            What we <span style={{ color: "#FFC501" }}>Offer</span>?
          </h2>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 justify-items-center w-full">
            {[
              { title: "Travel Planning", desc: "We plan the safest and fastest route tailored to your pet’s breed, age, and comfort needs.", img: "/images/offer1.png" },
              { title: "Documentation", desc: "Complete assistance with health certificates, permits, and airline requirements.", img: "/images/offer2.png" },
              { title: "Pickup & Delivery", desc: "Safe transport from your home to the destination.", img: "/images/offer3.png" },
              { title: "Comfort & Safety", desc: "Trained handlers ensure your pet is relaxed and safe throughout the journey.", img: "/images/offer4.png" }
            ].map((card, index) => (
              <div
                key={index}
                data-animate="service-card"
                className="flex flex-col bg-[#F6F5F2] rounded-[32px] overflow-hidden shadow-sm w-full max-w-[300px] min-h-[500px] h-full group hover:shadow-md transition-all"
              >
                {/* Image Section */}
                <div className="w-full aspect-[4/5] overflow-hidden">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Text Content */}
                <div className="p-6 md:p-8 flex flex-col gap-3">
                  <h3 className="text-[18px] lg:text-[20px] font-bold text-[#0A0A0A]" style={{ fontFamily: "var(--font-public-sans), 'Public Sans', sans-serif" }}>
                    {card.title}
                  </h3>
                  <p className="text-[13px] lg:text-[14px] text-[#4A5565] leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expert Tips & Guides Section */}
      <section className="py-16 md:py-20 bg-white flex flex-col items-center w-full">
        <div className="w-full max-w-[1240px] px-4">
          <h2 className="text-black text-center mb-4 font-normal text-[26px] md:text-[32px] lg:text-[36px]" style={{ fontFamily: "var(--font-public-sans), 'Public Sans', sans-serif" }}>
            Expert Tips, <span className="text-[#FFC501]">Pet Care Guides</span>
          </h2>
          <p className="text-center mb-12 lg:mb-16 mx-auto max-w-[800px] text-[15px] lg:text-[16px] text-[#000000CC] leading-relaxed">
            Discover helpful articles on pet care, training, nutrition, travel, and everything you need to give your furry and feathered companions the best life possible.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Tip Card 1 */}
            <div className="bg-[#F6F6F6] rounded-[32px] lg:rounded-[40px] p-6 flex flex-col md:flex-row items-center gap-6 group cursor-pointer transition-all hover:shadow-lg relative overflow-hidden h-full">
              <div className="w-full md:w-[45%] aspect-square md:aspect-auto md:h-full overflow-hidden rounded-[24px] lg:rounded-[28px] relative z-10 shadow-sm">
                <img src="/images/guide1.png" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" alt="Expert Tip 1" />
              </div>

              <div className="w-full md:w-[55%] flex flex-col justify-between h-auto md:h-full py-2 relative z-10">
                <div>
                  <span className="text-[10px] lg:text-[11px] text-[#FFC501] font-bold uppercase tracking-widest mb-4 block">PET TRAVEL</span>
                  <h3 className="text-[18px] lg:text-[20px] text-black font-semibold leading-tight pr-4">
                    10 Things Every New Pet Owner Should Know Before Traveling With Pets
                  </h3>
                </div>
                <div className="self-end mt-6">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm transition-all text-[#FFC501] group-hover:bg-[#FFC501] group-hover:text-white">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M17 7H7M17 7V17" /></svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Tip Card 2 */}
            <div className="bg-[#F6F6F6] rounded-[32px] lg:rounded-[40px] p-6 flex flex-col md:flex-row items-center gap-6 group cursor-pointer transition-all hover:shadow-lg relative overflow-hidden h-full">
              <div className="w-full md:w-[45%] aspect-square md:aspect-auto md:h-full overflow-hidden rounded-[24px] lg:rounded-[28px] relative z-10 shadow-sm">
                <img src="/images/guide2.png" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" alt="Expert Tip 2" />
              </div>

              <div className="w-full md:w-[55%] flex flex-col justify-between h-auto md:h-full py-2 relative z-10">
                <div>
                  <span className="text-[10px] lg:text-[11px] text-[#FFC501] font-bold uppercase tracking-widest mb-4 block">PET RELOCATION</span>
                  <h3 className="text-[18px] lg:text-[20px] text-black font-semibold leading-tight pr-4">
                    Moving Abroad with Your Furry Friend: A Comprehensive Step-by-Step Guide
                  </h3>
                </div>
                <div className="self-end mt-6">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm transition-all text-[#FFC501] group-hover:bg-[#FFC501] group-hover:text-white">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M17 7H7M17 7V17" /></svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Happy Families Gallery Section */}
      <section className="w-full bg-white py-12 md:py-16 lg:py-20 flex flex-col items-center">
        <div className="w-full max-w-[1240px] px-4 relative overflow-hidden h-auto lg:h-[1350px]">

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {[1, 2, 3, 4].map((col) => (
              <div key={col} className="flex flex-col gap-4 lg:gap-6">
                <img src={`/images/hp${(col-1)*4 + 1}.png`} className="w-full object-cover rounded-xl h-auto aspect-[1/1.2] shadow-sm" alt="Happy Family" />
                <img src={`/images/hp${(col-1)*4 + 2}.png`} className="w-full object-cover rounded-xl h-auto aspect-[1/0.8] shadow-sm" alt="Happy Family" />
                <img src={`/images/hp${(col-1)*4 + 3}.png`} className="w-full object-cover rounded-xl h-auto aspect-[1/1] shadow-sm" alt="Happy Family" />
                <img src={`/images/hp${(col-1)*4 + 4}.png`} className="w-full object-cover rounded-xl h-auto aspect-[1/1.1] shadow-sm" alt="Happy Family" />
              </div>
            ))}
          </div>

          {/* Bottom Fade & Title Overlay */}
          <div className="relative lg:absolute bottom-0 left-0 w-full lg:h-[400px] flex items-end justify-center py-6 md:py-8 lg:pb-12 bg-gradient-to-t from-white via-white/95 to-transparent z-20 mt-8 lg:mt-0">
            <h2 className="text-black text-center text-[26px] md:text-[36px] lg:text-[42px] font-normal leading-tight px-4" style={{ fontFamily: "var(--font-public-sans), 'Public Sans', sans-serif" }}>
              <span className="text-[#FFC501]">10,000+</span> Happy Families Served
            </h2>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection items={relocationFAQs} />

      {/* Relocation CTA Section */}
      <section className="w-full bg-[#F5F9FE] py-16 md:py-20 lg:py-0 lg:min-h-[591px] flex flex-col overflow-hidden justify-center">
        <div className="max-w-[1240px] mx-auto w-full px-4 flex flex-col lg:flex-row items-center justify-between gap-10 text-center lg:text-left">
          <div className="max-w-[800px]">
            <h2 className="text-[26px] md:text-[34px] lg:text-[40px] font-normal text-[#0A0A0A] leading-tight" style={{ fontFamily: "var(--font-public-sans), 'Public Sans', sans-serif" }}>
              Relocating made easy for you and your pet — let <span style={{ color: "#FFC501" }}>our specialists</span> manage every step of the move.
            </h2>
            <p className="mt-6 text-[15px] lg:text-[18px] text-[#4A5565] leading-relaxed">
              From paperwork to pickup, we handle the logistics so you can focus on your new adventure.
            </p>
            <button
              className="mt-8 bg-black text-white rounded-full px-10 h-[50px] lg:h-[56px] text-[16px] lg:text-[18px] font-medium hover:bg-gray-900 transition-all shadow-lg active:scale-95"
            >
              Connect Now!
            </button>
          </div>

          <div className="w-full lg:w-[40%] flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[400px] aspect-square rounded-full bg-[#FFC501]/10 flex items-center justify-center p-4">
               <img
                src="/images/relocation0.png"
                alt="Pet Relocation Specialists"
                className="w-full h-full object-contain relative z-10"
              />
            </div>
          </div>
        </div>
      </section>

    </div>
    </ServiceAnimations>
  );
}
