export type BreedFeaturePoint = {
  title: string;
  description: string;
  /** Horizontal position as % of image width (0–100) */
  x: number;
  /** Vertical position as % of image height (0–100) */
  y: number;
};

export type BreedFeatures = {
  image: string;
  points: BreedFeaturePoint[];
};

export const EMPTY_BREED_FEATURES: BreedFeatures = {
  image: "",
  points: [],
};
