import React, { useEffect, useState } from 'react';
import Image from 'next/image';


interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  emotion: string;
  isFavority : boolean;
}

const Memory: React.FC<ButtonProps> = ({ onClick, children, emotion, isFavority}) => {

  return (
    <div onClick={onClick} className="flex-col memory-box cursor">
      <div className="flex-row-end">
        {isFavority? <Image src={`/favority.svg`} alt={'favority'} width={15} height={15} /> : null}
      </div>
      <div>
        <div>2000 years</div>
        <div>00 Month 00 Day</div>
      </div>  
    </div>
  );
};

export default Memory;