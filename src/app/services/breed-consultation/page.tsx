"use client";

import React from "react";
import Link from "next/link";
import FAQSection from "@/components/FAQSection";

export default function BreedConsultationPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans">
      {/* Header Section (Matching Contact Us) */}
      <section
        className="w-full h-[268px] relative flex flex-col items-center justify-center overflow-hidden text-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/contactus.jpg')",
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
            Breed Consultation
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
            <span className="font-medium text-white">Breed Consultation</span>
          </div>
        </div>
      </section>

      {/* Consultation Pricing Section */}
      <section className="w-full bg-[#F3F4F6] flex flex-col items-center justify-center overflow-hidden" style={{ height: "834px" }}>
        <div className="max-w-[1440px] mx-auto w-full px-4 flex flex-col items-center">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 style={{ fontSize: "48px", fontWeight: 400, fontFamily: "var(--font-public-sans), sans-serif", color: "#0A0A0A" }}>
              Talk to a Pet <span style={{ color: "#FFC501" }}>Expert</span> Today
            </h2>
            <p className="mt-4" style={{ fontSize: "18px", color: "#4A5565", fontFamily: "var(--font-public-sans), sans-serif" }}>
              Get personalized guidance for choosing, caring for, and raising your perfect companion.
            </p>
          </div>

          {/* Pricing Cards Grid */}
          <div className="flex items-center gap-10">
            
            {/* Card 1: Basic */}
            <div className="bg-white rounded-[24px] border border-[#DFDFDF] flex flex-col items-center px-8" style={{ width: "366px", height: "573px" }}>
              <div className="mt-8 rounded-[16px] flex flex-col justify-center bg-[#F3F4F6] px-8" style={{ width: "302px", height: "129px" }}>
                <span style={{ fontSize: "12px", fontWeight: 600, fontFamily: "Inter, sans-serif", letterSpacing: "0.05em", color: "#0A0A0A" }}>BASIC — FREE CONSULTATION</span>
                <span className="mt-2" style={{ fontSize: "36px", fontWeight: 400, fontFamily: "Inter, sans-serif", color: "#0A0A0A" }}>₹0</span>
              </div>
              <p className="mt-6 text-center" style={{ fontSize: "16px", color: "#0A0A0A", fontFamily: "var(--font-public-sans), sans-serif" }}>
                Perfect for first-time pet parents
              </p>
              <button className="mt-6 bg-black text-white rounded-full transition-transform active:scale-95" style={{ width: "302px", height: "48px", fontSize: "16px", fontWeight: 500 }}>
                Book Now
              </button>
              <ul className="mt-8 self-start flex flex-col gap-4 w-full">
                {[
                  "15-minute expert call",
                  "Breed recommendation",
                  "Guidance on choosing the right pet",
                  "Basic care tips",
                  "Q&A session"
                ].map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#364153" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17L4 12"/></svg>
                    <span style={{ fontSize: "16px", color: "#364153", fontFamily: "var(--font-public-sans), sans-serif" }}>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Card 2: Standard */}
            <div className="bg-white rounded-[24px] border border-[#DFDFDF] flex flex-col items-center px-8" style={{ width: "366px", height: "573px" }}>
              <div className="mt-8 rounded-[16px] flex flex-col justify-center px-8" style={{ width: "302px", height: "129px", background: "linear-gradient(135deg, #FFC501, #1E1E1E)" }}>
                <span className="text-white" style={{ fontSize: "12px", fontWeight: 600, fontFamily: "Inter, sans-serif", letterSpacing: "0.05em" }}>STANDARD — COMPLETE GUIDANCE</span>
                <span className="mt-2 text-white" style={{ fontSize: "36px", fontWeight: 400, fontFamily: "Inter, sans-serif" }}>₹99</span>
              </div>
              <p className="mt-6 text-center" style={{ fontSize: "16px", color: "#0A0A0A", fontFamily: "var(--font-public-sans), sans-serif" }}>
                Best for serious pet buyers
              </p>
              <button className="mt-6 bg-black text-white rounded-full transition-transform active:scale-95 shadow-black/10" style={{ width: "302px", height: "48px", fontSize: "16px", fontWeight: 500 }}>
                Book Now
              </button>
              <ul className="mt-8 self-start flex flex-col gap-4 w-full">
                {[
                  "30-minute expert consultation",
                  "Personalized pet recommendations",
                  "Home & lifestyle assessment",
                  "Nutrition guidance",
                  "Preparation checklist"
                ].map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#364153" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17L4 12"/></svg>
                    <span style={{ fontSize: "16px", color: "#364153", fontFamily: "var(--font-public-sans), sans-serif" }}>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Card 3: Premium */}
            <div className="bg-white rounded-[24px] border border-[#DFDFDF] flex flex-col items-center px-8" style={{ width: "366px", height: "573px" }}>
              <div className="mt-8 rounded-[16px] flex flex-col justify-center bg-[#F3F4F6] px-8" style={{ width: "302px", height: "129px" }}>
                <span style={{ fontSize: "12px", fontWeight: 600, fontFamily: "Inter, sans-serif", letterSpacing: "0.05em", color: "#0A0A0A" }}>PREMIUM — FULL PET PARENTING</span>
                <span className="mt-2" style={{ fontSize: "36px", fontWeight: 400, fontFamily: "Inter, sans-serif", color: "#0A0A0A" }}>₹2,499</span>
              </div>
              <p className="mt-6 text-center" style={{ fontSize: "16px", color: "#0A0A0A", fontFamily: "var(--font-public-sans), sans-serif" }}>
                For families wanting end-to-end guidance
              </p>
              <button className="mt-6 bg-black text-white rounded-full transition-transform active:scale-95" style={{ width: "302px", height: "48px", fontSize: "16px", fontWeight: 500 }}>
                Book Now
              </button>
              <ul className="mt-8 self-start flex flex-col gap-4 w-full">
                {[
                  "60-minute deep consultation",
                  "Detailed pet matching",
                  "Training & behavior advice",
                  "Health & vaccination planning",
                  "Post-adoption support"
                ].map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#364153" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17L4 12"/></svg>
                    <span style={{ fontSize: "16px", color: "#364153", fontFamily: "var(--font-public-sans), sans-serif" }}>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>
      {/* Why Choose Section */}
      <section className="w-full py-24 bg-white flex flex-col items-center">
        <div className="max-w-[1440px] mx-auto w-full px-4 flex flex-col items-center">
          
          {/* Section Heading */}
          <h2 className="text-center mb-16" style={{ fontSize: "36px", fontWeight: 400, fontFamily: "var(--font-public-sans), sans-serif", color: "#0A0A0A" }}>
            Why Choose <span style={{ color: "#FFC501" }}>Pets Barn Consultation</span>?
          </h2>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-[1240px]">
            
            {/* Card 1: Expert Guidance */}
            <div className="border border-[#DFDFDF] rounded-[24px] flex flex-col overflow-hidden" style={{ height: "397px" }}>
              <div className="flex-1 p-8 flex items-start px-8">
                <img src="/images/expart.png" alt="Expert" style={{ width: "74px", height: "52px", objectFit: "contain" }} />
              </div>
              <div className="bg-[#F6F5F2] p-8 flex flex-col gap-3 rounded-[16px] mb-4 mx-auto" style={{ height: "198px", width: "282px" }}>
                <h3 style={{ fontSize: "22px", fontWeight: 500, color: "#0A0A0A" }}>Expert Guidance</h3>
                <p style={{ fontSize: "14px", color: "#000000CC", lineHeight: "1.6" }}>
                  Consult certified pet specialists with real experience in dogs, cats, and birds.
                </p>
              </div>
            </div>

            {/* Card 2: Personalized Advice */}
            <div className="border border-[#DFDFDF] rounded-[24px] flex flex-col overflow-hidden" style={{ height: "397px" }}>
              <div className="flex-1 p-8 flex items-start px-8">
                <img src="/images/personalized.png" alt="Personalized" style={{ width: "74px", height: "52px", objectFit: "contain" }} />
              </div>
              <div className="bg-[#F6F5F2] p-8 flex flex-col gap-3 rounded-[16px] mb-4 mx-auto" style={{ height: "198px", width: "282px" }}>
                <h3 style={{ fontSize: "22px", fontWeight: 500, color: "#0A0A0A" }}>Personalized Advice</h3>
                <p style={{ fontSize: "14px", color: "#000000CC", lineHeight: "1.6" }}>
                  Recommendations tailored to your lifestyle, home, and preferences.
                </p>
              </div>
            </div>

            {/* Card 3: Stress-Free Pet Parenting */}
            <div className="border border-[#DFDFDF] rounded-[24px] flex flex-col overflow-hidden" style={{ height: "397px" }}>
              <div className="flex-1 p-8 flex items-start px-8">
                <img src="/images/stress-free.png" alt="Stress Free" style={{ width: "52px", height: "52px", objectFit: "contain" }} />
              </div>
              <div className="bg-[#F6F5F2] p-8 flex flex-col gap-3 rounded-[16px] mb-4 mx-auto" style={{ height: "198px", width: "282px" }}>
                <h3 style={{ fontSize: "22px", fontWeight: 500, color: "#0A0A0A" }}>Stress-Free Pet Parenting</h3>
                <p style={{ fontSize: "14px", color: "#000000CC", lineHeight: "1.6" }}>
                  Get answers on training, nutrition, health, and behavior.
                </p>
              </div>
            </div>

            {/* Card 4: Ongoing Support */}
            <div className="border border-[#DFDFDF] rounded-[24px] flex flex-col overflow-hidden" style={{ height: "397px" }}>
              <div className="flex-1 p-8 flex items-start px-8">
                <img src="/images/ongoing.png" alt="Ongoing Support" style={{ width: "80.75px", height: "52px", objectFit: "contain" }} />
              </div>
              <div className="bg-[#F6F5F2] p-8 flex flex-col gap-3 rounded-[16px] mb-4 mx-auto" style={{ height: "198px", width: "282px" }}>
                <h3 style={{ fontSize: "22px", fontWeight: 500, color: "#0A0A0A" }}>Ongoing Support</h3>
                <p style={{ fontSize: "14px", color: "#000000CC", lineHeight: "1.6" }}>
                  We're here even after you bring your pet home.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* Promise Section */}
      <section className="py-32 bg-white w-full">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">

          {/* Header Area */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-6">
            <div className="max-w-[700px]">
              <h2 className="text-black font-normal leading-tight mb-4" style={{ fontSize: "36px", fontFamily: "var(--font-public-sans), sans-serif" }}>
                Experience the <span className="text-[#FFC501]">Pets Barn</span> Promise of Pawsome Care
              </h2>
              <p className="text-[#6E6E6E] leading-relaxed" style={{ fontSize: "18px", fontFamily: "var(--font-public-sans), sans-serif" }}>
                Discover the difference with Pet Barns, where our commitment to ethical standards and lifelong pet wellness ensures you find more than just a pet—you find a family member.
              </p>
            </div>
            <button className="bg-black text-white rounded-full font-normal hover:bg-gray-800 transition-all shadow-lg flex items-center justify-center" style={{ 
              width: "193px", 
              height: "44px", 
              fontSize: "15px" 
            }}>
              Call Us Now
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Expert Guidance",
                description: "Offering expert guidance in post-adoption pet care to support your journey as a new pet parent from day one.",
                image: "/images/exabout1.png"
              },
              {
                title: "Health Checked",
                description: "Every puppy undergoes a thorough health check by certified veterinarians to ensure they are active and healthy.",
                image: "/images/exabout2.png"
              },
              {
                title: "Verified Lineage",
                description: "Providing a verified pedigree and lineage with an included microchip, ensuring your puppy's heritage is documented.",
                image: "/images/exabout3.png"
              }
            ].map((box, index) => (
              <div 
                key={index} 
                className={`p-12 flex flex-col items-center text-center gap-8 border-gray-200 ${
                  index === 0 ? 'border-t border-r' : 
                  index === 1 ? 'border-t border-r' : 
                  'border-t'
                }`}
              >
                <div className="w-[84px] h-[84px] flex items-center justify-center flex-shrink-0">
                  <img src={box.image} alt={box.title} className="w-[84px] h-[84px] object-contain" />
                </div>
                <div className="flex flex-col gap-4">
                  <h3 className="text-black font-bold text-[22px] leading-tight">
                    {box.title}
                  </h3>
                  <p className="text-[#6E6E6E] text-[16px] leading-relaxed">
                    {box.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* What We Help You With Section */}
      <section className="w-full bg-white relative" style={{ height: "690px", overflow: "hidden" }}>
        <div className="max-w-[1440px] mx-auto h-full px-4 sm:px-6 lg:px-12 flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-[35%_65%] gap-10 items-center w-full h-full">
            
            {/* Left Content */}
            <div className="flex flex-col z-10">
              <h2 className="mb-6 leading-tight" style={{ fontSize: "35px", fontWeight: 400, fontFamily: "var(--font-public-sans), sans-serif", color: "#0A0A0A" }}>
                What We <span style={{ color: "#FFC501" }}>Help You</span> With?
              </h2>
              <p className="mb-10" style={{ fontSize: "16px", color: "#363D4F", lineHeight: "1.6", fontFamily: "var(--font-public-sans), sans-serif" }}>
                Guidance tailored to your pet journey — from choosing the right companion to raising a happy, healthy family member.
              </p>

              <ul className="flex flex-col gap-5">
                {[
                  "Choosing the right pet for your home",
                  "Breed recommendations",
                  "First-time pet parenting guidance",
                  "Nutrition & care tips",
                  "Training basics"
                ].map((item) => (
                  <li key={item} className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#FFC501] flex items-center justify-center">
                      <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 5L5 9L13 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span style={{ fontSize: "14px", color: "#060B13", fontFamily: "var(--font-public-sans), sans-serif" }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Image with Decorative Background */}
            <div className="relative flex justify-center items-end h-full">
              {/* Yellow Decorative Circle (Half-rounded at bottom) */}
              <div 
                className="absolute w-[800px] h-[800px] rounded-full bg-[#FFC501] -z-0"
                style={{ bottom: "-400px", left: "50%", transform: "translateX(-50%)" }}
              ></div>
              {/* Cat Image */}
              <img 
                src="/images/cathelp.png" 
                alt="How we help" 
                className="relative z-10 w-full max-w-[850px] object-contain block"
                style={{ marginBottom: "-20px" }}
              />
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
              <span style={{ color: "#FFC501" }}>10,000+</span> Happy Families Served
            </h2>
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <FAQSection items={[
        {
          question: "What happens during a consultation call?",
          answer: "Our experts discuss your lifestyle, home environment, and preferences to recommend the most suitable pet breeds that match your daily routine."
        },
        {
          question: "Is the consultation available for all types of pets?",
          answer: "Yes, we provide expert guidance for dogs, cats, and birds, tailoring advice to the specific needs of each species."
        },
        {
          question: "Do you help in finding a breeder after the consultation?",
          answer: "We provide detailed guidance on how to identify ethical breeders and what documentation you should request to ensure a healthy companion."
        },
        {
          question: "Can I ask about specific health issues for a breed?",
          answer: "Absolutely. Our experts provide insights into breed-specific health traits, energy levels, and grooming requirements to help you make an informed choice."
        },
        {
          question: "What if I'm a first-time pet parent?",
          answer: "We offer dedicated support for first-time owners, including preparation checklists, basic care training, and ongoing advice for a smooth transition."
        }
      ]} />
      {/* Final CTA Section */}
      <section className="w-full bg-[#E6E6E6] overflow-hidden" style={{ height: "591px" }}>
        <div className="max-w-[1440px] mx-auto h-full px-4 sm:px-6 lg:px-12 flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center w-full h-full">
            
            {/* Left Column: Dog Expert Image */}
            <div className="h-full flex items-end">
              <img 
                src="/images/dogexpart.png" 
                alt="Dog Expert" 
                className="h-[90%] object-contain object-bottom"
              />
            </div>

            {/* Right Column: Text & Button */}
            <div className="flex flex-col max-w-[650px] gap-10">
              <h2 className="leading-tight" style={{ fontSize: "39px", fontWeight: 400, fontFamily: "var(--font-public-sans), sans-serif", color: "#0A0A0A" }}>
                Not sure which breed is right for your home and lifestyle? 
                <span style={{ color: "#FFC501" }}> Talk to our experts and find the perfect.</span>
              </h2>
              
              <button 
                className="bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-all shadow-lg"
                style={{ width: "260px", height: "50px", fontSize: "16px", fontWeight: 500 }}
              >
                Talk to Our Pet Experts
              </button>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
