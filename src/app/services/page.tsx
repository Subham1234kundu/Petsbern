import React from "react";
import Link from "next/link";
import ServiceAnimations from "@/components/ServiceAnimations";
import FAQSection from "@/components/FAQSection";

const services = [
  {
    title: "Pet Training",
    description: "Professional training tailored to your pet's temperament. From basic obedience to advanced behavior correction.",
    image: "/images/pettraining.jpg",
    link: "/services/pet-training",
    features: ["Certified Trainers", "Positive Reinforcement", "Progress Tracking"]
  },
  {
    title: "Pet Relocation",
    description: "Safe and stress-free domestic and international pet transport. We handle all paperwork and logistics.",
    image: "/images/petrelocation.jpg",
    link: "/services/pet-relocation",
    features: ["IATA Approved Crates", "Door-to-Door Service", "Documentation Support"]
  },
  {
    title: "Breed Consultation",
    description: "Expert guidance to help you find the perfect pet companion that fits your lifestyle and home.",
    image: "/images/contactus.jpg",
    link: "/services/breed-consultation",
    features: ["Expert Matching", "Lifestyle Assessment", "Post-Adoption Support"]
  }
];

const servicesFAQs = [
  {
    question: "How do I book a service with Pets Barn?",
    answer: "You can book any of our services by clicking 'Learn More' on the service card and using the contact form, or by calling us directly at our support number."
  },
  {
    question: "Do you offer package deals for multiple services?",
    answer: "Yes, we offer customized packages if you require multiple services like training and relocation. Contact our support team for a tailored quote."
  },
  {
    question: "Are your trainers and handlers certified?",
    answer: "Absolutely. All our staff members are certified professionals with years of experience in pet behavior, safety, and transport."
  }
];

export default function ServicesPage() {
  return (
    <ServiceAnimations>
      <div className="flex flex-col min-h-screen bg-white font-sans">
        {/* Hero Section */}
        <section className="w-full min-h-[300px] md:h-[400px] relative flex flex-col items-center justify-center overflow-hidden text-center bg-[#1C4B42] py-16 px-4">
          <div className="absolute inset-0 opacity-20">
             <img src="/images/petfoot.png" className="absolute top-10 left-10 w-16 md:w-20 rotate-45" alt="" />
             <img src="/images/petfoot.png" className="absolute bottom-10 right-10 w-16 md:w-20 -rotate-12" alt="" />
          </div>
          <div className="z-10 w-full max-w-4xl mx-auto">
            <h1 data-animate="service-title" className="text-white text-[32px] md:text-5xl lg:text-6xl font-bold mb-4 lg:mb-6 leading-tight">
              Our Professional <span className="text-[#FFC501]">Services</span>
            </h1>
            <p data-animate="service-desc" className="text-white/80 text-[16px] md:text-xl max-w-2xl mx-auto px-2">
              Everything you need to give your furry family members the best life possible, from training to global relocation.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-12 max-w-[1440px] mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
            {services.map((service, index) => (
              <div 
                key={index} 
                data-animate="service-card"
                className="bg-white rounded-[24px] md:rounded-[32px] overflow-hidden border border-gray-100 shadow-lg hover:shadow-2xl transition-all group flex flex-col h-full"
              >
                <div className="aspect-video lg:h-64 overflow-hidden relative">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors" />
                </div>
                <div className="p-6 md:p-8 flex flex-col flex-grow">
                  <h2 className="text-xl md:text-2xl font-bold mb-4 text-[#0A0A0A] group-hover:text-[#FFC501] transition-colors">
                    {service.title}
                  </h2>
                  <p className="text-[#4A5565] text-sm md:text-base mb-6 md:mb-8 line-clamp-3">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8 flex-grow">
                    {service.features.map((feat, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs md:text-sm text-[#364153]">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FFC501" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        {feat}
                      </li>
                    ))}
                  </ul>
                  <Link 
                    href={service.link}
                    className="bg-black text-white py-3 md:py-4 rounded-full text-center font-bold text-sm md:text-base group-hover:bg-[#FFC501] group-hover:text-black transition-all transform active:scale-95"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Why Pets Barn Section (Short version) */}
        <section className="bg-[#F8F9FB] py-16 md:py-24 w-full">
           <div className="max-w-[1240px] mx-auto px-4 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
              <div data-animate="service-image" className="w-full lg:w-1/2">
                 <img src="/images/whypets.png" alt="Why us" className="rounded-[24px] md:rounded-[40px] shadow-xl w-full h-auto object-cover" />
              </div>
              <div data-animate="service-text" className="w-full lg:w-1/2 text-center lg:text-left">
                 <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Trust Our <span className="text-[#FFC501]">Experts</span>?</h2>
                 <p className="text-base md:text-lg text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
                    With over 10 years of experience in pet care, we understand that every pet is unique. Our team of certified professionals ensures the highest standards of safety, ethics, and care.
                 </p>
                 <div className="grid grid-cols-2 gap-8 justify-items-center lg:justify-items-start">
                    <div>
                       <h3 className="text-3xl md:text-4xl font-bold text-[#FFC501] mb-2">10k+</h3>
                       <p className="text-gray-500 font-medium uppercase tracking-wider text-[10px] md:text-sm">Families Served</p>
                    </div>
                    <div>
                       <h3 className="text-3xl md:text-4xl font-bold text-[#FFC501] mb-2">100%</h3>
                       <p className="text-gray-500 font-medium uppercase tracking-wider text-[10px] md:text-sm">Safety Record</p>
                    </div>
                 </div>
              </div>
           </div>
        </section>
        
        {/* FAQ Section */}
        <FAQSection items={servicesFAQs} />
      </div>
    </ServiceAnimations>
  );
}
