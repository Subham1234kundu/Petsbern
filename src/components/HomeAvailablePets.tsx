"use client";

import { useEffect, useState } from "react";
import BreedCard from "@/components/BreedCard";
import { apiGet } from "@/utils/api";

type Pet = {
  id: string;
  name?: string;
  breed?: string;
  category?: string;
  main_image?: string;
};

function isBreedProfile(p: Pet) {
  return !p.name || p.name === p.breed;
}

function categoryPath(category?: string) {
  if (category === "Cat") return "cats";
  if (category === "Exotic") return "exotic-birds";
  return "dogs";
}

export default function HomeAvailablePets() {
  const [breeds, setBreeds] = useState<Pet[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const pets = await apiGet<Pet[]>("/api/pets?sort=desc");
        const map = new Map<string, Pet>();
        for (const pet of pets || []) {
          if (!pet.breed) continue;
          const key = `${pet.category || ""}::${pet.breed.trim().toLowerCase()}`;
          const existing = map.get(key);
          if (!existing) {
            map.set(key, pet);
            continue;
          }
          // Prefer breed profile image over individual pet
          if (isBreedProfile(pet) && !isBreedProfile(existing)) {
            map.set(key, pet);
          }
        }
        setBreeds(Array.from(map.values()).slice(0, 8));
      } catch (err) {
        console.error("Home available pets error:", err);
      }
      setLoading(false);
    }
    load();
  }, []);

  return (
    <div className="grid pb-[280px] sm:pb-[340px] lg:pb-[120px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-6 xl:gap-6 2xl:gap-8 justify-items-center max-w-[320px] sm:max-w-none mx-auto">
      {loading ? (
        <div className="col-span-full py-16 text-center text-gray-500">
          Loading pets…
        </div>
      ) : breeds.length > 0 ? (
        breeds.map((pet) => {
          const path = categoryPath(pet.category);
          const slug = (pet.breed || "pet").toLowerCase().replace(/\s+/g, "-");
          return (
            <div
              key={pet.id}
              className="w-full max-w-[280px] sm:max-w-[300px] lg:max-w-[280px] xl:max-w-[300px] 2xl:max-w-[320px] flex justify-center"
            >
              <BreedCard
                name={pet.breed || "Pet"}
                image={pet.main_image || "/images/labrador.png"}
                href={`/pet-categories/${path}/${slug}`}
              />
            </div>
          );
        })
      ) : (
        <div className="col-span-full py-16 text-center text-gray-500">
          No pets uploaded yet. Add breeds from the dashboard.
        </div>
      )}
    </div>
  );
}
