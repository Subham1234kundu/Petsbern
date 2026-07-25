"use client";

import {
  buildPersonalityHighlights,
  PERSONALITY_HIGHLIGHTS,
} from "@/lib/personalityHighlights";

type Props = {
  /** Current pet or breed listing */
  pet: Record<string, unknown> | null | undefined;
  /** Breed profile — when set, highlight values come from here (individual pets inherit breed scores) */
  breedProfile?: Record<string, unknown> | null;
  titleClassName?: string;
};

export { PERSONALITY_HIGHLIGHTS };

export default function PersonalityHighlights({
  pet,
  breedProfile,
  titleClassName = "text-center text-[28px] sm:text-[36px] font-normal text-black mb-6",
}: Props) {
  const items = buildPersonalityHighlights(pet, breedProfile);

  return (
    <div className="flex flex-col gap-6 max-w-[1024px] mx-auto">
      <h3 className={titleClassName}>
        Personality <span className="text-[#D63B3B]">Highlights</span>
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
        {items.map((item) => {
          const totalBars = 30;
          const activeBars = Math.floor((item.value / 100) * totalBars);
          return (
            <div key={item.name} className="flex flex-col gap-2">
              <div className="flex justify-between items-center px-1">
                <span className="text-[11px] sm:text-[12px] font-semibold text-[#5F6C72]">
                  Low
                </span>
                <span className="text-[14px] sm:text-[16px] font-bold text-black">
                  {item.label}
                </span>
                <span className="text-[11px] sm:text-[12px] font-semibold text-[#D63B3B]">
                  High
                </span>
              </div>
              <div className="flex gap-[3px]">
                {[...Array(totalBars)].map((_, i) => (
                  <div
                    key={i}
                    className={`h-5 flex-1 rounded-sm ${
                      i < activeBars ? item.color : "bg-[#E6E6E6]"
                    }`}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
