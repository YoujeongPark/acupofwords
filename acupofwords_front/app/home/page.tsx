'use client';
import React, { useLayoutEffect, useEffect } from "react";
import CustomButton from "@/components/CustomButton";
import { useRouter } from 'next/navigation';
import Image from 'next/image';


export default function home() {
  const router = useRouter();

  const start = () => {
    router.push('/write')
  }

  return (
    <div className="flex-center mt-10">
      <div className = "mt-10">
        <Image src="/start.svg" alt="start" width={700} height={400} />
      </div>
      <div className = "mt-10">
        <CustomButton disable={false} onClick={start} style="btn-beige"> Start Brewing Coffee/Tea → </CustomButton>
      </div>
    </div>
  )
}
