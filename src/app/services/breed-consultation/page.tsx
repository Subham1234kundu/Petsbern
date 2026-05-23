import Link from "next/link";
import FAQSection from "@/components/FAQSection";
import ServiceAnimations from "@/components/ServiceAnimations";

export default function BreedConsultationPage() {
  return (
    <ServiceAnimations>
    <div className="flex flex-col min-h-screen bg-white font-sans">
      {/* Header Section (Matching Contact Us) */}
      <section
        className="w-full min-h-[220px] md:h-[268px] relative flex flex-col items-center justify-center overflow-hidden text-center py-10 md:py-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/contactus.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center 40%",
        }}
      >
        <div className="z-10 flex flex-col items-center gap-1">
          <h1
            data-animate="service-title"
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
            <span data-animate="service-desc" className="font-medium text-white">Breed Consultation</span>
          </div>
        </div>
      </section>

      {/* Consultation Pricing Section */}
      <section className="w-full bg-[#F3F4F6] py-12 md:py-16 lg:py-24 2xl:py-32">
        <div className="max-w-[1440px] 2xl:max-w-[1600px] mx-auto w-full px-4 sm:px-6 lg:px-12 flex flex-col items-center">
          
          {/* Section Header */}
          <div className="text-center mb-10 md:mb-12 lg:mb-16 2xl:mb-20">
            <h2 data-animate="service-title" className="text-[26px] md:text-[36px] lg:text-[48px] 2xl:text-[56px] font-normal text-[#0A0A0A] leading-tight" style={{ fontFamily: "var(--font-public-sans), sans-serif" }}>
              Talk to a Pet <span style={{ color: "#FFC501" }}>Expert</span> Today
            </h2>
            <p className="mt-4 text-[15px] md:text-[16px] lg:text-[18px] 2xl:text-[20px] text-[#4A5565] max-w-2xl 2xl:max-w-3xl mx-auto" style={{ fontFamily: "var(--font-public-sans), sans-serif" }}>
              Get personalized guidance for choosing, caring for, and raising your perfect companion.
            </p>
          </div>

          {/* Pricing Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12 2xl:gap-16 w-full justify-items-center">
            
            {/* Card 1: Basic */}
            <div data-animate="service-card" className="bg-white rounded-[24px] border border-[#DFDFDF] flex flex-col items-center px-6 lg:px-8 py-8 2xl:py-10 w-full max-w-[380px] 2xl:max-w-[430px] min-h-[520px] lg:min-h-[573px] 2xl:min-h-[640px] h-full">
              <div className="rounded-[16px] flex flex-col justify-center bg-[#F3F4F6] px-6 lg:px-8 w-full h-[110px] lg:h-[129px] 2xl:h-[145px]">
                <span className="text-[10px] lg:text-[12px] 2xl:text-[14px] font-semibold tracking-[0.05em] text-[#0A0A0A]" style={{ fontFamily: "Inter, sans-serif" }}>BASIC — FREE CONSULTATION</span>
                <span className="mt-2 text-[28px] lg:text-[36px] 2xl:text-[42px] font-normal text-[#0A0A0A]" style={{ fontFamily: "Inter, sans-serif" }}>₹0</span>
              </div>
              <p className="mt-6 text-center text-[15px] lg:text-[16px] 2xl:text-[18px] text-[#0A0A0A] font-medium" style={{ fontFamily: "var(--font-public-sans), sans-serif" }}>
                Perfect for first-time pet parents
              </p>
              <button className="mt-6 bg-black text-white rounded-full transition-all hover:bg-gray-900 active:scale-95 w-full h-[48px] 2xl:h-[54px] text-[16px] 2xl:text-[18px] font-medium shadow-md">
                Book Now
              </button>
              <ul className="mt-8 self-start flex flex-col gap-4 2xl:gap-5 w-full">
                {[
                  "15-minute expert call",
                  "Breed recommendation",
                  "Guidance on choosing the right pet",
                  "Basic care tips",
                  "Q&A session"
                ].map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <svg className="mt-1 flex-shrink-0" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#364153" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17L4 12"/></svg>
                    <span className="text-[14px] lg:text-[15px] 2xl:text-[17px] text-[#364153] leading-tight" style={{ fontFamily: "var(--font-public-sans), sans-serif" }}>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Card 2: Standard */}
            <div data-animate="service-card" className="bg-white rounded-[24px] border border-[#DFDFDF] flex flex-col items-center px-6 lg:px-8 py-8 2xl:py-10 w-full max-w-[380px] 2xl:max-w-[430px] min-h-[520px] lg:min-h-[573px] 2xl:min-h-[640px] h-full">
              <div className="rounded-[16px] flex flex-col justify-center px-6 lg:px-8 w-full h-[110px] lg:h-[129px] 2xl:h-[145px]" style={{ background: "linear-gradient(135deg, #FFC501, #1E1E1E)" }}>
                <span className="text-white text-[10px] lg:text-[12px] 2xl:text-[14px] font-semibold tracking-[0.05em]" style={{ fontFamily: "Inter, sans-serif" }}>STANDARD — COMPLETE GUIDANCE</span>
                <span className="mt-2 text-white text-[28px] lg:text-[36px] 2xl:text-[42px] font-normal" style={{ fontFamily: "Inter, sans-serif" }}>₹99</span>
              </div>
              <p className="mt-6 text-center text-[15px] lg:text-[16px] 2xl:text-[18px] text-[#0A0A0A] font-medium" style={{ fontFamily: "var(--font-public-sans), sans-serif" }}>
                Best for serious pet buyers
              </p>
              <button className="mt-6 bg-black text-white rounded-full transition-all hover:bg-gray-900 active:scale-95 shadow-lg w-full h-[48px] 2xl:h-[54px] text-[16px] 2xl:text-[18px] font-medium">
                Book Now
              </button>
              <ul className="mt-8 self-start flex flex-col gap-4 2xl:gap-5 w-full">
                {[
                  "30-minute expert consultation",
                  "Personalized pet recommendations",
                  "Home & lifestyle assessment",
                  "Nutrition guidance",
                  "Preparation checklist"
                ].map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <svg className="mt-1 flex-shrink-0" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#364153" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17L4 12"/></svg>
                    <span className="text-[14px] lg:text-[15px] 2xl:text-[17px] text-[#364153] leading-tight" style={{ fontFamily: "var(--font-public-sans), sans-serif" }}>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Card 3: Premium */}
            <div data-animate="service-card" className="bg-white rounded-[24px] border border-[#DFDFDF] flex flex-col items-center px-6 lg:px-8 py-8 2xl:py-10 w-full max-w-[380px] 2xl:max-w-[430px] min-h-[520px] lg:min-h-[573px] 2xl:min-h-[640px] h-full md:col-span-2 lg:col-span-1">
              <div className="rounded-[16px] flex flex-col justify-center bg-[#F3F4F6] px-6 lg:px-8 w-full h-[110px] lg:h-[129px] 2xl:h-[145px]">
                <span className="text-[10px] lg:text-[12px] 2xl:text-[14px] font-semibold tracking-[0.05em] text-[#0A0A0A]" style={{ fontFamily: "Inter, sans-serif" }}>PREMIUM — FULL PET PARENTING</span>
                <span className="mt-2 text-[28px] lg:text-[36px] 2xl:text-[42px] font-normal text-[#0A0A0A]" style={{ fontFamily: "Inter, sans-serif" }}>₹2,499</span>
              </div>
              <p className="mt-6 text-center text-[15px] lg:text-[16px] 2xl:text-[18px] text-[#0A0A0A] font-medium" style={{ fontFamily: "var(--font-public-sans), sans-serif" }}>
                For families wanting end-to-end guidance
              </p>
              <button className="mt-6 bg-black text-white rounded-full transition-all hover:bg-gray-900 active:scale-95 w-full h-[48px] 2xl:h-[54px] text-[16px] 2xl:text-[18px] font-medium shadow-md">
                Book Now
              </button>
              <ul className="mt-8 self-start flex flex-col gap-4 2xl:gap-5 w-full">
                {[
                  "60-minute deep consultation",
                  "Detailed pet matching",
                  "Training & behavior advice",
                  "Health & vaccination planning",
                  "Post-adoption support"
                ].map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <svg className="mt-1 flex-shrink-0" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#364153" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17L4 12"/></svg>
                    <span className="text-[14px] lg:text-[15px] 2xl:text-[17px] text-[#364153] leading-tight" style={{ fontFamily: "var(--font-public-sans), sans-serif" }}>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="w-full py-16 lg:py-24 2xl:py-32 bg-white flex flex-col items-center">
        <div className="max-w-[1440px] 2xl:max-w-[1600px] mx-auto w-full px-4 flex flex-col items-center">
          
          {/* Section Heading */}
          <h2 data-animate="service-title" className="text-center mb-12 lg:mb-16 text-[28px] md:text-[32px] lg:text-[36px] 2xl:text-[44px] font-normal text-[#0A0A0A]" style={{ fontFamily: "var(--font-public-sans), sans-serif" }}>
            Why Choose <span style={{ color: "#FFC501" }}>Pets Barn Consultation</span>?
          </h2>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 2xl:gap-8 w-full max-w-[1240px] 2xl:max-w-[1536px]">
            {[
              { title: "Expert Guidance", desc: "Consult certified pet specialists with real experience in dogs, cats, and birds.", img: "/images/expart.png", imgSize: { w: 74, h: 52 } },
              { title: "Personalized Advice", desc: "Recommendations tailored to your lifestyle, home, and preferences.", img: "/images/personalized.png", imgSize: { w: 74, h: 52 } },
              { title: "Stress-Free Pet Parenting", desc: "Get answers on training, nutrition, health, and behavior.", img: "/images/stress-free.png", imgSize: { w: 52, h: 52 } },
              { title: "Ongoing Support", desc: "We're here even after you bring your pet home.", img: "/images/ongoing.png", imgSize: { w: 80, h: 52 } }
            ].map((box, idx) => (
              <div key={idx} data-animate="service-card" className="border border-[#DFDFDF] rounded-[24px] flex flex-col overflow-hidden h-full min-h-[350px] lg:h-[397px] 2xl:h-[450px] group hover:border-[#FFC501] transition-colors">
                <div className="flex-1 p-8 flex items-start">
                  <img src={box.img} alt={box.title} style={{ width: `${box.imgSize.w}px`, height: `${box.imgSize.h}px`, objectFit: "contain" }} className="group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="bg-[#F6F5F2] p-6 md:p-8 flex flex-col gap-3 rounded-[16px] mb-4 mx-4 h-auto lg:h-[198px] 2xl:h-[220px]">
                  <h3 className="text-[18px] lg:text-[22px] 2xl:text-[24px] font-medium text-[#0A0A0A]">{box.title}</h3>
                  <p className="text-[13px] lg:text-[14px] 2xl:text-[15px] text-[#000000CC] leading-relaxed">
                    {box.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Promise Section */}
      <section className="pt-16 lg:py-24 2xl:py-32 bg-white w-full border-t border-gray-100">
        <div className="w-full max-w-[1440px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12">

          {/* Header Area */}
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 lg:mb-24 2xl:mb-28 gap-8 text-center md:text-left">
            <div className="max-w-[700px] 2xl:max-w-[850px]">
              <h2 className="text-[#0A0A0A] font-normal leading-tight mb-4 text-[26px] md:text-[32px] lg:text-[36px] 2xl:text-[44px]" style={{ fontFamily: "var(--font-public-sans), sans-serif" }}>
                Experience the <span className="text-[#FFC501]">Pets Barn</span> Promise of Pawsome Care
              </h2>
              <p className="text-[#6E6E6E] leading-relaxed text-[15px] lg:text-[18px] 2xl:text-[20px]" style={{ fontFamily: "var(--font-public-sans), sans-serif" }}>
                Discover the difference with Pet Barns, where our commitment to ethical standards and lifelong pet wellness ensures you find more than just a pet—you find a family member.
              </p>
            </div>
            <button className="bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-all shadow-lg flex items-center justify-center w-full max-w-[240px] md:w-[193px] 2xl:w-[220px] h-[50px] md:h-[44px] 2xl:h-[50px] text-[15px] 2xl:text-[16px]">
              Call Us Now
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
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
                className={`p-8 lg:p-12 2xl:p-16 flex flex-col items-center text-center gap-6 lg:gap-8 border-gray-200 ${
                  index !== 2 ? 'md:border-r' : ''
                } border-t md:border-t-0 first:border-t-0`}
              >
                <div className="w-[64px] lg:w-[84px] 2xl:w-[100px] h-[64px] lg:h-[84px] 2xl:h-[100px] flex items-center justify-center flex-shrink-0">
                  <img src={box.image} alt={box.title} className="w-full h-full object-contain" />
                </div>
                <div className="flex flex-col gap-4">
                  <h3 className="text-black font-bold text-[18px] lg:text-[22px] 2xl:text-[26px] leading-tight">
                    {box.title}
                  </h3>
                  <p className="text-[#6E6E6E] text-[14px] lg:text-[16px] 2xl:text-[18px] leading-relaxed">
                    {box.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Help You With Section */}
      <section className="w-full bg-white relative  py-0 lg:min-h-[690px] 2xl:min-h-[850px] overflow-hidden flex items-center">
        <div className="max-w-[1440px] 2xl:max-w-[1600px] mx-auto w-full px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-[35%_65%] 2xl:grid-cols-[38%_62%] gap-6 sm:gap-8 lg:gap-10 2xl:gap-16 items-start lg:items-center w-full">
            
            {/* Left Content */}
            <div className="flex mt-40 flex-col z-10 order-2 lg:order-1 text-center lg:text-left items-center lg:items-start w-full">
              <h2 data-animate="service-title" className="mb-2 sm:mb-4 lg:mb-6 leading-tight text-[18px] sm:text-[24px] md:text-[28px] lg:text-[35px] 2xl:text-[44px] font-normal text-[#0A0A0A]" style={{ fontFamily: "var(--font-public-sans), sans-serif" }}>
                What We <span style={{ color: "#FFC501" }}>Help You</span> With?
              </h2>
              <p className="mb-3 sm:mb-4 lg:mb-8 text-[10px] sm:text-[12px] md:text-[13px] lg:text-[16px] 2xl:text-[18px] text-[#363D4F] leading-tight sm:leading-snug md:leading-relaxed max-w-sm sm:max-w-md lg:max-w-lg 2xl:max-w-xl" style={{ fontFamily: "var(--font-public-sans), sans-serif" }}>
                Guidance tailored to your pet journey — from choosing the right companion to raising a happy, healthy family member.
              </p>

              <ul className="flex pl-25 md:pl-25 lg:pl-0 flex-col gap-1.5 sm:gap-2.5 md:gap-3 lg:gap-5 2xl:gap-6 text-center lg:text-left w-full max-w-sm sm:max-w-md lg:max-w-md mx-auto lg:mx-0">
                {[
                  "Choosing the right pet for your home",
                  "Breed recommendations",
                  "First-time pet parenting guidance",
                  "Nutrition & care tips",
                  "Training basics"
                ].map((item) => (
                  <li key={item} data-animate="feature-item" className="flex items-start gap-1.5 sm:gap-2.5 md:gap-3 lg:gap-4">
                    <div className="flex-shrink-0 w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 rounded-full bg-[#FFC501] flex items-center justify-center shadow-sm mt-0.5 sm:mt-0.5 md:mt-0.5 lg:mt-0">
                      <svg width="6" height="5" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:w-[8px] sm:h-[6px] md:w-[10px] md:h-[8px] lg:w-[14px] lg:h-[10px]">
                        <path d="M1 5L5 9L13 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span className="text-[9px] sm:text-[10px] md:text-[12px] lg:text-[15px] 2xl:text-[17px] text-[#060B13] leading-tight" style={{ fontFamily: "var(--font-public-sans), sans-serif" }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Image Section */}
            <div className="relative flex justify-center items-end md:h-[350px] lg:h-full order-1 lg:order-2 w-full">
              <div 
                className="absolute w-[180px] h-[180px] sm:w-[240px] sm:h-[240px] md:w-[300px] md:h-[300px] lg:w-[800px] lg:h-[800px] 2xl:w-[1000px] 2xl:h-[1000px] rounded-full bg-[#FFC501] -z-0"
                style={{ top: "40%", left: "50%", transform: "translateX(-50%)" }}
              ></div>
              <img 
                src="/images/cathelp.png" 
                alt="How we help" 
                className="relative z-10 w-full max-w-[180px] sm:max-w-[240px] md:max-w-[300px] lg:max-w-[850px] 2xl:max-w-[1050px] object-contain block"
                style={{ marginBottom: "-130px" }}
              />
            </div>

          </div>
        </div>
      </section>

      {/* Happy Families Gallery Section */}
      <section className="w-full bg-white py-16 md:py-20 lg:pt-20 flex flex-col items-center">
        <div className="w-full max-w-[1240px] 2xl:max-w-[1536px] px-4 relative overflow-hidden h-auto lg:h-[1350px] 2xl:h-[1550px]">

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 2xl:gap-8">
            {/* Columns (Auto stacked on mobile) */}
            {[1, 2, 3, 4].map((col) => (
              <div key={col} className="flex flex-col gap-4 lg:gap-6 2xl:gap-8">
                <img src={`/images/hp${(col-1)*4 + 1}.png`} className="w-full object-cover rounded-xl shadow-sm" style={{ height: "auto", aspectRatio: "1/1.2" }} alt="Happy Family" />
                <img src={`/images/hp${(col-1)*4 + 2}.png`} className="w-full object-cover rounded-xl shadow-sm" style={{ height: "auto", aspectRatio: "1/0.8" }} alt="Happy Family" />
                <img src={`/images/hp${(col-1)*4 + 3}.png`} className="w-full object-cover rounded-xl shadow-sm" style={{ height: "auto", aspectRatio: "1/1" }} alt="Happy Family" />
                <img src={`/images/hp${(col-1)*4 + 4}.png`} className="w-full object-cover rounded-xl shadow-sm" style={{ height: "auto", aspectRatio: "1/1.1" }} alt="Happy Family" />
              </div>
            ))}
          </div>

          {/* Bottom Fade & Title Overlay */}
          <div className="relative lg:absolute bottom-0 left-0 w-full lg:h-[400px] 2xl:h-[450px] flex items-end justify-center py-6 md:py-8 lg:pb-12 bg-gradient-to-t from-white via-white/95 to-transparent z-20 mt-8 lg:mt-0">
            <h2 className="text-black text-center text-[26px] md:text-[36px] lg:text-[42px] 2xl:text-[52px] font-normal leading-tight px-4" style={{ fontFamily: "var(--font-public-sans), sans-serif" }}>
              <span style={{ color: "#FFC501" }}>10,000+</span> Happy Families Served
            </h2>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection items={[
        { question: "What happens during a consultation call?", answer: "Our experts discuss your lifestyle, home environment, and preferences to recommend the most suitable pet breeds that match your daily routine." },
        { question: "Is the consultation available for all types of pets?", answer: "Yes, we provide expert guidance for dogs, cats, and birds, tailoring advice to the specific needs of each species." },
        { question: "Do you help in finding a breeder after the consultation?", answer: "We provide detailed guidance on how to identify ethical breeders and what documentation you should request to ensure a healthy companion." },
        { question: "Can I ask about specific health issues for a breed?", answer: "Absolutely. Our experts provide insights into breed-specific health traits, energy levels, and grooming requirements to help you make an informed choice." },
        { question: "What if I'm a first-time pet parent?", answer: "We offer dedicated support for first-time owners, including preparation checklists, basic care training, and ongoing advice for a smooth transition." }
      ]} />

      {/* Final CTA Section */}
      <section className="w-full bg-[#E6E6E6] py-16 md:py-20 lg:py-0 lg:min-h-[591px] 2xl:min-h-[700px] overflow-hidden flex items-center">
        <div className="max-w-[1440px] 2xl:max-w-[1600px] mx-auto w-full px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
            
            {/* Left Column: Dog Expert Image */}
            <div className="hidden lg:flex h-[591px] 2xl:h-[700px] items-end justify-center">
              <img 
                src="/images/dogexpart.png" 
                alt="Dog Expert" 
                className="h-[90%] object-contain object-bottom"
              />
            </div>

            {/* Right Column: Text & Button */}
            <div className="flex flex-col max-w-[650px] 2xl:max-w-[780px] gap-8 md:gap-10 2xl:gap-12 text-center lg:text-left items-center lg:items-start mx-auto lg:mx-0">
              <h2 className="leading-tight text-[26px] md:text-[34px] lg:text-[39px] 2xl:text-[46px] font-normal text-[#0A0A0A]" style={{ fontFamily: "var(--font-public-sans), sans-serif" }}>
                Not sure which breed is right for your home and lifestyle? 
                <span className="block" style={{ color: "#FFC501" }}> Talk to our experts and find the perfect match.</span>
              </h2>
              
              <button 
                className="bg-black text-white rounded-full px-10 h-[56px] lg:h-[50px] 2xl:h-[60px] text-[16px] md:text-[17px] 2xl:text-[18px] font-medium hover:bg-gray-800 transition-all shadow-lg active:scale-95"
              >
                Talk to Our Pet Experts
              </button>
            </div>

          </div>
        </div>
      </section>
    </div>
    </ServiceAnimations>
  );
}
