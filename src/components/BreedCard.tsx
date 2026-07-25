import React from 'react';
import Link from 'next/link';
import SafeImage from '@/components/SafeImage';

interface BreedCardProps {
  name: string;
  image: string;
  imageClassName?: string;
  href?: string;
}

const BreedCard = ({ name, image, imageClassName, href }: BreedCardProps) => {
  const slug = name.toLowerCase().replace(/\s+/g, '-');
  const linkHref = href || `/pet-categories/dogs/${slug}`;

  return (
    <div className="w-full h-[360px] sm:h-[400px] lg:h-[463px] bg-white rounded-xl border border-[#E6E6E6] flex flex-col p-3 sm:p-4 transition-all hover:shadow-md">
      <div className="w-full h-[240px] sm:h-[280px] lg:h-[341px] overflow-hidden rounded-xl flex-shrink-0 bg-[#F6F6F6]">
        <SafeImage
          src={image}
          alt={name}
          className={`w-full h-full object-cover transition-transform duration-500 hover:scale-105 ${imageClassName || ''}`}
        />
      </div>
      <div className="flex-grow flex items-center justify-center w-full">
        <h3 className="text-[16px] sm:text-[17px] lg:text-[18px] font-bold text-[#0A1D37] text-center leading-tight">{name}</h3>
      </div>
      <Link
        href={linkHref}
        className="w-full h-[38px] sm:h-[40px] lg:h-[42px] bg-[#D3D3D3] hover:bg-[#C0C0C0] text-[13px] sm:text-[14px] font-medium text-black rounded-xl transition-colors flex items-center justify-center flex-shrink-0"
      >
        View Details
      </Link>
    </div>
  );
};

export default BreedCard;
