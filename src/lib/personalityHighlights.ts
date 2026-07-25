/** Same Personality Highlights as the dashboard add/edit pet forms. */
export const PERSONALITY_HIGHLIGHTS = [
  { label: "Apartment Friendly", name: "apartment_friendly" },
  { label: "Family Friendly", name: "family_friendly" },
  { label: "Kid Friendly", name: "kid_friendly" },
  { label: "Guard Dog", name: "guard_dog" },
  { label: "Intelligent", name: "intelligent" },
  { label: "Easy to Train", name: "easy_to_train" },
  { label: "Active / Energetic", name: "active_energetic" },
  { label: "Calm", name: "calm" },
  { label: "Sociable", name: "sociable" },
  { label: "Hypoallergenic", name: "hypoallergenic" },
  { label: "Low Shedding", name: "low_shedding" },
] as const;

export type PersonalityHighlightName =
  (typeof PERSONALITY_HIGHLIGHTS)[number]["name"];

/** Read a trait score from a pet/breed record (0–100). */
export function getHighlightValue(
  source: Record<string, unknown> | null | undefined,
  name: string,
  fallback = 60
): number {
  if (!source) return fallback;
  const raw = source[name];
  const n = Number(raw);
  if (Number.isFinite(n)) return Math.min(100, Math.max(0, n));
  return fallback;
}

/**
 * Build the highlight rows for the frontend bars.
 * Prefer breed-profile values when provided (so individual pets match the breed).
 */
export function buildPersonalityHighlights(
  pet: Record<string, unknown> | null | undefined,
  breedProfile?: Record<string, unknown> | null
) {
  const source = breedProfile || pet;
  return PERSONALITY_HIGHLIGHTS.map(({ label, name }) => ({
    label,
    name,
    value: getHighlightValue(source, name),
    color: "bg-[#FCC83C]",
  }));
}
