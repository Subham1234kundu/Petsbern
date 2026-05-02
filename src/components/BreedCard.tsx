import React from 'react';
import Link from 'next/link';

interface BreedCardProps {
  name: string;
  image: string;
}

const BreedCard = ({ name, image }: BreedCardProps) => {
  const slug = name.toLowerCase().replace(/\s+/g, '-');

  return (
    <div className="w-full h-[360px] sm:h-[400px] lg:h-[463px] bg-white rounded-xl border border-[#E6E6E6] flex flex-col p-3 sm:p-4 transition-all hover:shadow-md">
      <div className="w-full h-[240px] sm:h-[280px] lg:h-[341px] overflow-hidden rounded-xl flex-shrink-0">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="flex-grow flex items-center justify-center w-full">
        <h3 className="text-[18px] font-bold text-[#0A1D37] text-center">{name}</h3>
      </div>
      <Link
        href={`/pet-categories/dogs/${slug}`}
        className="w-full h-[42px] bg-[#D3D3D3] hover:bg-[#C0C0C0] text-[14px] font-medium text-black rounded-xl transition-colors flex items-center justify-center flex-shrink-0"
      >
        View Details
      </Link>
    </div>
  );
};

export default BreedCard;
