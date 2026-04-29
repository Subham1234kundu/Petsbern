import React from 'react';

interface BreedCardProps {
  name: string;
  image: string;
}

const BreedCard = ({ name, image }: BreedCardProps) => {
  return (
    <div className="w-[288px] h-[463px] bg-white rounded-sm border border-[#E6E6E6] flex flex-col items-center p-4 transition-all">
      <div className="w-[256px] h-[341px] overflow-hidden rounded-md mb-4">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="text-[18px] font-bold text-[#0A1D37] mb-auto text-center">{name}</h3>
      <button className="w-full h-[48px] bg-[#D3D3D3] hover:bg-[#C0C0C0] text-[14px] font-medium text-black rounded-md transition-colors">
        View Details
      </button>
    </div>
  );
};

export default BreedCard;
