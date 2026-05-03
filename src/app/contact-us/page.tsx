"use client";

import React from "react";
import Link from "next/link";

export default function ContactUsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans">
      {/* Contact Header Section */}
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
            Contact Us
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
            <span className="font-medium text-white">Contacts</span>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-24 flex-grow flex justify-center">
        <div className="flex flex-col lg:flex-row items-start justify-between w-full max-w-[1040px]">
          
          {/* Left Column */}
          <div className="flex flex-col w-full max-w-[448px]">
            <h2 className="text-[#0A0A0A] leading-tight" style={{ fontSize: "36px", fontFamily: "var(--font-public-sans), 'Public Sans', sans-serif", fontWeight: 600 }}>
              We'd love to hear <br/>
              <span className="text-[#FFC501]">from you</span>!
            </h2>
            <p className="mt-4" style={{ color: "#4A5565", fontSize: "16px", lineHeight: "1.6" }}>
              Whether you have questions about our pets, need help choosing the perfect companion, or want to know more about our services, our team is here to help.
            </p>

            <div className="mt-12 flex flex-col gap-10">
              {/* Call Center */}
              <div>
                <h3 className="font-medium text-[#0A0A0A]" style={{ fontSize: "18px", marginBottom: "12px" }}>Call Center</h3>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 flex-shrink-0 flex items-center justify-center text-[#0A0A0A]">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  </div>
                  <div className="flex flex-col text-[#0A0A0A]" style={{ fontSize: "14px", fontWeight: 400, gap: "4px" }}>
                    <span>+91 98765 43210</span>
                    <span>+91 98765 43210</span>
                  </div>
                </div>
              </div>

              {/* Our Location */}
              <div>
                <h3 className="font-medium text-[#0A0A0A]" style={{ fontSize: "18px", marginBottom: "12px" }}>Our Location</h3>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 flex-shrink-0 flex items-center justify-center text-[#0A0A0A] mt-0.5">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  </div>
                  <div style={{ fontSize: "14px", fontWeight: 400, lineHeight: "1.6" }}>
                    <span className="text-[#0A0A0A] font-medium">Pets Barn</span><br/>
                    <span className="text-[#4A5565]">
                      2nd Floor, City Mall, Mavoor Road<br/>
                      Kozhikode, Kerala — 673004<br/>
                      India
                    </span>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div>
                <h3 className="font-medium text-[#0A0A0A]" style={{ fontSize: "18px", marginBottom: "12px" }}>Email</h3>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 flex-shrink-0 flex items-center justify-center text-[#0A0A0A]">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  </div>
                  <div className="text-[#0A0A0A]" style={{ fontSize: "14px", fontWeight: 400 }}>
                    support@petsbarn.in
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Form */}
          <div className="flex w-full max-w-[496px]">
            <div 
              className="bg-white rounded-lg px-[48px] py-[40px] flex flex-col w-full max-w-[496px]"
              style={{ height: "580px", border: "1px solid #DBDBDB" }}
            >
              <h2 className="text-[#0A0A0A] font-semibold mb-3" style={{ fontSize: "24px" }}>
                Get In Touch
              </h2>
              <p className="text-[#4A5565] mb-8" style={{ fontSize: "13px", lineHeight: "1.6" }}>
                Have a question or looking for a specific pet? Fill out the form below and our team will get back to you shortly.
              </p>

              <form className="flex flex-col gap-4 flex-grow">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[#4A5565] font-medium text-[14px]">Full Name</label>
                  <input type="text" placeholder="Full name" className="border border-[#E5E7EB] rounded-md px-4 outline-none focus:border-black placeholder:text-[#0A0A0A80] placeholder:text-[16px] text-[16px]" style={{ width: "400px", height: "41px" }} />
                </div>
                
                <div className="flex flex-col gap-1.5">
                  <label className="text-[#4A5565] font-medium text-[14px]">Phone Number</label>
                  <div className="flex gap-2" style={{ width: "400px", height: "41px" }}>
                    <div className="border border-[#E5E7EB] rounded-md flex items-center justify-center text-[#0A0A0A80] text-[16px]" style={{ width: "64px", height: "100%" }}>
                      +91
                    </div>
                    <input type="text" placeholder="Phone Number" className="flex-1 border border-[#E5E7EB] rounded-md px-4 outline-none focus:border-black placeholder:text-[#0A0A0A80] placeholder:text-[16px] text-[16px] h-full" />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[#4A5565] font-medium text-[14px]">Breed</label>
                  <input type="text" placeholder="Breed" className="border border-[#E5E7EB] rounded-md px-4 outline-none focus:border-black placeholder:text-[#0A0A0A80] placeholder:text-[16px] text-[16px]" style={{ width: "400px", height: "41px" }} />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[#4A5565] font-medium text-[14px]">Location</label>
                  <input type="text" placeholder="Location" className="border border-[#E5E7EB] rounded-md px-4 outline-none focus:border-black placeholder:text-[#0A0A0A80] placeholder:text-[16px] text-[16px]" style={{ width: "400px", height: "41px" }} />
                </div>

                <button type="button" className="mt-5 bg-black text-white rounded-md font-medium text-[14px] flex items-center justify-center hover:bg-gray-800 transition-colors" style={{ width: "160px", height: "41px" }}>
                  Send a message
                </button>
              </form>
            </div>
          </div>

        </div>
      </main>

      {/* Map Section */}
      <section className="mx-[30px] mb-12" style={{ height: "398px" }}>
        <iframe 
          src="https://maps.google.com/maps?q=City%20Mall,%20Mavoor%20Road,%20Kozhikode,%20Kerala&t=&z=13&ie=UTF8&iwloc=&output=embed"
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen={false} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </div>
  );
}
