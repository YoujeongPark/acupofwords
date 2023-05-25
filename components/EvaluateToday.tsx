import React, { useState, useEffect } from 'react'
import EmotionButton from "@/components/EmotionButton";
import CustomButton from "@/components/CustomButton";

export const EvaluateToday = () => {

  const [question, setQuestion] = useState<string>("지금 떠오르는 행복한 기억이 뭔가요? ");
  const [todayEmotion, setTodayEmotion] = useState<string>('')

  const expression = ['happy','peaceful','sad' ,'angry' ,'worry']

  const selectEmotion = (e : React.MouseEvent<HTMLElement>) => {
    console.log(e.target)
  }

  const save = () => {

  }

  return (
    <div className="evaluate flex-column">
      <div className = "flex-row">
        <div className="subhead" >오늘 하루를 평가해주세요.</div>
        <div>{todayEmotion}</div>
      </div>
      <div className="flex-row">
      {expression.map((item: any, i: any) => (
        <div className  ="mr-5"><EmotionButton key={i} type = {item} children  ={item} onClick={selectEmotion}/></div>
      ))}
      </div>
      <div className = "flex-row-end mt-5">
        <CustomButton onClick={save} style="btn-beige">완료</CustomButton>
      </div>      
    </div>
  )
}
