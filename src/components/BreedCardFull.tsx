import React from 'react';
import Link from 'next/link';

interface BreedCardFullProps {
  name: string;
  image: string;
  weight?: number;
  href?: string;
}

const BreedCardFull = ({ name, image, weight, href }: BreedCardFullProps) => {
  const slug = name.toLowerCase().replace(/\s+/g, '-');
  const linkHref = href || `/pet-categories/dogs/${slug}`;

  return (
    <div className="w-full h-[360px] sm:h-[400px] lg:h-[463px] bg-white rounded-xl border border-[#E6E6E6] flex flex-col p-3 sm:p-4 transition-all hover:shadow-md">
      <div className="w-full h-[240px] sm:h-[280px] lg:h-[341px] overflow-hidden rounded-xl flex-shrink-0">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="flex-grow flex flex-col items-center justify-center w-full gap-0.5">
        <h3 className="text-[18px] font-bold text-[#0A1D37] text-center leading-tight">{name}</h3>
        {weight !== undefined && weight > 0 && (
          <p className="text-[13px] text-gray-500 font-semibold font-inter">Avg. Weight: {weight} kg</p>
        )}
      </div>
      <Link
        href={linkHref}
        className="w-full h-[42px] bg-[#D3D3D3] hover:bg-[#C0C0C0] text-[14px] font-medium text-black rounded-xl transition-colors flex items-center justify-center flex-shrink-0"
      >
        View Details
      </Link>
    </div>
  );
};

export default BreedCardFull;
