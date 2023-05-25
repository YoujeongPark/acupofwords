'use client';
import Image from 'next/image';
import Memory from "@/components/Memory";
import EmotionButton from "@/components/EmotionButton";
import StartMemory from "@/components/StartMemory";

export default function write() {

  const left = () => {

  }

  const right = () => {

  }

  const startWrite = () => {
    console.log('startWrite')
  }

  const expression = ['happy', 'peaceful', 'sad', 'angry', 'worry']


  const filter = () => {

  }

  return (
    <div>
      <div className="flex-row-center">
        <Image src="/left.svg" className= "cursor" alt="left" width={30} height={30} onClick={left} />
        <div>2023년 5월</div>
        <Image src="/right.svg" className= "cursor" alt="right" width={30} height={30} onClick={right} />
      </div>
      <div className="flex-row">
        <div className = "left-box oveflow-y">
          <div>즐겨찾기</div>
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
            <div>그날의 무드</div>
            {expression.map((item: any, i: any) => (
              <EmotionButton key={i} type={item} children={item} onClick={filter} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
