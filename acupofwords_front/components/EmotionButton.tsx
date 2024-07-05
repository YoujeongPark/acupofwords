import React, {useEffect, useState} from 'react';
import Image from 'next/image';

type ButtonProps  = {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
  type : string;
  setTodayEmotion : React.Dispatch<React.SetStateAction<string>>;
}
const EmotionButton: React.FC<ButtonProps> = ({ onClick, children , type , setTodayEmotion }) => {

  const mood : any = { happy: 'Happy', peaceful: 'Peaceful', sad: 'Sad', angry: 'Angry', worry: 'Worry' };

  return (
    <button onClick={() => setTodayEmotion(type)} className="flex-row items-center gap-5 mt-3">
      <Image src={`/${type}.svg`} alt={type} width={30} height={30}/>
      {/* {mood[type]} */}
    </button>
  );
};

export default EmotionButton;