"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const navLinks = [
    { name: "Dashboard", href: "/dashboard" },
    { name: "Add Pet", href: "/dashboard/add-pet" },
    { name: "Add Blogs", href: "/dashboard/add-blogs" },
    { name: "Add Compare Pets Values", href: "/dashboard/compare-pets" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col absolute top-0 left-0 w-full z-[100]">
      {/* Seller Dashboard Custom Navbar */}
      <nav className="bg-[#111111] text-white w-full sticky top-0 shadow-md z-[100]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 h-[70px] flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2 text-[13px] font-bold tracking-widest text-[#FFC501] hover:text-white transition-colors uppercase">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              GO BACK
            </Link>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-semibold transition-colors hover:text-[#FFC501] ${
                  pathname === link.href ? "text-[#FFC501]" : "text-gray-300"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="md:hidden flex items-center">
            {/* Mobile menu button could go here, keeping simple for now */}
            <span className="text-xs text-gray-400">SELLER MODE</span>
          </div>
        </div>
        
        {/* Mobile Horizontal Scroll Nav */}
        <div className="md:hidden flex overflow-x-auto bg-[#222] px-4 py-3 gap-6 custom-scrollbar scrollbar-hide">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`whitespace-nowrap text-xs font-semibold transition-colors ${
                pathname === link.href ? "text-[#FFC501]" : "text-gray-400"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </nav>

      {/* Main Dashboard Content */}
      <div className="flex-grow">
        {children}
      </div>
    </div>
  );
}
