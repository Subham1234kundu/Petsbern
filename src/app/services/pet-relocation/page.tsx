"use client";

import React from "react";
import Link from "next/link";
import FAQSection from "@/components/FAQSection";

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
    <div className="flex flex-col min-h-screen bg-white font-sans">
      {/* Header Section */}
      <section
        className="w-full h-[268px] relative flex flex-col items-center justify-center overflow-hidden text-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/petrelocation.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1
          className="text-white font-semibold tracking-tight z-10"
          style={{
            fontSize: "32px",
            fontFamily: "var(--font-public-sans), 'Public Sans', sans-serif",
          }}
        >
          Pet Relocation
        </h1>
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mt-4 text-white/80 z-10 text-[14px]">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <span className="text-white/60 font-light">
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </span>
          <span className="text-white">Pet Relocation</span>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-16 flex-grow">

        {/* Why Choose Section (Relocation) */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">

          {/* Left Column: Image */}
          <div className="flex-shrink-0">
            <img
              src="/images/handled.png"
              alt="Your Pet's Journey Handled With Care"
              className="rounded-[32px] object-cover"
              style={{ width: "581px", height: "608px" }}
            />
          </div>

          {/* Right Column: Text Content */}
          <div className="flex-1 max-w-[580px]">
            <h2 style={{ fontSize: "36px", fontWeight: 400, fontFamily: "var(--font-public-sans), 'Public Sans', sans-serif", color: "#0A0A0A", lineHeight: "1.2" }}>
              Your Pet’s Journey, <br />
              <span style={{ color: "#FFC501" }}>Handled With Care</span>
            </h2>

            <p className="mt-4" style={{ fontSize: "16px", color: "#4A5565", lineHeight: "1.6" }}>
              Relocating with pets can be complicated — paperwork, travel arrangements, safety, and comfort. Our relocation experts handle everything so you can focus on settling into your new home while we take care of your furry family member.
            </p>

            {/* Feature Grid */}
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10 items-start">

              {/* Feature 1 */}
              <div className="flex flex-col gap-3">
                <div className="w-[44px] h-[44px] rounded-full flex items-center justify-center" style={{ backgroundColor: "#FFC501" }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-0.5-3 0-4.5 1.5L13 8 4.8 6.2c-0.5-0.1-1.1 0.1-1.5 0.5l-0.3 0.3c-0.4 0.4-0.6 1.1-0.3 1.7l7.1 3.5-3.5 3.5-2.2-0.5c-0.4-0.1-0.9 0-1.2 0.3l-0.3 0.3c-0.4 0.4-0.5 1.1-0.1 1.5l2.2 2.2 2.2 2.2c0.4 0.4 1.1 0.3 1.5-0.1l0.3-0.3c0.3-0.3 0.4-0.8 0.3-1.2l-0.5-2.2 3.5-3.5 3.5 7.1c0.6 0.3 1.3 0.1 1.7-0.3l0.3-0.3c0.4-0.4 0.6-1 0.5-1.5z" /></svg>
                </div>
                <h3 style={{ fontSize: "18px", fontWeight: 400, color: "#0A0A0A", fontFamily: "var(--font-public-sans), sans-serif" }}>Domestic & International Relocation</h3>
                <p style={{ fontSize: "14px", color: "#6E6E6E", lineHeight: "1.6" }}>Seamless moves across cities or countries with expert planning.</p>
              </div>

              {/* Feature 2 */}
              <div className="flex flex-col gap-3">
                <div className="w-[44px] h-[44px] rounded-full flex items-center justify-center" style={{ backgroundColor: "#FFC501" }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" /></svg>
                </div>
                <h3 style={{ fontSize: "18px", fontWeight: 400, color: "#0A0A0A", fontFamily: "var(--font-public-sans), sans-serif" }}>Vet-Approved Travel Preparation</h3>
                <p style={{ fontSize: "14px", color: "#6E6E6E", lineHeight: "1.6" }}>Health checks and clearances to ensure safe travel readiness.</p>
              </div>

              {/* Feature 3 */}
              <div className="flex flex-col gap-3">
                <div className="w-[44px] h-[44px] rounded-full flex items-center justify-center" style={{ backgroundColor: "#FFC501" }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13" /><polyline points="16 8 20 8 23 11 23 16 16 16" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" /></svg>
                </div>
                <h3 style={{ fontSize: "18px", fontWeight: 400, color: "#0A0A0A", fontFamily: "var(--font-public-sans), sans-serif" }}>Door-To-Door Pickup & Delivery</h3>
                <p style={{ fontSize: "14px", color: "#6E6E6E", lineHeight: "1.6" }}>Safe pickup from your home and delivery to your new doorstep.</p>
              </div>

              {/* Feature 4 */}
              <div className="flex flex-col gap-3">
                <div className="w-[44px] h-[44px] rounded-full flex items-center justify-center" style={{ backgroundColor: "#FFC501" }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>
                </div>
                <h3 style={{ fontSize: "18px", fontWeight: 400, color: "#0A0A0A", fontFamily: "var(--font-public-sans), sans-serif" }}>Documentation & Compliance Support</h3>
                <p style={{ fontSize: "14px", color: "#6E6E6E", lineHeight: "1.6" }}>Complete help with permits, certificates, and regulations.</p>
              </div>

            </div>
          </div>

        </div>
      </main>

      {/* How It Works Section */}
      <section className="bg-white w-full py-20 border-t border-gray-100">
        <div className="max-w-[1440px] mx-auto w-full px-4 sm:px-6 lg:px-12">
          <h2 className="text-black text-[36px] font-normal text-center mb-10">
            How It <span className="text-[#FFC501]">Works?</span>
          </h2>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-2 relative ">
            {/* Step 1 */}
            <div className="w-[356px] h-[380px] border border-[#C8C8C8] rounded-xl p-6 pt-10 flex flex-col items-center text-center">
              <div className="h-[110px] flex items-center justify-center mb-6">
                <img src="/images/consultation&assessment.png" alt="Consultation & Assessment" className="h-full object-contain" />
              </div>
              <h3 className="text-black text-[20px] font-bold mb-4">Consultation & Assessment</h3>
              <p className="text-[#4A5565] text-[14px] leading-relaxed">
                We understand your pet’s needs, travel details, and relocation requirements. Comprehensive health examination to ensure your pet is fit to travel.
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
            <div className="w-[356px] h-[380px] border border-[#C8C8C8] rounded-xl p-6 pt-10 flex flex-col items-center text-center">
              <div className="h-[110px] flex items-center justify-center mb-6">
                <img src="/images/travel.png" alt="Travel Plan & Documentation" className="h-full object-contain" />
              </div>
              <h3 className="text-black text-[20px] font-bold mb-4">Travel Plan & Documentation</h3>
              <p className="text-[#4A5565] text-[14px] leading-relaxed">
                A customized travel plan with complete paperwork and compliance handled.
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
            <div className="w-[356px] h-[380px] border border-[#C8C8C8] rounded-xl p-6 pt-10 flex flex-col items-center text-center">
              <div className="h-[110px] flex items-center justify-center mb-6">
                <img src="/images/arival.png" alt="Arrival & Delivery" className="h-full object-contain" />
              </div>
              <h3 className="text-black text-[20px] font-bold mb-4">Arrival & Delivery</h3>
              <p className="text-[#4A5565] text-[14px] leading-relaxed">
                Comfortable, secure transit with trained handlers and regular monitoring. Smooth arrival coordination and safe handover at your destination.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What we Offer Section */}
      <section
        className="w-full py-20 flex flex-col items-center"
        style={{
          height: "894px",
          background: "linear-gradient(to bottom, #F6F5F2, #FFFFFF)"
        }}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 w-full">
          {/* Section Heading */}
          <h2 className="text-center mb-16" style={{ fontSize: "36px", fontWeight: 400, fontFamily: "var(--font-public-sans), 'Public Sans', sans-serif", color: "#0A0A0A" }}>
            What we <span style={{ color: "#FFC501" }}>Offer</span>?
          </h2>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 justify-items-center w-full">
            {[
              {
                title: "Travel Planning",
                desc: "We plan the safest and fastest route tailored to your pet’s breed, age, and comfort needs.",
                img: "/images/offer1.png"
              },
              {
                title: "Documentation",
                desc: "Complete assistance with health certificates, permits, and airline requirements.",
                img: "/images/offer2.png"
              },
              {
                title: "Pickup & Delivery",
                desc: "Safe transport from your home to the destination.",
                img: "/images/offer3.png"
              },
              {
                title: "Comfort & Safety",
                desc: "Safe transport from your home to the destination.",
                img: "/images/offer4.png"
              }
            ].map((card, index) => (
              <div
                key={index}
                className="flex flex-col bg-[#F6F5F2] rounded-[32px] overflow-hidden shadow-sm"
                style={{ width: "280px", height: "604px" }}
              >
                {/* Image Section */}
                <div className="w-full h-[403px] overflow-hidden">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Text Content */}
                <div className="p-8 flex flex-col gap-4">
                  <h3 style={{ fontSize: "20px", fontWeight: 500, color: "#0A0A0A", fontFamily: "var(--font-public-sans), 'Public Sans', sans-serif" }}>
                    {card.title}
                  </h3>
                  <p style={{ fontSize: "14px", color: "#4A5565", lineHeight: "1.6" }}>
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expert Tips & Guides Section */}
      <section className="py-32 bg-white flex flex-col items-center w-full">
        <div className="w-full max-w-[1240px] px-4">
          <h2 className="text-black text-center mb-4 font-normal" style={{ fontSize: "36px", fontFamily: "var(--font-public-sans), 'Public Sans', sans-serif" }}>
            Expert Tips, <span className="text-[#FFC501]">Pet Care Guides</span>
          </h2>
          <p className="text-center mb-16 mx-auto max-w-[800px]" style={{ fontSize: "16px", fontWeight: 400, color: "#000000CC", lineHeight: "1.6" }}>
            Discover helpful articles on pet care, training, nutrition, travel, and everything you need to give your furry and feathered companions the best life possible.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            {/* Tip Card 1 */}
            <div className="bg-[#F6F6F6] rounded-[40px] p-6 h-[355px] flex items-center gap-8 group cursor-pointer transition-all hover:shadow-lg relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-[25%] z-0 pointer-events-none">
                <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                  <path d="M 0 0 L 85 0 C 78 0 75 100 68 100 L 0 100 Z" fill="#FFFFFF" />
                </svg>
              </div>

              <div className="w-[45%] h-full overflow-hidden rounded-[28px] relative z-10 shadow-sm">
                <img src="/images/guide1.png" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" alt="Expert Tip 1" />
              </div>

              <div className="w-[55%] flex flex-col justify-between h-full py-4 relative z-10">
                <div className="pt-2">
                  <span className="text-[11px] text-[#FFC501] font-bold uppercase tracking-widest mb-10 block ml-2">PET TRAVEL</span>
                  <h3 className="text-[20px] text-black font-normal leading-[1.4] pr-4 ml-2">
                    10 Things Every New Pet Owner Should Know Before Traveling With Pets
                  </h3>
                </div>
                <div className="self-end mr-2 mb-2">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm transition-all text-[#FFC501] group-hover:bg-[#FFC501] group-hover:text-white">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M17 7H7M17 7V17" /></svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Tip Card 2 */}
            <div className="bg-[#F6F6F6] rounded-[40px] p-6 h-[355px] flex items-center gap-8 group cursor-pointer transition-all hover:shadow-lg relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-[25%] z-0 pointer-events-none">
                <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                  <path d="M 0 0 L 85 0 C 78 0 75 100 68 100 L 0 100 Z" fill="#FFFFFF" />
                </svg>
              </div>

              <div className="w-[45%] h-full overflow-hidden rounded-[28px] relative z-10 shadow-sm">
                <img src="/images/guide2.png" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" alt="Expert Tip 2" />
              </div>

              <div className="w-[55%] flex flex-col justify-between h-full py-4 relative z-10">
                <div className="pt-2">
                  <span className="text-[11px] text-[#FFC501] font-bold uppercase tracking-widest mb-10 block ml-2">PET TRAVEL</span>
                  <h3 className="text-[20px] text-black font-normal leading-[1.4] pr-4 ml-2">
                    10 Things Every New Pet Owner Should Know Before Traveling With Pets
                  </h3>
                </div>
                <div className="self-end mr-2 mb-2">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm transition-all text-[#FFC501] group-hover:bg-[#FFC501] group-hover:text-white">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M17 7H7M17 7V17" /></svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Happy Families Gallery Section */}
      <section className="w-full bg-white pt-20 pb-32 flex flex-col items-center">
        <div className="w-full max-w-[1240px] px-4 relative overflow-hidden" style={{ height: "1350px" }}>

          <div className="grid grid-cols-4 gap-6 h-full">
            {/* Column 1 */}
            <div className="flex flex-col gap-6">
              <img src="/images/hp1.png" className="w-full object-cover rounded-xl" style={{ height: "230px" }} alt="Happy Family 1" />
              <img src="/images/hp2.png" className="w-full object-cover rounded-xl" style={{ height: "346px" }} alt="Happy Family 2" />
              <img src="/images/hp3.png" className="w-full object-cover rounded-xl" style={{ height: "255px" }} alt="Happy Family 3" />
              <img src="/images/hp4.png" className="w-full object-cover rounded-xl" style={{ height: "280px" }} alt="Happy Family 4" />
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-6">
              <img src="/images/hp5.png" className="w-full object-cover rounded-xl" style={{ height: "331px" }} alt="Happy Family 5" />
              <img src="/images/hp6.png" className="w-full object-cover rounded-xl" style={{ height: "231px" }} alt="Happy Family 6" />
              <img src="/images/hp7.png" className="w-full object-cover rounded-xl" style={{ height: "411px" }} alt="Happy Family 7" />
              <img src="/images/hp8.png" className="w-full object-cover rounded-xl" style={{ height: "248px" }} alt="Happy Family 8" />
            </div>

            {/* Column 3 */}
            <div className="flex flex-col gap-6">
              <img src="/images/hp9.png" className="w-full object-cover rounded-xl" style={{ height: "373px" }} alt="Happy Family 9" />
              <img src="/images/hp10.png" className="w-full object-cover rounded-xl" style={{ height: "411px" }} alt="Happy Family 10" />
              <img src="/images/hp11.png" className="w-full object-cover rounded-xl" style={{ height: "228px" }} alt="Happy Family 11" />
              <img src="/images/hp12.png" className="w-full object-cover rounded-xl" style={{ height: "217px" }} alt="Happy Family 12" />
            </div>

            {/* Column 4 */}
            <div className="flex flex-col gap-6">
              <img src="/images/hp13.png" className="w-full object-cover rounded-xl" style={{ height: "238px" }} alt="Happy Family 13" />
              <img src="/images/hp14.png" className="w-full object-cover rounded-xl" style={{ height: "371px" }} alt="Happy Family 14" />
              <img src="/images/hp15.png" className="w-full object-cover rounded-xl" style={{ height: "208px" }} alt="Happy Family 15" />
              <img src="/images/hp16.png" className="w-full object-cover rounded-xl" style={{ height: "270px" }} alt="Happy Family 16" />
            </div>
          </div>

          {/* Bottom Fade & Title Overlay */}
          <div className="absolute bottom-0 left-0 w-full h-[400px] flex items-end justify-center pb-20 bg-gradient-to-t from-white via-white to-transparent z-20">
            <h2 className="text-black text-center" style={{ fontSize: "42px", fontWeight: 400, fontFamily: "var(--font-public-sans), 'Public Sans', sans-serif" }}>
              <span className="text-[#FFC501]">10,000+</span> Happy Families Served
            </h2>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection items={relocationFAQs} />

      {/* Relocation CTA Section */}
      <section className="w-full bg-[#F5F9FE] flex flex-col overflow-hidden" style={{ height: "591px" }}>
        {/* Top Half: Text & Button */}
        <div className="max-w-[1240px] mx-auto w-full px-4 pt-20 pb-12 flex items-center justify-between gap-8">
          <h2 className="max-w-[800px]" style={{ fontSize: "40px", fontWeight: 400, fontFamily: "var(--font-public-sans), 'Public Sans', sans-serif", color: "#0A0A0A", lineHeight: "1.2" }}>
            Relocating made easy for you and your pet — let <span style={{ color: "#FFC501" }}>our specialists</span> manage every step of the move.
          </h2>

          <button
            className="bg-black mb-4 text-white rounded-full flex items-center justify-center hover:opacity-90 transition-opacity flex-shrink-0"
            style={{ width: "208px", height: "48px", fontSize: "18px", fontWeight: 500, fontFamily: "var(--font-public-sans), sans-serif" }}
          >
            Connect Now!
          </button>
        </div>

        {/* Bottom Half: Image */}
        <div className="flex-grow w-full overflow-hidden">
          <img
            src="/images/relocation0.png"
            alt="Pet Relocation Specialists"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

    </div>
  );
}
