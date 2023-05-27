'use client';
import React, { useState, useEffect } from "react";
import { GoogleLogin } from '@react-oauth/google';
import { GoogleOAuthProvider } from '@react-oauth/google';
import CustomButton from "@/components/CustomButton";
import axios from 'axios';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function Home() {
  const router = useRouter();

  const start = () => {
    router.push('/day')
  }

  return (
    <div className="w-full flex-column">
      <div className="flex-row-space">
        <div style={{ 'width': '80%' }}>
          <div className="head2 fc-light-down mt-20">빠르게 변화하는 세상속에서</div>
          <div className="head1 animate-pulse fc-dark-down" >글 한컵으로</div>
          <div className="head1 animate-pulse fc-dark-down">잠시 <span className="">'나'</span>를 돌아볼 시간</div>
          <div className="subhead mg fc-dark-down">간단한 가입으로 글쓰기 시작하세요. </div>
          <div className="mt-10">
            <CustomButton disable={false} onClick={start} style="btn-brown delay-200"> 시작하기 </CustomButton>
          </div>
        </div>
        <div>
          <Image
            src="home.svg"
            alt="home"
            width={600}
            height={400}
            className="object-contain"
          />
        </div>
      </div>
      <div className="head1 animate-pulse fc-dark-down flex-center pdtb-50" >"하루에 한컵량의 글을 써봐요"</div>
      <div className="flex-row-center pdtb-50">
        <Image
          src="home-day.svg"
          alt="home"
          width={450}
          height={400}
        />
        <div>
          <div className="head2 fc-light-down">활기찬 하루의 시작(ft. 모닝커피)</div>
          <div className="head1 fc-dark-down">아침에는 가볍게, 의식의 흐름대로! </div>
          <div className="subhead fc-dark-down">새로운 아침을 맞이하며 흐릿한 정신을 맑게 해줄 모닝 커피 한 잔. 커피를 내리는 동안 하루를 180도 변화시켜줄 질문을 보고 사색하며 글을 작성해보세요.</div>
        </div>
      </div>
      <div className="flex-row-center pdtb-50">
        <div>
          <div className="head2 fc-light-down">같은 질문, but 색다른 답</div>
          <div className="head1 fc-dark-down">저녁에는 한층 더 성장한 ‘나’로! </div>
          <div className="subhead fc-dark-down">따뜻한 차와 글의 온기를 느끼며 온종일 지친 몸과 마음을 회복시켜주세요. 아침의 질문을 되새기며 새로운 시점을 발견하고 생각의 변화를 기록하고 소장해보세요. </div>
        </div>
        <Image
          src="home-night.svg"
          alt="home"
          width={450}
          height={400}
        />
      </div>
      <div className="flex-center mt-10">
        <div className="mt-10">
          <Image src="/start.svg" alt="start" width={500} height={500} />
        </div>
        <div className="mt-10">
          <CustomButton disable={false} onClick={start} style="btn-beige"> 커피/차 내리기 시작하기 →  </CustomButton>
        </div>
      </div>
    </div >
  )
}
