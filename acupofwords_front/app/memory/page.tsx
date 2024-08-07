'use client';
import Image from 'next/image';
import Memory from "@/components/Memory";
import EmotionButton from "@/components/EmotionButton";
import StartMemory from "@/components/StartMemory";
import React, {useEffect, useState} from 'react';
import { getQuestionData } from '../api/main'

export default function write() {

  const [questionData, setQuestionData] = useState<any[]>([]);
  const [todayEmotion, setTodayEmotion] = useState<string>('')
  
  const _getQuestionData = async () => {
    const response = await getQuestionData(); // type 변경 필요 
    if(response && response.status === 200){
      setQuestionData(response.data)
    }else{
      setQuestionData([])
    }
  }

  useEffect(() => {
    _getQuestionData()
  },[])

  const left = () => {

  }

  const right = () => {

  }

  const startWrite = () => {
    console.log('startWrite')
  }

  const mood = ['happy', 'peaceful', 'sad', 'angry', 'worry']


  const filter = () => {

  }

  return (
    <div>
      <div className="flex-row-center">
        <Image src="/left.svg" className= "cursor" alt="left" width={30} height={30} onClick={left} />
        <div>2023 year 5 year</div>
        <Image src="/right.svg" className= "cursor" alt="right" width={30} height={30} onClick={right} />
      </div>
      <div className="flex-row">
        <div className = "left-box oveflow-y">
          <div className = "ml-3" >Favorites</div>
          <div className = "memory-grid">
            <Memory onClick={startWrite} emotion={"emotion"} isFavority = {true}> </Memory>
          </div>
          <div className="divide" />
          <div className = "memory-grid">
            <StartMemory onClick={startWrite} > </StartMemory>
            <Memory onClick={startWrite} emotion={"emotion"} isFavority = {false}> </Memory>
            <Memory onClick={startWrite} emotion={"emotion"} isFavority = {false}> </Memory>
            <Memory onClick={startWrite} emotion={"emotion"} isFavority = {false}> </Memory>
            <Memory onClick={startWrite} emotion={"emotion"} isFavority = {false}> </Memory>
            <Memory onClick={startWrite} emotion={"emotion"} isFavority = {false}> </Memory>
          </div>
        </div>
        <div className = "divide-90" />
        <div>
          <input type="search" name="search" placeholder="   검색" rel="search" />
          <div className="mood mt-5">
            <div>Mood</div>
            {mood.map((item: any, i: any) => (
              <EmotionButton key={i} type={item} children={item} setTodayEmotion = {setTodayEmotion} onClick={filter} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
