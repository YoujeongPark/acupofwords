'use client';
import React, { useState, useEffect } from "react";
import { GoogleLogin } from '@react-oauth/google';
import { GoogleOAuthProvider } from '@react-oauth/google';
import CustomButton from "@/components/CustomButton";
import axios from 'axios';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function Home() {

  const router = useRouter();
  const start = () => {
    setShowModal(true)
  }
  const [showModal, setShowModal] = useState(false);


  const closeLogin = () => {
    setShowModal(false);
  }

  return (
    <div className="w-full flex-row-space">
      <div style={{ 'width': '80%' }}>
        <div className="head2 fc-light-down mt-20">빠르게 변화하는 세상속에서</div>
        <div className="head1 animate-pulse fc-dark-down" >글 한컵으로</div>
        <div className="head1 animate-pulse fc-dark-down">잠시 <span className="">'나'</span>를 돌아볼 시간</div>
        {/* <br className="max-md:hidden" /> */}
        <div className="subhead mg fc-dark-down">간단한 가입으로 글쓰기 시작하세요. </div>
        {/* <CustomButton disable={false} onClick={start} style="home-btn head2 fc-white rounded py4 py8 mt-5 hover:border-l-amber-800 transition-color duration-200 delay-200"> 시작하기 </CustomButton> */}
        <div className = "mt-10">
          <CustomButton  disable={false} onClick={start} style="btn-brown delay-200"> 시작하기 </CustomButton>
        </div>
      </div>
      <div>
        <Image
          src="home.svg"
          alt="home"
          width={600 }
          height={400}
          className="object-contain"
        />
      </div>
      {showModal ? (
        <div className="bg-black">
          <div className="login-box">
            <div className="login-close" onClick={closeLogin}>&times;</div>
            <Image
              src="logo.svg"
              alt="Promptopia Logo"
              width={100}
              height={25}
              className="object-contain"
            />
            <div className="head1 fc-dark-down">A Cup of Words</div>
            <div className="head2 fc-dark-down">하루를 바꿀 단 하나의 질문!</div>
            <div className="head3 fc-light-down">한잔의 향기를 즐기며 변화를 느껴보세요.</div>
            <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || ''}>
              <GoogleLogin
                onSuccess={async (res) => {
                  const token = {
                    "idToken": res.credential
                  };
                  let url = process.env.NODE_ENV === 'development' ? '' : process.env.NEXT_PUBLIC_API_URL
                  axios.post(url + "api/members/oauth/google", {}, {
                    headers: token,
                  }).then((response: any) => {
                    if (response.status === 200) {
                      router.push('/home')
                      console.log(response.data);
                      //localStorage.setItem("id", res.data.id);
                    } else {
                      router.push('/')
                    }
                  });


                  // const response = await postOuthGoogle(token);
                  // if(response){
                  //   console.log(response)
                  //   localStorage.setItem("id", response.data.id);
                  // }

                  // Axios.post(url, token, config)
                  // .then((response : any) => {
                  //     //저는 추가적으로 정보를 받아오기 위해서 네비게이션을 사용했습니다(선택사항) / 추가정보가 필요가 없을 경우에는 회원가입 처리 후, 쿠키 전달 예정(이후 로그인된 사용자 검증을 위해 사용)
                  // 		if ( response.data.active ) {
                  //         // navigate("/board");
                  //     } else {
                  //         // navigate(
                  //         //     "/join", {
                  //         //     state : {
                  //         //         email: response.data.email,
                  //         //         name: response.data.name 
                  //         //     }}
                  //         // );    
                  //     }
                  //     
                  // })
                  // .catch((error) => {
                  //     console.error(error);
                  // });
                }}
                onError={() => {
                  console.log('Login Failed');
                }}
              />
            </GoogleOAuthProvider>
          </div>
        </div>
      ) : null}
    </div >

  )
}
