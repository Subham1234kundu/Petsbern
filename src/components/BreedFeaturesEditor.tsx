"use client";

import { useRef } from "react";
import type { BreedFeaturePoint, BreedFeatures } from "@/types/breedFeatures";

type Props = {
  value: BreedFeatures;
  onChange: (next: BreedFeatures) => void;
  /** Called when admin picks a new features image file (parent uploads on submit) */
  onImageFileChange: (file: File | null) => void;
  imagePreview: string;
};

export default function BreedFeaturesEditor({
  value,
  onChange,
  onImageFileChange,
  imagePreview,
}: Props) {
  const imageWrapRef = useRef<HTMLDivElement>(null);

  const updatePoint = (index: number, patch: Partial<BreedFeaturePoint>) => {
    const points = value.points.map((p, i) => (i === index ? { ...p, ...patch } : p));
    onChange({ ...value, points });
  };

  const removePoint = (index: number) => {
    onChange({ ...value, points: value.points.filter((_, i) => i !== index) });
  };

  const addPoint = () => {
    onChange({
      ...value,
      points: [
        ...value.points,
        { title: "", description: "", x: 50, y: 50 },
      ],
    });
  };

  const handleImageClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imagePreview) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.round(((e.clientX - rect.left) / rect.width) * 1000) / 10;
    const y = Math.round(((e.clientY - rect.top) / rect.height) * 1000) / 10;
    onChange({
      ...value,
      points: [
        ...value.points,
        { title: `Feature ${value.points.length + 1}`, description: "", x, y },
      ],
    });
  };

  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-sm font-bold uppercase tracking-wider text-[#2B6CB0] mb-1">
          6. Breed Features Diagram
        </h2>
        <p className="text-xs text-gray-500 mb-4">
          Upload a breed photo, then click on the image to place numbered markers (Ears, Eyes, Nose…).
          These show under Personality Highlights on the breed page and every individual pet of this breed.
        </p>
      </div>

      {/* Image upload */}
      <div>
        <label className="block text-sm font-bold text-gray-700 mb-2">Features Image</label>
        <div
          className="relative border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:bg-gray-50 transition-colors cursor-pointer"
          onClick={() => document.getElementById("breedFeaturesImageInput")?.click()}
        >
          <input
            id="breedFeaturesImageInput"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => {
              const file = e.target.files?.[0] || null;
              onImageFileChange(file);
            }}
          />
          {imagePreview ? (
            <div className="flex flex-col items-center gap-3">
              <div className="relative inline-block">
                <img
                  src={imagePreview}
                  alt="Features preview"
                  className="h-36 w-auto object-contain rounded-lg shadow-sm"
                />
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onImageFileChange(null);
                    onChange({ ...value, image: "" });
                    const input = document.getElementById(
                      "breedFeaturesImageInput"
                    ) as HTMLInputElement | null;
                    if (input) input.value = "";
                  }}
                  className="absolute -top-2 -right-2 z-10 w-7 h-7 rounded-full bg-red-500 hover:bg-red-600 text-white text-lg leading-none flex items-center justify-center shadow-md"
                  aria-label="Remove features image"
                >
                  &times;
                </button>
              </div>
              <p className="text-sm text-gray-500">Click to replace features image</p>
            </div>
          ) : (
            <p className="text-sm text-gray-400 py-4">Upload the annotated-style breed photo</p>
          )}
        </div>
      </div>

      {/* Click-to-place canvas — no sky background; box hugs the photo */}
      {imagePreview && (
        <div>
          <p className="text-xs font-semibold text-gray-600 mb-2">
            Click on the image to add a numbered point
          </p>
          <div className="w-full flex justify-center">
            <div
              ref={imageWrapRef}
              onClick={handleImageClick}
              className="relative w-fit max-w-full cursor-crosshair rounded-xl overflow-hidden border border-gray-200 bg-transparent"
            >
              <img
                src={imagePreview}
                alt="Features preview"
                className="block max-w-full w-auto h-auto max-h-[min(60vh,480px)] pointer-events-none"
              />
              {value.points.map((point, index) => (
                <span
                  key={index}
                  className="absolute z-10 flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#2B6CB0] text-white text-xs sm:text-sm font-bold shadow -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                  style={{ left: `${point.x}%`, top: `${point.y}%` }}
                >
                  {index + 1}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Points editor */}
      <div className="space-y-3 sm:space-y-4">
        {value.points.map((point, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-xl p-3 sm:p-4 bg-gray-50/80 grid grid-cols-2 sm:grid-cols-12 gap-3"
          >
            <div className="col-span-2 sm:col-span-1 flex items-center sm:items-start gap-2">
              <span className="w-8 h-8 rounded-full bg-[#2B6CB0] text-white text-sm font-bold flex items-center justify-center shrink-0">
                {index + 1}
              </span>
              <button
                type="button"
                onClick={() => removePoint(index)}
                className="sm:hidden ml-auto text-xs font-bold uppercase tracking-wider text-red-500"
              >
                Remove
              </button>
            </div>
            <div className="col-span-2 sm:col-span-4">
              <label className="block text-xs font-bold text-gray-600 mb-1">Title</label>
              <input
                type="text"
                value={point.title}
                onChange={(e) => updatePoint(index, { title: e.target.value })}
                placeholder="e.g. Ears"
                className="w-full px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#2B6CB0]"
              />
            </div>
            <div className="col-span-1 sm:col-span-2">
              <label className="block text-xs font-bold text-gray-600 mb-1">X %</label>
              <input
                type="number"
                min={0}
                max={100}
                step={0.5}
                value={point.x}
                onChange={(e) => updatePoint(index, { x: Number(e.target.value) || 0 })}
                className="w-full px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#2B6CB0]"
              />
            </div>
            <div className="col-span-1 sm:col-span-2">
              <label className="block text-xs font-bold text-gray-600 mb-1">Y %</label>
              <input
                type="number"
                min={0}
                max={100}
                step={0.5}
                value={point.y}
                onChange={(e) => updatePoint(index, { y: Number(e.target.value) || 0 })}
                className="w-full px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#2B6CB0]"
              />
            </div>
            <div className="hidden sm:flex sm:col-span-3 items-end justify-end">
              <button
                type="button"
                onClick={() => removePoint(index)}
                className="text-xs font-bold uppercase tracking-wider text-red-500 hover:text-red-700 px-3 py-2"
              >
                Remove
              </button>
            </div>
            <div className="col-span-2 sm:col-span-12">
              <label className="block text-xs font-bold text-gray-600 mb-1">Description</label>
              <textarea
                rows={2}
                value={point.description}
                onChange={(e) => updatePoint(index, { description: e.target.value })}
                placeholder="Describe this feature…"
                className="w-full px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#2B6CB0] resize-none"
              />
            </div>
          </div>
        ))}

        <button
          type="button"
          onClick={addPoint}
          className="text-sm font-bold text-[#2B6CB0] hover:text-[#1A4F8A] underline underline-offset-2"
        >
          + Add feature point manually
        </button>
      </div>
    </section>
  );
}
