'use client';
import React, {useState, useEffect} from 'react'
import {Question} from "@/components/Question";
import {Answer} from "@/components/Answer";
import {EvaluateToday} from "@/components/EvaluateToday";

export default function memory() {



  return (
    <div className = "oveflow-y">
      <Question/>
      <div className = "flex-row">
        <div style = {{width : '80%'}}>
          <Answer time = {'아침'} />
          <Answer time = {'저녁'} />
          <EvaluateToday/>     
        </div>
        <div>
          일러스트
        </div>
      </div>
    </div>   
  )
}

