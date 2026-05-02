"use client";

import React, { useState, useEffect } from "react";

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className="relative w-full rounded-t-lg overflow-hidden h-[400px] sm:h-[450px] lg:h-[500px]"
    >
      {/* Slide 1 */}
      <div
        className={`absolute inset-0 w-full h-full bg-[linear-gradient(180deg,#FFC501_0%,rgba(255,255,255,0.1)_100%)] flex flex-col items-center transition-opacity duration-1000 ${currentSlide === 0 ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
          }`}
      >
        {/* Paw Icons Background Top */}
        <div className="absolute top-[8%] left-[18%] opacity-100 z-0">
          <img src="/images/petfoot.png" style={{ width: "41px", height: "37px" }} className="-rotate-12 drop-shadow-sm select-none" alt="" />
        </div>
        <div className="absolute top-[6%] left-[24%] opacity-100 z-0">
          <img src="/images/petfoot.png" style={{ width: "41px", height: "37px" }} className="rotate-12 drop-shadow-sm select-none" alt="" />
        </div>

        <div className="absolute top-[8%] right-[24%] opacity-100 z-0">
          <img src="/images/petfoot.png" style={{ width: "41px", height: "37px" }} className="rotate-12 drop-shadow-sm select-none" alt="" />
        </div>
        <div className="absolute top-[6%] right-[18%] opacity-100 z-0">
          <img src="/images/petfoot.png" style={{ width: "41px", height: "37px" }} className="-rotate-12 drop-shadow-sm select-none" alt="" />
        </div>

        {/* Paw Icons Background Bottom */}
        <div className="absolute bottom-[20%] left-[6%] opacity-90 z-0">
          <img src="/images/petfoot.png" style={{ width: "41px", height: "37px" }} className="-rotate-12 select-none" alt="" />
        </div>
        <div className="absolute bottom-[17%] left-[1%] opacity-90 z-0">
          <img src="/images/petfoot.png" style={{ width: "41px", height: "37px" }} className="rotate-12 select-none" alt="" />
        </div>

        <div className="absolute bottom-[20%] right-[6%] opacity-90 z-0">
          <img src="/images/petfoot.png" style={{ width: "41px", height: "37px" }} className="rotate-12 select-none" alt="" />
        </div>
        <div className="absolute bottom-[25%] right-[10%] opacity-90 z-0">
          <img src="/images/petfoot.png" style={{ width: "41px", height: "37px" }} className="-rotate-12 select-none" alt="" />
        </div>

        {/* New Paw Icons under Exclusive on right side */}
        <div className="absolute bottom-[35%] right-[5%] opacity-100 z-100">
          <img src="/images/petfoot.png" style={{ width: "41px", height: "37px" }} className="rotate-12 select-none" alt="" />
        </div>
        <div className="absolute bottom-[38%] right-[0.2%] opacity-80 z-100">
          <img src="/images/petfoot.png" style={{ width: "41px", height: "37px" }} className="-rotate-12 select-none" alt="" />
        </div>

        {/* Layer 1: Background Text (Solid White) */}
        <div className="absolute top-0 bottom-0 flex flex-col items-stretch justify-start pointer-events-none select-none z-10 overflow-visible pt-[3%]" style={{ width: "105%" }}>
          <p className="text-black tracking-[0.6em] text-xs sm:text-sm md:text-[24px] uppercase mb-0 mt-0 text-center">
            Explore
          </p>
          <svg viewBox="0 0 100 18" className="w-full" style={{ height: "clamp(60px, 18vw, 240px)" }} aria-hidden="true">
            <text x="50%" y="85%" textAnchor="middle" textLength="100%" lengthAdjust="spacing" fontWeight="900" fontFamily="'Arial Black', 'Impact', sans-serif" fill="white" fontSize="18">
              EXCLUSIVE
            </text>
          </svg>
        </div>

        {/* Layer 2: Pets Foreground Image */}
        <div className="absolute inset-x-0 bottom-0 z-20 overflow-hidden pointer-events-none" style={{ height: "85%" }}>
          <img src="/images/pets.png" alt="Pets" className="w-full h-full object-cover object-top pointer-events-none" />
        </div>

        {/* Layer 3: Foreground outline text */}
        <div className="absolute top-0 bottom-0 flex flex-col items-stretch justify-start pointer-events-none select-none z-30 overflow-visible pt-[3%]" style={{ left: "-2.5%", width: "105%" }}>
          <p className="text-transparent font-semibold tracking-[0.6em] text-xs sm:text-sm md:text-[24px] uppercase mb-0 mt-0 select-none">
            Explore
          </p>
          <svg viewBox="0 0 100 18" className="w-full" style={{ height: "clamp(60px, 18vw, 240px)" }} aria-hidden="true">
            <text x="50%" y="85%" textAnchor="middle" textLength="100%" lengthAdjust="spacing" fontWeight="900" fontFamily="'Arial Black', 'Impact', sans-serif" fill="transparent" stroke="white" strokeWidth="0.15" fontSize="18">
              EXCLUSIVE
            </text>
          </svg>
        </div>

        {/* White fade overlay on top of pet image */}
        <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-white via-white/40 to-transparent pointer-events-none z-[25]"></div>

        {/* Button Overlay at Bottom Center */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-40">
          <button className="bg-black hover:bg-gray-800 text-white py-3 px-8 rounded-full transition-all shadow-lg hover:shadow-xl hover:scale-105 text-xs sm:text-[15px] whitespace-nowrap">
            View Puppies
          </button>
        </div>
      </div>

      {/* Slide 2 */}
      <div
        className={`absolute inset-0 w-full h-full bg-[linear-gradient(180deg,#FC8AE3_0%,rgba(255,255,255,0.1)_100%)] flex flex-col items-center transition-opacity duration-1000 ${currentSlide === 1 ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
          }`}
      >
        {/* Layer 1: Main solid text behind the dog */}
        <div className="absolute inset-x-0 pointer-events-none select-none z-10 overflow-hidden" style={{ top: "-4%" }}>
          <svg viewBox="0 0 1000 120" preserveAspectRatio="xMidYMid meet" className="w-full" style={{ height: "clamp(100px, 30vw, 380px)" }} aria-hidden="true">
            {/* Main text: solid white fill only */}
            <text x="500" y="60" textAnchor="middle" textLength="995" lengthAdjust="spacingAndGlyphs" fontWeight="900" fontFamily="'Arial Black', 'Impact', sans-serif" fill="white" fontSize="120">SIGNATURE BREEDS</text>
          </svg>
        </div>

        {/* Layer 2: Pets Foreground Image */}
        <div className="absolute top-[65%] left-[39%] -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none flex justify-center items-center" style={{ height: "230%", width: "100%" }}>
          <img src="/images/slide2.png" alt="Signature Breeds Dog" className="w-auto h-full object-contain object-center pointer-events-none mix-blend-multiply" />
        </div>

        {/* Layer 3: 3D Depth Outline in front of the dog */}
        <div className="absolute inset-x-0 pointer-events-none select-none z-30 overflow-hidden drop-shadow-sm" style={{ top: "-4%" }}>
          <svg viewBox="0 0 1000 120" preserveAspectRatio="xMidYMid meet" className="w-full" style={{ height: "clamp(100px, 30vw, 380px)" }} aria-hidden="true">
            {/* 3D Depth Layer: thin white outline only */}
            <text x="505" y="65" textAnchor="middle" textLength="995" lengthAdjust="spacingAndGlyphs" fontWeight="900" fontFamily="'Arial Black', 'Impact', sans-serif" fill="none" stroke="white" strokeWidth="0.8" opacity="0.6" fontSize="120">SIGNATURE BREEDS</text>
          </svg>
        </div>

        {/* Layer 3 removed since the text in slide 2 doesn't overlap the dog */}

        {/* Floating breed buttons Left */}
        <div className="absolute top-[55%] left-[4%] z-40">
          <button className="bg-white text-black font-bold py-1 rounded-full border border-gray-100 shadow-[0_0_15px_rgba(252,138,227,0.4)] text-[7px] sm:text-[9px] lg:text-[11px] w-[90px] sm:w-[110px] lg:w-[140px] text-center hover:scale-110 hover:ring-4 hover:ring-white/40 transition-all" style={{ fontFamily: "'Inter', sans-serif" }}>
            LABRADOR
          </button>
        </div>
        <div className="absolute top-[66%] left-[4%] z-40">
          <button className="bg-white text-black font-bold py-1 rounded-full border border-gray-100 shadow-[0_0_15px_rgba(252,138,227,0.4)] text-[7px] sm:text-[9px] lg:text-[11px] w-[90px] sm:w-[110px] lg:w-[140px] text-center hover:scale-110 hover:ring-4 hover:ring-white/40 transition-all" style={{ fontFamily: "'Inter', sans-serif" }}>
            GOLDEN
          </button>
        </div>
        <div className="absolute top-[77%] left-[4%] z-40">
          <button className="bg-white text-black font-bold py-1 rounded-full border border-gray-100 shadow-[0_0_15px_rgba(252,138,227,0.4)] text-[7px] sm:text-[9px] lg:text-[11px] w-[90px] sm:w-[110px] lg:w-[140px] text-center hover:scale-110 hover:ring-4 hover:ring-white/40 transition-all" style={{ fontFamily: "'Inter', sans-serif" }}>
            COCKER SPANIEL
          </button>
        </div>

        <div className="absolute top-[61%] left-[20%] z-40">
          <button className="bg-white text-black font-bold py-1 rounded-full border border-gray-100 shadow-[0_0_15px_rgba(252,138,227,0.4)] text-[7px] sm:text-[9px] lg:text-[11px] w-[90px] sm:w-[110px] lg:w-[140px] text-center hover:scale-110 hover:ring-4 hover:ring-white/40 transition-all" style={{ fontFamily: "'Inter', sans-serif" }}>
            BEAGLE
          </button>
        </div>
        <div className="absolute top-[72%] left-[20%] z-40">
          <button className="bg-white text-black font-bold py-1 rounded-full border border-gray-100 shadow-[0_0_15px_rgba(252,138,227,0.4)] text-[7px] sm:text-[9px] lg:text-[11px] w-[90px] sm:w-[110px] lg:w-[140px] text-center hover:scale-110 hover:ring-4 hover:ring-white/40 transition-all" style={{ fontFamily: "'Inter', sans-serif" }}>
            PUG
          </button>
        </div>

        {/* Floating breed buttons Right */}
        <div className="absolute top-[61%] right-[20%] z-40">
          <button className="bg-white text-black font-bold py-1 rounded-full border border-gray-100 shadow-[0_0_15px_rgba(252,138,227,0.4)] text-[7px] sm:text-[9px] lg:text-[11px] w-[90px] sm:w-[110px] lg:w-[140px] text-center hover:scale-110 hover:ring-4 hover:ring-white/40 transition-all" style={{ fontFamily: "'Inter', sans-serif" }}>
            ROTTWEILER
          </button>
        </div>
        <div className="absolute top-[72%] right-[20%] z-40">
          <button className="bg-white text-black font-bold py-1 rounded-full border border-gray-100 shadow-[0_0_15px_rgba(252,138,227,0.4)] text-[7px] sm:text-[9px] lg:text-[11px] w-[90px] sm:w-[110px] lg:w-[140px] text-center hover:scale-110 hover:ring-4 hover:ring-white/40 transition-all" style={{ fontFamily: "'Inter', sans-serif" }}>
            DOBERMAN
          </button>
        </div>

        <div className="absolute top-[55%] right-[4%] z-40">
          <button className="bg-white text-black font-bold py-1 rounded-full border border-gray-100 shadow-[0_0_15px_rgba(252,138,227,0.4)] text-[7px] sm:text-[9px] lg:text-[11px] w-[90px] sm:w-[110px] lg:w-[140px] text-center hover:scale-110 hover:ring-4 hover:ring-white/40 transition-all" style={{ fontFamily: "'Inter', sans-serif" }}>
            HUSKY
          </button>
        </div>
        <div className="absolute top-[66%] right-[4%] z-40">
          <button className="bg-white text-black font-bold py-1 rounded-full border border-gray-100 shadow-[0_0_15px_rgba(252,138,227,0.4)] text-[7px] sm:text-[9px] lg:text-[11px] w-[90px] sm:w-[110px] lg:w-[140px] text-center hover:scale-110 hover:ring-4 hover:ring-white/40 transition-all" style={{ fontFamily: "'Inter', sans-serif" }}>
            GERMAN
          </button>
        </div>
        <div className="absolute top-[77%] right-[4%] z-40">
          <button className="bg-white text-black font-bold py-1 rounded-full border border-gray-100 shadow-[0_0_15px_rgba(252,138,227,0.4)] text-[7px] sm:text-[9px] lg:text-[11px] w-[90px] sm:w-[110px] lg:w-[140px] text-center hover:scale-110 hover:ring-4 hover:ring-white/40 transition-all" style={{ fontFamily: "'Inter', sans-serif" }}>
            SHIH TZU
          </button>
        </div>

        {/* White fog overlay exactly like first slide */}
        <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-white via-white/40 to-transparent pointer-events-none z-[25]"></div>

        {/* Bottom Button */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-40">
          <button className="bg-black hover:bg-gray-800 text-white py-3 rounded-full transition-all shadow-lg hover:shadow-xl hover:scale-105 text-xs sm:text-[15px] whitespace-nowrap w-[280px] text-center">
            Get Your Furry Friend Home
          </button>
        </div>
      </div>

      {/* Slide 3 - Aviary Collection */}
      <div
        className={`absolute inset-0 w-full h-full flex items-center transition-opacity duration-1000 ${currentSlide === 2 ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
          }`}
        style={{ background: "linear-gradient(180deg, #E5E7EB 0%, #F9FAFB 100%)" }}
      >
        {/* Left Content */}
        <div className="relative z-30 flex flex-col pl-[2%] sm:pl-[3%] w-[70%] h-full justify-center">
          {/* Title Block */}
          <div className="mb-10 flex flex-col items-start">
            <p
              className="text-black font-medium italic uppercase tracking-[0.2em] m-0 p-0 ml-[2%] sm:ml-[4%]"
              style={{ fontSize: "clamp(14px, 1.8vw, 26px)", fontFamily: "'Inter', sans-serif" }}
            >
              CURATED
            </p>
            <div className="flex items-baseline gap-0 m-0 p-0 -mt-2">
              <h2
                className="font-black uppercase leading-[0.8] text-[#5B92BD] relative m-0 p-0"
                style={{ 
                  fontSize: "clamp(60px, 11vw, 170px)", 
                  fontFamily: "'Arial Black', 'Impact', sans-serif",
                  WebkitTextStroke: "4px white",
                  filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.1))"
                }}
              >
                AVIARY
              </h2>
              <p
                className="text-black font-medium italic uppercase tracking-[0.05em] m-0 p-0 -ml-6 sm:-ml-8"
                style={{ fontSize: "clamp(16px, 2.5vw, 34px)", fontFamily: "'Inter', sans-serif" }}
              >
                COLLECTION
              </p>
            </div>
          </div>

          {/* Breed Buttons Grid */}
          <div className="flex flex-col gap-2 sm:gap-4 mt-2 max-w-full">
            <div className="flex flex-row flex-wrap gap-2 sm:gap-4 w-full">
              <button className="bg-[#5B92BD] text-white font-bold py-1 sm:py-1.5 rounded-full text-[9px] sm:text-[11px] lg:text-[13px] uppercase tracking-wider border-[2px] sm:border-[3px] border-[#A9C7DF] shadow-[0_0_15px_rgba(91,146,189,0.3)] hover:scale-105 transition-all w-[140px] sm:w-[180px] lg:w-[220px] text-center" style={{ fontFamily: "'Inter', sans-serif" }}>
                ROSE-RINGED PARAKEET
              </button>
              <button className="bg-[#5B92BD] text-white font-bold py-1 sm:py-1.5 rounded-full text-[9px] sm:text-[11px] lg:text-[13px] uppercase tracking-wider border-[2px] sm:border-[3px] border-[#A9C7DF] shadow-[0_0_15px_rgba(91,146,189,0.3)] hover:scale-105 transition-all w-[140px] sm:w-[180px] lg:w-[220px] text-center" style={{ fontFamily: "'Inter', sans-serif" }}>
                INDIAN RINGNECK PARROT
              </button>
              <button className="bg-[#5B92BD] text-white font-bold py-1 sm:py-1.5 rounded-full text-[9px] sm:text-[11px] lg:text-[13px] uppercase tracking-wider border-[2px] sm:border-[3px] border-[#A9C7DF] shadow-[0_0_15px_rgba(91,146,189,0.3)] hover:scale-105 transition-all w-[140px] sm:w-[180px] lg:w-[220px] text-center" style={{ fontFamily: "'Inter', sans-serif" }}>
                INDIAN SILVERBILL
              </button>
            </div>
            <div className="flex flex-row flex-wrap gap-2 sm:gap-4 w-full">
              <button className="bg-[#5B92BD] text-white font-bold py-1 sm:py-1.5 rounded-full text-[9px] sm:text-[11px] lg:text-[13px] uppercase tracking-wider border-[2px] sm:border-[3px] border-[#A9C7DF] shadow-[0_0_15px_rgba(91,146,189,0.3)] hover:scale-105 transition-all w-[140px] sm:w-[180px] lg:w-[220px] text-center" style={{ fontFamily: "'Inter', sans-serif" }}>
                ALEXANDRINE PARAKEET
              </button>
              <button className="bg-[#5B92BD] text-white font-bold py-1 sm:py-1.5 rounded-full text-[9px] sm:text-[11px] lg:text-[13px] uppercase tracking-wider border-[2px] sm:border-[3px] border-[#A9C7DF] shadow-[0_0_15px_rgba(91,146,189,0.3)] hover:scale-105 transition-all w-[140px] sm:w-[180px] lg:w-[220px] text-center" style={{ fontFamily: "'Inter', sans-serif" }}>
                COCKATIEL
              </button>
            </div>
          </div>
        </div>

        {/* Right: Bird Image */}
        <div className="absolute right-[-8%] bottom-0 z-20 pointer-events-none h-[80%] sm:h-full w-[63%] flex items-end justify-end overflow-visible">
          <img
            src="/images/slide3.png"
            alt="Aviary Bird"
            className="h-[120%] lg:h-[150%] w-auto object-contain object-right-bottom drop-shadow-2xl"
          />
        </div>

        {/* Bottom White Fade/Fog - Reduced for this slide to show bird clearly */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white via-white/20 to-transparent pointer-events-none z-[25]"></div>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-40">
          <button className="bg-black hover:bg-gray-800 text-white py-3 rounded-full transition-all shadow-lg hover:shadow-xl hover:scale-105 text-xs sm:text-[15px] whitespace-nowrap w-[280px] text-center">
            See Available Birds
          </button>
        </div>
      </div>
    </div>
  );
}
