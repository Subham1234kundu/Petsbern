import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-white pt-16 border-t border-[#E4E7E9] mt-auto">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Column 1: Logo and Contact Info */}
          <div className="flex flex-col gap-4 lg:col-span-4 pr-8">
            <Link href="/" className="inline-block mb-2">
              <img src="/images/logo.png" alt="PetsBARN Logo" width={302} height={50} className="w-[302px] h-[50px] object-contain" />
            </Link>
            
            <div>
              <p className="text-[#5F6C72] text-[14px]">Customer Supports:</p>
              <p className="text-[#1E1E1E] text-[16px] font-semibold mt-1">(629) 555-0129</p>
            </div>
            
            <div className="text-[#1E1E1E] text-[14px] leading-relaxed mt-1">
              4517 Washington Ave. Manchester,<br />
              Kentucky 39495
            </div>
            
            <div className="font-medium text-[#1E1E1E] text-[14px] mt-1">
              support@petsbarn.in
            </div>
          </div>

          {/* Column 2: TOP CATEGORY */}
          <div className="flex flex-col gap-3 lg:col-span-2">
            <h3 className="text-[#5F6C72] text-[14px] font-semibold uppercase tracking-wider mb-2">TOP CATEGORY</h3>
            <Link href="#" className="text-[#1E1E1E] text-[14px] hover:text-[#8B5E3C] transition-colors font-medium">Dogs</Link>
            <Link href="#" className="text-[#1E1E1E] text-[14px] hover:text-[#8B5E3C] transition-colors font-medium">Cats</Link>
            <Link href="#" className="text-[#1E1E1E] text-[14px] hover:text-[#8B5E3C] transition-colors font-medium">Birds</Link>
            <Link href="#" className="text-[#1E1E1E] text-[14px] hover:text-[#8B5E3C] transition-colors font-medium">Exotic Animals</Link>
            <Link href="#" className="text-[#1E1E1E] text-[14px] hover:text-[#8B5E3C] transition-colors font-medium">Available Pets</Link>
            <Link href="#" className="text-[#D94A4A] text-[14px] font-medium hover:text-[#B83A3A] transition-colors flex items-center gap-2 mt-1">
              Browse All Pets
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>

          {/* Column 3: SERVICES */}
          <div className="flex flex-col gap-3 lg:col-span-2">
            <h3 className="text-[#5F6C72] text-[14px] font-semibold uppercase tracking-wider mb-2">SERVICES</h3>
            <Link href="#" className="text-[#1E1E1E] text-[14px] hover:text-[#8B5E3C] transition-colors font-medium">Pet Training</Link>
            <Link href="#" className="text-[#1E1E1E] text-[14px] hover:text-[#8B5E3C] transition-colors font-medium">Breed Consultation</Link>
            <Link href="#" className="text-[#1E1E1E] text-[14px] hover:text-[#8B5E3C] transition-colors font-medium">Pet Relocation</Link>
            <Link href="#" className="text-[#1E1E1E] text-[14px] hover:text-[#8B5E3C] transition-colors font-medium">Breed Guidance</Link>
          </div>

          {/* Column 4: QUICK LINKS */}
          <div className="flex flex-col gap-3 lg:col-span-2">
            <h3 className="text-[#5F6C72] text-[14px] font-semibold uppercase tracking-wider mb-2">QUICK LINKS</h3>
            <Link href="#" className="text-[#1E1E1E] text-[14px] hover:text-[#8B5E3C] transition-colors font-medium">About Us</Link>
            <Link href="#" className="text-[#1E1E1E] text-[14px] hover:text-[#8B5E3C] transition-colors font-medium">Blogs</Link>
            <Link href="#" className="text-[#1E1E1E] text-[14px] hover:text-[#8B5E3C] transition-colors font-medium">Contact Us</Link>
            <Link href="#" className="text-[#1E1E1E] text-[14px] hover:text-[#8B5E3C] transition-colors font-medium">Compare Pets</Link>
          </div>

          {/* Column 5: OTHERS */}
          <div className="flex flex-col gap-3 lg:col-span-2">
            <h3 className="text-[#5F6C72] text-[14px] font-semibold uppercase tracking-wider mb-2">OTHERS</h3>
            <Link href="#" className="text-[#1E1E1E] text-[14px] hover:text-[#8B5E3C] transition-colors font-medium">Terms & Conditions</Link>
            <Link href="#" className="text-[#1E1E1E] text-[14px] hover:text-[#8B5E3C] transition-colors font-medium">Privacy Policy</Link>
            <Link href="#" className="text-[#1E1E1E] text-[14px] hover:text-[#8B5E3C] transition-colors font-medium">Refund Policy</Link>
          </div>

        </div>
      </div>

      {/* Copyright Bar */}
      <div className="w-full bg-[#1E1E1E] mt-16 py-4">
        <p className="text-center text-white text-[14px]">
          Pets Barn © 2026
        </p>
      </div>
    </footer>
  );
}
