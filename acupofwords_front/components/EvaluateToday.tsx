import React, { useState, useEffect } from 'react'
import EmotionButton from "@/components/EmotionButton";
import CustomButton from "@/components/CustomButton";

export const EvaluateToday = (props: any) => {

  const [question, setQuestion] = useState<string>("What is a happy memory that comes to mind right now?");
  const [todayEmotion, setTodayEmotion] = useState<string>('');
  const [themeMode, setThemeMode] = useState<string>("");

  const mood = ['happy', 'peaceful', 'sad', 'angry', 'worry'];
  const key: any = { happy: 'Happy', peaceful: 'Peaceful', sad: 'Sad', angry: 'Angry', worry: 'Worry' };

  useEffect(() => {
    setThemeMode(props.themeMode);
  }, [props.themeMode]);

  const selectEmotion = (e: any) => {
    props.setTodayEmotion(e.target ? e.target.getAttribute('alt') : null);
  }

  return (
    <div className="evaluate flex-column">
      <div className="flex-row">
        <div className="subhead">How do you feel right now?</div>
        {/* <div className="font-bold">{key[props.todayEmotion]}</div> */}
      </div>
      <div className="flex-row">
        {mood.map((item: any, i: any) => (
          <div className="mr-5" key={i}>
            <EmotionButton type={item} children={item} setTodayEmotion={props.setTodayEmotion} onClick={selectEmotion} />
          </div>
        ))}
      </div>
    </div>
  )
}