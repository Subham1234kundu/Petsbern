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

    const texts = slide.querySelectorAll("[data-hero='text']");
    gsap.fromTo(texts, { opacity: 0, y: -40 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: "power3.out" });

    const petImg = slide.querySelector("[data-hero='pet']");
    if (petImg) gsap.fromTo(petImg, { opacity: 0, scale: 1.08 }, { opacity: 1, scale: 1, duration: 1, ease: "power2.out", delay: 0.2 });

    const btns = slide.querySelectorAll("[data-hero='btn']");
    gsap.fromTo(btns, { opacity: 0, y: 20, scale: 0.9 }, { opacity: 1, y: 0, scale: 1, duration: 0.5, stagger: 0.06, ease: "back.out(1.5)", delay: 0.4 });

    const paws = slide.querySelectorAll("[data-hero='paw']");
    gsap.fromTo(paws, { opacity: 0, scale: 0, rotation: -30 }, { opacity: 1, scale: 1, rotation: 0, duration: 0.6, stagger: 0.08, ease: "back.out(2)", delay: 0.3 });

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

  // Shared button style for slide 2
  const breedBtn = "bg-white text-black font-bold rounded-full border border-gray-100 shadow-[0_0_15px_rgba(252,138,227,0.4)] hover:scale-110 hover:ring-4 hover:ring-white/40 transition-all whitespace-nowrap text-center";

  return (
    // Height: 55vw on mobile keeps aspect ratio, capped at 90vh so it never overflows on any screen
    <div
      ref={containerRef}
      className="relative w-full rounded-t-lg overflow-hidden"
      style={{ height: "clamp(300px, 55vw, 90vh)" }}
    >
      {/* ── Slide 1 ── */}
      <div
        data-slide="0"
        className={`absolute inset-0 w-full h-full bg-[linear-gradient(180deg,#FFC501_0%,rgba(255,255,255,0.1)_100%)] flex flex-col items-center transition-opacity duration-1000 ${currentSlide === 0 ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"}`}
      >
        {/* Paw Icons — sized with vw so they scale on TV */}
        {[
          { top: "8%",  left: "18%",  rot: "-rotate-12" },
          { top: "6%",  left: "24%",  rot: "rotate-12"  },
          { top: "8%",  right: "24%", rot: "rotate-12"  },
          { top: "6%",  right: "18%", rot: "-rotate-12" },
          { bottom: "20%", left: "6%",   rot: "-rotate-12" },
          { bottom: "17%", left: "1%",   rot: "rotate-12"  },
          { bottom: "20%", right: "6%",  rot: "rotate-12"  },
          { bottom: "25%", right: "10%", rot: "-rotate-12" },
          { bottom: "35%", right: "5%",  rot: "rotate-12"  },
          { bottom: "38%", right: "0.2%",rot: "-rotate-12" },
        ].map((p, i) => (
          <div
            key={i}
            data-hero="paw"
            className="absolute hidden sm:block"
            style={{ top: p.top, bottom: p.bottom, left: p.left, right: p.right }}
          >
            <img
              src="/images/petfoot.png"
              style={{ width: "clamp(28px, 2.5vw, 56px)", height: "auto" }}
              className={`${p.rot} drop-shadow-sm select-none`}
              alt=""
            />
          </div>
        ))}

        {/* Background fill text */}
        <div
          data-hero="text"
          className="absolute top-0 bottom-0 flex flex-col items-stretch justify-start pointer-events-none select-none z-10 overflow-visible pt-[3%]"
          style={{ width: "105%" }}
        >
          <p className="text-black tracking-[0.6em] uppercase mb-0 mt-0 text-center" style={{ fontSize: "clamp(10px, 1.4vw, 28px)" }}>Explore</p>
          <svg viewBox="0 0 100 18" className="w-full" style={{ height: "clamp(60px, 18vw, 99999px)" }} aria-hidden="true">
            <text x="50%" y="85%" textAnchor="middle" textLength="100%" lengthAdjust="spacing" fontWeight="900" fontFamily="'Arial Black', 'Impact', sans-serif" fill="white" fontSize="18">EXCLUSIVE</text>
          </svg>
        </div>

        {/* Pet image */}
        <div data-hero="pet" className="absolute inset-x-0 bottom-0 z-20 overflow-hidden pointer-events-none" style={{ height: "85%" }}>
          <img src="/images/pets.png" alt="Pets" className="w-full h-full object-cover object-top pointer-events-none" />
        </div>

        {/* Outline text */}
        <div
          data-hero="text"
          className="absolute top-0 bottom-0 flex flex-col items-stretch justify-start pointer-events-none select-none z-30 overflow-visible pt-[3%]"
          style={{ left: "-2.5%", width: "105%" }}
        >
          <p className="text-transparent uppercase mb-0 mt-0 select-none" style={{ fontSize: "clamp(10px, 1.4vw, 28px)" }}>Explore</p>
          <svg viewBox="0 0 100 18" className="w-full" style={{ height: "clamp(60px, 18vw, 99999px)" }} aria-hidden="true">
            <text x="50%" y="85%" textAnchor="middle" textLength="100%" lengthAdjust="spacing" fontWeight="900" fontFamily="'Arial Black', 'Impact', sans-serif" fill="transparent" stroke="white" strokeWidth="0.15" fontSize="18">EXCLUSIVE</text>
          </svg>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-[20%] bg-gradient-to-t from-white via-white/40 to-transparent pointer-events-none z-[25]" />

        <div data-hero="cta" className="absolute bottom-[3%] left-1/2 -translate-x-1/2 z-40">
          <button
            className="bg-black hover:bg-gray-800 text-white rounded-full transition-all shadow-lg hover:shadow-xl hover:scale-105 whitespace-nowrap"
            style={{ fontSize: "clamp(12px, 1.1vw, 18px)", padding: "clamp(8px,0.8vw,14px) clamp(20px,2.5vw,40px)" }}
          >
            View Puppies
          </button>
        </div>
      </div>

      {/* ── Slide 2 ── */}
      <div
        data-slide="1"
        className={`absolute inset-0 w-full h-full bg-[linear-gradient(180deg,#FC8AE3_0%,rgba(255,255,255,0.1)_100%)] flex flex-col items-center transition-opacity duration-1000 ${currentSlide === 1 ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"}`}
      >
        {/* Big background text — no clamp cap so it fills on TV */}
        <div data-hero="text" className="absolute inset-x-0 pointer-events-none select-none z-10 overflow-hidden hidden sm:block" style={{ top: "-4%" }}>
          <svg viewBox="0 0 1000 120" preserveAspectRatio="xMidYMid meet" className="w-full" style={{ height: "clamp(80px, 28vw, 99999px)" }} aria-hidden="true">
            <text x="500" y="60" textAnchor="middle" textLength="995" lengthAdjust="spacingAndGlyphs" fontWeight="900" fontFamily="'Arial Black', 'Impact', sans-serif" fill="white" fontSize="120">SIGNATURE BREEDS</text>
          </svg>
        </div>
        <div data-hero="text" className="absolute inset-x-0 pointer-events-none select-none z-10 overflow-hidden sm:hidden" style={{ top: "1%" }}>
          <svg viewBox="0 0 500 220" preserveAspectRatio="xMidYMid meet" className="w-full" style={{ height: "200px" }} aria-hidden="true">
            <text x="250" y="90" textAnchor="middle" textLength="480" lengthAdjust="spacingAndGlyphs" fontWeight="900" fontFamily="'Arial Black', 'Impact', sans-serif" fill="white" fontSize="100">SIGNATURE</text>
            <text x="250" y="190" textAnchor="middle" textLength="480" lengthAdjust="spacingAndGlyphs" fontWeight="900" fontFamily="'Arial Black', 'Impact', sans-serif" fill="white" fontSize="100">BREEDS</text>
          </svg>
        </div>

        {/* Dog image */}
        <div data-hero="pet" className="absolute top-[65%] left-[39%] -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none flex justify-center items-center" style={{ height: "230%", width: "100%" }}>
          <img src="/images/slide2.png" alt="Signature Breeds Dog" className="w-auto h-full object-contain object-center pointer-events-none mix-blend-multiply" />
        </div>

        {/* Outline text */}
        <div data-hero="text" className="absolute inset-x-0 pointer-events-none select-none z-30 overflow-hidden drop-shadow-sm hidden sm:block" style={{ top: "-4%" }}>
          <svg viewBox="0 0 1000 120" preserveAspectRatio="xMidYMid meet" className="w-full" style={{ height: "clamp(80px, 28vw, 99999px)" }} aria-hidden="true">
            <text x="505" y="65" textAnchor="middle" textLength="995" lengthAdjust="spacingAndGlyphs" fontWeight="900" fontFamily="'Arial Black', 'Impact', sans-serif" fill="none" stroke="white" strokeWidth="0.8" opacity="0.6" fontSize="120">SIGNATURE BREEDS</text>
          </svg>
        </div>
        <div data-hero="text" className="absolute inset-x-0 pointer-events-none select-none z-30 overflow-hidden drop-shadow-sm sm:hidden" style={{ top: "1%" }}>
          <svg viewBox="0 0 500 220" preserveAspectRatio="xMidYMid meet" className="w-full" style={{ height: "200px" }} aria-hidden="true">
            <text x="252" y="92" textAnchor="middle" textLength="480" lengthAdjust="spacingAndGlyphs" fontWeight="900" fontFamily="'Arial Black', 'Impact', sans-serif" fill="none" stroke="white" strokeWidth="1.5" opacity="0.7" fontSize="100">SIGNATURE</text>
            <text x="252" y="192" textAnchor="middle" textLength="480" lengthAdjust="spacingAndGlyphs" fontWeight="900" fontFamily="'Arial Black', 'Impact', sans-serif" fill="none" stroke="white" strokeWidth="1.5" opacity="0.7" fontSize="100">BREEDS</text>
          </svg>
        </div>

        {/* Breed buttons Left — positions in % so they scale on any screen */}
        <div data-hero="btn" className="absolute z-40" style={{ top: "55%", left: "4%" }}><button className={breedBtn} style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(9px,0.75vw,13px)", width: "clamp(90px,10vw,220px)", padding: "clamp(4px,0.5vw,10px) 0" }}>LABRADOR</button></div>
        <div data-hero="btn" className="absolute z-40" style={{ top: "65%", left: "4%" }}><button className={breedBtn} style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(9px,0.75vw,13px)", width: "clamp(90px,10vw,220px)", padding: "clamp(4px,0.5vw,10px) 0" }}>GOLDEN</button></div>
        <div data-hero="btn" className="absolute z-40" style={{ top: "75%", left: "4%" }}><button className={breedBtn} style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(9px,0.75vw,13px)", width: "clamp(90px,10vw,220px)", padding: "clamp(4px,0.5vw,10px) 0" }}>COCKER SPANIEL</button></div>
        <div data-hero="btn" className="absolute z-40 hidden sm:block" style={{ top: "62%", left: "20%" }}><button className={breedBtn} style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(9px,0.75vw,13px)", width: "clamp(90px,10vw,220px)", padding: "clamp(4px,0.5vw,10px) 0" }}>BEAGLE</button></div>
        <div data-hero="btn" className="absolute z-40 hidden sm:block" style={{ top: "72%", left: "20%" }}><button className={breedBtn} style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(9px,0.75vw,13px)", width: "clamp(90px,10vw,220px)", padding: "clamp(4px,0.5vw,10px) 0" }}>PUG</button></div>

        {/* Breed buttons Right */}
        <div data-hero="btn" className="absolute z-40 hidden sm:block" style={{ top: "62%", right: "20%" }}><button className={breedBtn} style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(9px,0.75vw,13px)", width: "clamp(90px,10vw,220px)", padding: "clamp(4px,0.5vw,10px) 0" }}>ROTTWEILER</button></div>
        <div data-hero="btn" className="absolute z-40 hidden sm:block" style={{ top: "72%", right: "20%" }}><button className={breedBtn} style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(9px,0.75vw,13px)", width: "clamp(90px,10vw,220px)", padding: "clamp(4px,0.5vw,10px) 0" }}>DOBERMAN</button></div>
        <div data-hero="btn" className="absolute z-40" style={{ top: "55%", right: "4%" }}><button className={breedBtn} style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(9px,0.75vw,13px)", width: "clamp(90px,10vw,220px)", padding: "clamp(4px,0.5vw,10px) 0" }}>HUSKY</button></div>
        <div data-hero="btn" className="absolute z-40" style={{ top: "65%", right: "4%" }}><button className={breedBtn} style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(9px,0.75vw,13px)", width: "clamp(90px,10vw,220px)", padding: "clamp(4px,0.5vw,10px) 0" }}>GERMAN</button></div>
        <div data-hero="btn" className="absolute z-40" style={{ top: "75%", right: "4%" }}><button className={breedBtn} style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(9px,0.75vw,13px)", width: "clamp(90px,10vw,220px)", padding: "clamp(4px,0.5vw,10px) 0" }}>SHIH TZU</button></div>

        <div className="absolute bottom-0 left-0 w-full h-[20%] bg-gradient-to-t from-white via-white/40 to-transparent pointer-events-none z-[25]" />
        <div data-hero="cta" className="absolute bottom-[3%] left-1/2 -translate-x-1/2 z-40">
          <button
            className="bg-black hover:bg-gray-800 text-white rounded-full transition-all shadow-lg hover:shadow-xl hover:scale-105 whitespace-nowrap"
            style={{ fontSize: "clamp(12px, 1.1vw, 18px)", padding: "clamp(8px,0.8vw,14px) clamp(20px,2.5vw,40px)", minWidth: "clamp(200px, 18vw, 340px)" }}
          >
            Get Your Furry Friend Home
          </button>
        </div>
      </div>

      {/* ── Slide 3 — Aviary ── */}
      <div
        data-slide="2"
        className={`absolute inset-0 w-full h-full flex items-center transition-opacity duration-1000 ${currentSlide === 2 ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"}`}
        style={{ background: "linear-gradient(180deg, #E5E7EB 0%, #F9FAFB 100%)" }}
      >
        <div className="relative z-30 flex flex-col pl-[4%] w-[55%] sm:w-[60%] h-full justify-center">
          <div data-hero="text" className="mb-[2vw] flex flex-col items-start">
            <p
              className="text-black font-medium italic uppercase tracking-[0.2em] m-0 p-0 ml-[2%]"
              style={{ fontSize: "clamp(10px, 1.4vw, 26px)", fontFamily: "'Inter', sans-serif" }}
            >
              CURATED
            </p>
            <div className="flex items-baseline gap-0 m-0 p-0">
              <h2
                className="font-black uppercase leading-[0.85] text-[#5B92BD] m-0 p-0"
                style={{
                  fontSize: "clamp(36px, 10vw, 99999px)",
                  fontFamily: "'Arial Black', 'Impact', sans-serif",
                  WebkitTextStroke: "2px white",
                  filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.1))",
                }}
              >
                AVIARY
              </h2>
              <p
                className="text-black font-medium italic uppercase tracking-[0.05em] m-0 p-0 hidden sm:block"
                style={{ fontSize: "clamp(12px, 2vw, 34px)", fontFamily: "'Inter', sans-serif", marginLeft: "-1.5vw" }}
              >
                COLLECTION
              </p>
            </div>
            <p className="text-black font-medium italic uppercase tracking-[0.05em] m-0 p-0 ml-[2%] mt-1 sm:hidden" style={{ fontSize: "11px", fontFamily: "'Inter', sans-serif" }}>COLLECTION</p>
          </div>

          <div data-hero="text" className="flex flex-col gap-[1vw] mt-[1vw]">
            <div className="flex flex-row flex-wrap gap-[1vw]">
              {["ROSE-RINGED PARAKEET", "INDIAN RINGNECK PARROT", "INDIAN SILVERBILL", "ALEXANDRINE PARAKEET", "COCKATIEL"].map((bird) => (
                <button
                  key={bird}
                  data-hero="btn"
                  className="bg-[#5B92BD] text-white font-bold rounded-full uppercase tracking-wider border-[2px] border-[#A9C7DF] shadow-[0_0_15px_rgba(91,146,189,0.3)] hover:scale-105 transition-all whitespace-nowrap text-center"
                  style={{
                    fontSize: "clamp(7px, 0.75vw, 13px)",
                    width: "clamp(120px,13vw,280px)",
                    padding: "clamp(4px,0.45vw,10px) 0",
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  {bird}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Bird image */}
        <div data-hero="pet" className="absolute right-[-8%] bottom-0 z-20 pointer-events-none h-[90%] w-[55%] flex items-end justify-end overflow-visible">
          <img src="/images/slide3.png" alt="Aviary Bird" className="h-full w-auto object-contain object-right-bottom drop-shadow-2xl" />
        </div>

        <div className="absolute bottom-0 left-0 w-full h-[15%] bg-gradient-to-t from-white via-white/20 to-transparent pointer-events-none z-[25]" />
        <div data-hero="cta" className="absolute bottom-[3%] left-1/2 -translate-x-1/2 z-40">
          <button
            className="bg-black hover:bg-gray-800 text-white rounded-full transition-all shadow-lg hover:shadow-xl hover:scale-105 whitespace-nowrap"
            style={{ fontSize: "clamp(12px, 1.1vw, 18px)", padding: "clamp(8px,0.8vw,14px) clamp(20px,2.5vw,40px)", minWidth: "clamp(200px, 18vw, 340px)" }}
          >
            See Available Birds
          </button>
        </div>
      </div>
    </div>
  );
}
