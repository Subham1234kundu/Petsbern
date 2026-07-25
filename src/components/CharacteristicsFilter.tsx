"use client";

import { useState } from "react";
import type { BreedCharacteristic } from "@/lib/breedCharacteristics";

type Props = {
  characteristics: BreedCharacteristic[];
  selected: string[];
  onToggle: (label: string) => void;
  onClear: () => void;
};

export default function CharacteristicsFilter({
  characteristics,
  selected,
  onToggle,
  onClear,
}: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative w-full md:w-auto">
      <button
        type="button"
        onClick={() => setOpen(prev => !prev)}
        className="h-[48px] px-4 border border-[#E4E7E9] flex items-center justify-between gap-4 cursor-pointer text-[15px] font-medium text-black rounded-none w-full md:w-[260px] hover:border-[#8B5E3C] transition-colors"
      >
        <span className="flex items-center gap-2">
          Characteristics of Breed
          {selected.length > 0 && (
            <span className="min-w-[20px] h-[20px] px-1 flex items-center justify-center bg-[#FFC501] text-black text-[11px] font-bold rounded-full">
              {selected.length}
            </span>
          )}
        </span>
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      {open && (
        <>
          <div className="fixed inset-0 z-30" onClick={() => setOpen(false)} />
          <div className="absolute z-40 mt-2 right-0 w-full md:w-[300px] bg-white border border-[#E4E7E9] shadow-xl max-h-[340px] overflow-y-auto">
            <div className="sticky top-0 bg-white flex items-center justify-between px-4 py-3 border-b border-[#E4E7E9]">
              <span className="text-[13px] font-bold uppercase tracking-wide text-[#4F4F4F]">
                Characteristics
              </span>
              {selected.length > 0 && (
                <button
                  type="button"
                  onClick={onClear}
                  className="text-[11px] font-bold text-red-500 hover:text-red-700 uppercase tracking-wider"
                >
                  Clear
                </button>
              )}
            </div>
            {characteristics.map(({ label }) => (
              <label
                key={label}
                className="flex items-center gap-3 px-4 py-2.5 cursor-pointer hover:bg-[#FFF8E1] transition-colors"
              >
                <input
                  type="checkbox"
                  checked={selected.includes(label)}
                  onChange={() => onToggle(label)}
                  className="w-4 h-4 accent-[#FFC501] cursor-pointer"
                />
                <span className="text-[14px] text-[#191C1F]">{label}</span>
              </label>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
