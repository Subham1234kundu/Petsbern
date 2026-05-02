"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  return (
    <header className="w-full bg-white fixed top-0 left-0 z-[100]" style={{ borderBottom: 'none', boxShadow: 'none' }}>
      {/* Top Row: Logo, Search, Social */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 h-[85px] flex items-center justify-between" style={{ borderBottom: "1px solid #DFDFDF" }}>
        {/* Logo */}
        <Link href="/" className="flex items-center group">
          <img
            src="/images/logo.png"
            alt="PetsBARN Logo"
            width={302}
            height={50}
            className="w-[302px] h-[50px] object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </Link>

        {/* Search Bar */}
        <div className="w-[328px] mx-8">
          <div className="relative group">
            <input
              type="text"
              placeholder="Search for pets..."
              className="w-full h-[42px] px-6 py-2 rounded-xl border border-[#E4E7E9] focus:outline-none focus:ring-2 focus:ring-[#8B5E3C]/20 focus:border-[#8B5E3C] transition-all bg-[#F9FAFB] text-black placeholder-[#1E1E1E] text-[15px]"
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-[#8B5E3C]"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
            </div>
          </div>
        </div>

        {/* Follow Us */}
        <div className="flex items-center gap-4">
          <span className="text-[15px] font-semibold text-gray-700">Follow us:</span>
          <Link href="#" className="hover:scale-110 transition-transform active:scale-95">
            <img src="/images/insta.png" alt="Instagram" className="w-9 h-9 object-contain" />
          </Link>
        </div>
      </div>

      {/* Thin Border is now part of header border-b */}

      {/* Bottom Row: Navigation and WhatsApp */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 h-[65px] flex items-center justify-between">
        {/* Nav Links */}
        <nav className="flex items-center gap-10">
          {[
            "Home",
            "Our Pets",
            "Services",
            "About Us",
            "Compare Pets",
            "Blogs",
            "Contact Us",
          ].map((item) => {
            if (item === "Services") {
              return (
                <div key={item} className="relative">
                  <button
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className="text-[15px] font-bold text-[#1E1E1E] hover:text-[#8B5E3C] transition-colors relative flex items-center gap-1 group"
                  >
                    {item}
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`}
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </button>

                  {isServicesOpen && (
                    <div className="absolute top-[calc(100%+15px)] left-0 bg-white rounded-[12px] py-2 min-w-[240px] z-[120]" style={{ boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.12)", border: "1px solid #E5E7EB" }}>
                      {["Pet Training", "Pet Relocation", "Breed Consultation"].map((service) => (
                        <Link
                          key={service}
                          href={`/services/${service.toLowerCase().replace(" ", "-")}`}
                          onClick={() => setIsServicesOpen(false)}
                          className="block px-5 py-3 text-[#5F6C72] text-[14px] font-medium transition-colors hover:bg-[#F2F4F5] hover:text-[#191C1F] active:bg-[#F2F4F5] active:text-[#191C1F]"
                          style={{ fontFamily: "var(--font-public-sans), 'Public Sans', sans-serif" }}
                        >
                          {service}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={item}
                href={
                  item === "Home" 
                    ? "/" 
                    : item === "Our Pets" 
                      ? "/pet-categories/dogs" 
                      : `/${item.toLowerCase().replace(" ", "-")}`
                }
                className="text-[15px] font-bold text-[#1E1E1E] hover:text-[#8B5E3C] transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-[#8B5E3C] hover:after:w-full after:transition-all flex items-center gap-1"
              >
                {item}
                {item === "Our Pets" && (
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                )}
              </Link>
            );
          })}
        </nav>

        {/* WhatsApp Button */}
        <Link
          href="#"
          className="bg-[#1E1E1E] text-white pl-5 pr-4 h-[42px] rounded-xl flex items-center gap-4 hover:bg-black transition-all group shadow-md hover:shadow-lg active:scale-95"
        >
          <div className="flex items-center gap-2">
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            <span className="text-[16px] font-bold">WhatsApp</span>
          </div>
          <div className="p-1 rounded-full group-hover:translate-x-1 transition-transform">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 12h20M14 4l8 8-8 8" />
            </svg>
          </div>
        </Link>
      </div>
    </header>
  );
}
