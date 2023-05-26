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
      <textarea rows = {3} value = {answer} placeholder = {props.write} onChange = {(e : React.ChangeEvent<HTMLTextAreaElement>) => {setAnswer(e.target.value)}}/>     
      <div className = "flex-row-end mt-3">
      <CustomButton  onClick={complete} disable = {props.disable} style = {props.themeMode === 'day' ? "btn-beige" : "btn-light-blue"}>완료</CustomButton>
      </div>
    </div>
  )
}
