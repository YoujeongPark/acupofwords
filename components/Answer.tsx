import React, { useState, useEffect } from 'react'
import CustomButton from "@/components/CustomButton";
import Image from 'next/image';

export const Answer = (props : any) => {

  const [answer, setAnswer] = useState<string>("");
  const [placeHolder, setplaceHorder] = useState<string>("");
  
  const complete = () => {
    console.log('complete')
  }

  const remove = () => {
    console.log('remove')
  }

  const edit = () => {
    console.log('edit')
  }

  const favorite = () => {
    console.log('favorite')
  }


  return (
    <div className = "answer flex-column">
      <div className = "flex-row-space"> 
        <div className = "subhead" >{props.time}</div>
        <div className = "flex-row">
          <div className = "cursor"><Image src="/remove.svg" alt="Change" width={30} height={30} onClick = {remove}/></div>
          <div className = "cursor"><Image src="/edit.svg" alt="Change" width={30} height={30} onClick = {edit}/></div>
          <div className = "cursor"><Image src="/favorite.svg" alt="Change" width={30} height={30} onClick = {favorite}/></div>         
        </div>
      </div>
      <textarea rows = {4} value = {answer} placeholder = '| 질문의 답을 적어주세요. 'onChange = {(e : React.ChangeEvent<HTMLTextAreaElement>) => {setAnswer(e.target.value)}}/>     
      <div className = "flex-row-end">
      <CustomButton  onClick={complete} style = "btn-beige">완료</CustomButton>
      </div>
    </div>
  )
}
