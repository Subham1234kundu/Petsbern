"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import gsap from "gsap";

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const animateSlide = useCallback((index: number) => {
    if (!containerRef.current) return;
    const slide = containerRef.current.querySelector(`[data-slide="${index}"]`);
    if (!slide) return;

    // Animate text layers
    const texts = slide.querySelectorAll("[data-hero='text']");
    gsap.fromTo(texts, { opacity: 0, y: -40 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: "power3.out" });

    // Animate pet image
    const petImg = slide.querySelector("[data-hero='pet']");
    if (petImg) gsap.fromTo(petImg, { opacity: 0, scale: 1.08 }, { opacity: 1, scale: 1, duration: 1, ease: "power2.out", delay: 0.2 });

    // Animate buttons
    const btns = slide.querySelectorAll("[data-hero='btn']");
    gsap.fromTo(btns, { opacity: 0, y: 20, scale: 0.9 }, { opacity: 1, y: 0, scale: 1, duration: 0.5, stagger: 0.06, ease: "back.out(1.5)", delay: 0.4 });

    // Animate paw icons
    const paws = slide.querySelectorAll("[data-hero='paw']");
    gsap.fromTo(paws, { opacity: 0, scale: 0, rotation: -30 }, { opacity: 1, scale: 1, rotation: 0, duration: 0.6, stagger: 0.08, ease: "back.out(2)", delay: 0.3 });

    // Animate CTA
    const cta = slide.querySelector("[data-hero='cta']");
    if (cta) gsap.fromTo(cta, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.6, ease: "power3.out", delay: 0.7 });
  }, []);

  useEffect(() => {
    animateSlide(0);
    timerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 4000);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [animateSlide]);

  useEffect(() => {
    animateSlide(currentSlide);
  }, [currentSlide, animateSlide]);

  return (
    <div ref={containerRef} className="relative w-full rounded-t-lg overflow-hidden h-[350px] sm:h-[450px] lg:h-[500px]">
      {/* Slide 1 */}
      <div data-slide="0" className={`absolute inset-0 w-full h-full bg-[linear-gradient(180deg,#FFC501_0%,rgba(255,255,255,0.1)_100%)] flex flex-col items-center transition-opacity duration-1000 ${currentSlide === 0 ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"}`}>
        {/* Paw Icons */}
        <div data-hero="paw" className="absolute top-[8%] left-[18%] opacity-100 z-0 hidden sm:block"><img src="/images/petfoot.png" style={{ width: "41px", height: "37px" }} className="-rotate-12 drop-shadow-sm select-none" alt="" /></div>
        <div data-hero="paw" className="absolute top-[6%] left-[24%] opacity-100 z-0 hidden sm:block"><img src="/images/petfoot.png" style={{ width: "41px", height: "37px" }} className="rotate-12 drop-shadow-sm select-none" alt="" /></div>
        <div data-hero="paw" className="absolute top-[8%] right-[24%] opacity-100 z-0 hidden sm:block"><img src="/images/petfoot.png" style={{ width: "41px", height: "37px" }} className="rotate-12 drop-shadow-sm select-none" alt="" /></div>
        <div data-hero="paw" className="absolute top-[6%] right-[18%] opacity-100 z-0 hidden sm:block"><img src="/images/petfoot.png" style={{ width: "41px", height: "37px" }} className="-rotate-12 drop-shadow-sm select-none" alt="" /></div>
        <div data-hero="paw" className="absolute bottom-[20%] left-[6%] opacity-90 z-0 hidden sm:block"><img src="/images/petfoot.png" style={{ width: "41px", height: "37px" }} className="-rotate-12 select-none" alt="" /></div>
        <div data-hero="paw" className="absolute bottom-[17%] left-[1%] opacity-90 z-0 hidden sm:block"><img src="/images/petfoot.png" style={{ width: "41px", height: "37px" }} className="rotate-12 select-none" alt="" /></div>
        <div data-hero="paw" className="absolute bottom-[20%] right-[6%] opacity-90 z-0 hidden sm:block"><img src="/images/petfoot.png" style={{ width: "41px", height: "37px" }} className="rotate-12 select-none" alt="" /></div>
        <div data-hero="paw" className="absolute bottom-[25%] right-[10%] opacity-90 z-0 hidden sm:block"><img src="/images/petfoot.png" style={{ width: "41px", height: "37px" }} className="-rotate-12 select-none" alt="" /></div>
        <div data-hero="paw" className="absolute bottom-[35%] right-[5%] opacity-100 z-100 hidden sm:block"><img src="/images/petfoot.png" style={{ width: "41px", height: "37px" }} className="rotate-12 select-none" alt="" /></div>
        <div data-hero="paw" className="absolute bottom-[38%] right-[0.2%] opacity-80 z-100 hidden sm:block"><img src="/images/petfoot.png" style={{ width: "41px", height: "37px" }} className="-rotate-12 select-none" alt="" /></div>

        {/* Layer 1: Background Text */}
        <div data-hero="text" className="absolute top-0 bottom-0 flex flex-col items-stretch justify-start pointer-events-none select-none z-10 overflow-visible pt-[3%]" style={{ width: "105%" }}>
          <p className="text-black tracking-[0.6em] text-xs sm:text-sm md:text-[24px] uppercase mb-0 mt-0 text-center">Explore</p>
          <svg viewBox="0 0 100 18" className="w-full" style={{ height: "clamp(60px, 18vw, 240px)" }} aria-hidden="true">
            <text x="50%" y="85%" textAnchor="middle" textLength="100%" lengthAdjust="spacing" fontWeight="900" fontFamily="'Arial Black', 'Impact', sans-serif" fill="white" fontSize="18">EXCLUSIVE</text>
          </svg>
        </div>

        {/* Layer 2: Pets Image */}
        <div data-hero="pet" className="absolute inset-x-0 bottom-0 z-20 overflow-hidden pointer-events-none" style={{ height: "85%" }}>
          <img src="/images/pets.png" alt="Pets" className="w-full h-full object-cover object-top pointer-events-none" />
        </div>

        {/* Layer 3: Outline text */}
        <div data-hero="text" className="absolute top-0 bottom-0 flex flex-col items-stretch justify-start pointer-events-none select-none z-30 overflow-visible pt-[3%]" style={{ left: "-2.5%", width: "105%" }}>
          <p className="text-transparent font-semibold tracking-[0.6em] text-xs sm:text-sm md:text-[24px] uppercase mb-0 mt-0 select-none">Explore</p>
          <svg viewBox="0 0 100 18" className="w-full" style={{ height: "clamp(60px, 18vw, 240px)" }} aria-hidden="true">
            <text x="50%" y="85%" textAnchor="middle" textLength="100%" lengthAdjust="spacing" fontWeight="900" fontFamily="'Arial Black', 'Impact', sans-serif" fill="transparent" stroke="white" strokeWidth="0.15" fontSize="18">EXCLUSIVE</text>
          </svg>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-white via-white/40 to-transparent pointer-events-none z-[25]"></div>

        <div data-hero="cta" className="absolute bottom-4 left-1/2 -translate-x-1/2 z-40">
          <button className="bg-black hover:bg-gray-800 text-white py-3 px-8 rounded-full transition-all shadow-lg hover:shadow-xl hover:scale-105 text-xs sm:text-[15px] whitespace-nowrap">View Puppies</button>
        </div>
      </div>

      {/* Slide 2 */}
      <div data-slide="1" className={`absolute inset-0 w-full h-full bg-[linear-gradient(180deg,#FC8AE3_0%,rgba(255,255,255,0.1)_100%)] flex flex-col items-center transition-opacity duration-1000 ${currentSlide === 1 ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"}`}>
        {/* Solid Background Text */}
        {/* Desktop / Tablet (Single Line) */}
        <div data-hero="text" className="absolute inset-x-0 pointer-events-none select-none z-10 overflow-hidden hidden sm:block" style={{ top: "-4%" }}>
          <svg viewBox="0 0 1000 120" preserveAspectRatio="xMidYMid meet" className="w-full" style={{ height: "clamp(100px, 30vw, 380px)" }} aria-hidden="true">
            <text x="500" y="60" textAnchor="middle" textLength="995" lengthAdjust="spacingAndGlyphs" fontWeight="900" fontFamily="'Arial Black', 'Impact', sans-serif" fill="white" fontSize="120">SIGNATURE BREEDS</text>
          </svg>
        </div>
        {/* Mobile (Two Lines for massive size) */}
        <div data-hero="text" className="absolute inset-x-0 pointer-events-none select-none z-10 overflow-hidden sm:hidden" style={{ top: "1%" }}>
          <svg viewBox="0 0 500 220" preserveAspectRatio="xMidYMid meet" className="w-full" style={{ height: "200px" }} aria-hidden="true">
            <text x="250" y="90" textAnchor="middle" textLength="480" lengthAdjust="spacingAndGlyphs" fontWeight="900" fontFamily="'Arial Black', 'Impact', sans-serif" fill="white" fontSize="100">SIGNATURE</text>
            <text x="250" y="190" textAnchor="middle" textLength="480" lengthAdjust="spacingAndGlyphs" fontWeight="900" fontFamily="'Arial Black', 'Impact', sans-serif" fill="white" fontSize="100">BREEDS</text>
          </svg>
        </div>

        <div data-hero="pet" className="absolute top-[65%] left-[39%] -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none flex justify-center items-center" style={{ height: "230%", width: "100%" }}>
          <img src="/images/slide2.png" alt="Signature Breeds Dog" className="w-auto h-full object-contain object-center pointer-events-none mix-blend-multiply" />
        </div>

        {/* Outline Text */}
        {/* Desktop / Tablet (Single Line) */}
        <div data-hero="text" className="absolute inset-x-0 pointer-events-none select-none z-30 overflow-hidden drop-shadow-sm hidden sm:block" style={{ top: "-4%" }}>
          <svg viewBox="0 0 1000 120" preserveAspectRatio="xMidYMid meet" className="w-full" style={{ height: "clamp(100px, 30vw, 380px)" }} aria-hidden="true">
            <text x="505" y="65" textAnchor="middle" textLength="995" lengthAdjust="spacingAndGlyphs" fontWeight="900" fontFamily="'Arial Black', 'Impact', sans-serif" fill="none" stroke="white" strokeWidth="0.8" opacity="0.6" fontSize="120">SIGNATURE BREEDS</text>
          </svg>
        </div>
        {/* Mobile (Two Lines for massive size) */}
        <div data-hero="text" className="absolute inset-x-0 pointer-events-none select-none z-30 overflow-hidden drop-shadow-sm sm:hidden" style={{ top: "1%" }}>
          <svg viewBox="0 0 500 220" preserveAspectRatio="xMidYMid meet" className="w-full" style={{ height: "200px" }} aria-hidden="true">
            <text x="252" y="92" textAnchor="middle" textLength="480" lengthAdjust="spacingAndGlyphs" fontWeight="900" fontFamily="'Arial Black', 'Impact', sans-serif" fill="none" stroke="white" strokeWidth="1.5" opacity="0.7" fontSize="100">SIGNATURE</text>
            <text x="252" y="192" textAnchor="middle" textLength="480" lengthAdjust="spacingAndGlyphs" fontWeight="900" fontFamily="'Arial Black', 'Impact', sans-serif" fill="none" stroke="white" strokeWidth="1.5" opacity="0.7" fontSize="100">BREEDS</text>
          </svg>
        </div>

        {/* Breed buttons Left (5 Buttons) */}
        <div data-hero="btn" className="absolute top-[35%] sm:top-[38%] lg:top-[55%] left-[2%] sm:left-[4%] lg:left-[4%] z-40"><button className="bg-white text-black font-bold py-1 rounded-full border border-gray-100 shadow-[0_0_15px_rgba(252,138,227,0.4)] text-[6.5px] sm:text-[8px] lg:text-[11px] w-[70px] sm:w-[95px] lg:w-[140px] text-center hover:scale-110 hover:ring-4 hover:ring-white/40 transition-all" style={{ fontFamily: "'Inter', sans-serif" }}>LABRADOR</button></div>
        <div data-hero="btn" className="absolute top-[44%] sm:top-[47%] lg:top-[66%] left-[2%] sm:left-[4%] lg:left-[4%] z-40"><button className="bg-white text-black font-bold py-1 rounded-full border border-gray-100 shadow-[0_0_15px_rgba(252,138,227,0.4)] text-[6.5px] sm:text-[8px] lg:text-[11px] w-[70px] sm:w-[95px] lg:w-[140px] text-center hover:scale-110 hover:ring-4 hover:ring-white/40 transition-all" style={{ fontFamily: "'Inter', sans-serif" }}>GOLDEN</button></div>
        <div data-hero="btn" className="absolute top-[53%] sm:top-[56%] lg:top-[77%] left-[2%] sm:left-[4%] lg:left-[4%] z-40"><button className="bg-white text-black font-bold py-1 rounded-full border border-gray-100 shadow-[0_0_15px_rgba(252,138,227,0.4)] text-[6.5px] sm:text-[8px] lg:text-[11px] w-[70px] sm:w-[95px] lg:w-[140px] text-center hover:scale-110 hover:ring-4 hover:ring-white/40 transition-all" style={{ fontFamily: "'Inter', sans-serif" }}>COCKER SPANIEL</button></div>
        <div data-hero="btn" className="absolute top-[62%] sm:top-[65%] lg:top-[61%] left-[2%] sm:left-[4%] lg:left-[20%] z-40"><button className="bg-white text-black font-bold py-1 rounded-full border border-gray-100 shadow-[0_0_15px_rgba(252,138,227,0.4)] text-[6.5px] sm:text-[8px] lg:text-[11px] w-[70px] sm:w-[95px] lg:w-[140px] text-center hover:scale-110 hover:ring-4 hover:ring-white/40 transition-all" style={{ fontFamily: "'Inter', sans-serif" }}>BEAGLE</button></div>
        <div data-hero="btn" className="absolute top-[71%] sm:top-[74%] lg:top-[72%] left-[2%] sm:left-[4%] lg:left-[20%] z-40"><button className="bg-white text-black font-bold py-1 rounded-full border border-gray-100 shadow-[0_0_15px_rgba(252,138,227,0.4)] text-[6.5px] sm:text-[8px] lg:text-[11px] w-[70px] sm:w-[95px] lg:w-[140px] text-center hover:scale-110 hover:ring-4 hover:ring-white/40 transition-all" style={{ fontFamily: "'Inter', sans-serif" }}>PUG</button></div>

        {/* Breed buttons Right (5 Buttons) */}
        <div data-hero="btn" className="absolute top-[35%] sm:top-[38%] lg:top-[61%] right-[2%] sm:right-[4%] lg:right-[20%] z-40"><button className="bg-white text-black font-bold py-1 rounded-full border border-gray-100 shadow-[0_0_15px_rgba(252,138,227,0.4)] text-[6.5px] sm:text-[8px] lg:text-[11px] w-[70px] sm:w-[95px] lg:w-[140px] text-center hover:scale-110 hover:ring-4 hover:ring-white/40 transition-all" style={{ fontFamily: "'Inter', sans-serif" }}>ROTTWEILER</button></div>
        <div data-hero="btn" className="absolute top-[44%] sm:top-[47%] lg:top-[72%] right-[2%] sm:right-[4%] lg:right-[20%] z-40"><button className="bg-white text-black font-bold py-1 rounded-full border border-gray-100 shadow-[0_0_15px_rgba(252,138,227,0.4)] text-[6.5px] sm:text-[8px] lg:text-[11px] w-[70px] sm:w-[95px] lg:w-[140px] text-center hover:scale-110 hover:ring-4 hover:ring-white/40 transition-all" style={{ fontFamily: "'Inter', sans-serif" }}>DOBERMAN</button></div>
        <div data-hero="btn" className="absolute top-[53%] sm:top-[56%] lg:top-[55%] right-[2%] sm:right-[4%] lg:right-[4%] z-40"><button className="bg-white text-black font-bold py-1 rounded-full border border-gray-100 shadow-[0_0_15px_rgba(252,138,227,0.4)] text-[6.5px] sm:text-[8px] lg:text-[11px] w-[70px] sm:w-[95px] lg:w-[140px] text-center hover:scale-110 hover:ring-4 hover:ring-white/40 transition-all" style={{ fontFamily: "'Inter', sans-serif" }}>HUSKY</button></div>
        <div data-hero="btn" className="absolute top-[62%] sm:top-[65%] lg:top-[66%] right-[2%] sm:right-[4%] lg:right-[4%] z-40"><button className="bg-white text-black font-bold py-1 rounded-full border border-gray-100 shadow-[0_0_15px_rgba(252,138,227,0.4)] text-[6.5px] sm:text-[8px] lg:text-[11px] w-[70px] sm:w-[95px] lg:w-[140px] text-center hover:scale-110 hover:ring-4 hover:ring-white/40 transition-all" style={{ fontFamily: "'Inter', sans-serif" }}>GERMAN</button></div>
        <div data-hero="btn" className="absolute top-[71%] sm:top-[74%] lg:top-[77%] right-[2%] sm:right-[4%] lg:right-[4%] z-40"><button className="bg-white text-black font-bold py-1 rounded-full border border-gray-100 shadow-[0_0_15px_rgba(252,138,227,0.4)] text-[6.5px] sm:text-[8px] lg:text-[11px] w-[70px] sm:w-[95px] lg:w-[140px] text-center hover:scale-110 hover:ring-4 hover:ring-white/40 transition-all" style={{ fontFamily: "'Inter', sans-serif" }}>SHIH TZU</button></div>

        <div className="absolute bottom-0 left-0 w-full h-24 sm:h-32 lg:h-48 bg-gradient-to-t from-white via-white/40 to-transparent pointer-events-none z-[25]"></div>
        <div data-hero="cta" className="absolute bottom-4 left-1/2 -translate-x-1/2 z-40"><button className="bg-black hover:bg-gray-800 text-white py-3 rounded-full transition-all shadow-lg hover:shadow-xl hover:scale-105 text-xs sm:text-[15px] whitespace-nowrap w-[280px] text-center">Get Your Furry Friend Home</button></div>
      </div>

      {/* Slide 3 - Aviary */}
      <div data-slide="2" className={`absolute inset-0 w-full h-full flex items-center transition-opacity duration-1000 ${currentSlide === 2 ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"}`} style={{ background: "linear-gradient(180deg, #E5E7EB 0%, #F9FAFB 100%)" }}>
        {/* Bound the content width on mobile so it doesn't overlap the large image */}
        <div className="relative z-30 flex flex-col pl-[4%] sm:pl-[3%] w-[55%] sm:w-[70%] h-full justify-center pt-8 sm:pt-0">
          <div data-hero="text" className="mb-6 sm:mb-10 flex flex-col items-start">
            <p className="text-black font-medium italic uppercase tracking-[0.2em] m-0 p-0 ml-[2%] sm:ml-[4%]" style={{ fontSize: "clamp(10px, 1.8vw, 26px)", fontFamily: "'Inter', sans-serif" }}>CURATED</p>
            <div className="flex items-baseline gap-0 m-0 p-0 -mt-1 sm:-mt-2">
              <h2 className="font-black uppercase leading-[0.8] text-[#5B92BD] relative m-0 p-0" style={{ fontSize: "clamp(32px, 11vw, 170px)", fontFamily: "'Arial Black', 'Impact', sans-serif", WebkitTextStroke: "2px white", filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.1))" }}>AVIARY</h2>
              <p className="text-black font-medium italic uppercase tracking-[0.05em] m-0 p-0 -ml-4 sm:-ml-8 hidden sm:block" style={{ fontSize: "clamp(12px, 2.5vw, 34px)", fontFamily: "'Inter', sans-serif" }}>COLLECTION</p>
            </div>
            <p className="text-black font-medium italic uppercase tracking-[0.05em] m-0 p-0 ml-[2%] mt-1 sm:hidden" style={{ fontSize: "11px", fontFamily: "'Inter', sans-serif" }}>COLLECTION</p>
          </div>

          <div data-hero="text" className="flex flex-col gap-1.5 sm:gap-4 mt-1 sm:mt-2 max-w-full">
            <div className="flex flex-row flex-wrap gap-1.5 sm:gap-4 w-full">
              <button data-hero="btn" className="bg-[#5B92BD] text-white font-bold py-1 sm:py-1.5 rounded-full text-[6px] sm:text-[11px] lg:text-[13px] uppercase tracking-wider border-[1.5px] sm:border-[3px] border-[#A9C7DF] shadow-[0_0_15px_rgba(91,146,189,0.3)] hover:scale-105 transition-all w-[90px] sm:w-[180px] lg:w-[220px] text-center px-0.5" style={{ fontFamily: "'Inter', sans-serif" }}>ROSE-RINGED PARAKEET</button>
              <button data-hero="btn" className="bg-[#5B92BD] text-white font-bold py-1 sm:py-1.5 rounded-full text-[6px] sm:text-[11px] lg:text-[13px] uppercase tracking-wider border-[1.5px] sm:border-[3px] border-[#A9C7DF] shadow-[0_0_15px_rgba(91,146,189,0.3)] hover:scale-105 transition-all w-[90px] sm:w-[180px] lg:w-[220px] text-center px-0.5" style={{ fontFamily: "'Inter', sans-serif" }}>INDIAN RINGNECK PARROT</button>
              <button data-hero="btn" className="bg-[#5B92BD] text-white font-bold py-1 sm:py-1.5 rounded-full text-[6px] sm:text-[11px] lg:text-[13px] uppercase tracking-wider border-[1.5px] sm:border-[3px] border-[#A9C7DF] shadow-[0_0_15px_rgba(91,146,189,0.3)] hover:scale-105 transition-all w-[90px] sm:w-[180px] lg:w-[220px] text-center px-0.5" style={{ fontFamily: "'Inter', sans-serif" }}>INDIAN SILVERBILL</button>
              <button data-hero="btn" className="bg-[#5B92BD] text-white font-bold py-1 sm:py-1.5 rounded-full text-[6px] sm:text-[11px] lg:text-[13px] uppercase tracking-wider border-[1.5px] sm:border-[3px] border-[#A9C7DF] shadow-[0_0_15px_rgba(91,146,189,0.3)] hover:scale-105 transition-all w-[90px] sm:w-[180px] lg:w-[220px] text-center px-0.5" style={{ fontFamily: "'Inter', sans-serif" }}>ALEXANDRINE PARAKEET</button>
              <button data-hero="btn" className="bg-[#5B92BD] text-white font-bold py-1 sm:py-1.5 rounded-full text-[6px] sm:text-[11px] lg:text-[13px] uppercase tracking-wider border-[1.5px] sm:border-[3px] border-[#A9C7DF] shadow-[0_0_15px_rgba(91,146,189,0.3)] hover:scale-105 transition-all w-[90px] sm:w-[180px] lg:w-[220px] text-center px-0.5" style={{ fontFamily: "'Inter', sans-serif" }}>COCKATIEL</button>
            </div>
          </div>
        </div>

        {/* Huge Bird Image on right side for mobile */}
        <div data-hero="pet" className="absolute right-[-15%] sm:right-[-8%] bottom-0 z-20 pointer-events-none h-[85%] sm:h-full w-[65%] sm:w-[63%] flex items-end justify-end overflow-visible opacity-100">
          <img src="/images/slide3.png" alt="Aviary Bird" className="h-[100%] lg:h-[150%] w-auto object-contain object-right-bottom drop-shadow-2xl" />
        </div>

        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white via-white/20 to-transparent pointer-events-none z-[25]"></div>
        <div data-hero="cta" className="absolute bottom-4 left-1/2 -translate-x-1/2 z-40"><button className="bg-black hover:bg-gray-800 text-white py-3 rounded-full transition-all shadow-lg hover:shadow-xl hover:scale-105 text-xs sm:text-[15px] whitespace-nowrap w-[280px] text-center">See Available Birds</button></div>
      </div>
    </div>
  );
}
