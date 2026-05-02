import React from 'react';
import Link from 'next/link';

interface BreedCardProps {
  name: string;
  image: string;
}

const BreedCard = ({ name, image }: BreedCardProps) => {
  const slug = name.toLowerCase().replace(/\s+/g, '-');

  return (
    <div className="w-full h-[463px] bg-white rounded-sm border border-[#E6E6E6] flex flex-col items-center p-4 transition-all hover:shadow-md">
      <div className="w-full h-[341px] overflow-hidden rounded-md mb-4">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <h3 className="text-[18px] font-bold text-[#0A1D37] mb-auto text-center">{name}</h3>
      <Link
        href={`/pet-categories/dogs/${slug}`}
        className="w-full h-[48px] bg-[#D3D3D3] hover:bg-[#C0C0C0] text-[14px] font-medium text-black rounded-md transition-colors flex items-center justify-center"
      >
        View Details
      </Link>
    </div>
  );
};

export default BreedCard;
