import React, { useState, useEffect } from 'react'
import ExprButton from "@/components/EmotionButton";

export const EvaluateToday = () => {

  const [question, setQuestion] = useState<string>("지금 떠오르는 행복한 기억이 뭔가요? ");


  const expression = ['happy','peaceful','sad' ,'angry' ,'worry']

  const save = () => {
    
  }

  return (
    <div className="evaluate flex-column">
      <div className="subhead" >오늘 하루를 평가해주세요.</div>
      <div className="flex-row">
      {expression.map((item: any, i: any) => (
        <ExprButton key={i} type = {item} children  ={item} onClick={save}/>
      ))}
      </div>
    </div>
  )
}
