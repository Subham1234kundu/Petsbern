"use client";

import type { BreedFeatures } from "@/types/breedFeatures";

type Props = {
  features: BreedFeatures | null | undefined;
  breedName?: string;
};

export default function BreedFeaturesDiagram({ features, breedName }: Props) {
  if (!features?.image || !features.points?.length) return null;

  return (
    <section className="w-full max-w-[920px] mx-auto mt-10 sm:mt-14 md:mt-20 px-1 sm:px-2">
      <h3 className="text-center text-[22px] sm:text-[28px] md:text-[36px] font-normal text-black mb-6 sm:mb-8 md:mb-10 leading-tight">
        {breedName ? (
          <>
            {breedName} <span className="text-[#5B92BD]">Features</span>
          </>
        ) : (
          <>
            Breed <span className="text-[#5B92BD]">Features</span>
          </>
        )}
      </h3>

      {/* Features image — no numbered overlays */}
      <div className="w-full flex justify-center mb-8 sm:mb-10 md:mb-14">
        <div className="w-fit max-w-full">
          <img
            src={features.image}
            alt={breedName ? `${breedName} features` : "Breed features"}
            className="block max-w-full w-auto h-auto max-h-[min(70vh,560px)]"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>

      {/* Numbered descriptions */}
      <ol className="space-y-5 sm:space-y-6 md:space-y-8 max-w-[720px] mx-auto">
        {features.points.map((point, index) => (
          <li
            key={`${point.title}-desc-${index}`}
            className="flex gap-2.5 sm:gap-3 md:gap-4"
          >
            <span className="shrink-0 w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 rounded-full bg-[#2B6CB0] text-white text-[12px] sm:text-[13px] md:text-[14px] font-bold flex items-center justify-center mt-0.5">
              {index + 1}
            </span>
            <div className="min-w-0">
              <h4 className="text-[16px] sm:text-[18px] md:text-[20px] font-bold text-black leading-tight">
                {point.title}
              </h4>
              {point.description ? (
                <p className="mt-1 sm:mt-1.5 text-[13px] sm:text-[14px] md:text-[15px] text-[#4A5565] leading-relaxed">
                  {point.description}
                </p>
              ) : null}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
