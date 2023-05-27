'use client';
import React, { useState, useEffect } from 'react'
import { Question } from "@/components/Question";
import { NewAnswer } from "@/components/NewAnswer";
import { EvaluateToday } from "@/components/EvaluateToday";
import Image from 'next/image';
import CustomButton from "@/components/CustomButton";

export default function day() {
  const [themeMode, setThemeMode] = useState<string>('day');
  const [todayEmotion, setTodayEmotion] = useState<string>('')

  useEffect(() => {
    document.body.dataset.theme = 'day'
  }, [])

  useEffect(() => {
    console.log(todayEmotion)
  }, [todayEmotion])

  const saveJpg = () => {
    

  }

  const savePdf = () => {

  }

  return (
    <div className="oveflow-y">
      <Question />
      <div className="flex-row">
        <div style={{ width: '80%' }}>
          <NewAnswer disable={false} todayEmotion={todayEmotion} time={'아침의 생각'} write={'| 질문의 답을 적어주세요. '} themeMode={'day'} />
        </div>
        <div className="ml-20">
          <Image src={`/day.gif`} className="cursor" alt="left" width={300} height={500} />
        </div>
      </div >
      <div className="mt-10" style={{ width: '68%' }}>
        <EvaluateToday setTodayEmotion={setTodayEmotion} todayEmotion={todayEmotion} themeMode={themeMode} />
        <div className="flex-end gap-5 mt-5">
          <CustomButton disable={false} onClick={saveJpg} imgsrc={'/jpgSave.svg'} style="btn-beige delay-200 flex-row-center gap-3"> JPG로 저장 </CustomButton>
          <CustomButton disable={false} onClick={savePdf} imgsrc={'/pdfSave.svg'} style="btn-beige delay-200 flex-row-center gap-3"> PDF로 저장 </CustomButton>
        </div>
      </div>
    </div>
  )
}

