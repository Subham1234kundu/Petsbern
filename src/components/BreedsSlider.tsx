"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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

function getHeaderOffset() {
  if (window.innerWidth >= 1024) return 150;
  if (window.innerWidth >= 640) return 74;
  return 64;
}

export default function BreedsSlider() {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const slider = sliderRef.current;
    const container = containerRef.current;

    if (!section || !slider || !container) return;

    const cards = gsap.utils.toArray<HTMLElement>("[data-breed-card]", slider);
    const cardImages = cards.map(
      (card) => card.querySelector<HTMLElement>("[data-breed-img]")!
    );
    const fadeLeft = section.querySelector<HTMLElement>("[data-fade-left]");
    const fadeRight = section.querySelector<HTMLElement>("[data-fade-right]");

    const cardSetters = cards.map((card, index) => ({
      scale: gsap.quickSetter(card, "scale"),
      opacity: gsap.quickSetter(card, "opacity"),
      imgY: gsap.quickSetter(cardImages[index], "y"),
    }));

    const setCardSpotlight = () => {
      const containerRect = container.getBoundingClientRect();
      const containerCenter = containerRect.left + containerRect.width / 2;

      cards.forEach((card, index) => {
        const cardRect = card.getBoundingClientRect();
        const cardCenter = cardRect.left + cardRect.width / 2;
        const distance = Math.abs(containerCenter - cardCenter);
        const influence = Math.max(0, 1 - distance / (containerRect.width * 0.5));

        cardSetters[index].scale(0.9 + influence * 0.1);
        cardSetters[index].opacity(0.45 + influence * 0.55);
        cardSetters[index].imgY((1 - influence) * -20);
      });
    };

    const ctx = gsap.context(() => {
      const getScrollDistance = () =>
        Math.max(0, slider.scrollWidth - container.clientWidth);

      gsap.set(cards, { opacity: 0, y: 50, scale: 0.92 });
      if (fadeLeft) gsap.set(fadeLeft, { opacity: 0 });
      if (fadeRight) gsap.set(fadeRight, { opacity: 0 });

      const enterTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

      enterTl.to(cards, {
        opacity: 0.45,
        y: 0,
        scale: 0.9,
        duration: 0.7,
        stagger: 0.06,
        ease: "power3.out",
      });

      if (fadeLeft && fadeRight) {
        enterTl.to(
          [fadeLeft, fadeRight],
          { opacity: 1, duration: 0.6, ease: "power2.out" },
          "-=0.4"
        );
      }

      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: () => `top top+=${getHeaderOffset()}`,
          end: () => `+=${getScrollDistance()}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: setCardSpotlight,
          onEnter: setCardSpotlight,
          onEnterBack: setCardSpotlight,
        },
      });

      scrollTl.to(
        slider,
        {
          x: () => -getScrollDistance(),
          ease: "none",
        },
        0
      );

      if (getScrollDistance() <= 0) {
        scrollTl.scrollTrigger?.disable();
      }
    }, section);

    return () => ctx.revert();
  }, []);

  const handleMouseEnter = (index: number) => {
    gsap.to(`[data-breed-card="${index}"]`, {
      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.12)",
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = (index: number) => {
    gsap.to(`[data-breed-card="${index}"]`, {
      boxShadow: "0 0px 0px rgba(0, 0, 0, 0)",
      duration: 0.3,
      ease: "power2.out",
    });
  };

  return (
    <section ref={sectionRef} className="w-full pt-0 pb-4 sm:pb-6 md:pb-8 bg-white overflow-x-hidden scrollbar-hide">
      <div className="w-full px-[4%]">
        <div ref={containerRef} className="relative overflow-hidden scrollbar-hide">
          <div
            ref={sliderRef}
            className="flex gap-3 sm:gap-4 md:gap-5 lg:gap-4 xl:gap-5 2xl:gap-6"
            style={{ willChange: "transform" }}
          >
            {breedsData.map((breed, index) => (
              <div
                key={breed.name}
                data-breed-card={index}
                className="flex-shrink-0 w-[280px] sm:w-[300px] md:w-[320px] lg:w-[280px] xl:w-[300px] 2xl:w-[320px] will-change-transform"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
              >
                <div className="flex flex-col items-center text-center h-full">
                  <div className="w-[200px] h-[230px] sm:w-[220px] sm:h-[250px] md:w-[240px] md:h-[270px] lg:w-[200px] lg:h-[230px] xl:w-[220px] xl:h-[250px] 2xl:w-[240px] 2xl:h-[270px] mb-2 sm:mb-3 flex items-end justify-center overflow-hidden">
                    <img
                      data-breed-img
                      src={breed.img}
                      alt={breed.name}
                      className="w-full h-full object-contain object-bottom will-change-transform"
                    />
                  </div>

                  <h3 className="text-[20px] sm:text-[22px] md:text-[24px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px] font-bold text-black mb-2 leading-tight px-2">
                    {breed.name}
                  </h3>

                  <p
                    className="text-[12px] sm:text-[13px] md:text-[14px] lg:text-[12px] xl:text-[13px] 2xl:text-[14px] leading-relaxed mb-4 sm:mb-6 flex-grow px-2"
                    style={{ color: "#484554" }}
                  >
                    {breed.desc}
                  </p>

                  <button className="bg-black text-white rounded-md flex items-center justify-center hover:bg-gray-800 transition-colors w-[100px] h-[32px] sm:w-[110px] sm:h-[34px] md:w-[120px] md:h-[36px] lg:w-[100px] lg:h-[32px] xl:w-[110px] xl:h-[34px] 2xl:w-[120px] 2xl:h-[36px] text-[12px] sm:text-[13px] md:text-[14px] lg:text-[12px] xl:text-[13px] 2xl:text-[14px] font-medium">
                    View More
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div
            data-fade-left
            className="absolute left-0 top-0 bottom-0 w-12 sm:w-16 md:w-20 lg:w-16 xl:w-20 2xl:w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"
          />
          <div
            data-fade-right
            className="absolute right-0 top-0 bottom-0 w-12 sm:w-16 md:w-20 lg:w-16 xl:w-20 2xl:w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"
          />
        </div>
      </div>
    </section>
  );
}
