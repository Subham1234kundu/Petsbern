"use client";

import React from "react";
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

  const sectionShell =
    "max-w-[1200px] xl:max-w-[1440px] 2xl:max-w-[1680px] 3xl:max-w-[1840px] mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-14 3xl:px-16";

  return (
    <ServiceAnimations>
    <div className="flex flex-col min-h-screen bg-white font-sans overflow-x-hidden">
      {/* Header + overlapping stats bar */}
      <div className="relative mb-[72px] sm:mb-[80px] md:mb-[70px] lg:mb-[66.5px]">
        <section
          className="w-full min-h-[380px] h-[52vw] max-h-[420px] sm:min-h-[460px] sm:h-[520px] sm:max-h-none md:h-[600px] lg:h-[680px] 2xl:h-[760px] 3xl:h-[840px] relative flex items-center overflow-hidden"
          style={{
            backgroundImage: "url('/images/petRelocationHeader.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className={`relative z-10 ${sectionShell} pb-20 sm:pb-24 md:pb-20`}>
            <div className="max-w-[560px] sm:max-w-[640px] lg:max-w-[700px] 2xl:max-w-[780px] 3xl:max-w-[860px] text-left">
              <h1
                data-animate="service-title"
                className="text-white tracking-tight leading-[1.15]"
              >
                <span
                  className="block font-semibold text-[28px] sm:text-[40px] md:text-[48px] lg:text-[52px] 2xl:text-[58px] 3xl:text-[64px]"
                  style={{
                    fontFamily: "var(--font-public-sans), 'Public Sans', sans-serif",
                  }}
                >
                  Safe, Stress-Free Travel
                </span>
                <span className="block text-[28px] sm:text-[40px] md:text-[48px] lg:text-[52px] 2xl:text-[58px] 3xl:text-[64px]">
                  <span
                    className="font-semibold"
                    style={{
                      fontFamily: "var(--font-public-sans), 'Public Sans', sans-serif",
                    }}
                  >
                    for Your{" "}
                  </span>
                  <span
                    className="font-normal text-[34px] sm:text-[52px] md:text-[64px] 2xl:text-[72px] 3xl:text-[80px] leading-none"
                    style={{
                      fontFamily: "var(--font-schoolbell), 'Schoolbell', cursive",
                    }}
                  >
                    Furry Family
                  </span>
                </span>
              </h1>

              <p
                data-animate="service-desc"
                className="mt-4 sm:mt-5 md:mt-6 text-white/90 font-normal text-[14px] sm:text-[16px] md:text-[18px] 2xl:text-[20px] 3xl:text-[22px] leading-relaxed max-w-[520px] 2xl:max-w-[600px]"
                style={{
                  fontFamily: "var(--font-public-sans), 'Public Sans', sans-serif",
                }}
              >
                Whether you&apos;re moving across the city or to another country, PetsBARN handles every detail — from vet clearances and IATA-approved crates to airline coordination and door-to-door delivery.
              </p>
            </div>
          </div>
        </section>

        {/* Stats bar — half on image, half below */}
        <div
          className="absolute left-1/2 top-full z-20 flex w-[94%] sm:w-[90%] md:w-[85%] lg:w-[80%] max-w-[1200px] xl:max-w-[1320px] 2xl:max-w-[1440px] h-auto min-h-[96px] sm:min-h-[120px] md:h-[133px] 2xl:h-[148px] 3xl:h-[160px] -translate-x-1/2 -translate-y-1/2 bg-white"
          style={{ fontFamily: "var(--font-public-sans), 'Public Sans', sans-serif" }}
        >
          {[
            {
              img: "/images/10000+.png",
              value: "10,000+",
              label: "Pets Relocated",
            },
            {
              img: "/images/25+.png",
              value: "25+",
              label: "Countries Served",
            },
            {
              img: "/images/100%25.png",
              value: "100%",
              label: "Safe Arrivals",
            },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="relative flex flex-1 flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-3 md:gap-5 px-1.5 sm:px-3 md:px-4 py-3 sm:py-0"
            >
              {index < 2 && (
                <span
                  className="absolute right-0 top-1/2 -translate-y-1/2 w-px h-[36px] sm:h-[48px] md:h-[56px] 2xl:h-[64px] bg-[#7E7E7E]"
                  aria-hidden="true"
                />
              )}
              <img
                src={stat.img}
                alt={stat.label}
                className="w-[36px] h-[36px] sm:w-[56px] sm:h-[56px] md:w-[72px] md:h-[72px] 2xl:w-[80px] 2xl:h-[80px] object-contain flex-shrink-0"
              />
              <div className="flex flex-col text-center sm:text-left">
                <span className="text-[15px] sm:text-[22px] md:text-[32px] 2xl:text-[36px] 3xl:text-[40px] font-bold text-black leading-none">
                  {stat.value}
                </span>
                <span className="mt-0.5 sm:mt-1 text-[9px] sm:text-[12px] md:text-[15px] 2xl:text-[16px] font-normal text-black leading-tight">
                  {stat.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* How It Works Section */}
      <section className="bg-white w-full pt-10 sm:pt-14 md:pt-20 2xl:pt-28 3xl:pt-32">
        <div className={sectionShell}>
          <h2
            data-animate="service-title"
            className="text-center mb-8 sm:mb-10 md:mb-14 text-[26px] sm:text-[34px] md:text-[42px] 2xl:text-[48px] 3xl:text-[52px] font-semibold px-2"
            style={{ fontFamily: "var(--font-public-sans), 'Public Sans', sans-serif" }}
          >
            <span className="text-black">How Pet Relocation </span>
            <span className="text-[#FFC501]">Works?</span>
          </h2>

          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-5 md:gap-6">
            {[
              {
                step: "Step 1",
                title: "Free Consultation",
                img: "/images/freeconsultation.png",
                desc: "We assess your pet's breed, age, health status, and destination requirements to create a custom travel plan.",
              },
              {
                step: "Step 2",
                title: "Vet & Documentation",
                img: "/images/vet%26doc.png",
                desc: "Health certificate, vaccination records, import permits, microchipping, and NOC from government vet.",
              },
              {
                step: "Step 3",
                title: "Crate & Prep",
                img: "/images/crate%26prop.png",
                desc: "IATA-approved crate sizing, crate training support, and comfort bedding — keeping anxiety low.",
              },
              {
                step: "Step 4",
                title: "Travel & Escort",
                img: "/images/travel%26escort.png",
                desc: "Airline coordination, live tracking updates, and optional in-cabin or cargo escort by our handlers.",
              },
              {
                step: "Step 5",
                title: "Arrival & Clearance",
                img: "/images/arrival%26clearance.png",
                desc: "Customs & quarantine coordination at destination, plus door-to-door final delivery to your new home.",
              },
            ].map((card) => (
              <div
                key={card.step}
                data-animate="service-card"
                className="w-full h-auto min-h-0 xl:min-h-[407px] bg-white border border-[#B8B9BD] rounded-lg flex flex-col items-center text-center px-4 py-6 sm:py-7 2xl:px-5 2xl:py-8"
                style={{ fontFamily: "var(--font-public-sans), 'Public Sans', sans-serif" }}
              >
                <span
                  className="inline-flex items-center justify-center px-4 py-1.5 rounded-full text-white text-[12px] sm:text-[13px] font-semibold"
                  style={{
                    background: "linear-gradient(to right, #FFC501, #DC2626)",
                  }}
                >
                  {card.step}
                </span>

                <div className="mt-5 mb-4 h-[90px] sm:h-[100px] md:h-[110px] 2xl:h-[120px] w-full flex items-center justify-center">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="max-h-full max-w-[120px] 2xl:max-w-[140px] object-contain"
                  />
                </div>

                <h3 className="text-[18px] sm:text-[20px] 2xl:text-[22px] font-semibold text-[#0A0A0A] leading-tight mb-3">
                  {card.title}
                </h3>

                <p className="text-[13px] sm:text-[14px] 2xl:text-[15px] text-[#4A5565] leading-relaxed">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Full-height image under the boxes */}
        <div className="relative w-full mt-[-40px] sm:mt-[-60px] md:mt-[-80px] lg:mt-[-100px]">
          <img
            src="/images/petRelocationgradient.jpg"
            alt="Pet relocation journey"
            className="w-full h-auto block"
          />
          <div
            className="absolute inset-x-0 top-0 h-[80px] sm:h-[120px] md:h-[160px] lg:h-[180px] pointer-events-none"
            style={{
              background: "linear-gradient(to bottom, #FFFFFF 0%, rgba(255,255,255,0) 100%)",
            }}
            aria-hidden="true"
          />
          <div
            className="absolute inset-x-0 bottom-0 h-[120px] sm:h-[180px] md:h-[240px] lg:h-[320px] pointer-events-none"
            style={{
              background: "linear-gradient(to top, #FFFFFF 0%, #FFFFFF 25%, rgba(255,255,255,0.9) 45%, rgba(255,255,255,0.55) 70%, rgba(255,255,255,0) 100%)",
            }}
            aria-hidden="true"
          />
        </div>
      </section>

      {/* Relocation Packages Section */}
      <section className="w-full py-12 sm:py-16 md:py-20 2xl:py-28 3xl:py-32 flex flex-col items-center bg-white">
        <div className={sectionShell}>
          <div className="text-center mb-8 md:mb-10">
            <h2
              data-animate="service-title"
              className="text-[26px] sm:text-[34px] md:text-[42px] 2xl:text-[48px] 3xl:text-[52px] font-semibold text-[#0A0A0A]"
              style={{ fontFamily: "var(--font-public-sans), 'Public Sans', sans-serif" }}
            >
              Relocation Packages
            </h2>
            <p
              className="mt-1 md:mt-2 text-[16px] sm:text-[20px] md:text-[24px] 2xl:text-[26px] font-normal text-[#0A0A0A]"
              style={{ fontFamily: "var(--font-public-sans), 'Public Sans', sans-serif" }}
            >
              Tailored solutions for every move
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6 w-full">
            {[
              {
                title: "City-to-City Move",
                img: "/images/CitytoCityMove.png",
                desc: "Road transport in climate-controlled vehicles, vet check on dispatch, real-time updates, and home delivery. Covers all major Indian cities.",
              },
              {
                title: "International Relocation",
                img: "/images/internationalRelocation.png",
                desc: "End-to-end management — IATA crates, export NOC, import permits, airline booking, quarantine stay, and customs clearance at destination.",
              },
              {
                title: "Birds & Exotic Pets",
                img: "/images/Birds%26ExoticPets.png",
                desc: "CITES permits, specialized carriers, and expert handlers for parakeets, cockatiels, and other aviary birds — domestic and international.",
              },
              {
                title: "Pet Travel Insurance",
                img: "/images/PetTravelInsurance.png",
                desc: "Coverage for injury, illness, and loss during transit. We coordinate with partner insurers to provide comprehensive protection.",
              },
            ].map((card) => (
              <div
                key={card.title}
                data-animate="service-card"
                className="flex flex-col items-center text-center gap-3 md:gap-4 bg-[#F0F2F5] rounded-lg px-4 sm:px-6 md:px-8 pt-4 md:pt-5 pb-5 md:pb-6 w-full min-h-0 md:min-h-[420px] xl:min-h-[466px] 2xl:min-h-[500px]"
              >
                <div className="flex-1 w-full min-h-[180px] sm:min-h-[220px] md:min-h-0 flex items-center justify-center">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="w-[88%] sm:w-[90%] max-w-[360px] xl:max-w-[400px] 2xl:max-w-[440px] h-auto max-h-[220px] sm:max-h-[260px] md:max-h-[280px] xl:max-h-[300px] 2xl:max-h-[320px] object-contain"
                  />
                </div>
                <div className="flex flex-col w-full shrink-0">
                  <h3
                    className="text-[18px] sm:text-[20px] 2xl:text-[22px] font-semibold text-[#0A0A0A] leading-tight"
                    style={{ fontFamily: "var(--font-inter), Inter, sans-serif" }}
                  >
                    {card.title}
                  </h3>
                  <p
                    className="mt-2 text-[14px] sm:text-[15px] md:text-[16px] 2xl:text-[17px] font-normal text-[#1F2937] leading-relaxed"
                    style={{ fontFamily: "var(--font-inter), Inter, sans-serif" }}
                  >
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Relocation Routes */}
      <section className="w-full py-12 sm:py-16 md:py-20 2xl:py-28 3xl:py-32 bg-white">
        <div className={sectionShell}>
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2
              data-animate="service-title"
              className="text-[26px] sm:text-[34px] md:text-[42px] 2xl:text-[48px] 3xl:text-[52px] font-semibold text-[#0A0A0A]"
              style={{ fontFamily: "var(--font-public-sans), 'Public Sans', sans-serif" }}
            >
              Popular Relocation Routes
            </h2>
            <p
              className="mt-2 text-[14px] sm:text-[16px] md:text-[18px] 2xl:text-[20px] font-normal text-[#6B7280]"
              style={{ fontFamily: "var(--font-public-sans), 'Public Sans', sans-serif" }}
            >
              Frequently handled destinations from India
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-5">
            {[
              {
                from: "Mumbai",
                to: "Delhi / Bangalore / Chennai",
                duration: "1-2 days (road) / 4-6 hrs (air)",
                docs: "Health cert, vaccination record",
                toColor: "#7C3AED",
              },
              {
                from: "India",
                to: "UAE / Dubai",
                duration: "8-12 hrs flight",
                docs: "Import permit, microchip, rabies titer test",
                toColor: "#DC2626",
              },
              {
                from: "India",
                to: "USA / Canada",
                duration: "14-22 hrs flight",
                docs: "USDA/CFIA health cert, rabies vaccine, microchip",
                toColor: "#0F766E",
              },
              {
                from: "India",
                to: "UK / Europe",
                duration: "10-15 hrs flight",
                docs: "EU health cert, tapeworm treatment, pet passport",
                toColor: "#2563EB",
              },
              {
                from: "India",
                to: "Singapore / Australia",
                duration: "12-24 hrs",
                docs: "Quarantine stay required (10-30 days), titer test",
                toColor: "#65A30D",
                className: "xl:col-start-2",
              },
              {
                from: "India",
                to: "Middle East",
                duration: "5-10 hrs flight",
                docs: "MOFAIC permit, health cert, microchip",
                toColor: "#A78BFA",
              },
            ].map((route) => (
              <div
                key={`${route.from}-${route.to}`}
                data-animate="service-card"
                className={`bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] p-4 sm:p-5 md:p-6 flex flex-col gap-3 ${route.className || ""}`}
                style={{ fontFamily: "var(--font-public-sans), 'Public Sans', sans-serif" }}
              >
                <div className="flex items-center gap-2.5">
                  <span className="w-6 h-6 rounded-full bg-[#22C55E] flex items-center justify-center flex-shrink-0">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </span>
                  <span className="text-[15px] md:text-[16px] 2xl:text-[17px] font-semibold text-[#0A0A0A]">{route.from}</span>
                </div>

                <p className="text-[12px] md:text-[13px] font-normal text-[#9CA3AF] pl-8">
                  {route.duration}
                </p>

                <div className="flex items-center gap-2.5">
                  <span
                    className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: route.toColor }}
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </span>
                  <span className="text-[15px] md:text-[16px] 2xl:text-[17px] font-semibold text-[#0A0A0A]">{route.to}</span>
                </div>

                <div className="mt-1 pt-1">
                  <p className="text-[12px] md:text-[13px] font-semibold text-[#0A0A0A]">
                    Document Required:
                  </p>
                  <p className="mt-1 text-[12px] md:text-[13px] font-normal text-[#4B5563] leading-relaxed">
                    {route.docs}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative w-full mt-8 sm:mt-10 md:mt-14 overflow-hidden">
          <img
            src="/images/map.png"
            alt="Popular relocation routes map"
            className="w-full h-auto block"
          />
          <div
            className="absolute inset-x-0 bottom-0 h-[80px] sm:h-[120px] md:h-[160px] lg:h-[180px] pointer-events-none"
            style={{
              background: "linear-gradient(to top, #FFFFFF 0%, rgba(255,255,255,0) 100%)",
            }}
            aria-hidden="true"
          />
        </div>
      </section>

      {/* Image row — under Popular Relocation Routes */}
      <section className="w-full bg-white pt-6 sm:pt-8 md:pt-12 lg:pt-16 pb-8 sm:pb-10 md:pb-16 flex flex-col items-center">
        <div className={sectionShell}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 md:gap-5 lg:gap-6">
            {[
              "/images/hp1.png",
              "/images/huskeyji.png",
              "/images/guide1.png",
              "/images/Birds%26ExoticPets.png",
            ].map((src, index) => (
              <div
                key={src}
                className="relative w-full aspect-[3/4] rounded-lg sm:rounded-xl overflow-hidden bg-[#F6F6F6]"
              >
                <img
                  src={src}
                  alt={`Pet relocation highlight ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <div
                  className="absolute inset-x-0 bottom-0 h-[50%] pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(to top, #FFFFFF 0%, rgba(255,255,255,0.9) 30%, rgba(255,255,255,0) 100%)",
                  }}
                  aria-hidden="true"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation We Handle */}
      <section className="w-full py-12 sm:py-16 md:py-20 2xl:py-28 3xl:py-32 bg-white">
        <div className="max-w-[1100px] 2xl:max-w-[1240px] 3xl:max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-12 w-full">
          <div className="text-center mb-8 sm:mb-10 md:mb-14">
            <h2
              data-animate="service-title"
              className="text-[26px] sm:text-[34px] md:text-[42px] 2xl:text-[48px] 3xl:text-[52px] font-semibold text-[#0A0A0A]"
              style={{ fontFamily: "var(--font-public-sans), 'Public Sans', sans-serif" }}
            >
              Documentation We Handle
            </h2>
            <p
              className="mt-2 md:mt-3 text-[14px] sm:text-[16px] md:text-[18px] 2xl:text-[20px] font-normal text-[#4B5563] px-2"
              style={{ fontFamily: "var(--font-public-sans), 'Public Sans', sans-serif" }}
            >
              Every paper, permit, and certificate — prepared by our team
            </p>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-x-8 lg:gap-x-16 xl:gap-x-20 gap-y-4 sm:gap-y-5 md:gap-y-6"
            style={{ fontFamily: "var(--font-public-sans), 'Public Sans', sans-serif" }}
          >
            {[
              "Veterinary Health Certificate (government endorsed)",
              "Vaccination records (rabies, DHPP, bordetella)",
              "Rabies antibody titer test (RNATT)",
              "Export NOC from DGFT / State Veterinary Dept",
              "CITES permit (for birds and exotic animals)",
              "Airline-specific pet travel forms",
              "Pet passport (EU / UK / Australia)",
              "Microchip certificate (ISO 11784/11785)",
              "Destination country import permit",
              "Customs declaration & airway bill",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <span className="mt-0.5 w-5 h-5 rounded-full bg-[#22C55E] flex items-center justify-center flex-shrink-0">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </span>
                <span className="text-[14px] sm:text-[15px] md:text-[16px] 2xl:text-[17px] font-normal text-[#1F2937] leading-snug">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IATA-Approved Travel Crates */}
      <section className="w-full py-12 sm:py-16 md:py-20 2xl:py-28 3xl:py-32 bg-white">
        <div className={sectionShell}>
          <div className="text-center mb-8 sm:mb-10 md:mb-14">
            <h2
              data-animate="service-title"
              className="text-[26px] sm:text-[34px] md:text-[42px] 2xl:text-[48px] 3xl:text-[52px] font-semibold text-[#0A0A0A] px-2"
              style={{ fontFamily: "var(--font-public-sans), 'Public Sans', sans-serif" }}
            >
              IATA-Approved Travel Crates
            </h2>
            <p
              className="mt-2 md:mt-3 text-[14px] sm:text-[16px] md:text-[18px] 2xl:text-[20px] font-normal text-[#4B5563] px-2"
              style={{ fontFamily: "var(--font-public-sans), 'Public Sans', sans-serif" }}
            >
              Proper crate sizing ensures safety and airline compliance.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-stretch lg:items-start gap-8 md:gap-10 lg:gap-12 xl:gap-16">
            <div className="w-full lg:w-[55%] grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-5">
              {[
                {
                  title: "XS — Toy Breeds",
                  breeds: "Chihuahua, Pomeranian, small Shih Tzu",
                  badge: "IATA 100 Series · 40×27×30 cm",
                  badgeBg: "#FEE2E2",
                  badgeText: "#DC2626",
                },
                {
                  title: "S — Small Dogs",
                  breeds: "Cocker Spaniel, Shih Tzu, Beagle",
                  badge: "IATA 200 Series · 53×35×38 cm",
                  badgeBg: "#FEF3C7",
                  badgeText: "#D97706",
                },
                {
                  title: "M — Medium Dogs",
                  breeds: "Labrador, Husky, Golden Retriever",
                  badge: "IATA 400 Series · 73×49×55 cm",
                  badgeBg: "#DCFCE7",
                  badgeText: "#15803D",
                },
                {
                  title: "L — Large Dogs",
                  breeds: "German Shepherd, Rottweiler, Mastiff",
                  badge: "IATA 500 Series · 92×61×69 cm",
                  badgeBg: "#EDE9FE",
                  badgeText: "#6D28D9",
                },
                {
                  title: "XL — Giant Breeds",
                  breeds: "Saint Bernard, Great Dane",
                  badge: "IATA 700 Series · 122×81×89 cm",
                  badgeBg: "#DBEAFE",
                  badgeText: "#1D4ED8",
                },
              ].map((crate) => (
                <div
                  key={crate.title}
                  data-animate="service-card"
                  className="bg-white rounded-2xl shadow-[0_8px_28px_rgba(0,0,0,0.08)] px-4 py-4 sm:px-5 sm:py-5 md:px-6 md:py-6 flex flex-col"
                  style={{ fontFamily: "var(--font-public-sans), 'Public Sans', sans-serif" }}
                >
                  <h3 className="text-[15px] sm:text-[16px] md:text-[17px] 2xl:text-[18px] font-semibold text-[#0A0A0A] leading-tight">
                    {crate.title}
                  </h3>
                  <p className="mt-1.5 text-[12px] sm:text-[13px] md:text-[14px] font-normal text-[#6B7280] leading-snug">
                    {crate.breeds}
                  </p>
                  <span
                    className="inline-flex self-start mt-3 px-2.5 sm:px-3 py-1 rounded-full text-[10px] sm:text-[11px] md:text-[12px] font-medium whitespace-normal sm:whitespace-nowrap"
                    style={{ backgroundColor: crate.badgeBg, color: crate.badgeText }}
                  >
                    {crate.badge}
                  </span>
                </div>
              ))}
            </div>

            <div className="w-full lg:w-[45%] flex flex-col items-center lg:items-end gap-5 sm:gap-6 md:gap-8 lg:sticky lg:top-28">
              <img
                src="/images/itta.png"
                alt="IATA"
                className="w-[100px] sm:w-[120px] md:w-[140px] xl:w-[160px] 2xl:w-[180px] h-auto object-contain"
              />
              <img
                src="/images/dogcage.png"
                alt="IATA-approved travel crate with pet"
                className="w-full max-w-[320px] sm:max-w-[400px] md:max-w-[440px] xl:max-w-[480px] 2xl:max-w-[520px] h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection
        items={relocationFAQs}
        subtitle="Common relocation queries answered"
      />

      {/* Relocation footer CTA */}
      <section className="w-full">
        <div className="w-full bg-[#F7F8FA]">
          <div className="max-w-[1200px] xl:max-w-[1440px] 2xl:max-w-[1680px] 3xl:max-w-[1840px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-8 sm:py-10 md:py-14 lg:py-16 2xl:py-20">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 sm:gap-6 md:gap-10">
              <div className="max-w-[720px] 2xl:max-w-[820px]">
                <h2
                  className="text-[24px] sm:text-[28px] md:text-[36px] lg:text-[42px] 2xl:text-[48px] 3xl:text-[52px] font-semibold text-black leading-tight tracking-tight"
                  style={{ fontFamily: "var(--font-public-sans), 'Public Sans', sans-serif" }}
                >
                  Ready to plan your pet&apos;s journey?
                </h2>
                <p className="mt-2 md:mt-3 text-[14px] sm:text-[15px] md:text-[17px] lg:text-[18px] 2xl:text-[20px] text-[#6B7280] leading-relaxed">
                  Get a free relocation quote in 24 hours — no commitment needed.
                </p>
              </div>
              <button
                type="button"
                className="shrink-0 w-full sm:w-auto self-stretch sm:self-center bg-black text-white rounded-full px-8 md:px-10 h-[48px] md:h-[52px] 2xl:h-[56px] text-[15px] md:text-[16px] 2xl:text-[18px] font-medium hover:bg-gray-900 transition-colors"
              >
                Get Free Quote
              </button>
            </div>
          </div>
        </div>
        <div className="w-full">
          <img
            src="/images/pets-relocationfooter.png"
            alt="Pet ready for travel in car cargo"
            className="w-full h-auto block object-cover max-h-[220px] sm:max-h-[280px] md:max-h-[360px] lg:max-h-none"
          />
        </div>
      </section>

    </div>
    </ServiceAnimations>
  );
}
