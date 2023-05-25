import React, {useEffect, useState} from 'react';
import Image from 'next/image';

interface ButtonProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
  type : string;
}
const EmotionButton: React.FC<ButtonProps> = ({ onClick, children , type }) => {

  const expression : any = {happy : '행복',peaceful : '평온', sad : '슬픔', angry : '화남',worry : '걱정'}

  return (
    <button onClick={onClick} className="flex-row items-center gap-5 mt-5">
      <Image src={`/${type}.svg`} alt={type} width={30} height={30}/>
      {expression[type]}
    </button>
  );
};

export default EmotionButton;