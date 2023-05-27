import React, { useState, useEffect } from 'react'
import Image from 'next/image';

export const NewAnswer = (props : any) => {

  const [answer, setAnswer] = useState<string>("");

  return (
    <div className = "answer flex-column h-full">
      <div className = "flex-row-space"> 
        <div className = "subhead" >{props.time}</div>
        <div className = "flex-row"></div>
      </div>
      <div className = "h-full w-full">
        <textarea rows = {3} value = {answer} placeholder = {props.write} onChange = {(e : React.ChangeEvent<HTMLTextAreaElement>) => {setAnswer(e.target.value)}}/>
      </div> 
      <div className = "flex-end mt-10">
        {props.todayEmotion? <Image src={`/${props.todayEmotion}.svg`} alt="mood" width={30} height={30} /> : null}
      </div>
    </div>
  )
}
