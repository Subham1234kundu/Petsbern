import Link from "next/link";
import { TestimonialSlider } from "@/components/TestimonialSlider";
import FAQSection from "@/components/FAQSection";
import ServiceAnimations from "@/components/ServiceAnimations";

export default function PetTrainingPage() {
  const trainingFAQs = [
    {
      question: "What types of training programs do you offer?",
      answer: "We offer Basic Obedience, Advanced Skill Training, Behavioral Correction, and Puppy Socialization programs tailored to your pet's specific needs."
    },
    {
      question: "How long does a typical training program last?",
      answer: "Program duration varies based on the goals and the pet's progress. Most basic programs range from 4 to 8 weeks, with weekly sessions."
    },
    {
      question: "Do you use positive reinforcement techniques?",
      answer: "Yes, we exclusively use positive reinforcement and reward-based training methods to ensure a happy, stress-free learning experience for your pet."
    },
    {
      question: "At what age can my pet start training?",
      answer: "Training can start as early as 8-10 weeks for puppy socialization. For obedience training, pets of any age can learn new skills, though early start is recommended."
    }
  ];

  return (
    <ServiceAnimations>
      <div className="flex flex-col min-h-screen bg-white font-sans">
        {/* Header Section */}
        <section
          className="w-full h-[268px] relative flex flex-col items-center justify-center overflow-hidden text-center"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/pettraining.jpg')",
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
              Pet Training
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
              <span data-animate="service-desc" className="font-medium text-white">Pet Training</span>
            </div>
          </div>
        </section>

        {/* Main Content Area */}
        <main className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-12 lg:py-16 flex-grow">

          {/* Why Choose Section */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12 lg:gap-16">

            {/* Left Column */}
            <div data-animate="service-text" className="flex-1 max-w-[580px] text-center lg:text-left">
              <h2 className="text-[28px] md:text-[32px] lg:text-[36px] font-normal text-[#0A0A0A] leading-tight" style={{ fontFamily: "var(--font-public-sans), 'Public Sans', sans-serif" }}>
                Why Choose{" "}
                <span style={{ color: "#FFC501" }}>Pets Barn Training</span>?
              </h2>

              <p className="mt-4 text-[16px] lg:text-[18px] text-[#4A5565] leading-relaxed">
                Training should be tailored to the pet's temperament and environment.
              </p>

              {/* Feature Grid */}
              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-x-8 lg:gap-x-10 gap-y-10 items-start text-left">

                {/* Certified Trainers */}
                <div data-animate="feature-item" className="flex flex-col gap-3">
                  <div className="w-[44px] h-[44px] rounded-full flex items-center justify-center" style={{ backgroundColor: "#FFC501" }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="8" r="4" /><path d="M6 20v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
                    </svg>
                  </div>
                  <h3 className="text-[18px] lg:text-[20px] font-normal text-[#0A0A0A]" style={{ fontFamily: "var(--font-public-sans), 'Public Sans', sans-serif" }}>Certified Trainers</h3>
                  <p className="text-[13px] lg:text-[14px] text-[#11111199] leading-relaxed">Experienced professionals dedicated to your pet's success and well-being.</p>
                </div>

                {/* Positive Reinforcement */}
                <div data-animate="feature-item" className="flex flex-col gap-3">
                  <div className="w-[44px] h-[44px] rounded-full flex items-center justify-center" style={{ backgroundColor: "#FFC501" }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" /><path d="m9 12 2 2 4-4" />
                    </svg>
                  </div>
                  <h3 className="text-[18px] lg:text-[20px] font-normal text-[#0A0A0A]" style={{ fontFamily: "var(--font-public-sans), 'Public Sans', sans-serif" }}>Positive Methods</h3>
                  <p className="text-[13px] lg:text-[14px] text-[#11111199] leading-relaxed">Reward-based training that builds trust, confidence, and lasting good behavior.</p>
                </div>

                {/* Customized Programs */}
                <div data-animate="feature-item" className="flex flex-col gap-3">
                  <div className="w-[44px] h-[44px] rounded-full flex items-center justify-center" style={{ backgroundColor: "#FFC501" }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="7" height="7" />
                    </svg>
                  </div>
                  <h3 className="text-[18px] lg:text-[20px] font-normal text-[#0A0A0A]" style={{ fontFamily: "var(--font-public-sans), 'Public Sans', sans-serif" }}>Customized Programs</h3>
                  <p className="text-[13px] lg:text-[14px] text-[#11111199] leading-relaxed">Training plans tailored to your pet's age, breed, and personality.</p>
                </div>

                {/* Progress Tracking */}
                <div data-animate="feature-item" className="flex flex-col gap-3">
                  <div className="w-[44px] h-[44px] rounded-full flex items-center justify-center" style={{ backgroundColor: "#FFC501" }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                    </svg>
                  </div>
                  <h3 className="text-[18px] lg:text-[20px] font-normal text-[#0A0A0A]" style={{ fontFamily: "var(--font-public-sans), 'Public Sans', sans-serif" }}>Progress Tracking</h3>
                  <p className="text-[13px] lg:text-[14px] text-[#11111199] leading-relaxed">Regular updates and insights to monitor your pet's improvement.</p>
                </div>

              </div>
            </div>

            {/* Right Column: Image */}
            <div data-animate="service-image" className="w-full lg:w-1/2 flex justify-center">
              <img
                src="/images/whychoose.png"
                alt="Why Choose Pets Barn Training"
                className="rounded-[24px] lg:rounded-[32px] object-cover w-full max-w-[581px] h-auto aspect-[1/1.05]"
              />
            </div>

          </div>
        </main>

        {/* Training Programs Section */}
        <section className="w-full py-16 md:py-20" style={{ backgroundColor: "#F7F7F7" }}>
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">

            {/* Section Heading */}
            <h2 data-animate="service-title" className="text-center mb-12 md:mb-16 text-[28px] md:text-[32px] lg:text-[36px] font-normal text-[#0A0A0A]" style={{ fontFamily: "var(--font-public-sans), 'Public Sans', sans-serif" }}>
              Training Programs <span style={{ color: "#FFC501" }}>We Offer</span>
            </h2>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 justify-items-center">

              {[
                {
                  title: "Puppy Foundation Training",
                  desc: "Perfect for young pets to build the right habits early.",
                  features: ["Basic commands (Sit, Stay, Come)", "Potty & crate training", "Socialization skills", "Bite inhibition & manners"],
                },
                {
                  title: "Basic Obedience Training",
                  desc: "For pets that need structure and discipline.",
                  features: ["Leash walking", "Recall training", "Calm greetings", "Household manners"],
                },
                {
                  title: "Advanced Training & Tricks",
                  desc: "Take your pet to the next level.",
                  features: ["Advanced commands", "Off-leash control", "Fun tricks & activities", "Confidence building"],
                },
                {
                  title: "Behavior Correction Program",
                  desc: "Fix unwanted behaviors safely.",
                  features: ["Excessive barking", "Aggression & anxiety", "Chewing & destructive habits", "Separation anxiety"],
                },
              ].map((card) => (
                <div
                  key={card.title}
                  data-animate="service-card"
                  className="bg-white flex flex-col p-6 rounded-2xl border border-gray-200 shadow-sm w-full max-w-[320px] min-h-[420px] h-full"
                >
                  {/* Title + Description */}
                  <div className="mb-6 h-auto lg:h-[110px]">
                    <h3 className="text-[17px] lg:text-[18px] font-bold text-[#4A5565] leading-snug mb-3" style={{ fontFamily: "var(--font-public-sans), 'Public Sans', sans-serif" }}>
                      {card.title}
                    </h3>
                    <p className="text-[14px] text-[#6A7282] leading-relaxed">
                      {card.desc}
                    </p>
                  </div>

                  {/* Call Us Button */}
                  <button
                    className="flex items-center justify-center bg-black text-white rounded-full w-full h-[48px] text-[15px] font-medium hover:bg-gray-900 transition-all mb-8 shadow-md active:scale-95"
                  >
                    Call Us
                  </button>

                  {/* Features List */}
                  <div className="flex flex-col gap-4 mt-auto">
                    {card.features.map((f) => (
                      <div key={f} className="flex items-start gap-3">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#364153" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 mt-0.5">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span className="text-[14px] text-[#364153] leading-tight">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}

            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="bg-white w-full py-16 md:py-20">
          <div className="max-w-[1440px] mx-auto w-full px-4 sm:px-6 lg:px-12">
            <h2 data-animate="service-title" className="text-black text-[26px] md:text-[32px] lg:text-[36px] font-normal text-center mb-12 md:mb-16">
              How It <span className="text-[#FFC501]">Works?</span>
            </h2>

            <div className="flex flex-col lg:flex-row items-stretch justify-center gap-8 lg:gap-6 relative">
              {/* Step 1 */}
              <div data-animate="service-card" className="w-full max-w-[380px] border border-[#C8C8C8] rounded-2xl p-6 lg:p-8 pt-10 flex flex-col items-center text-center mx-auto lg:mx-0 transition-all hover:border-[#FFC501] group shadow-sm">
                <div className="h-[90px] lg:h-[110px] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <img src="/images/consultation&assessment.png" alt="Consultation & Assessment" className="h-full object-contain" />
                </div>
                <h3 className="text-black text-[18px] lg:text-[20px] font-bold mb-4">Consultation & Assessment</h3>
                <p className="text-[#4A5565] text-[14px] leading-relaxed">
                  We understand your pet’s needs, behavior, and training goals. Comprehensive assessment to create the best plan.
                </p>
              </div>

              {/* Arrow 1 */}
              <div className="flex lg:hidden items-center justify-center -my-4 z-10">
                <div className="w-8 h-8 rounded-full bg-[#FFC501] flex items-center justify-center shadow-sm">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 5v14M5 12l7 7 7-7"></path>
                  </svg>
                </div>
              </div>

              <div className="hidden lg:flex items-center justify-center z-10 -mx-4 flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-[#FFC501] flex items-center justify-center shadow-md">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </div>
              </div>

              {/* Step 2 */}
              <div data-animate="service-card" className="w-full max-w-[380px] border border-[#C8C8C8] rounded-2xl p-6 lg:p-8 pt-10 flex flex-col items-center text-center mx-auto lg:mx-0 transition-all hover:border-[#FFC501] group shadow-sm">
                <div className="h-[90px] lg:h-[110px] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <img src="/images/travel.png" alt="Customized Training Plan" className="h-full object-contain" />
                </div>
                <h3 className="text-black text-[18px] lg:text-[20px] font-bold mb-4">Customized Training Plan</h3>
                <p className="text-[#4A5565] text-[14px] leading-relaxed">
                  A personalized program designed specifically for your pet's breed and personality.
                </p>
              </div>

              {/* Arrow 2 */}
              <div className="flex lg:hidden items-center justify-center -my-4 z-10">
                <div className="w-8 h-8 rounded-full bg-[#FFC501] flex items-center justify-center shadow-sm">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 5v14M5 12l7 7 7-7"></path>
                  </svg>
                </div>
              </div>

              <div className="hidden lg:flex items-center justify-center z-10 -mx-4 flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-[#FFC501] flex items-center justify-center shadow-md">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </div>
              </div>

              {/* Step 3 */}
              <div data-animate="service-card" className="w-full max-w-[380px] border border-[#C8C8C8] rounded-2xl p-6 lg:p-8 pt-10 flex flex-col items-center text-center mx-auto lg:mx-0 transition-all hover:border-[#FFC501] group shadow-sm">
                <div className="h-[90px] lg:h-[110px] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <img src="/images/arival.png" alt="Progress & Results" className="h-full object-contain" />
                </div>
                <h3 className="text-black text-[18px] lg:text-[20px] font-bold mb-4">Progress & Results</h3>
                <p className="text-[#4A5565] text-[14px] leading-relaxed">
                  Regular sessions with expert trainers and home practice guides for lasting results.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Expert Tips & Guides Section */}
        <section className="py-16 bg-white flex flex-col items-center w-full">
          <div className="w-full max-w-[1240px] px-4">
            <h2 className="text-black text-center mb-4 font-normal text-[28px] md:text-[32px] lg:text-[36px]" style={{ fontFamily: "var(--font-public-sans), 'Public Sans', sans-serif" }}>
              Expert Tips, <span className="text-[#FFC501]">Pet Care Guides</span>
            </h2>
            <p className="text-center mb-12 lg:mb-16 mx-auto max-w-[800px] text-[15px] lg:text-[16px] text-[#000000CC] leading-relaxed">
              Discover helpful articles on pet care, training, nutrition, travel, and everything you need to give your furry and feathered companions the best life possible.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:mb-20">
              {/* Tip Card 1 */}
              <div className="bg-[#F6F6F6] rounded-[32px] lg:rounded-[40px] p-6 h-auto lg:h-[355px] flex flex-col md:flex-row items-center gap-6 lg:gap-8 group cursor-pointer transition-all hover:shadow-lg relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[25%] z-0 pointer-events-none hidden md:block">
                  <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                    <path d="M 0 0 L 85 0 C 78 0 75 100 68 100 L 0 100 Z" fill="#FFFFFF" />
                  </svg>
                </div>

                <div className="w-full md:w-[45%] h-[200px] md:h-full overflow-hidden rounded-[24px] lg:rounded-[28px] relative z-10 shadow-sm">
                  <img src="/images/pettravel1.png" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" alt="Expert Tip 1" />
                </div>

                <div className="w-full md:w-[55%] flex flex-col justify-between h-auto md:h-full py-4 relative z-10">
                  <div className="pt-2">
                    <span className="text-[10px] lg:text-[11px] text-[#FFC501] font-bold uppercase tracking-widest mb-6 lg:mb-10 block ml-0 md:ml-2">PET TRAINING</span>
                    <h3 className="text-[18px] lg:text-[20px] text-black font-normal leading-[1.4] pr-4 ml-0 md:ml-2">
                      Professional Training Tips to Build a Stronger Bond with Your New Pet
                    </h3>
                  </div>
                  <div className="self-end mr-2 mt-6 md:mt-0">
                    <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white flex items-center justify-center shadow-sm transition-all text-[#FFC501] group-hover:bg-[#FFC501] group-hover:text-white">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M17 7H7M17 7V17" /></svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tip Card 2 */}
              <div className="bg-[#F6F6F6] rounded-[32px] lg:rounded-[40px] p-6 h-auto lg:h-[355px] flex flex-col md:flex-row items-center gap-6 lg:gap-8 group cursor-pointer transition-all hover:shadow-lg relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[25%] z-0 pointer-events-none hidden md:block">
                  <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                    <path d="M 0 0 L 85 0 C 78 0 75 100 68 100 L 0 100 Z" fill="#FFFFFF" />
                  </svg>
                </div>

                <div className="w-full md:w-[45%] h-[200px] md:h-full overflow-hidden rounded-[24px] lg:rounded-[28px] relative z-10 shadow-sm">
                  <img src="/images/pettravel2.png" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" alt="Expert Tip 2" />
                </div>

                <div className="w-full md:w-[55%] flex flex-col justify-between h-auto md:h-full py-4 relative z-10">
                  <div className="pt-2">
                    <span className="text-[10px] lg:text-[11px] text-[#FFC501] font-bold uppercase tracking-widest mb-6 lg:mb-10 block ml-0 md:ml-2">PET TRAVEL</span>
                    <h3 className="text-[18px] lg:text-[20px] text-black font-normal leading-[1.4] pr-4 ml-0 md:ml-2">
                      Essential Nutrition and Health Guides for Every Stage of Pet Life
                    </h3>
                  </div>
                  <div className="self-end mr-2 mt-6 md:mt-0">
                    <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white flex items-center justify-center shadow-sm transition-all text-[#FFC501] group-hover:bg-[#FFC501] group-hover:text-white">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M17 7H7M17 7V17" /></svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Training Pets? Section */}
        <section className="py-16 md:py-24 bg-[#F7F7F7] flex flex-col items-center justify-center w-full">
          <div className="w-full max-w-[1440px] px-4 sm:px-6 lg:px-12">
            <h2 data-animate="service-title" className="text-black text-center mb-12 md:mb-16 text-[26px] md:text-[32px] lg:text-[36px] font-normal" style={{ fontFamily: "var(--font-public-sans), 'Public Sans', sans-serif" }}>
              Why <span className="text-[#FFC501]">Training</span> Pets?
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 justify-items-center">
              {/* Box 1 */}
              <div className="w-full max-w-[320px] bg-white rounded-[32px] p-8 flex flex-col shadow-sm border border-[#EFEFEF] group hover:border-[#FFC501] transition-all h-full">
                <div className="w-10 h-10 rounded-full bg-[#FFC501] flex items-center justify-center mb-6 shadow-sm">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
                </div>
                <h3 className="mb-4 text-[18px] lg:text-[20px] font-bold text-black leading-tight" style={{ fontFamily: "var(--font-public-sans), 'Public Sans', sans-serif" }}>Better Behavior at Home</h3>
                <p className="mb-6 text-[14px] md:text-[15px] text-[#6E6E6E] leading-relaxed">
                  Training helps pets understand what’s right and wrong in their environment.
                </p>
                <div className="mt-auto">
                  <h4 className="font-bold mb-2 text-[14px] md:text-[15px] text-black">Reduces issues like:</h4>
                  <ul className="space-y-1">
                    <li className="text-[14px] text-[#6E6E6E] flex items-center gap-2">
                       <span className="w-1.5 h-1.5 rounded-full bg-[#FFC501]"></span> Excessive barking
                    </li>
                    <li className="text-[14px] text-[#6E6E6E] flex items-center gap-2">
                       <span className="w-1.5 h-1.5 rounded-full bg-[#FFC501]"></span> Aggression
                    </li>
                  </ul>
                </div>
              </div>

              {/* Box 2 */}
              <div className="w-full max-w-[320px] bg-white rounded-[32px] p-8 flex flex-col shadow-sm border border-[#EFEFEF] group hover:border-[#FFC501] transition-all h-full">
                <div className="w-10 h-10 rounded-full bg-[#FFC501] flex items-center justify-center mb-6 shadow-sm">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>
                </div>
                <h3 className="mb-4 text-[18px] lg:text-[20px] font-bold text-black leading-tight" style={{ fontFamily: "var(--font-public-sans), 'Public Sans', sans-serif" }}>Stronger Bond With Your Pet</h3>
                <p className="mb-6 text-[14px] md:text-[15px] text-[#6E6E6E] leading-relaxed">
                  Training builds trust and effective communication between you and your pet.
                </p>
                <div className="mt-auto">
                  <h4 className="font-bold mb-2 text-[14px] md:text-[15px] text-black">Improves:</h4>
                  <ul className="space-y-1">
                    <li className="text-[14px] text-[#6E6E6E] flex items-center gap-2">
                       <span className="w-1.5 h-1.5 rounded-full bg-[#FFC501]"></span> Responsiveness
                    </li>
                    <li className="text-[14px] text-[#6E6E6E] flex items-center gap-2">
                       <span className="w-1.5 h-1.5 rounded-full bg-[#FFC501]"></span> Emotional security
                    </li>
                  </ul>
                </div>
              </div>

              {/* Box 3 */}
              <div className="w-full max-w-[320px] bg-white rounded-[32px] p-8 flex flex-col shadow-sm border border-[#EFEFEF] group hover:border-[#FFC501] transition-all h-full">
                <div className="w-10 h-10 rounded-full bg-[#FFC501] flex items-center justify-center mb-6 shadow-sm">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" /></svg>
                </div>
                <h3 className="mb-4 text-[18px] lg:text-[20px] font-bold text-black leading-tight" style={{ fontFamily: "var(--font-public-sans), 'Public Sans', sans-serif" }}>Safety for Pets and People</h3>
                <p className="mb-6 text-[14px] md:text-[15px] text-[#6E6E6E] leading-relaxed">
                  Proper training ensures your pet is safe in public and at home.
                </p>
                <div className="mt-auto">
                  <h4 className="font-bold mb-2 text-[14px] md:text-[15px] text-black">Prevents:</h4>
                  <ul className="space-y-1">
                    <li className="text-[14px] text-[#6E6E6E] flex items-center gap-2">
                       <span className="w-1.5 h-1.5 rounded-full bg-[#FFC501]"></span> Running into traffic
                    </li>
                    <li className="text-[14px] text-[#6E6E6E] flex items-center gap-2">
                       <span className="w-1.5 h-1.5 rounded-full bg-[#FFC501]"></span> Reactive behavior
                    </li>
                  </ul>
                </div>
              </div>

              {/* Box 4 */}
              <div className="w-full max-w-[320px] bg-white rounded-[32px] p-8 flex flex-col shadow-sm border border-[#EFEFEF] group hover:border-[#FFC501] transition-all h-full">
                <div className="w-10 h-10 rounded-full bg-[#FFC501] flex items-center justify-center mb-6 shadow-sm">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 5c-1.3 0-2.3 1.1-2.3 2.3 0 1.2 1 2.3 2.3 2.3s2.3-1.1 2.3-2.3c0-1.2-1-2.3-2.3-2.3Z" /><path d="M18 10c-1.3 0-2.3 1.1-2.3 2.3 0 1.2 1 2.3 2.3 2.3s2.3-1.1 2.3-2.3c0-1.2-1-2.3-2.3-2.3Z" /><path d="M7 10c-1.3 0-2.3 1.1-2.3 2.3 0 1.2 1 2.3 2.3 2.3s2.3-1.1 2.3-2.3c0-1.2-1-2.3-2.3-2.3Z" /><path d="M14 15c-1.3 0-2.3 1.1-2.3 2.3 0 1.2 1 2.3 2.3 2.3s2.3-1.1 2.3-2.3c0-1.2-1-2.3-2.3-2.3Z" /><path d="M12 22c-3.3 0-6-2.7-6-6 0-1.1.9-2 2-2h8c1.1 0 2 .9 2 2 0 3.3-2.7 6-6 6Z" /></svg>
                </div>
                <h3 className="mb-4 text-[18px] lg:text-[20px] font-bold text-black leading-tight" style={{ fontFamily: "var(--font-public-sans), 'Public Sans', sans-serif" }}>Confident Pet</h3>
                <p className="mb-6 text-[14px] md:text-[15px] text-[#6E6E6E] leading-relaxed">
                  Training helps pets feel secure and improves their social skills.
                </p>
                <div className="mt-auto">
                  <h4 className="font-bold mb-2 text-[14px] md:text-[15px] text-black">Reduces:</h4>
                  <ul className="space-y-1">
                    <li className="text-[14px] text-[#6E6E6E] flex items-center gap-2">
                       <span className="w-1.5 h-1.5 rounded-full bg-[#FFC501]"></span> Anxiety
                    </li>
                    <li className="text-[14px] text-[#6E6E6E] flex items-center gap-2">
                       <span className="w-1.5 h-1.5 rounded-full bg-[#FFC501]"></span> Boredom
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Happy Families Section */}
        <section className="bg-white py-16 lg:py-24 flex flex-col items-center w-full relative overflow-hidden">
          <div className="w-full max-w-[1440px] px-4 relative">
            <div className="relative w-full h-[300px] md:h-[447px] overflow-hidden flex flex-col items-center rounded-2xl lg:rounded-none">
              <img
                src="/images/familyy.png"
                className="w-full h-full object-cover select-none pointer-events-none"
                alt="Happy Families Collage"
              />

              {/* Subtle white fade at the bottom */}
              <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none"></div>

              {/* Text Overlay */}
              <div className="absolute bottom-4 lg:bottom-10 left-1/2 -translate-x-1/2 z-20 w-full text-center px-4">
                <h3 className="text-[26px] md:text-[36px] lg:text-[42px] font-normal tracking-tight leading-tight" style={{ fontFamily: "var(--font-public-sans), 'Public Sans', sans-serif" }}>
                  <span className="text-[#E53E3E]">10,000+</span>
                  <span className="text-black ml-3">Happy Families Served</span>
                </h3>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <TestimonialSlider />

        {/* FAQ Section */}
        <FAQSection items={trainingFAQs} />

        {/* Final CTA Section */}
        <section className="w-full flex flex-col lg:flex-row overflow-hidden bg-[#F8FBFF] py-16 md:py-20 lg:py-0 lg:min-h-[591px]">
          {/* Left Column */}
          <div className="w-full lg:w-[40%] flex flex-col justify-center px-6 sm:px-10 md:px-12 lg:px-20 text-center lg:text-left items-center lg:items-start mb-12 lg:mb-0">
            <h2 className="text-black mb-8 lg:mb-10 leading-tight text-[26px] md:text-[34px] lg:text-[42px] font-normal" style={{ fontFamily: "var(--font-public-sans), sans-serif" }}>
              Turn mischief into good manners — enroll your pet in our expert <br className="hidden lg:block" />
              <span className="text-[#FFC501]">training program today.</span>
            </h2>

            <button className="bg-black text-white px-10 h-[56px] lg:h-[60px] rounded-full hover:bg-gray-900 transition-all shadow-lg text-[16px] lg:text-[18px] font-medium active:scale-95">
              Consult For Training
            </button>
          </div>

          {/* Right Column */}
          <div className="w-full lg:w-[60%] h-[300px] md:h-[450px] lg:h-full relative overflow-hidden">
            <img
              src="/images/trainingprogram.png"
              className="w-full h-full object-cover"
              alt="Pet Training Program"
            />
          </div>
        </section>

      </div>
    </ServiceAnimations>
  );
}
