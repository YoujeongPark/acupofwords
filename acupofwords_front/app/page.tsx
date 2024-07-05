'use client';
import React, { useState, useEffect } from "react";
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
          <div className="head2 fc-light-down mt-20">In a rapidly changing world</div>
          <div className="head1 animate-pulse fc-dark-down">With a cup of writing</div>
          <div className="head1 animate-pulse fc-dark-down">Take a moment to reflect on <span className="">'yourself'</span></div>
          <div className="subhead mg fc-dark-down">Start writing right now. </div>
          <div className="mt-10">
            <CustomButton disable={false} onClick={start} style="btn-brown delay-200"> Start </CustomButton>
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
      <div className="head1 animate-pulse fc-dark-down flex-center pdtb-50">"Write a cupful every day"</div>
      <div className="flex-row-center pdtb-50">
        <Image
          src="home-day.svg"
          alt="home"
          width={450}
          height={400}
        />
        <div>
          <div className="head2 fc-light-down">Start a vibrant day (ft. Morning Coffee)</div>
          <div className="head1 fc-dark-down">In the morning, lightly, in the flow of consciousness! </div>
          <div className="subhead fc-dark-down">Greet the new morning with a cup of morning coffee that will clear your hazy mind. While brewing coffee, look at the questions that will change your day 180 degrees, reflect, and write.</div>
        </div>
      </div>
      <div className="flex-row-center pdtb-50">
        <div>
          <div className="head2 fc-light-down">Various questions and different answers</div>
          <div className="head1 fc-dark-down">In the evening, become a more mature 'you'! </div>
          <div className="subhead fc-dark-down">Feel the warmth of tea and writing, and rejuvenate your body and mind tired from the day. Reflect on the morning's writing and record and keep the various changes in your thoughts. </div>
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
        <div className="mt-20">
          <CustomButton disable={false} onClick={start} style="btn-beige"> Start brewing coffee/tea →  </CustomButton>
        </div>
      </div>
    </div >
  )
}