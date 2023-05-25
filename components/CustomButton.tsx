import React, {useEffect, useState} from 'react';

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  style : string;
}

const CustomButton: React.FC<ButtonProps> = ({ onClick, children , style }) => {
  
  return (
    <button onClick={onClick} className = {style}>
      {children}
    </button>
  );
};

export default CustomButton;