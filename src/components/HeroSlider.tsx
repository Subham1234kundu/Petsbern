"use client";

import React, { useState, useEffect } from "react";

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === 0 ? 1 : 0));
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className="relative w-full rounded-t-lg overflow-hidden"
      style={{ height: "500px", maxHeight: "500px" }}
    >
      {/* Slide 1 */}
      <div
        className={`absolute inset-0 w-full h-full bg-[linear-gradient(180deg,#FFC501_0%,rgba(255,255,255,0.1)_100%)] flex flex-col items-center transition-opacity duration-1000 ${
          currentSlide === 0 ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
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
        className={`absolute inset-0 w-full h-full bg-[linear-gradient(180deg,#FC8AE3_0%,rgba(255,255,255,0.1)_100%)] flex flex-col items-center transition-opacity duration-1000 ${
          currentSlide === 1 ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
        }`}
      >
        {/* SIGNATURE BREEDS Heading — 3D embossed style matching reference */}
        <div className="absolute inset-x-0 top-0 pointer-events-none select-none z-10 overflow-hidden" style={{ paddingTop: "3%" }}>
          <svg viewBox="0 0 1000 130" preserveAspectRatio="xMidYMid meet" className="w-full" style={{ height: "clamp(55px, 16vw, 210px)" }} aria-hidden="true">
            {/* 3D Extrusion: single thin white outline shifted down-right to create depth */}
            <text x="503" y="106" textAnchor="middle" textLength="997" lengthAdjust="spacingAndGlyphs" fontWeight="900" fontFamily="'Arial Black', 'Impact', sans-serif" fill="transparent" stroke="white" strokeWidth="1" fontSize="100">SIGNATURE BREEDS</text>
            {/* Main text — solid white fill + optional thin outline border */}
            <text x="500" y="103" textAnchor="middle" textLength="997" lengthAdjust="spacingAndGlyphs" fontWeight="900" fontFamily="'Arial Black', 'Impact', sans-serif" fill="white" stroke="white" strokeWidth="0.5" paintOrder="stroke" fontSize="100">SIGNATURE BREEDS</text>
          </svg>
        </div>

        {/* Layer 2: Pets Foreground Image */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20 pointer-events-none flex justify-center items-end" style={{ height: "90%" }}>
          <img src="/images/slide2.png" alt="Signature Breeds Dog" className="w-auto h-full object-contain object-bottom pointer-events-none mix-blend-multiply" />
        </div>

        {/* Layer 3 removed since the text in slide 2 doesn't overlap the dog */}

        {/* Floating breed buttons Left */}
        <div className="absolute top-[30%] left-[4%] z-40">
          <button className="bg-white text-black font-bold py-2 px-5 sm:px-6 rounded-full shadow-[0_0_15px_rgba(252,138,227,0.8)] text-[10px] sm:text-[12px] whitespace-nowrap hover:scale-105 transition-transform">
            LABRADOR RETRIEVER
          </button>
        </div>
        <div className="absolute top-[45%] left-[4%] z-40">
          <button className="bg-white text-black font-bold py-2 px-5 sm:px-6 rounded-full shadow-[0_0_15px_rgba(252,138,227,0.8)] text-[10px] sm:text-[12px] whitespace-nowrap hover:scale-105 transition-transform">
            GOLDEN RETRIEVER
          </button>
        </div>
        <div className="absolute top-[60%] left-[4%] z-40">
          <button className="bg-white text-black font-bold py-2 px-5 sm:px-6 rounded-full shadow-[0_0_15px_rgba(252,138,227,0.8)] text-[10px] sm:text-[12px] whitespace-nowrap hover:scale-105 transition-transform">
            COCKER SPANIEL
          </button>
        </div>

        <div className="absolute top-[38%] left-[23%] z-40">
          <button className="bg-white text-black font-bold py-2 px-8 sm:px-10 rounded-full shadow-[0_0_15px_rgba(252,138,227,0.8)] text-[10px] sm:text-[12px] whitespace-nowrap hover:scale-105 transition-transform">
            BEAGLE
          </button>
        </div>
        <div className="absolute top-[53%] left-[23%] z-40">
          <button className="bg-white text-black font-bold py-2 px-8 sm:px-10 rounded-full shadow-[0_0_15px_rgba(252,138,227,0.8)] text-[10px] sm:text-[12px] whitespace-nowrap hover:scale-105 transition-transform">
            PUG
          </button>
        </div>

        {/* Floating breed buttons Right */}
        <div className="absolute top-[42%] right-[23%] z-40">
          <button className="bg-white text-black font-bold py-2 px-8 sm:px-10 rounded-full shadow-[0_0_15px_rgba(252,138,227,0.8)] text-[10px] sm:text-[12px] whitespace-nowrap hover:scale-105 transition-transform">
            ROTTWEILER
          </button>
        </div>
        <div className="absolute top-[57%] right-[23%] z-40">
          <button className="bg-white text-black font-bold py-2 px-8 sm:px-10 rounded-full shadow-[0_0_15px_rgba(252,138,227,0.8)] text-[10px] sm:text-[12px] whitespace-nowrap hover:scale-105 transition-transform">
            DOBERMAN PINSCHER
          </button>
        </div>

        <div className="absolute top-[30%] right-[4%] z-40">
          <button className="bg-white text-black font-bold py-2 px-5 sm:px-6 rounded-full shadow-[0_0_15px_rgba(252,138,227,0.8)] text-[10px] sm:text-[12px] whitespace-nowrap hover:scale-105 transition-transform">
            SIBERIAN HUSKY
          </button>
        </div>
        <div className="absolute top-[45%] right-[4%] z-40">
          <button className="bg-white text-black font-bold py-2 px-5 sm:px-6 rounded-full shadow-[0_0_15px_rgba(252,138,227,0.8)] text-[10px] sm:text-[12px] whitespace-nowrap hover:scale-105 transition-transform">
            GERMAN SHEPHERD
          </button>
        </div>
        <div className="absolute top-[60%] right-[4%] z-40">
          <button className="bg-white text-black font-bold py-2 px-5 sm:px-6 rounded-full shadow-[0_0_15px_rgba(252,138,227,0.8)] text-[10px] sm:text-[12px] whitespace-nowrap hover:scale-105 transition-transform">
            SHIH TZU
          </button>
        </div>

        {/* White fog overlay exactly like first slide */}
        <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-white via-white/40 to-transparent pointer-events-none z-[25]"></div>

        {/* Bottom Button */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-40">
          <button className="bg-black hover:bg-gray-800 text-white py-3 px-8 rounded-full transition-all shadow-lg hover:shadow-xl hover:scale-105 text-xs sm:text-[15px] whitespace-nowrap">
            Get Your Furry Friend Home
          </button>
        </div>
      </div>
    </div>
  );
}
