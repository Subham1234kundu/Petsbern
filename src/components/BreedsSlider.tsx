"use client";

import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";

export default function BreedsSlider() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  
  const breedsData = [
    { name: "Rottweiler", img: "/images/pet1.png", desc: "Known for their loyalty, intelligence, and protective nature. Family pets, easy to train, and are strong, energetic" },
    { name: "Labrador Retriever", img: "/images/pet2.png", desc: "Friendly, intelligent, and loyal companion, great with families, easy to train, and highly energetic." },
    { name: "German Shepherd", img: "/images/pet3.png", desc: "Confident, courageous, and highly trainable, known for protection, intelligence, and strong loyalty to owners." },
    { name: "Siberian Husky", img: "/images/pet4.png", desc: "Energetic, striking appearance, loves cold climates, playful nature, and requires regular exercise and attention." },
    { name: "Pomeranian", img: "/images/pet5.png", desc: "Bold, lion-like mane, surprisingly hardy in the cold, fiercely spirited, and demands constant interaction and mental play." },
    { name: "Saint Bernard", img: "/images/pet6.png", desc: "Known for their loyalty, intelligence, and protective nature. Family pets, easy to train, and are strong, energetic." },
    { name: "English Mastiff", img: "/images/pet7.png", desc: "Friendly, intelligent, and loyal companion, great with families. Easy to train, and highly energetic." },
    { name: "Goldendoodle", img: "/images/pet8.png", desc: "Confident, courageous, and highly trainable. Known for protection, intelligence, and strong loyalty to owners." },
    { name: "Afghan Hound", img: "/images/pet9.png", desc: "Energetic, striking appearance, loves cold climates. Playful nature, and requires regular exercise and attention." },
    { name: "Shih Tzu", img: "/images/pet10.png", desc: "Bold, lion-like mane, surprisingly hardy in the cold. Fiercely spirited, and demands constant interaction and mental play." },
    { name: "Chihuahua", img: "/images/pet11.png", desc: "Known for their loyalty, intelligence, and protective nature. Family pets, easy to train, and are strong, energetic." },
    { name: "Charles Spaniel", img: "/images/pet12.png", desc: "Friendly, intelligent, and loyal companion, great with families. Easy to train, and highly energetic." },
  ];

  const duplicatedBreeds = [...breedsData, ...breedsData, ...breedsData];

  useEffect(() => {
    if (!sliderRef.current || isPaused) return;

    const slider = sliderRef.current;
    const totalWidth = slider.scrollWidth;
    
    const duration = totalWidth / 35;
    
    const tl = gsap.timeline({ repeat: -1 });
    
    gsap.set(slider, { x: 0 });
    
    tl.to(slider, {
      x: -totalWidth / 3,
      duration: duration,
      ease: "none",
      onComplete: () => {
        gsap.set(slider, { x: 0 });
      }
    });

    return () => {
      tl.kill();
    };
  }, [isPaused]);

  const handleMouseEnter = (index: number) => {
    setIsPaused(true);
    gsap.to(`.breed-card-${index}`, {
      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.15)",
      duration: 0.3,
      ease: "power2.out"
    });
  };

  const handleMouseLeave = (index: number) => {
    gsap.to(`.breed-card-${index}`, {
      boxShadow: "0 0px 0px rgba(0, 0, 0, 0)",
      duration: 0.3,
      ease: "power2.out",
      onComplete: () => {
        setIsPaused(false);
      }
    });
  };

  return (
    <section className="w-full py-8 sm:py-12 md:py-16">
      <div className="w-full px-[4%]">
        <div 
          ref={containerRef}
          className="relative overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div 
            ref={sliderRef}
            className="flex gap-3 sm:gap-4 md:gap-5 lg:gap-4 xl:gap-5 2xl:gap-6"
            style={{ willChange: 'transform' }}
          >
            {duplicatedBreeds.map((breed, index) => (
              <div
                key={`${breed.name}-${index}`}
                className={`breed-card-${index} flex-shrink-0 w-[280px] sm:w-[300px] md:w-[320px] lg:w-[280px] xl:w-[300px] 2xl:w-[320px] transition-all duration-300`}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
              >
                <div className="flex flex-col items-center text-center h-full">
                  <div className="w-[200px] h-[250px] sm:w-[220px] sm:h-[270px] md:w-[240px] md:h-[290px] lg:w-[200px] lg:h-[250px] xl:w-[220px] xl:h-[270px] 2xl:w-[240px] 2xl:h-[290px] mb-4 sm:mb-6 flex items-end justify-center overflow-hidden">
                    <img
                      src={breed.img}
                      alt={breed.name}
                      className="w-full h-full object-contain object-bottom"
                    />
                  </div>
                  
                  <h3 className="text-[20px] sm:text-[22px] md:text-[24px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px] font-bold text-black mb-2 leading-tight px-2">
                    {breed.name}
                  </h3>
                  
                  <p className="text-[12px] sm:text-[13px] md:text-[14px] lg:text-[12px] xl:text-[13px] 2xl:text-[14px] leading-relaxed mb-4 sm:mb-6 flex-grow px-2" style={{ color: "#484554" }}>
                    {breed.desc}
                  </p>
                  
                  <button className="bg-black text-white rounded-md flex items-center justify-center hover:bg-gray-800 transition-colors w-[100px] h-[32px] sm:w-[110px] sm:h-[34px] md:w-[120px] md:h-[36px] lg:w-[100px] lg:h-[32px] xl:w-[110px] xl:h-[34px] 2xl:w-[120px] 2xl:h-[36px] text-[12px] sm:text-[13px] md:text-[14px] lg:text-[12px] xl:text-[13px] 2xl:text-[14px] font-medium">
                    View More
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-16 md:w-20 lg:w-16 xl:w-20 2xl:w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-16 md:w-20 lg:w-16 xl:w-20 2xl:w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
