import React, { useEffect, useState } from 'react';
import Image from 'next/image';


interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

const StartMemory: React.FC<ButtonProps> = ({ onClick, children }) => {

  return (
    <div onClick={onClick} className="start-memory-box cursor">
        <div className = "flex-center">
          <Image src={`/startmemory.svg`} alt={'startmemory'} width={40} height={40} />
          <div>오늘의 글</div>
        </div>
    </div>
  );
};

export default StartMemory;