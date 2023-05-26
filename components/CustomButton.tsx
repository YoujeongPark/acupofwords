import React, {useEffect, useState} from 'react';

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  style : string;
  disable : boolean;
}

const CustomButton: React.FC<ButtonProps> = ({ onClick, children , style , disable }) => {
  
  return (
    <button onClick={onClick} disabled = {disable} className = {style}>
      {children}
    </button>
  );
};

export default CustomButton;