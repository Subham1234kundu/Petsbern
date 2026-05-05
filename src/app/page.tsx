import Link from "next/link";
import BreedCard from "@/components/BreedCard";
import HeroSlider from "@/components/HeroSlider";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans pb-12">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <HeroSlider />

        {/* Features Bar */}
        <div className="w-full border border-[#E4E7E9] rounded-sm flex flex-col sm:flex-row sm:flex-wrap md:flex-nowrap items-center justify-between bg-white py-4 sm:py-8 px-4 sm:px-6">
          {/* Delivery */}
          <div className="flex items-center gap-3 sm:gap-4 px-4 flex-1 min-w-0 sm:min-w-[200px] justify-center md:border-r border-[#E4E7E9] last:border-r-0 py-3 md:py-0">
            <img
              src="/images/delivery.png"
              className="w-12 h-12 object-contain"
              alt="Delivery"
            />
            <div className="flex flex-col">
              <h4 className="font-bold text-[14px] text-black uppercase leading-tight whitespace-nowrap">
                DELIVERY AVAILABLE
              </h4>
              <p className="text-[14px] text-[#5F6C72] leading-tight mt-1">
                Safe Doorstep Pet Delivery
              </p>
            </div>
          </div>

          {/* Healthy */}
          <div className="flex items-center gap-3 sm:gap-4 px-4 flex-1 min-w-0 sm:min-w-[200px] justify-center md:border-r border-[#E4E7E9] last:border-r-0 py-3 md:py-0">
            <img
              src="/images/healthy.png"
              className="w-12 h-12 object-contain"
              alt="Healthy"
            />
            <div className="flex flex-col">
              <h4 className="font-bold text-[14px] text-black uppercase leading-tight whitespace-nowrap">
                HEALTHY
              </h4>
              <p className="text-[14px] text-[#5F6C72] leading-tight mt-1">
                Vet Checked Perfect Health
              </p>
            </div>
          </div>

          {/* Vaccinated */}
          <div className="flex items-center gap-3 sm:gap-4 px-4 flex-1 min-w-0 sm:min-w-[200px] justify-center md:border-r border-[#E4E7E9] last:border-r-0 py-3 md:py-0">
            <img
              src="/images/vaccinated.png"
              className="w-12 h-12 object-contain"
              alt="Vaccinated"
            />
            <div className="flex flex-col">
              <h4 className="font-bold text-[14px] text-black uppercase leading-tight whitespace-nowrap">
                VACCINATED
              </h4>
              <p className="text-[14px] text-[#5F6C72] leading-tight mt-1">
                Up To Date Vaccinations
              </p>
            </div>
          </div>

          {/* Ready for Home */}
          <div className="flex items-center gap-3 sm:gap-4 px-4 flex-1 min-w-0 sm:min-w-[200px] justify-center last:border-r-0 py-3 md:py-0">
            <img
              src="/images/readyforhome.png"
              className="w-12 h-12 object-contain"
              alt="Ready For Home"
            />
            <div className="flex flex-col">
              <h4 className="font-bold text-[14px] text-black uppercase leading-tight whitespace-nowrap">
                READY FOR HOME
              </h4>
              <p className="text-[14px] text-[#5F6C72] leading-tight mt-1">
                Prepared For Loving Homes
              </p>
            </div>
          </div>
        </div>

        {/* 12 Breeds Grid Section */}
        <section className="w-full py-16">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-16 max-w-[1200px] mx-auto">
              {[
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
              ].map((breed, i) => (
                <div key={i} className="flex flex-col items-center text-center w-[218px]">
                  <div className="w-[218px] h-[278px] mb-6 flex items-center justify-center overflow-hidden">
                    <img 
                      src={breed.img} 
                      alt={breed.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h3 
                    className="text-[24px] font-bold text-black mb-2 leading-tight"
                    style={{ fontFamily: "var(--font-plus-jakarta-sans), sans-serif" }}
                  >
                    {breed.name}
                  </h3>
                  <p 
                    className="text-[14px] leading-relaxed mb-6 flex-grow"
                    style={{ 
                      fontFamily: "var(--font-inter), sans-serif",
                      color: "#484554"
                    }}
                  >
                    {breed.desc}
                  </p>
                  <button 
                    className="bg-black text-white rounded-md flex items-center justify-center hover:bg-gray-800 transition-colors"
                    style={{ 
                      width: "120px", 
                      height: "36px", 
                      fontSize: "14px", 
                      fontFamily: "var(--font-inter), sans-serif",
                      fontWeight: 500
                    }}
                  >
                    View More
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>        {/* Why PetsBarn Section */}
        <section className="mt-16 bg-[#1C4B42] rounded-[32px] overflow-hidden relative flex flex-col items-center pt-16">
          {/* Background Outline Text */}
          <div
            className="absolute top-10 left-15 flex flex-col items-stretch justify-start pointer-events-none select-none z-0 overflow-visible"
            style={{ width: "100%" }}
          >
            <svg
              viewBox="0 0 100 18"
              className="w-full h-[80px] sm:h-[100px] lg:h-[143px]"
              aria-hidden="true"
            >
              <text
                x="50%"
                y="85%"
                textAnchor="middle"
                textLength="110%"
                lengthAdjust="spacingAndGlyphs"
                fontWeight="900"
                fontFamily="'Arial Black', 'Impact', sans-serif"
                fill="transparent"
                stroke="rgba(255,255,255,0.1)"
                strokeWidth="0.08"
                fontSize="18"
              >
                PETSBARN
              </text>
            </svg>
          </div>

          <div className="w-full px-4 sm:px-8 lg:px-12 relative z-10">
            <h2 className="text-white text-[28px] sm:text-[36px] lg:text-[48px] leading-[1.1] mb-8 sm:mb-12">
              Why Pet Parents Prefer <br />
              <span className="font-bold">PETSBARN?</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
              {/* Box 1 */}
              <div className="rounded-2xl p-5 sm:p-6 h-auto sm:h-[240px] lg:h-[267px] relative flex flex-col bg-white/10 overflow-hidden border border-white/5">
                <div className="flex items-start mb-3 sm:mb-0 sm:h-[42%]">
                  <h3 className="text-white text-[18px] sm:text-[20px] font-semibold leading-tight pt-2">
                    Ethical Breeding <br /> Practices
                  </h3>
                </div>
                <p className="text-white/80 text-[14px] sm:text-[16px] leading-snug">
                  Responsible, humane breeding standards ensuring healthy
                  lineage, proper care, transparency, and animal welfare
                  prioritization.
                </p>
                <img
                  src="/images/eathcalbreed.png"
                  className="absolute -right-2 top-1/2 -translate-y-1/2 w-[60px] sm:w-[80px] select-none pointer-events-none opacity-40 sm:opacity-100"
                  alt=""
                />
              </div>

              {/* Box 2 */}
              <div className="rounded-2xl p-5 sm:p-6 h-auto sm:h-[240px] lg:h-[267px] relative flex flex-col bg-white/10 overflow-hidden border border-white/5">
                <div className="flex items-start mb-3 sm:mb-0 sm:h-[42%]">
                  <h3 className="text-white text-[18px] sm:text-[20px] font-semibold leading-tight pt-2">
                    Expert Guidance
                  </h3>
                </div>
                <p className="text-white/80 text-[14px] sm:text-[16px] leading-snug">
                  Professional support to help you choose, care, train, and
                  understand your pet's unique needs.
                </p>
                <img
                  src="/images/expartguide.png"
                  className="absolute -right-2 top-1/2 -translate-y-1/2 w-[80px] sm:w-[100px] select-none pointer-events-none opacity-40 sm:opacity-100"
                  alt=""
                />
              </div>

              {/* Box 3 */}
              <div className="rounded-2xl p-5 sm:p-6 h-auto sm:h-[240px] lg:h-[267px] relative flex flex-col bg-white/10 overflow-hidden border border-white/5">
                <div className="flex items-start mb-3 sm:mb-0 sm:h-[42%]">
                  <h3 className="text-white text-[18px] sm:text-[20px] font-semibold leading-tight pt-2">
                    Safe Home <br /> Delivery
                  </h3>
                </div>
                <p className="text-white/80 text-[14px] sm:text-[16px] leading-snug">
                  Stress-free, secure pet transportation ensuring comfort,
                  safety, and timely delivery directly to your doorstep.
                </p>
                <img
                  src="/images/safehomedelevary.png"
                  className="absolute -right-2 top-1/2 -translate-y-1/2 w-[80px] sm:w-[100px] select-none pointer-events-none opacity-40 sm:opacity-100"
                  alt=""
                />
              </div>

              {/* Box 4 */}
              <div className="rounded-2xl p-5 sm:p-6 h-auto sm:h-[240px] lg:h-[267px] relative flex flex-col bg-white/10 overflow-hidden border border-white/5">
                <div className="flex items-start mb-3 sm:mb-0 sm:h-[42%]">
                  <h3 className="text-white text-[18px] sm:text-[20px] font-semibold leading-tight pt-2">
                    Post-Adoption <br /> Support
                  </h3>
                </div>
                <p className="text-white/80 text-[14px] sm:text-[16px] leading-snug">
                  Ongoing assistance with health, training, nutrition, and care
                  to ensure a smooth transition home.
                </p>
                <img
                  src="/images/addoptsupport.png"
                  className="absolute -right-2 top-1/2 -translate-y-1/2 w-[80px] sm:w-[100px] select-none pointer-events-none opacity-40 sm:opacity-100"
                  alt=""
                />
              </div>
            </div>
          </div>

          {/* Bottom Image */}
          <div className="w-full mt-auto">
            <img
              src="/images/whypets.png"
              alt="Why Pets"
              className="w-full h-auto object-cover"
            />
          </div>
        </section>
      </div>

      {/* Our Client Favorites Section */}
      <section className="bg-white rounded-none relative flex flex-col items-center w-full pb-24">
        {/* Background Pattern - Wavy lines as seen in image */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
          <img
            src="/images/favpattern.png"
            className="w-full h-full object-cover opacity-10"
            style={{ filter: "grayscale(100%) brightness(0.96)" }}
            alt=""
          />
        </div>

        <div className="w-full max-w-[1200px] px-4 sm:px-8 lg:px-12 relative z-10 pt-16">
          <h2 className="text-black text-[32px] sm:text-[38px] lg:text-[42px] font-bold leading-tight mb-12 text-center">
            Our Client <span className="text-[#FFC501]">Favorites</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Left Column: Large Golden Retriever Card */}
            <div
              className="lg:col-span-4 rounded-[24px] overflow-hidden relative group cursor-pointer h-[350px] sm:h-[450px] lg:h-auto"
              style={{
                background: "linear-gradient(180deg, #FFC501 0%, #F8E08C 100%)",
              }}
            >
              <div className="p-6 sm:p-8 relative z-20">
                <div className="flex justify-between items-start">
                  <h3 className="text-white text-[30px] font-normal leading-[0.9]">
                    Golden <br /> Retriever
                  </h3>
                  <div className="w-10 h-10 flex items-center justify-center text-white">
                    <svg
                      width="24"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M5 2L10 7L5 12"
                        stroke="currentColor"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <img
                src="/images/goldenfav.png"
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[110%] object-contain group-hover:scale-105 transition-transform duration-500 z-10"
                alt="Golden Retriever"
              />
            </div>

            {/* Right Column: 2x2 Grid of Smaller Cards */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Pug Card */}
              <div className="bg-white/80 backdrop-blur-sm rounded-[24px] p-6 relative flex flex-col justify-between group cursor-pointer h-[200px] lg:h-[250px] border border-white/40 shadow-sm hover:shadow-md transition-all">
                <div className="flex justify-between items-start relative z-20">
                  <h4 className="text-black text-[24px] lg:text-[30px] font-normal leading-[0.9]">
                    Pug
                  </h4>
                  <div className="w-8 h-8 lg:w-10 lg:h-10 flex items-center justify-center text-black/40 group-hover:text-black transition-all">
                    <svg
                      className="w-5 lg:w-6"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M5 2L10 7L5 12"
                        stroke="currentColor"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <img
                  src="/images/pugfav.png"
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[75%] lg:w-[85%] h-[75%] lg:h-[80%] object-contain z-10 group-hover:scale-105 transition-transform"
                  alt="Pug"
                />
              </div>

              {/* Rottweiler Card */}
              <div className="bg-white/80 backdrop-blur-sm rounded-[24px] p-6 relative flex flex-col justify-between group cursor-pointer h-[200px] lg:h-[250px] border border-white/40 shadow-sm hover:shadow-md transition-all">
                <div className="flex justify-between items-start relative z-20">
                  <h4 className="text-black text-[24px] lg:text-[30px] font-normal leading-[0.9]">
                    Rottweiler
                  </h4>
                  <div className="w-8 h-8 lg:w-10 lg:h-10 flex items-center justify-center text-black/40 group-hover:text-black transition-all">
                    <svg
                      className="w-5 lg:w-6"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M5 2L10 7L5 12"
                        stroke="currentColor"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <img
                  src="/images/rotfav.png"
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[75%] lg:w-[85%] h-[75%] lg:h-[80%] object-contain z-10 group-hover:scale-105 transition-transform"
                  alt="Rottweiler"
                />
              </div>

              {/* German Shepard Card */}
              <div className="bg-white/80 backdrop-blur-sm rounded-[24px] p-6 relative flex flex-col justify-between group cursor-pointer h-[200px] lg:h-[250px] border border-white/40 shadow-sm hover:shadow-md transition-all">
                <div className="flex justify-between items-start relative z-20">
                  <h4 className="text-black text-[24px] lg:text-[30px] font-normal leading-[0.9]">
                    German <br /> Shepard
                  </h4>
                  <div className="w-8 h-8 lg:w-10 lg:h-10 flex items-center justify-center text-black/40 group-hover:text-black transition-all">
                    <svg
                      className="w-5 lg:w-6"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M5 2L10 7L5 12"
                        stroke="currentColor"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <img
                  src="/images/germanfav.png"
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[75%] lg:w-[85%] h-[75%] lg:h-[80%] object-contain z-10 group-hover:scale-105 transition-transform"
                  alt="German Shepard"
                />
              </div>

              {/* Husky Card */}
              <div className="bg-white/80 backdrop-blur-sm rounded-[24px] p-6 relative flex flex-col justify-between group cursor-pointer h-[200px] lg:h-[250px] border border-white/40 shadow-sm hover:shadow-md transition-all">
                <div className="flex justify-between items-start relative z-20">
                  <h4 className="text-black text-[24px] lg:text-[30px] font-normal leading-[0.9]">
                    Husky
                  </h4>
                  <div className="w-8 h-8 lg:w-10 lg:h-10 flex items-center justify-center text-black/40 group-hover:text-black transition-all">
                    <svg
                      className="w-5 lg:w-6"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M5 2L10 7L5 12"
                        stroke="currentColor"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <img
                  src="/images/huskyfav.png"
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[75%] lg:w-[85%] h-[75%] lg:h-[80%] object-contain z-10 group-hover:scale-105 transition-transform"
                  alt="Husky"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Available Pets Section */}
      <section className="bg-[#F6F6F6] pt-24 relative overflow-hidden flex flex-col items-center w-full">
        {/* Background Paw Pattern */}
        <img
          src="/images/petfoot.png"
          className="absolute top-[8%] left-[50%] -translate-x-1/2 w-[100px] lg:w-[200px] rotate-[300deg] z-0 pointer-events-none opacity-20 lg:opacity-100"
          alt=""
        />
        <img
          src="/images/petfoot.png"
          className="absolute top-[10%] left-[15%] -translate-x-1/2 w-[100px] lg:w-[200px] rotate-[300deg] z-0 pointer-events-none opacity-20 lg:opacity-100"
          alt=""
        />
        <img
          src="/images/petfoot.png"
          className="absolute top-[10%] right-[1%] -translate-x-1/2 w-[100px] lg:w-[200px] rotate-[300deg] z-0 pointer-events-none opacity-20 lg:opacity-100"
          alt=""
        />
        {/* Background Paw Pattern */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.06] z-0">
          <img
            src="/images/availablefoot.png"
            className="w-full h-full object-cover"
            alt=""
          />
        </div>

        <div className="w-full max-w-[1200px] px-4 relative z-10">
          <h2 className="text-black text-[32px] sm:text-[38px] lg:text-[42px] font-bold mb-16 text-center">
            Available <span className="text-[#FFC501]">Pets</span>
          </h2>

          <div className="grid pb-30 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12 justify-items-center">

            <BreedCard name="Labrador Retriever" image="/images/labrador.png" />
            <BreedCard name="Siberian Husky" image="/images/huskyfav.png" />
            <BreedCard name="German Shepherd" image="/images/germanfav.png" />
            <BreedCard name="Doodle" image="/images/snowwhite.png" />
            <BreedCard name="Rottweiler" image="/images/rotfav.png" />
            <BreedCard name="Sitzu" image="/images/pugfav.png" />
          </div>

          {/* Featured Puppy Image (Bottom Right) */}
          <div className="lg:col-span-2 min-h-[300px] sm:min-h-[400px] absolute bottom-0 w-full overflow-hidden lg:overflow-visible">
            <img
              src="/images/avilablepets.png"
              className="absolute bottom-0 right-0 lg:right-[-50px] w-full max-w-[400px] lg:max-w-none lg:w-auto h-auto lg:h-[900px] object-contain z-20"
              alt="Featured Puppy"
            />
          </div>
        </div>
      </section>

      {/* Everything Your Pet Needs Section */}
      <section className="bg-[#F0F9FF] py-24 relative overflow-hidden flex flex-col items-center w-full">
        {/* Background Paw Patterns (bluefoot.png) - Exactly 3 as requested */}
        <div className="absolute inset-0 pointer-events-none z-0">
          {/* Left paw */}
          <img
            src="/images/bluefoot.png"
            className="absolute bottom-[-20%] left-[20%] w-[420px] select-none rotate-[-35] hidden sm:block"
            alt=""
          />
          {/* Middle/Bottom paw */}
          <img
            src="/images/bluefoot.png"
            className="absolute bottom-[1%] left-[60%] w-[90px] select-none hidden sm:block"
            alt=""
          />
          {/* Right paw */}
          <img
            src="/images/bluefoot.png"
            className="absolute bottom-0 left-[76%] w-[80px] select-none hidden sm:block"
            alt=""
          />
        </div>

        <div className="w-full max-w-[1240px] px-4 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16">
            <h2 className="text-black text-[32px] sm:text-[38px] lg:text-[42px] font-normal leading-tight">
              Everything Your <br />
              <span className="text-[#FFC501]">Pet Needs</span>
            </h2>
            <p className="text-[#6E6E6E] text-[16px] max-w-[400px] mt-4 md:mt-0 leading-relaxed">
              Comprehensive services designed to support your pet's health,
              happiness, and growth.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
            {/* Box 1: Pet Consultation */}
            <div className="w-full max-w-[298px] h-auto min-h-[350px] lg:min-h-0 lg:w-[298px] lg:h-[398px] bg-white rounded-[24px] p-4 flex flex-col items-center shadow-sm hover:shadow-md transition-shadow">
              <div className="w-full h-[250px] overflow-hidden rounded-[20px] mb-4">
                <img
                  src="/images/needs1.png"
                  alt="Pet Consultation"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full px-2">
                <h3 className="text-black text-[18px] font-bold mb-2">
                  Pet Consultation
                </h3>
                <p className="text-[#6E6E6E] text-[16px] leading-snug">
                  Get expert advice before choosing your pet.
                </p>
              </div>
            </div>

            {/* Box 2: Pet Relocation */}
            <div className="w-full max-w-[298px] h-auto min-h-[350px] lg:min-h-0 lg:w-[298px] lg:h-[398px] bg-white rounded-[24px] p-4 flex flex-col items-center shadow-sm hover:shadow-md transition-shadow">
              <div className="w-full h-[250px] overflow-hidden rounded-[20px] mb-4">
                <img
                  src="/images/needs2.png"
                  alt="Pet Relocation"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full px-2">
                <h3 className="text-black text-[18px] font-bold mb-2">
                  Pet Relocation
                </h3>
                <p className="text-[#6E6E6E] text-[16px] leading-snug">
                  Safe domestic and international travel support.
                </p>
              </div>
            </div>

            {/* Box 3: Pet Training */}
            <div className="w-full max-w-[298px] h-auto min-h-[350px] lg:min-h-0 lg:w-[298px] lg:h-[398px] bg-white rounded-[24px] p-4 flex flex-col items-center shadow-sm hover:shadow-md transition-shadow">
              <div className="w-full h-[250px] overflow-hidden rounded-[20px] mb-4">
                <img
                  src="/images/needs3.png"
                  alt="Pet Training"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full px-2">
                <h3 className="text-black text-[18px] font-bold mb-2">
                  Pet Training
                </h3>
                <p className="text-[#6E6E6E] text-[16px] leading-snug">
                  Professional programs for well-behaved pets.
                </p>
              </div>
            </div>

            {/* Box 4: Pet Guidance */}
            <div className="w-full max-w-[298px] h-auto min-h-[350px] lg:min-h-0 lg:w-[298px] lg:h-[398px] bg-white rounded-[24px] p-4 flex flex-col items-center shadow-sm hover:shadow-md transition-shadow">
              <div className="w-full h-[250px] overflow-hidden rounded-[20px] mb-4">
                <img
                  src="/images/needs4.png"
                  alt="Pet Guidance"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full px-2">
                <h3 className="text-black text-[18px] font-bold mb-2">
                  Pet Guidance
                </h3>
                <p className="text-[#6E6E6E] text-[16px] leading-snug">
                  Professional guidance tailored to your pet's needs and your
                  lifestyle.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 mt-6"></div>

      {/* Bringing Your Pet Home Section */}
      <section className="pt-8 pb-18 relative overflow-hidden flex flex-col items-center w-full ">
        {/* Background Pattern (pethomebg.png) */}
        <div className="absolute inset-0 pointer-events-none z-0 ">
          <img
            src="/images/pethomebg.png"
            className="w-full h-full object-cover opacity-60 mix-blend-multiply"
            alt=""
            color={"#F0F9FF"}
          />
        </div>

        <div className="w-full max-w-[1240px] px-4 relative z-10">
          <h2 className="text-black text-[32px] sm:text-[38px] lg:text-[42px] font-normal mb-12 lg:mb-20 leading-tight">
            Bringing Your Pet Home in <br />
            <span className="text-[#FFC501]">3 Simple Steps</span>
          </h2>

          <div className="flex flex-col lg:flex-row items-center lg:items-end justify-center gap-5 ">
            {/* Step 01 */}
            <div className="w-full max-w-[390px] h-[500px] lg:h-[580px] rounded-[40px] relative overflow-hidden p-6 lg:p-10 flex flex-col bg-gradient-to-b from-[#53A4C0] via-[#53A4C0] to-white/60">
              <div className="w-32 h-32 flex items-center justify-center self-center mb-10 mt-2">
                <img
                  src="/images/step1.png"
                  className="w-full h-full object-contain"
                  alt="Step 1"
                />
              </div>
              <h3 className="text-white text-[28px] font-normal mb-4">
                Choose Your Pet
              </h3>
              <p className="text-white/95 text-[16px] leading-relaxed mb-8">
                Explore our carefully selected range of healthy dogs, cats, and
                birds. Compare breeds, understand their temperament.
              </p>
              <div className="mt-auto flex items-end justify-between relative h-40">
                <img
                  src="/images/closeyourpet.png"
                  className="w-[138px] h-[207px] absolute left-[-10px] bottom-[-45px] object-contain"
                  alt=""
                />
                <span className="text-white/40 text-[76px] font-black leading-none ml-auto absolute bottom-0 right-0">
                  01
                </span>
              </div>
            </div>

            {/* Step 02 */}
            <div className="w-full max-w-[390px] h-[500px] lg:h-[640px] rounded-[40px] relative overflow-hidden p-6 lg:p-10 flex flex-col bg-gradient-to-b from-[#FFA2B6] via-[#FFA2B6] to-white/60">
              <div className="w-32 h-32 flex items-center justify-center self-center mb-10 mt-2">
                <img
                  src="/images/step2.png"
                  className="w-full h-full object-contain"
                  alt="Step 2"
                />
              </div>
              <h3 className="text-white text-[28px] font-normal mb-4">
                Health & Verification
              </h3>
              <p className="text-white/95 text-[16px] leading-relaxed mb-8">
                Every pet undergoes thorough veterinary health checks,
                age-appropriate vaccinations, and proper documentation.
              </p>
              <div className="mt-auto flex items-end justify-between relative h-48">
                <img
                  src="/images/health.png"
                  className="w-[208px] h-[253px] absolute left-[-20px] bottom-[-55px] object-contain"
                  alt=""
                />
                <span className="text-white/40 text-[76px] font-black leading-none ml-auto absolute bottom-0 right-0">
                  02
                </span>
              </div>
            </div>

            {/* Step 03 */}
            <div className="w-full max-w-[390px] h-[500px] lg:h-[700px] rounded-[40px] relative overflow-hidden p-6 lg:p-10 flex flex-col bg-gradient-to-b from-[#066168] via-[#066168] to-white/60">
              <div className="w-32 h-32 flex items-center justify-center self-center mb-10 mt-2">
                <img
                  src="/images/step3.png"
                  className="w-full h-full object-contain"
                  alt="Step 3"
                />
              </div>
              <h3 className="text-white text-[28px] font-normal mb-4">
                Get Your Pet Home
              </h3>
              <p className="text-white/95 text-[16px] leading-relaxed mb-8">
                Your new family member is transported with comfort and care
                through secure travel arrangements.
              </p>
              <div className="mt-auto flex items-end justify-between relative h-40">
                <img
                  src="/images/plane.png"
                  className="w-[174px] h-[174px] absolute left-[-10px] bottom-[-20px] object-contain"
                  alt=""
                />
                <span className="text-white/40 text-[76px] font-black leading-none ml-auto absolute bottom-0 right-0">
                  03
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials Section */}
      <section className="bg-[#F8F8F8] py-12 relative overflow-hidden flex flex-col items-center w-full">
        {/* White fog effect at the bottom - Background Layer */}
        <div className="absolute bottom-0 left-0 w-full h-80 bg-gradient-to-t from-white to-transparent z-0 pointer-events-none"></div>

        {/* Background Paw Patterns (bluefoot.png) */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
          <img
            src="/images/bluefoot.png"
            className="absolute top-[5%] left-[2%] w-[250px] opacity-10 hidden sm:block"
            alt=""
          />
          <img
            src="/images/bluefoot.png"
            className="absolute top-[5%] right-[2%] w-[250px] opacity-10 rotate-180 hidden sm:block"
            alt=""
          />
          {/* New petfoot2 patterns */}
          <img
            src="/images/petfoot2.png"
            className="absolute top-[3%] left-[10%] w-[119px] rotate-[-15deg] hidden sm:block"
            alt=""
          />
          <img
            src="/images/petfoot2.png"
            className="absolute top-[8%] right-[5%] w-[119px] rotate-[20deg] hidden sm:block"
            alt=""
          />
          <img
            src="/images/petfoot2.png"
            className="absolute top-8 right-[-5%] w-[119px] rotate-[-10deg] hidden sm:block"
            alt=""
          />
        </div>

        <div className="w-full max-w-[1240px] px-4 relative z-10">
          <h2 className="text-black text-[32px] sm:text-[38px] lg:text-[42px] font-semibold mb-12 text-center">
            Client <span className="text-[#FFC501]">Testimonials</span>
          </h2>

          <div className="flex flex-col lg:flex-row gap-10 items-stretch mb-15">
            {/* Video Thumbnail (40%) */}
            <div className="lg:w-[40%] relative group cursor-pointer overflow-hidden rounded-3xl h-[250px] sm:h-[350px] lg:h-[388px]">
              <img
                src="/images/clientvid.png"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                alt="Client Video"
              />
              {/* Restoring Play Button for premium look */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/20 transition-all">
                <div className="w-14 h-14 lg:w-20 lg:h-20 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center border border-white/50 shadow-xl group-hover:scale-110 transition-transform">
                  <div className="w-0 h-0 border-t-[8px] lg:border-t-[12px] border-t-transparent border-l-[14px] lg:border-l-[20px] border-l-white border-b-[8px] lg:border-b-[12px] border-b-transparent ml-1 lg:ml-2"></div>
                </div>
              </div>
            </div>

            {/* Quote Card (60%) */}
            <div className="lg:w-[60%] bg-white rounded-3xl p-6 lg:p-12 relative flex flex-col justify-between border border-[#EFEFEF] h-auto min-h-[300px] lg:min-h-0 lg:h-[388px] shadow-sm">
              <div className="relative">
                <span className="text-[120px] leading-none text-[#404547] font-serif absolute -top-12 -left-8 opacity-10 select-none">
                  “
                </span>
                <p className="text-[#404547] text-[24px] leading-relaxed relative z-10 font-normal italic pr-4">
                  We brought home our Golden Retriever through Pets Barn, and
                  the entire process was smooth and transparent. The puppy
                  arrived healthy, active, and exactly as described.
                </p>
                <p className="text-black text-[18px] font-bold mt-8">
                  — Rohan Mehta, Bangalore
                </p>
              </div>

              {/* Navigation Arrows at bottom corner */}
              <div className="flex gap-3 lg:gap-4 absolute bottom-4 lg:bottom-8 right-4 lg:right-8">
                <button className="w-10 h-10 lg:w-12 lg:h-12 rounded-full border border-[#FFC501] flex items-center justify-center text-[#FFC501] hover:bg-[#FFC501] hover:text-white transition-all shadow-sm">
                  <svg
                    className="w-5 h-5 lg:w-6 lg:h-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m15 18-6-6 6-6" />
                  </svg>
                </button>
                <button className="w-10 h-10 lg:w-12 lg:h-12 rounded-full border border-[#FFC501] flex items-center justify-center text-[#FFC501] hover:bg-[#FFC501] hover:text-white transition-all shadow-sm">
                  <svg
                    className="w-5 h-5 lg:w-6 lg:h-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Happy Family Grid */}
          <div className="flex flex-col relative items-center z-10">
            <div className="w-full">
              <img
                src="/images/familyy.png"
                className="w-full h-auto"
                alt="Happy Families Grid"
              />
            </div>

            {/* White fog effect - positioned inside the grid to fade the image but not the text */}
            <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-white via-white/80 to-transparent z-10 pointer-events-none"></div>

            <div className="text-center absolute bottom-4 left-1/2 -translate-x-1/2 z-20 w-full px-4">
              <h3 className="text-[32px] sm:text-[42px] lg:text-[54px] leading-[1.1]">
                <span className="font-bold text-[#FFC501]">10,000+</span>
                <br />
                <span className="font-normal text-2xl sm:text-3xl lg:text-4xl text-black">
                  Happy Families Served
                </span>
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Expert Tips & Guides Section */}
      <section className="py-24 bg-white flex flex-col items-center w-full">
        <div className="w-full max-w-[1240px] px-4">
          <h2 className="text-black text-[32px] sm:text-[38px] lg:text-[42px] text-center mb-15 font-semibold" style={{ fontFamily: "var(--font-public-sans), 'Public Sans', sans-serif" }}>
            Expert Tips, <span className="text-[#FFC501]">Pet Care Guides</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
            {/* Tip Card 1 */}
            <div className="bg-[#F6F6F6] rounded-[24px] sm:rounded-[40px] p-4 sm:p-6 h-auto sm:h-[300px] lg:h-[355px] flex flex-col sm:flex-row items-center gap-4 sm:gap-8 group cursor-pointer transition-all hover:shadow-lg relative overflow-hidden">
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

              <div className="w-full sm:w-[45%] h-[200px] sm:h-full overflow-hidden rounded-[20px] sm:rounded-[28px] relative z-10 shadow-sm flex-shrink-0">
                <img
                  src="/images/expaer1.png"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  alt="Expert Tip 1"
                />
              </div>

              <div className="w-full sm:w-[55%] flex flex-col justify-between sm:h-full py-2 sm:py-4 relative z-10">
                <div className="pt-1 sm:pt-2">
                  <span className="text-[10px] sm:text-[11px] text-[#242424] font-bold uppercase tracking-widest mb-4 sm:mb-10 block">
                    PET TRAVEL
                  </span>
                  <h3 className="text-[16px] sm:text-[18px] lg:text-[20px] text-black font-normal leading-[1.4] pr-2 sm:pr-4">
                    10 Things Every New Pet Owner Should Know Before Traveling
                    With Pets
                  </h3>
                </div>
                <div className="self-end mr-2 mb-2">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm transition-all text-black group-hover:bg-black group-hover:text-white">
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
            <div className="bg-[#F6F6F6] rounded-[24px] sm:rounded-[40px] p-4 sm:p-6 h-auto sm:h-[300px] lg:h-[355px] flex flex-col sm:flex-row items-center gap-4 sm:gap-8 group cursor-pointer transition-all hover:shadow-lg relative overflow-hidden">
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

              <div className="w-full sm:w-[45%] h-[200px] sm:h-full overflow-hidden rounded-[20px] sm:rounded-[28px] relative z-10 shadow-sm flex-shrink-0">
                <img
                  src="/images/expart2.png"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  alt="Expert Tip 2"
                />
              </div>

              <div className="w-full sm:w-[55%] flex flex-col justify-between sm:h-full py-2 sm:py-4 relative z-10">
                <div className="pt-1 sm:pt-2">
                  <span className="text-[10px] sm:text-[11px] text-[#242424] font-bold uppercase tracking-widest mb-4 sm:mb-10 block">
                    PET TRAVEL
                  </span>
                  <h3 className="text-[16px] sm:text-[18px] lg:text-[20px] text-black font-normal leading-[1.4] pr-2 sm:pr-4">
                    10 Things Every New Pet Owner Should Know Before Traveling
                    With Pets
                  </h3>
                </div>
                <div className="self-end mr-2 mb-2">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm transition-all text-black group-hover:bg-black group-hover:text-white">
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

          <div className="flex justify-center">
            <button className="bg-black text-white px-12 py-3 rounded-full font-medium hover:bg-gray-800 transition-all hover:scale-105">
              View All Pets
            </button>
          </div>
        </div>
      </section>

      {/* Consultation Section */}
      <section className=" bg-white flex flex-col items-center w-full">
        <div className="w-full max-w-[1240px] px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left side: Form */}
            <div className="bg-[#F6F6F6] rounded-[24px] sm:rounded-[32px] p-6 sm:p-8 lg:p-12 flex flex-col justify-center">
              <h2 className="text-[26px] sm:text-[32px] lg:text-[42px] font-semibold text-black leading-[1.2] mb-4">
                Not Sure Which Pet Is
                <br />
                <span className="text-[#FFC501]">Right for You</span>?
              </h2>
              <p className="text-[#555555] text-[14px] leading-relaxed mb-10 max-w-[380px]">
                Connect with our experts for a free consultation and tailored
                support for finding your furry friend
              </p>

              <form className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
                <div className="flex flex-col">
                  <label className="text-[12px] font-medium text-[#333333] mb-1.5">
                    Your name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. John Smith"
                    className="w-full h-11 px-4 rounded-[12px] border-none outline-none shadow-none ring-0 text-[13px] bg-white placeholder-[#A3A3A3]"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-[12px] font-medium text-[#333333] mb-1.5">
                    Email address
                  </label>
                  <input
                    type="email"
                    placeholder="e.g. john@email.com"
                    className="w-full h-11 px-4 rounded-[12px] border-none outline-none shadow-none ring-0 text-[13px] bg-white placeholder-[#A3A3A3]"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-[12px] font-medium text-[#333333] mb-1.5">
                    Phone number
                  </label>
                  <input
                    type="tel"
                    placeholder="e.g. +1 222 444 66"
                    className="w-full h-11 px-4 rounded-[12px] border-none outline-none shadow-none ring-0 text-[13px] bg-white placeholder-[#A3A3A3]"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-[12px] font-medium text-[#333333] mb-1.5">
                    Breed
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Execor"
                    className="w-full h-11 px-4 rounded-[12px] border-none outline-none shadow-none ring-0 text-[13px] bg-white placeholder-[#A3A3A3]"
                  />
                </div>
                <div className="flex flex-col md:col-span-2">
                  <label className="text-[12px] font-medium text-[#333333] mb-1.5">
                    Location
                  </label>
                  <textarea
                    placeholder="Type here ..."
                    className="w-full h-20 p-4 rounded-[12px] border-none outline-none shadow-none ring-0 text-[13px] bg-white placeholder-[#A3A3A3] resize-none"
                  ></textarea>
                </div>

                <div className="mt-2 md:col-span-2">
                  <button
                    type="submit"
                    className="bg-black text-white px-8 py-2.5 rounded-full font-normal text-[15px] hover:bg-gray-800 transition-all"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>

            {/* Right side: Image & Overlay */}
            <div className="relative rounded-[24px] sm:rounded-[32px] overflow-hidden min-h-[350px] sm:min-h-[450px] lg:min-h-0">
              <img
                src="/images/goldenfav.png"
                alt="Consultation Puppy"
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Call overlay */}
              <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 w-[90%] sm:w-[85%] max-w-[420px] bg-[#EBE7E1] rounded-full p-2 sm:p-2.5 pr-4 sm:pr-6 flex items-center gap-3 sm:gap-4">
                <div className="w-[42px] h-[42px] shrink-0 rounded-full bg-[#1C4B42] flex items-center justify-center text-white">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <p className="text-[#4A4A4A] text-[12px] leading-[1.4] font-medium">
                  Call us at +91-1212121211 or fill out our form, and we'll
                  contact you within one business day.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

