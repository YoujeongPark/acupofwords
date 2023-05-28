'use client';
import React, { useState, useEffect, useRef } from 'react'
import { Question } from "@/components/Question";
import { NewAnswer } from "@/components/NewAnswer";
import { EvaluateToday } from "@/components/EvaluateToday";
import Image from 'next/image';
import CustomButton from "@/components/CustomButton";
import jsPDF from 'jspdf';
import { saveAs } from 'file-saver';
import html2canvas from "html2canvas";

export default function night() {
  const [themeMode, setThemeMode] = useState<string>('night');
  const [todayEmotion, setTodayEmotion] = useState<string>('')
  const divRef = useRef<any>(null);

  useEffect(() => {
    document.body.dataset.theme = 'night'
  }, [])


  const saveJpg = async () => {
    if (!divRef.current) return;
    try {
      const div = divRef.current;
      const canvas = await html2canvas(div, { scale: 1 });
      canvas.toBlob((blob) => {
        if (blob !== null) {
          saveAs(blob, `Night-${new Date()}.jpg`);
        }
      });
    } catch (error) {
      console.error("Error converting div to image:", error);
    }
  }

  const savePdf = async () => {
    if (!divRef.current) return;
    try {
      const div = divRef.current;
      const canvas = await html2canvas(div, { scale: 1 });
      const pdf = new jsPDF();
      const imgData = canvas.toDataURL('image/png');
      pdf.addImage(imgData, 'PNG', 0, 0, 170, 100);
      pdf.save(`Night-${new Date()}.pdf`);
    } catch (error) {
      console.error("Error converting div to image:", error);
    }
  }

  return (
    <div className="oveflow-y flex-column fc-dark-blue" id="capture" >
      <div className="flex-row-center">
        <div style={{ width: '80%' }} className="h-auto" >
          <div ref={divRef}>
            <Question type = "night"/>
            <NewAnswer disable={false} todayEmotion={todayEmotion} time={'저녁의 생각'} write={'| 질문의 답을 적어주세요. '} themeMode={'night'} />
          </div>
          <EvaluateToday setTodayEmotion={setTodayEmotion} todayEmotion={todayEmotion} themeMode={themeMode} />
          <div className="flex-end gap-5 mt-5">
            <CustomButton disable={false} onClick={saveJpg} imgsrc={'/jpgSave-night.svg'} style="btn-blue delay-200 flex-row-center gap-3"> JPG로 저장 </CustomButton>
            <CustomButton disable={false} onClick={savePdf} imgsrc={'/pdfSave-night.svg'} style="btn-blue delay-200 flex-row-center gap-3"> PDF로 저장 </CustomButton>
          </div>
        </div>
        <div className="ml-20">
          <Image src={`/night.gif`} className="cursor" alt="left" width={300} height={500} />
        </div>
      </div >
    </div>
  )
}

