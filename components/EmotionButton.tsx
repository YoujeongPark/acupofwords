import React, {useEffect, useState} from 'react';
import Image from 'next/image';

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  type : string;
}

type motionObject = {
  happy : string;
  peaceful : string;
  sad : string;
  angry : string;
  worry : string;
}


const ExprButton: React.FC<ButtonProps> = ({ onClick, children , type }) => {

 const expression : any = {happy : '행복',peaceful : '평온', sad : '슬픔',angry : '화남',worry : '걱정'}

  return (
    <div onClick={onClick} className="flex-row">
      <Image src={`/${type}.svg`} alt={type} width={30} height={30}/>
      {expression[type]}
    </div>
  );
};

export default ExprButton;