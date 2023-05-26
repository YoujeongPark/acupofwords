'use client';
import React, { useLayoutEffect, useEffect } from "react";
import CustomButton from "@/components/CustomButton";
import { useRouter } from 'next/navigation';

export default function home() {

  const router = useRouter();

  const start = () => {
    router.push('/write')
  }

  return (
    <div>
      <div>따뜻한~</div>
      <CustomButton disable = {false} onClick={start} style="btn-beige"> 커피/차 내리기 시작하기 →  </CustomButton>
    </div>
  )
}
