import React from 'react';
import Link from 'next/link';

interface BreedCard2Props {
  name: string;
  image: string;
  age?: string;
  gender?: 'Male' | 'Female';
  isGold?: boolean;
}

const BreedCard2 = ({ 
  name, 
  image, 
  age = "16 WEEKS OLD", 
  gender = "Male", 
  isGold = true 
}: BreedCard2Props) => {
  const slug = name.toLowerCase().replace(/\s+/g, '-');
  
  return (
    <div className="w-[288px] h-[481px] bg-white rounded-[20px] border border-[#E2E8F0] p-3 flex flex-col transition-all overflow-hidden">
      {/* Image Container */}
      <div className="relative w-[256px] h-[341px] mx-auto rounded-[16px] overflow-hidden mb-4">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover"
        />
        
        {/* Gold Tag */}
        {isGold && (
          <div className="absolute top-4 right-4 w-[47px] h-[22px] bg-[#FFC107] border border-white rounded-[4px] flex items-center justify-center">
            <span className="text-white text-[10px] font-bold tracking-wider">GOLD</span>
          </div>
        )}
      </div>

      {/* Info Section */}
      <div className="px-2 flex flex-col flex-1">
        <p className="text-[#94A3B8] text-[11px] font-medium tracking-widest uppercase mb-1">
          {age}
        </p>
        
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-[#1E293B] text-[20px] font-semibold font-inter">
            {name}
          </h3>
          <span className="text-[#FFC107] text-[14px] font-medium">
            {gender}
          </span>
        </div>

        {/* Action Section */}
        <div className="mt-auto flex items-center justify-between gap-2 pb-1">
          <Link 
            href={`/pet-categories/dogs/${slug}`}
            className="w-[176px] h-[42px] bg-[#D9D9D9] hover:bg-[#CCCCCC] text-black text-[14px] font-medium rounded-[12px] flex items-center justify-center transition-colors"
          >
            View Details
          </Link>
          
          <button className="w-[44px] h-[44px] flex items-center justify-center">
            <img 
                src="/images/whatsapp.png" 
                alt="WhatsApp" 
                className="w-[40px] h-[40px] object-contain"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BreedCard2;
