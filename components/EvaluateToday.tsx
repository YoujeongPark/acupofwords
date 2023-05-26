import React, { useState, useEffect } from 'react'
import EmotionButton from "@/components/EmotionButton";
import CustomButton from "@/components/CustomButton";

export const EvaluateToday = (props :any) => {

  const [question, setQuestion] = useState<string>("지금 떠오르는 행복한 기억이 뭔가요? ");
  const [todayEmotion, setTodayEmotion] = useState<string>('')

  const mood = ['happy','peaceful','sad' ,'angry' ,'worry']
  const key : any = {happy : '행복',peaceful : '평온', sad : '슬픔', angry : '화남',worry : '걱정'}

  const selectEmotion = (e : any) => {
    //setTodayEmotion(e.target? e.target.getAttribute('alt') : null);
    // console.log(e.target)
  }

  const save = () => {

  }

  return (
    <div className="evaluate flex-column">
      <div className = "flex-row">
        <div className="subhead" >오늘 하루를 평가해주세요.   </div>
        <div className = "font-bold">{key[todayEmotion]}</div>
      </div>
      <div className="flex-row">
      {mood.map((item: any, i: any) => (
        <div className  ="mr-5">
          <EmotionButton key={i} type = {item} children  ={item} setTodayEmotion = {setTodayEmotion} onClick={selectEmotion}/>
        </div>
      ))}
      </div>
      <div className = "flex-row-end mt-5">
        <CustomButton disable = {false} onClick={save} style = {props.themeMode === 'day' ? "btn-beige" : "btn-light-blue"}>완료</CustomButton>
      </div>      
    </div>
  )
}
