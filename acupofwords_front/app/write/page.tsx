'use client';
import React, { useState, useEffect } from 'react'
import { Question } from "@/components/Question";
import { Answer } from "@/components/Answer";
import { EvaluateToday } from "@/components/EvaluateToday";
import Image from 'next/image';

export default function memory() {


  const [themeMode, setThemeMode] = useState<string>('');

  useEffect(() => {
    if (new Date().getHours() > 4 && new Date().getHours() < 17) {
      setThemeMode('day')
      document.body.dataset.theme = 'day'
    } else {
      setThemeMode('night')
      document.body.dataset.theme = 'night'
    }
  }, [])

  return (
    <div className="oveflow-y">
      <Question />
      <div className="flex-row">
        <div style={{ width: '80%' }}>
          <Answer disable={false} time={'아침'} write={'| 질문의 답을 적어주세요. '} themeMode={themeMode} />
          <Answer disable={false} time={'저녁'} write={'| 고민 후 저녁에 다시 답을 적어주세요. '} themeMode={themeMode} />
          <EvaluateToday themeMode={themeMode} />
        </div>
        <div className="ml-20">
          <Image src={`/${themeMode}.gif`} className="cursor" alt="left" width={400} height={0} />
        </div>
      </div>
    </div>
  )
}

