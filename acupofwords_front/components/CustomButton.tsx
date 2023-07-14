import React, {useEffect, useState} from 'react';
import Image from 'next/image';
interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  style : string;
  disable : boolean;
  imgsrc?: string; 
}

const CustomButton: React.FC<ButtonProps> = ({ onClick, children , style , disable, imgsrc }) => {
  
  return (
    <button onClick={onClick} disabled = {disable} className = {style}>
      {children} 
      {imgsrc?<Image src={imgsrc} className="cursor" alt="left" width={24} height={24} />: null}
    </button>
  );
};

export default CustomButton;