'use client';

import React from 'react';
import Image from 'next/image'

export default function Home() {

  const start = () => {
    console.log('start')
  }
  
  return (
    <div  className="w-full flex-start flex-col">
      <div className = "text-2xl font-medium leading-9">빠르게 변화하는 세상속에서</div>
      <div className = "text-6xl font-bold mt-3 animate-pulse" >글 한컵, 그리고</div>
      <div className = "text-6xl font-bold mb-3 animate-pulse">잠시 <span className = "">'나'</span>를 돌아볼 시간</div>
      <br className="max-md:hidden" />
      <div className = "text-2xl font-medium leading-9">간단한 가입으로 글쓰기 시작하세요. </div>
      <button className = "home-btn text-white text-xl rounded py4 py8 mt-5 hover:border-l-amber-800 transition-color duration-200 delay-200" onClick = {start}>시작하기</button>
    </div >
  )
}
