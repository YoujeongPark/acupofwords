'use client';
import React, { useState, useEffect } from 'react'
import { Question } from "@/components/Question";
import { NewAnswer } from "@/components/NewAnswer";
import { EvaluateToday } from "@/components/EvaluateToday";
import Image from 'next/image';

export default function memory() {
  const [themeMode, setThemeMode] = useState<string>('');
  const [todayEmotion, setTodayEmotion] = useState<string>('night')

  useEffect(() => {
    document.body.dataset.theme = 'night'
  }, [])

  useEffect(() => {
    console.log(todayEmotion)
  },[todayEmotion])


  return (
    <div className="oveflow-y">
      <Question />
      <div className="flex-row">
        <div style={{ width: '80%' }}>
          <NewAnswer disable={false} todayEmotion = {todayEmotion} time={'저녁의 생각'} write={'| 질문의 답을 적어주세요. '} themeMode={'night'} />
        </div>
        <div className="ml-20">
          <Image src={`/night.gif`} className="cursor" alt="left" width={300} height={500} />
        </div>
      </div >
      <div className = "mt-10" style={{ width: '80%' }}>     
         <EvaluateToday setTodayEmotion  ={setTodayEmotion} todayEmotion = {todayEmotion} themeMode={themeMode} />
      </div>
    </div>
  )
}

