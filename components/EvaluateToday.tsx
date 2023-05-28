import React, { useState, useEffect } from 'react'
import EmotionButton from "@/components/EmotionButton";
import CustomButton from "@/components/CustomButton";

export const EvaluateToday = (props :any) => {

  const [question, setQuestion] = useState<string>("지금 떠오르는 행복한 기억이 뭔가요? ");
  const [todayEmotion, setTodayEmotion] = useState<string>('')
  const [themeMode, setThemeMode] = useState<string>("")

  const mood = ['happy','peaceful','sad' ,'angry' ,'worry']
  const key : any = {happy : '행복',peaceful : '평온', sad : '슬픔', angry : '화남',worry : '걱정'}

  useEffect(() => {
    setThemeMode(props.themeMode)
  },[props.themeMode])

  const selectEmotion = (e : any) => {
    props.setTodayEmotion(e.target? e.target.getAttribute('alt') : null);
  }


  return (
    <div className="evaluate flex-column">
      <div className = "flex-row">
        <div className="subhead" >지금의 기분은? </div>
        {/* <div className = "font-bold">{key[props.todayEmotion]}</div> */}
      </div>
      <div className="flex-row">
      {mood.map((item: any, i: any) => (
        <div className  ="mr-5">
          <EmotionButton key={i} type = {item} children  ={item} setTodayEmotion = {props.setTodayEmotion} onClick={selectEmotion}/>
        </div>
      ))}
      </div>
    </div>
  )
}
