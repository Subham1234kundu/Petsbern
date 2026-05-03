"use client";

import React from "react";
import Link from "next/link";
import { TestimonialSlider } from "@/components/TestimonialSlider";

export default function PetTrainingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans">
      {/* Header Section */}
      <section
        className="w-full h-[268px] relative flex flex-col items-center justify-center overflow-hidden text-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/pettraining.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center 40%",
        }}
      >
        <div className="z-10 flex flex-col items-center gap-1">
          <h1
            className="text-white tracking-tight leading-tight"
            style={{
              fontFamily: "var(--font-public-sans), sans-serif",
              fontSize: "32px",
              fontWeight: 600,
            }}
          >
            Pet Training
          </h1>
          <div className="flex items-center gap-2 text-white/90 text-[14px]">
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
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </span>
            <span className="font-medium text-white">Pet Training</span>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-16 flex-grow">

        {/* Why Choose Section */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-16">

          {/* Left Column */}
          <div className="flex-1 max-w-[580px]">
            <h2 style={{ fontSize: "36px", fontWeight: 400, fontFamily: "var(--font-public-sans), 'Public Sans', sans-serif", color: "#0A0A0A", lineHeight: "1.2" }}>
              Why Choose{" "}
              <span style={{ color: "#FFC501" }}>Pets Barn<br />Training</span>?
            </h2>

            <p className="mt-4" style={{ fontSize: "18px", color: "#4A5565", lineHeight: "1.6" }}>
              Training should be tailored to the pet's temperament and environment.
            </p>

            {/* Feature Grid */}
            <div className="mt-10 grid grid-cols-2 gap-x-10 gap-y-10 items-start">

              {/* Certified Trainers */}
              <div className="flex flex-col gap-3">
                <div className="w-[44.8px] h-[44.8px] rounded-full flex items-center justify-center" style={{ backgroundColor: "#FFC501" }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="8" r="4" /><path d="M6 20v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
                  </svg>
                </div>
                <h3 style={{ fontSize: "20px", fontWeight: 400, color: "#0A0A0A", fontFamily: "var(--font-public-sans), 'Public Sans', sans-serif" }}>Certified Trainers</h3>
                <p style={{ fontSize: "14px", color: "#11111199", lineHeight: "1.6" }}>Experienced professionals dedicated to your pet's success and well-being.</p>
              </div>

              {/* Positive Reinforcement */}
              <div className="flex flex-col gap-3">
                <div className="w-[44.8px] h-[44.8px] rounded-full flex items-center justify-center" style={{ backgroundColor: "#FFC501" }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" /><path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                <h3 style={{ fontSize: "20px", fontWeight: 400, color: "#0A0A0A", fontFamily: "var(--font-public-sans), 'Public Sans', sans-serif" }}>Positive Reinforcement Methods</h3>
                <p style={{ fontSize: "14px", color: "#11111199", lineHeight: "1.6" }}>Reward-based training that builds trust, confidence, and lasting good behavior.</p>
              </div>

              {/* Customized Programs */}
              <div className="flex flex-col gap-3">
                <div className="w-[44.8px] h-[44.8px] rounded-full flex items-center justify-center" style={{ backgroundColor: "#FFC501" }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="7" height="7" />
                  </svg>
                </div>
                <h3 style={{ fontSize: "20px", fontWeight: 400, color: "#0A0A0A", fontFamily: "var(--font-public-sans), 'Public Sans', sans-serif" }}>Customized Programs</h3>
                <p style={{ fontSize: "14px", color: "#11111199", lineHeight: "1.6" }}>Training plans tailored to your pet's age, breed, and personality.</p>
              </div>

              {/* Progress Tracking */}
              <div className="flex flex-col gap-3">
                <div className="w-[44.8px] h-[44.8px] rounded-full flex items-center justify-center" style={{ backgroundColor: "#FFC501" }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                  </svg>
                </div>
                <h3 style={{ fontSize: "20px", fontWeight: 400, color: "#0A0A0A", fontFamily: "var(--font-public-sans), 'Public Sans', sans-serif" }}>Progress Tracking</h3>
                <p style={{ fontSize: "14px", color: "#11111199", lineHeight: "1.6" }}>Regular updates and insights to monitor your pet's improvement.</p>
              </div>

            </div>
          </div>

          {/* Right Column: Image */}
          <div className="flex-shrink-0">
            <img
              src="/images/whychoose.png"
              alt="Why Choose Pets Barn Training"
              style={{ width: "581px", height: "608px", objectFit: "cover", borderRadius: "16px" }}
            />
          </div>

        </div>
      </main>

      {/* Training Programs Section */}
      <section className="w-full py-20" style={{ backgroundColor: "#F7F7F7" }}>
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">

          {/* Section Heading */}
          <h2 className="text-center mb-12" style={{ fontSize: "36px", fontWeight: 400, fontFamily: "var(--font-public-sans), 'Public Sans', sans-serif", color: "#0A0A0A" }}>
            Training Programs <span style={{ color: "#FFC501" }}>We Offer</span>
          </h2>

          {/* Cards Grid */}
          <div className="flex flex-wrap justify-center gap-6 items-start">

            {[
              {
                title: "Puppy Foundation Training",
                desc: "Perfect for young pets to build the right habits early.",
                features: ["Basic commands (Sit, Stay, Come)", "Potty & crate training", "Socialization skills", "Bite inhibition & manners"],
              },
              {
                title: "Basic Obedience Training",
                desc: "For pets that need structure and discipline.",
                features: ["Leash walking", "Recall training", "Calm greetings", "Household manners"],
              },
              {
                title: "Advanced Training & Tricks",
                desc: "Take your pet to the next level.",
                features: ["Advanced commands", "Off-leash control", "Fun tricks & activities", "Confidence building"],
              },
              {
                title: "Behavior Correction Program",
                desc: "Fix unwanted behaviors safely.",
                features: ["Excessive barking", "Aggression & anxiety", "Chewing & destructive habits", "Separation anxiety"],
              },
            ].map((card) => (
              <div
                key={card.title}
                className="bg-white flex flex-col p-6"
                style={{ width: "265px", height: "393.5px", border: "1px solid #E5E7EB", borderRadius: "12px" }}
              >
                {/* Title + Description — fixed 30% of card height */}
                <div style={{ height: "30%", overflow: "hidden" }}>
                  <h3 style={{ fontSize: "18px", fontWeight: 500, color: "#4A5565", fontFamily: "var(--font-public-sans), 'Public Sans', sans-serif", lineHeight: "1.3", marginBottom: "8px" }}>
                    {card.title}
                  </h3>
                  <p style={{ fontSize: "14px", color: "#6A7282", lineHeight: "1.5" }}>
                    {card.desc}
                  </p>
                </div>

                {/* Call Us Button */}
                <button
                  className="flex items-center justify-center hover:opacity-90 transition-colors"
                  style={{ width: "215px", height: "48px", backgroundColor: "#000000", borderRadius: "9999px", color: "white", marginBottom: "16px" }}
                >
                  <span style={{ fontSize: "16px", fontWeight: 500, fontFamily: "var(--font-public-sans), 'Public Sans', sans-serif" }}>Call Us</span>
                </button>

                {/* Features List */}
                <div className="flex flex-col gap-2">
                  {card.features.map((f) => (
                    <div key={f} className="flex items-start gap-2">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#364153" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 mt-0.5">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span style={{ fontSize: "14px", color: "#364153", lineHeight: "1.4" }}>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-white w-full py-20">
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
              {/* White file-tab cutout effect using precise SVG S-curve */}
              <div className="absolute top-0 left-0 w-full h-[25%] z-0 pointer-events-none">
                <svg
                  className="w-full h-full"
                  preserveAspectRatio="none"
                  viewBox="0 0 100 100"
                >
                  <path
                    d="M 0 0 L 85 0 C 78 0 75 100 68 100 L 0 100 Z"
                    fill="#FFFFFF"
                  />
                </svg>
              </div>

              <div className="w-[45%] h-full overflow-hidden rounded-[28px] relative z-10 shadow-sm">
                <img
                  src="/images/pettravel1.png"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  alt="Expert Tip 1"
                />
              </div>

              <div className="w-[55%] flex flex-col justify-between h-full py-4 relative z-10">
                <div className="pt-2">
                  <span className="text-[11px] text-[#FFC501] font-bold uppercase tracking-widest mb-10 block ml-2">
                    PET TRAINING
                  </span>
                  <h3 className="text-[20px] text-black font-normal leading-[1.4] pr-4 ml-2">
                    Professional Training Tips to Build a Stronger Bond with Your New Pet
                  </h3>
                </div>
                <div className="self-end mr-2 mb-2">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm transition-all text-[#FFC501] group-hover:bg-[#FFC501] group-hover:text-white">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Tip Card 2 */}
            <div className="bg-[#F6F6F6] rounded-[40px] p-6 h-[355px] flex items-center gap-8 group cursor-pointer transition-all hover:shadow-lg relative overflow-hidden">
              {/* White file-tab cutout effect using precise SVG S-curve */}
              <div className="absolute top-0 left-0 w-full h-[25%] z-0 pointer-events-none">
                <svg
                  className="w-full h-full"
                  preserveAspectRatio="none"
                  viewBox="0 0 100 100"
                >
                  <path
                    d="M 0 0 L 85 0 C 78 0 75 100 68 100 L 0 100 Z"
                    fill="#FFFFFF"
                  />
                </svg>
              </div>

              <div className="w-[45%] h-full overflow-hidden rounded-[28px] relative z-10 shadow-sm">
                <img
                  src="/images/pettravel2.png"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  alt="Expert Tip 2"
                />
              </div>

              <div className="w-[55%] flex flex-col justify-between h-full py-4 relative z-10">
                <div className="pt-2">
                  <span className="text-[11px] text-[#FFC501] font-bold uppercase tracking-widest mb-10 block ml-2">
                    PET TRAVEL
                  </span>
                  <h3 className="text-[20px] text-black font-normal leading-[1.4] pr-4 ml-2">
                    Essential Nutrition and Health Guides for Every Stage of Pet Life
                  </h3>
                </div>
                <div className="self-end mr-2 mb-2">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm transition-all text-[#FFC501] group-hover:bg-[#FFC501] group-hover:text-white">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>


        </div>
      </section>

      {/* Why Training Pets? Section */}
      <section className="py-24 bg-[#F7F7F7] flex flex-col items-center justify-center w-full min-h-[573px]">
        <div className="w-full max-w-[1240px] px-4">
          <h2 className="text-black text-center mb-16" style={{ fontSize: "36px", fontWeight: 400, fontFamily: "var(--font-public-sans), 'Public Sans', sans-serif" }}>
            Why <span className="text-[#FFC501]">Training</span> Pets?
          </h2>

          <div className="flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap justify-center lg:justify-between gap-4">
            {/* Box 1 */}
            <div className="w-[298px] h-[325px] bg-white rounded-[32px] p-8 flex flex-col shadow-sm border border-[#EFEFEF]">
              <div className="w-10 h-10 rounded-full bg-[#FFC501] flex items-center justify-center mb-6">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
              </div>
              <h3 className="mb-4" style={{ fontSize: "18.1px", fontWeight: 500, fontFamily: "var(--font-public-sans), 'Public Sans', sans-serif", color: "#000000", lineHeight: "1.2" }}>Better Behavior at Home</h3>
              <p className="mb-6" style={{ fontSize: "16px", fontWeight: 400, color: "#6E6E6E", lineHeight: "1.4" }}>
                Training helps pets understand what’s right and wrong
              </p>
              <div className="mt-auto">
                <h4 className="font-bold mb-1" style={{ fontSize: "16px", color: "#000000" }}>Reduces issues like:</h4>
                <ul className="space-y-1">
                  <li style={{ fontSize: "16px", color: "#6E6E6E" }}>Excessive barking</li>
                  <li style={{ fontSize: "16px", color: "#6E6E6E" }}>Aggression</li>
                </ul>
              </div>
            </div>

            {/* Box 2 */}
            <div className="w-[298px] h-[325px] bg-white rounded-[32px] p-8 flex flex-col shadow-sm border border-[#EFEFEF]">
              <div className="w-10 h-10 rounded-full bg-[#FFC501] flex items-center justify-center mb-6">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
              </div>
              <h3 className="mb-4" style={{ fontSize: "18.1px", fontWeight: 500, fontFamily: "var(--font-public-sans), 'Public Sans', sans-serif", color: "#000000", lineHeight: "1.2" }}>Stronger Bond With Your Pet</h3>
              <p className="mb-6" style={{ fontSize: "16px", fontWeight: 400, color: "#6E6E6E", lineHeight: "1.4" }}>
                Training builds trust and communication.
              </p>
              <div className="mt-auto">
                <h4 className="font-bold mb-1" style={{ fontSize: "16px", color: "#000000" }}>Improves:</h4>
                <ul className="space-y-1">
                  <li style={{ fontSize: "16px", color: "#6E6E6E" }}>Responsive</li>
                  <li style={{ fontSize: "16px", color: "#6E6E6E" }}>Emotionally secure</li>
                </ul>
              </div>
            </div>

            {/* Box 3 */}
            <div className="w-[298px] h-[325px] bg-white rounded-[32px] p-8 flex flex-col shadow-sm border border-[#EFEFEF]">
              <div className="w-10 h-10 rounded-full bg-[#FFC501] flex items-center justify-center mb-6">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/></svg>
              </div>
              <h3 className="mb-4" style={{ fontSize: "18.1px", fontWeight: 500, fontFamily: "var(--font-public-sans), 'Public Sans', sans-serif", color: "#000000", lineHeight: "1.2" }}>Safety for Pets and People</h3>
              <p className="mb-6" style={{ fontSize: "16px", fontWeight: 400, color: "#6E6E6E", lineHeight: "1.4" }}>
                Training keeps both your pet and others safe
              </p>
              <div className="mt-auto">
                <h4 className="font-bold mb-1" style={{ fontSize: "16px", color: "#000000" }}>Prevents:</h4>
                <ul className="space-y-1">
                  <li style={{ fontSize: "16px", color: "#6E6E6E" }}>Running into traffic</li>
                  <li style={{ fontSize: "16px", color: "#6E6E6E" }}>Reacting aggressively</li>
                </ul>
              </div>
            </div>

            {/* Box 4 */}
            <div className="w-[298px] h-[325px] bg-white rounded-[32px] p-8 flex flex-col shadow-sm border border-[#EFEFEF]">
              <div className="w-10 h-10 rounded-full bg-[#FFC501] flex items-center justify-center mb-6">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 5c-1.3 0-2.3 1.1-2.3 2.3 0 1.2 1 2.3 2.3 2.3s2.3-1.1 2.3-2.3c0-1.2-1-2.3-2.3-2.3Z"/><path d="M18 10c-1.3 0-2.3 1.1-2.3 2.3 0 1.2 1 2.3 2.3 2.3s2.3-1.1 2.3-2.3c0-1.2-1-2.3-2.3-2.3Z"/><path d="M7 10c-1.3 0-2.3 1.1-2.3 2.3 0 1.2 1 2.3 2.3 2.3s2.3-1.1 2.3-2.3c0-1.2-1-2.3-2.3-2.3Z"/><path d="M14 15c-1.3 0-2.3 1.1-2.3 2.3 0 1.2 1 2.3 2.3 2.3s2.3-1.1 2.3-2.3c0-1.2-1-2.3-2.3-2.3Z"/><path d="M12 22c-3.3 0-6-2.7-6-6 0-1.1.9-2 2-2h8c1.1 0 2 .9 2 2 0 3.3-2.7 6-6 6Z"/></svg>
              </div>
              <h3 className="mb-4" style={{ fontSize: "18.1px", fontWeight: 500, fontFamily: "var(--font-public-sans), 'Public Sans', sans-serif", color: "#000000", lineHeight: "1.2" }}>Healthier, More Confident Pet</h3>
              <p className="mb-6" style={{ fontSize: "16px", fontWeight: 400, color: "#6E6E6E", lineHeight: "1.4" }}>
                It helps pets feel secure, improves social skills.
              </p>
              <div className="mt-auto">
                <h4 className="font-bold mb-1" style={{ fontSize: "16px", color: "#000000" }}>Reduces:</h4>
                <ul className="space-y-1">
                  <li style={{ fontSize: "16px", color: "#6E6E6E" }}>Reduces anxiety</li>
                  <li style={{ fontSize: "16px", color: "#6E6E6E" }}>Boredom</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Happy Families Section */}
      <section className="bg-white py-24 flex flex-col items-center w-full relative overflow-hidden">
        <div className="w-full max-w-[1440px] px-4 relative">
          <div className="relative w-full h-[447px] overflow-hidden flex flex-col items-center">
            <img
              src="/images/familyy.png"
              className="w-full h-full object-cover select-none pointer-events-none"
              alt="Happy Families Collage"
            />
            
            {/* Subtle white fade at the bottom */}
            <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white via-white/40 to-transparent pointer-events-none"></div>

            {/* Text Overlay */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 whitespace-nowrap">
              <h3 className="text-[42px] font-normal tracking-tight" style={{ fontFamily: "var(--font-public-sans), 'Public Sans', sans-serif" }}>
                <span className="text-[#E53E3E]">10,000+</span>
                <span className="text-black ml-4">Happy Families Served</span>
              </h3>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonial Section */}
      <TestimonialSlider />
      {/* FAQ Section */}
      <section className="py-24 bg-white flex flex-col items-center w-full">
        <div className="w-full max-w-[1043px] px-4">
          <h2 className="text-black text-center mb-16" style={{ fontSize: "36px", fontWeight: 400, fontFamily: "var(--font-public-sans), 'Public Sans', sans-serif" }}>
            Frequently Asking Questions
          </h2>

          <div className="flex flex-col gap-4">
            {[
              {
                q: "What types of training programs do you offer?",
                a: "We offer Basic Obedience, Advanced Skill Training, Behavioral Correction, and Puppy Socialization programs tailored to your pet's specific needs."
              },
              {
                q: "How long does a typical training program last?",
                a: "Program duration varies based on the goals and the pet's progress. Most basic programs range from 4 to 8 weeks, with weekly sessions."
              },
              {
                q: "Do you use positive reinforcement techniques?",
                a: "Yes, we exclusively use positive reinforcement and reward-based training methods to ensure a happy, stress-free learning experience for your pet."
              },
              {
                q: "At what age can my pet start training?",
                a: "Training can start as early as 8-10 weeks for puppy socialization. For obedience training, pets of any age can learn new skills, though early start is recommended."
              }
            ].map((faq, index) => {
              const [isOpen, setIsOpen] = React.useState(false);
              return (
                <div 
                  key={index} 
                  className="w-full border rounded-[12px] overflow-hidden transition-all duration-300"
                  style={{ 
                    borderColor: "#D8D8D8",
                    backgroundColor: isOpen ? "#EBEBEB" : "transparent"
                  }}
                >
                  <button 
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-full px-8 flex items-center justify-between transition-colors"
                    style={{ height: "78px" }}
                  >
                    <span 
                      className="text-left" 
                      style={{ 
                        fontSize: "20px", 
                        fontWeight: 400, 
                        fontFamily: "var(--font-public-sans), sans-serif",
                        color: isOpen ? "#000000" : "#565246"
                      }}
                    >
                      {faq.q}
                    </span>
                    <div className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m6 9 6 6 6-6"/>
                      </svg>
                    </div>
                  </button>
                  
                  {isOpen && (
                    <div className="px-8 pb-8">
                      <p style={{ fontSize: "16px", fontWeight: 400, color: "#606267", lineHeight: "1.6" }}>
                        {faq.a}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* Final CTA Section */}
      <section className="w-full flex flex-col lg:flex-row overflow-hidden bg-[#F8FBFF]" style={{ height: "591px" }}>
        {/* Left Column (40%) */}
        <div className="w-full lg:w-[40%] flex flex-col justify-center px-12 lg:px-20 h-full">
          <h2 className="text-black mb-10 leading-[1.2]" style={{ fontSize: "42px", fontWeight: 400, fontFamily: "var(--font-public-sans), sans-serif" }}>
            Turn mischief into good manners — enroll your pet in our expert <br />
            <span className="text-[#FFC501]">training program today.</span>
          </h2>
          
          <button className="bg-black text-white px-10 h-[60px] rounded-full hover:bg-gray-800 transition-all w-fit shadow-lg" style={{ fontSize: "18px", fontWeight: 500 }}>
            Consult For Training
          </button>
        </div>

        {/* Right Column (60%) */}
        <div className="w-full lg:w-[60%] h-full relative">
          <img 
            src="/images/trainingprogram.png" 
            className="w-full h-full object-cover"
            alt="Pet Training Program"
          />
        </div>
      </section>

    </div>
  );
}
