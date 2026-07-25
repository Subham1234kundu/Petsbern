"use client";

import type { BreedFeatures } from "@/types/breedFeatures";

type Props = {
  features: BreedFeatures | null | undefined;
  breedName?: string;
};

export default function BreedFeaturesDiagram({ features, breedName }: Props) {
  if (!features?.image || !features.points?.length) return null;

  return (
    <section className="w-full max-w-[900px] mx-auto mt-14 md:mt-20">
      <h3 className="text-center text-[28px] md:text-[36px] font-normal text-black mb-8 md:mb-10">
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

      {/* Annotated image */}
      <div className="relative w-full max-w-[560px] mx-auto mb-10 md:mb-14">
        <div className="absolute inset-x-[-8%] bottom-0 top-[18%] rounded-[50%] bg-[#E8F4FC] -z-0" aria-hidden />
        <div className="relative z-10 w-full aspect-square">
          <img
            src={features.image}
            alt={breedName ? `${breedName} features` : "Breed features"}
            className="w-full h-full object-contain"
          />
          {features.points.map((point, index) => (
            <span
              key={`${point.title}-${index}`}
              className="absolute z-20 flex items-center justify-center w-8 h-8 md:w-9 md:h-9 rounded-full bg-[#2B6CB0] text-white text-[13px] md:text-[14px] font-bold shadow-md border-2 border-white -translate-x-1/2 -translate-y-1/2 select-none"
              style={{ left: `${point.x}%`, top: `${point.y}%` }}
              title={point.title}
            >
              {index + 1}
            </span>
          ))}
        </div>
      </div>

      {/* Numbered descriptions */}
      <ol className="space-y-6 md:space-y-8 max-w-[720px] mx-auto px-1">
        {features.points.map((point, index) => (
          <li key={`${point.title}-desc-${index}`} className="flex gap-3 md:gap-4">
            <span className="shrink-0 w-8 h-8 md:w-9 md:h-9 rounded-full bg-[#2B6CB0] text-white text-[13px] md:text-[14px] font-bold flex items-center justify-center mt-0.5">
              {index + 1}
            </span>
            <div>
              <h4 className="text-[18px] md:text-[20px] font-bold text-black leading-tight">
                {point.title}
              </h4>
              {point.description ? (
                <p className="mt-1.5 text-[14px] md:text-[15px] text-[#4A5565] leading-relaxed">
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
