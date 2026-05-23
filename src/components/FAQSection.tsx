"use client";

import React, { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  items: FAQItem[];
}

const FAQSection: React.FC<FAQSectionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 2xl:py-32 bg-white flex flex-col items-center w-full">
      <div className="w-full max-w-[1043px] 2xl:max-w-[1280px] px-4">
        <h2 
          className="text-center mb-10 md:mb-16 2xl:mb-20 px-2" 
          style={{ 
            fontFamily: "var(--font-public-sans), 'Public Sans', sans-serif", 
            color: "#0A0A0A",
            lineHeight: "1.2"
          }}
        >
          <span className="text-[28px] md:text-[36px] 2xl:text-[46px] font-normal block md:inline">Frequently Asking </span>
          <span className="text-[28px] md:text-[36px] 2xl:text-[46px] font-normal" style={{ color: "#FFC501" }}>Questions</span>
        </h2>

        <div className="flex flex-col gap-4 2xl:gap-6">
          {items.map((item, index) => (
            <div
              key={index}
              className="border rounded-lg overflow-hidden transition-all duration-300"
              style={{
                borderColor: "#D8D8D8",
                backgroundColor: openIndex === index ? "#EBEBEB" : "transparent",
              }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full h-[78px] 2xl:h-[90px] px-8 flex items-center justify-between text-left transition-colors"
              >
                <span
                  className="text-[16px] md:text-[20px] 2xl:text-[24px] pr-2 md:pr-4"
                  style={{
                    fontWeight: 400,
                    fontFamily: "var(--font-public-sans), sans-serif",
                    color: openIndex === index ? "#000000" : "#565246",
                  }}
                >
                  {item.question}
                </span>
                <span className="flex-shrink-0 ml-4">
                  <svg
                     width="24"
                     height="24"
                     viewBox="0 0 24 24"
                     fill="none"
                     stroke="currentColor"
                     strokeWidth="2"
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     className={`transition-transform duration-300 ${openIndex === index ? "rotate-180 text-black" : "text-[#565246]"}`}
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </span>
              </button>

              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === index ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-8 pb-8 2xl:pb-10">
                  <p
                    className="text-[16px] 2xl:text-[18px]"
                    style={{
                      color: "#606267",
                      lineHeight: "1.6",
                      fontFamily: "var(--font-public-sans), sans-serif",
                    }}
                  >
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
