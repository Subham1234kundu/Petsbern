export default function AboutUsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans">
      {/* Hero Section */}
      <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top Intro */}
        <div className="mb-4">
          <span className="text-[#FFC501] text-[13px] font-semibold uppercase tracking-widest">
            About Us
          </span>
        </div>

        {/* Main Grid: Text + Bird Image */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left: Text Content */}
          <div className="flex flex-col gap-6">
            <h1
              className="font-bold text-black leading-tight"
              style={{ fontSize: "42px" }}
            >
              We build technology that builds businesses
            </h1>
            <p
              className="text-[#555555] leading-relaxed"
              style={{ fontSize: "14px" }}
            >
              Whether you&apos;re rethinking IT infrastructure, building custom
              software, or scaling digital products — we help you move with
              speed and confidence.
            </p>

            {/* Stats Row */}
            <div className="flex flex-wrap gap-10 mt-4">
              <div className="flex flex-col">
                <span className="text-[36px] font-bold text-black leading-none">
                  10K+
                </span>
                <span className="text-[13px] text-[#777] mt-1">
                  Happy Pet Owners
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-[36px] font-bold text-black leading-none">
                  50+
                </span>
                <span className="text-[13px] text-[#777] mt-1">
                  Breeds Available
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-[36px] font-bold text-black leading-none">
                  8+
                </span>
                <span className="text-[13px] text-[#777] mt-1">
                  Years of Trust
                </span>
              </div>
            </div>
          </div>

          {/* Right: Bird Image */}
          <div className="flex justify-center md:justify-end">
            <img
              src="/slide3.png"
              alt="Curated Aviary Collection"
              style={{ width: "465px", height: "374px" }}
              className="w-full md:w-auto object-contain rounded-2xl"
            />
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-[#F6F6F6] py-20 w-full">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-[24px] p-8 flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-[#FFC501]/15 flex items-center justify-center">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#FFC501"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h3 className="text-black text-[20px] font-semibold leading-tight">
                Ethical Breeding
              </h3>
              <p className="text-[#6E6E6E]" style={{ fontSize: "14px" }}>
                We follow responsible and humane breeding standards, ensuring
                every pet comes from a healthy, loving environment.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-[24px] p-8 flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-[#FFC501]/15 flex items-center justify-center">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#FFC501"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 8v4l3 3" />
                </svg>
              </div>
              <h3 className="text-black text-[20px] font-semibold leading-tight">
                Expert Guidance
              </h3>
              <p className="text-[#6E6E6E]" style={{ fontSize: "14px" }}>
                Our team of experts is always here to help you find the perfect
                pet and guide you through every step of the journey.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-[24px] p-8 flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-[#FFC501]/15 flex items-center justify-center">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#FFC501"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
              </div>
              <h3 className="text-black text-[20px] font-semibold leading-tight">
                Safe Home Delivery
              </h3>
              <p className="text-[#6E6E6E]" style={{ fontSize: "14px" }}>
                We ensure your new companion arrives at your doorstep safely,
                comfortably, and with full documentation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Aviary Collection Grid Section */}
      <section className="py-20 bg-white w-full">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="text-black font-bold leading-tight" style={{ fontSize: "42px" }}>
              Our <span className="text-[#FFC501]">Aviary</span> Collection
            </h2>
            <p className="text-[#6E6E6E] mt-3 max-w-[560px] mx-auto" style={{ fontSize: "14px" }}>
              Explore our curated selection of birds — hand-picked, healthy, and
              ready to bring joy to your home.
            </p>
          </div>

          {/* Grid: full width on mobile, 2-col on desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Rose-Ringed Parakeet", color: "#E8F4FD" },
              { name: "Indian Ringneck Parrot", color: "#FDF6E8" },
              { name: "Indian Silverbill", color: "#F0F8E8" },
              { name: "Alexandrine Parakeet", color: "#F8EDF8" },
            ].map((bird) => (
              <div
                key={bird.name}
                className="rounded-[20px] p-6 flex flex-col items-center gap-3 cursor-pointer hover:shadow-md transition-all group"
                style={{ backgroundColor: bird.color }}
              >
                <div className="w-full h-[180px] flex items-center justify-center overflow-hidden rounded-[14px] bg-white/60">
                  <img
                    src="/slide3.png"
                    alt={bird.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h4 className="text-black font-semibold text-[16px] text-center">
                  {bird.name}
                </h4>
                <button className="bg-black text-white text-[13px] px-6 py-2 rounded-full hover:bg-gray-800 transition-colors">
                  View Details
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#1C4B42] py-20 w-full">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white font-bold leading-tight mb-4" style={{ fontSize: "42px" }}>
            Ready to Find Your Perfect Pet?
          </h2>
          <p className="text-white/70 mb-8 max-w-[480px] mx-auto" style={{ fontSize: "14px" }}>
            Whether you&apos;re rethinking IT infrastructure, building custom
            software, or scaling digital products — we help you move with speed
            and confidence.
          </p>
          <button className="bg-[#FFC501] text-black font-bold px-10 py-4 rounded-full text-[15px] hover:bg-yellow-400 transition-all shadow-lg hover:scale-105">
            Explore Our Pets
          </button>
        </div>
      </section>
    </div>
  );
}
