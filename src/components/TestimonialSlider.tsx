"use client";

import React, { useState, useEffect } from "react";

export function TestimonialSlider() {
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
      image: "/images/avilablepets.png",
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
    <section className="w-full pb-20 bg-white overflow-hidden">
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
                  <div className="flex flex-col gap-8">
                    <div className="w-[110px] h-[34px] border border-black rounded-full flex items-center justify-center font-bold text-[12px] uppercase tracking-wider">
                      Client Story
                    </div>
                    <h2 className="text-black font-normal leading-tight" style={{ fontSize: "42px", fontFamily: "var(--font-public-sans), sans-serif" }}>
                      {slide.title}
                    </h2>
                    <p className="text-[#4F4F4F] leading-relaxed italic" style={{ fontSize: "20px" }}>
                      {slide.desc}
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-[1px] bg-black"></div>
                    <span className="text-black font-bold" style={{ fontSize: "18px" }}>
                      {slide.author}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="absolute bottom-12 right-20 flex gap-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-3 h-3 rounded-full transition-all ${current === i ? "bg-black w-8" : "bg-gray-300"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
