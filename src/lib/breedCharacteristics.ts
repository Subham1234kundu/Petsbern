export type BreedCharacteristic = {
  label: string;
  matches: (pet: any) => boolean;
};

const score = (value: unknown) => Number(value) || 0;
const coatOf = (pet: any) => String(pet.coat_length || "").toLowerCase();
const breedIncludes = (pet: any, names: string[]) => {
  const breed = String(pet.breed || "").toLowerCase();
  return names.some(name => breed.includes(name));
};

// Brachycephalic (short-muzzled) breeds — not a stored field, matched by name
const FLAT_FACE_DOGS = [
  "pug", "bulldog", "shih tzu", "boxer", "pekingese", "boston terrier",
  "cavalier king charles", "lhasa apso", "brussels griffon", "japanese chin",
  "affenpinscher", "chow chow", "mastiff",
];

const FLAT_FACE_CATS = [
  "persian", "himalayan", "exotic shorthair", "british shorthair",
  "scottish fold", "burmese", "bombay", "selkirk rex",
];

const HAIRY_COATS = ["long", "medium", "curly/wire"];

export const DOG_CHARACTERISTICS: BreedCharacteristic[] = [
  { label: "Guard Dog", matches: p => score(p.guard_dog) >= 70 },
  { label: "Hyper Energy", matches: p => score(p.active_energetic) >= 70 },
  { label: "Apartment Dog", matches: p => score(p.apartment_friendly) >= 70 },
  { label: "Long Hair", matches: p => coatOf(p) === "long" },
  { label: "Social Dog", matches: p => score(p.sociable) >= 70 },
  { label: "Flat Face Dog", matches: p => breedIncludes(p, FLAT_FACE_DOGS) },
  { label: "Emotional Support", matches: p => score(p.calm) >= 70 && score(p.family_friendly) >= 70 },
  { label: "Hypoallergenic", matches: p => score(p.hypoallergenic) >= 70 },
  { label: "Service Dog", matches: p => score(p.intelligent) >= 70 && score(p.easy_to_train) >= 70 },
  { label: "Hairy Coat", matches: p => HAIRY_COATS.includes(coatOf(p)) },
  { label: "Non-Hairy Coat", matches: p => coatOf(p) === "short" || score(p.low_shedding) >= 70 },
];

export const CAT_CHARACTERISTICS: BreedCharacteristic[] = [
  { label: "First Time Cat Owner", matches: p => score(p.easy_to_train) >= 70 && score(p.calm) >= 60 },
  { label: "Apartment Cat", matches: p => score(p.apartment_friendly) >= 70 },
  { label: "Hyper Energy", matches: p => score(p.active_energetic) >= 70 },
  { label: "Calm / Lap Cat", matches: p => score(p.calm) >= 70 },
  { label: "Long Hair", matches: p => coatOf(p) === "long" },
  { label: "Social Cat", matches: p => score(p.sociable) >= 70 },
  { label: "Flat Face Cat", matches: p => breedIncludes(p, FLAT_FACE_CATS) },
  { label: "Emotional Support", matches: p => score(p.calm) >= 70 && score(p.family_friendly) >= 70 },
  { label: "Hypoallergenic", matches: p => score(p.hypoallergenic) >= 70 },
  { label: "Kid Friendly", matches: p => score(p.family_friendly) >= 70 },
  { label: "Hairy Coat", matches: p => HAIRY_COATS.includes(coatOf(p)) },
  { label: "Non-Hairy Coat", matches: p => coatOf(p) === "short" || score(p.low_shedding) >= 70 },
];

export const BIRD_CHARACTERISTICS: BreedCharacteristic[] = [
  { label: "First Time Bird Owner", matches: p => score(p.easy_to_train) >= 70 && score(p.calm) >= 60 },
  { label: "Talking Bird", matches: p => score(p.intelligent) >= 70 },
  { label: "Apartment Friendly", matches: p => score(p.apartment_friendly) >= 70 },
  { label: "Hyper Energy", matches: p => score(p.active_energetic) >= 70 },
  { label: "Quiet / Calm", matches: p => score(p.calm) >= 70 },
  { label: "Social Bird", matches: p => score(p.sociable) >= 70 },
  { label: "Emotional Support", matches: p => score(p.calm) >= 70 && score(p.family_friendly) >= 70 },
  { label: "Hypoallergenic", matches: p => score(p.hypoallergenic) >= 70 },
  { label: "Kid Friendly", matches: p => score(p.family_friendly) >= 70 },
  { label: "Easy to Train", matches: p => score(p.easy_to_train) >= 70 },
  { label: "Low Dander", matches: p => score(p.low_shedding) >= 70 },
];

/** A pet passes only when it satisfies every selected characteristic. */
export function matchesCharacteristics(
  pet: any,
  selected: string[],
  characteristics: BreedCharacteristic[]
) {
  return selected.every(label => {
    const characteristic = characteristics.find(c => c.label === label);
    return characteristic ? characteristic.matches(pet) : true;
  });
}
