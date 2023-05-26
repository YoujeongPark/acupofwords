import React, { useState, useEffect } from 'react'
import Image from 'next/image';

export const Question = () => {

  const [question, setQuestion] = useState<string>("지금 떠오르는 행복한 기억이 뭔가요? ");

  const formatDate = () => {
    let d = new Date();
    let year = '' + d.getFullYear();
    let month = '' + (d.getMonth() + 1);
    let day = d.getDate();

    return year + '년 ' + month + '월 ' + day + '일'
  }

  const changeQuestion = () => {


  }


  return (
    <div className="question">
      <div className="subhead fc-dark-down">{formatDate()}</div>
      <div className="flex-row-space">
        <div className="head3">{question}</div>
        <div className="cursor">
          <Image src="/change.svg" alt="Change cursor" width={25} height={25} onClick={changeQuestion} />
        </div>
      </div>
    </div>
  )
}
