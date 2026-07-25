"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDelta = currentScrollY - lastScrollY.current;

      if (currentScrollY < 10) {
        setIsVisible(true);
      } else if (scrollDelta > 5) {
        setIsVisible(false);
      } else if (scrollDelta < -5) {
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    "Home",
    "Our Pets",
    "Services",
    "About Us",
    "Compare Pets",
    "Blogs",
    "Contact Us",
  ];

  const getHref = (item: string) => {
    if (item === "Home") return "/";
    if (item === "Our Pets") return "/pet-categories/dogs";
    return `/${item.toLowerCase().replace(" ", "-")}`;
  };

  if (pathname?.startsWith("/dashboard")) {
    return null;
  }

  return (
    <>
    <header
      className={`w-full bg-white fixed top-0 left-0 z-[100] max-w-[100vw] transition-transform duration-300 ease-in-out ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
      style={{ borderBottom: 'none', boxShadow: 'none' }}
    >
      {/* Top Row: Logo, Search, Social */}
      <div 
        className="w-full px-[4%] h-[60px] sm:h-[70px] lg:h-[85px] flex items-center justify-between" 
        style={{ borderBottom: "1px solid #DFDFDF" }}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center group flex-shrink-0">
          <img
            src="/images/logo.png"
            alt="PetsBARN Logo"
            width={302}
            height={50}
            className="w-[140px] sm:w-[180px] lg:w-[302px] h-auto object-contain transition-all duration-300 group-hover:scale-105"
          />
        </Link>

        {/* Search Bar - hidden on mobile */}
        <div className="hidden md:block w-[180px] lg:w-[328px] mx-4 lg:mx-8">
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

        {/* Social Icons - Top Row */}
        <div className="hidden lg:flex items-center gap-0.5">
          <Link href="#" className="hover:scale-110 transition-transform active:scale-95">
            <img src="/images/WhatsappLogo.png" alt="WhatsApp" className="w-[60px] h-[60px] object-contain" />
          </Link>
          <Link href="#" className="hover:scale-110 transition-transform active:scale-95">
            <img src="/images/Instagramlogo.png" alt="Instagram" className="w-[60px] h-[60px] object-contain" />
          </Link>
          <Link href="#" className="hover:scale-110 transition-transform active:scale-95">
            <img src="/images/YoutubeLogo.png" alt="YouTube" className="w-[60px] h-[60px] object-contain" />
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden flex flex-col items-center justify-center w-10 h-10 gap-1.5 rounded-lg hover:bg-gray-100 transition-colors"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-[#1E1E1E] transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-[#1E1E1E] transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-[#1E1E1E] transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* Desktop Bottom Row: Navigation and WhatsApp */}
      <div className="hidden lg:flex w-full px-[4%] h-[65px] items-center justify-between">
        {/* Nav Links */}
        <nav className="flex items-center gap-10">
          {navItems.map((item) => {
            if (item === "Services") {
              return (
                <div key={item} className="relative group">
                  <button
                    className="text-[15px] font-bold text-[#1E1E1E] hover:text-[#8B5E3C] transition-colors relative flex items-center gap-1"
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
                      className="transition-transform duration-200 group-hover:rotate-180"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </button>

                  <div className="absolute top-full left-0 pt-[15px] hidden group-hover:block z-[120]">
                    <div 
                      className="bg-white rounded-[12px] py-2 min-w-[240px]" 
                      style={{ boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.12)", border: "1px solid #E5E7EB" }}
                    >
                      {["Pet Training", "Pet Relocation", "Breed Consultation"].map((service) => (
                        <Link
                          key={service}
                          href={`/services/${service.toLowerCase().replace(" ", "-")}`}
                          className="block px-5 py-3 text-[#5F6C72] text-[14px] font-medium transition-colors hover:bg-[#F2F4F5] hover:text-[#191C1F]"
                          style={{ fontFamily: "var(--font-public-sans), 'Public Sans', sans-serif" }}
                        >
                          {service}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }

            if (item === "Our Pets") {
              return (
                <div key={item} className="relative group">
                  <button
                    className="text-[15px] font-bold text-[#1E1E1E] hover:text-[#8B5E3C] transition-colors relative flex items-center gap-1"
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
                      className="transition-transform duration-200 group-hover:rotate-180"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </button>

                  <div className="absolute top-full left-0 pt-[15px] hidden group-hover:block z-[120]">
                    <div className="bg-white rounded-[12px] py-2 min-w-[200px]" style={{ boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.12)", border: "1px solid #E5E7EB" }}>
                      {[
                        { name: "Dogs", href: "/pet-categories/dogs" },
                        { name: "Cats", href: "/pet-categories/cats" },
                        { name: "Exotic Birds", href: "/pet-categories/exotic-birds" }
                      ].map((category) => (
                        <Link
                          key={category.name}
                          href={category.href}
                          className="block px-5 py-3 text-[#5F6C72] text-[14px] font-medium transition-colors hover:bg-[#F2F4F5] hover:text-[#191C1F]"
                          style={{ fontFamily: "var(--font-public-sans), 'Public Sans', sans-serif" }}
                        >
                          {category.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={item}
                href={getHref(item)}
                className="text-[15px] font-bold text-[#1E1E1E] hover:text-[#8B5E3C] transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-[#8B5E3C] hover:after:w-full after:transition-all flex items-center gap-1"
              >
                {item}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-[#DFDFDF] shadow-xl max-h-[calc(100vh-60px)] overflow-y-auto scrollbar-hide">
          {/* Mobile Search */}
          <div className="px-4 py-3 border-b border-[#F0F0F0]">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for pets..."
                className="w-full h-[42px] px-5 py-2 rounded-xl border border-[#E4E7E9] focus:outline-none focus:ring-2 focus:ring-[#8B5E3C]/20 focus:border-[#8B5E3C] transition-all bg-[#F9FAFB] text-black placeholder-[#1E1E1E] text-[14px]"
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#8B5E3C]">
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
              </div>
            </div>
          </div>

          {/* Mobile Nav Links */}
          <nav className="flex flex-col">
            {navItems.map((item) => {
              if (item === "Services" || item === "Our Pets") {
                const isServices = item === "Services";
                const items = isServices 
                  ? ["Pet Training", "Pet Relocation", "Breed Consultation"]
                  : [
                      { name: "Dogs", href: "/pet-categories/dogs" },
                      { name: "Cats", href: "/pet-categories/cats" },
                      { name: "Exotic Birds", href: "/pet-categories/exotic-birds" }
                    ];

                return (
                  <div key={item}>
                    <button
                      onClick={() => {
                        if (isServices) setIsServicesOpen(!isServicesOpen);
                        else {
                          const el = document.getElementById('mobile-pets-dropdown');
                          if (el) el.classList.toggle('hidden');
                        }
                      }}
                      className="w-full text-left px-6 py-4 text-[15px] font-bold text-[#1E1E1E] hover:bg-[#F9FAFB] transition-colors flex items-center justify-between border-b border-[#F5F5F5]"
                    >
                      {item}
                      <svg
                        width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                        className={`transition-transform duration-200 ${isServices && isServicesOpen ? 'rotate-180' : ''}`}
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </button>
                    {isServices && isServicesOpen && (
                      <div className="bg-[#F9FAFB]">
                        {(items as string[]).map((service) => (
                          <Link
                            key={service}
                            href={`/services/${service.toLowerCase().replace(" ", "-")}`}
                            onClick={() => { setIsServicesOpen(false); setIsMobileMenuOpen(false); }}
                            className="block px-10 py-3 text-[14px] text-[#5F6C72] font-medium hover:text-[#1E1E1E] transition-colors border-b border-[#F0F0F0]"
                          >
                            {service}
                          </Link>
                        ))}
                      </div>
                    )}
                    {item === "Our Pets" && (
                      <div id="mobile-pets-dropdown" className="bg-[#F9FAFB] hidden">
                        {(items as {name: string, href: string}[]).map((cat) => (
                          <Link
                            key={cat.name}
                            href={cat.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block px-10 py-3 text-[14px] text-[#5F6C72] font-medium hover:text-[#1E1E1E] transition-colors border-b border-[#F0F0F0]"
                          >
                            {cat.name}
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
                  href={getHref(item)}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-6 py-4 text-[15px] font-bold text-[#1E1E1E] hover:bg-[#F9FAFB] hover:text-[#8B5E3C] transition-colors border-b border-[#F5F5F5]"
                >
                  {item}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Social */}
          <div className="flex items-center justify-center gap-1.5 px-4 py-6 mt-4 border-t border-[#F0F0F0]">
            <Link href="#" onClick={() => setIsMobileMenuOpen(false)} className="hover:scale-110 transition-transform">
              <img src="/images/WhatsappLogo.png" alt="WhatsApp" className="w-[60px] h-[60px] object-contain" />
            </Link>
            <Link href="#" onClick={() => setIsMobileMenuOpen(false)} className="hover:scale-110 transition-transform">
              <img src="/images/Instagramlogo.png" alt="Instagram" className="w-[60px] h-[60px] object-contain" />
            </Link>
            <Link href="#" onClick={() => setIsMobileMenuOpen(false)} className="hover:scale-110 transition-transform">
              <img src="/images/YoutubeLogo.png" alt="YouTube" className="w-[60px] h-[60px] object-contain" />
            </Link>
          </div>
        </div>
      )}
    </header>

    {/* Floating Social Icons - visible only when navbar is hidden */}
    <div
      className={`fixed top-1/2 -translate-y-1/2 right-3 z-[99] flex flex-col items-center bg-[#FFC501] rounded-full p-1.5 md:p-2 shadow-[0_12px_36px_rgba(0,0,0,0.16)] hover:shadow-[0_16px_48px_rgba(0,0,0,0.24)] border border-yellow-500/20 transition-all duration-300 ease-in-out gap-1 ${
        !isVisible ? 'opacity-100 translate-x-0 scale-100 pointer-events-auto' : 'opacity-0 translate-x-16 scale-95 pointer-events-none'
      }`}
    >
      <a
        href="tel:+911212121211"
        className="group w-[44px] h-[44px] md:w-[52px] md:h-[52px] bg-white rounded-full flex items-center justify-center shadow-sm active:scale-95 transition-transform flex-shrink-0"
      >
        <img src="/images/Phonelogo.png" alt="Phone" className="w-[40px] h-[40px] md:w-[48px] md:h-[48px] object-contain transition-transform duration-300 group-hover:scale-115" />
      </a>
      <a
        href="https://wa.me/911212121211?text=Hi,%20I'm%20interested%20in%20Petsbarn."
        target="_blank"
        rel="noopener noreferrer"
        className="group w-[44px] h-[44px] md:w-[52px] md:h-[52px] bg-white rounded-full flex items-center justify-center shadow-sm active:scale-95 transition-transform flex-shrink-0"
      >
        <img src="/images/WhatsappLogo.png" alt="WhatsApp" className="w-[40px] h-[40px] md:w-[48px] md:h-[48px] object-contain transition-transform duration-300 group-hover:scale-115" />
      </a>
      <a
        href="#"
        className="group w-[44px] h-[44px] md:w-[52px] md:h-[52px] bg-white rounded-full flex items-center justify-center shadow-sm active:scale-95 transition-transform flex-shrink-0"
      >
        <img src="/images/Instagramlogo.png" alt="Instagram" className="w-[40px] h-[40px] md:w-[48px] md:h-[48px] object-contain transition-transform duration-300 group-hover:scale-115" />
      </a>
    </div>
    </>
  );
}
