import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import {getData} from '../store/data'

export const Question = (props : any) => {

  const [question, setQuestion] = useState<string>('');

  const formatDate = () => {
    let d = new Date();
    let year = '' + d.getFullYear();
    let month = '' + (d.getMonth() + 1);
    let day = d.getDate();

    return year + 'year ' + month + 'month ' + day + 'day'
  }

  useEffect(() => {
    if(getData && getData.length > 0){
      const randombox = getData[rand(0, getData.length)] 
      setQuestion(randombox && randombox.answer? randombox.answer : '');
    }
  },[getData])

  const rand = (min : number, max : number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const changeQuestion = () => {
    //getData[0]//
    setQuestion(getData[rand(0, getData.length)].answer);
  }


  return (
    <div className="question items-center">
      <div className="subhead">{formatDate()}</div>
      <div className="flex-row-space items-center">
        <div className="head3">{question}</div>
        <div className="cursor">
          <Image src={`/change-${props.type}.svg`} alt="Change cursor" width={25} height={25} onClick={changeQuestion} />
        </div>
      </div>
    </div>
  )
}
