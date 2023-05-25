'use client';
import React, { useState } from "react";
import { GoogleLogin } from '@react-oauth/google';
import { GoogleOAuthProvider } from '@react-oauth/google';
import CustomButton from "@/components/CustomButton";


export default function Home() {

  const start = () => {
    setShowModal(true)
  }
  const [showModal, setShowModal] = useState(false);

  const closeLogin = () => {
    setShowModal(false);
  }

  return (
    <div className="w-full flex-start flex-col">
      <div className="head2 fc-light-down">빠르게 변화하는 세상속에서</div>
      <div className="head1 animate-pulse fc-dark-down" >글 한컵, 그리고</div>
      <div className="head1 animate-pulse fc-dark-down">잠시 <span className="">'나'</span>를 돌아볼 시간</div>
      <br className="max-md:hidden" />
      <div className="subhead mg fc-dark-down">간단한 가입으로 글쓰기 시작하세요. </div>
      <CustomButton onClick={start} style = "home-btn head2 fc-white rounded py4 py8 mt-5 hover:border-l-amber-800 transition-color duration-200 delay-200"> 시작하기 </CustomButton>
      {/* <button className="home-btn head2 fc-white rounded py4 py8 mt-5 hover:border-l-amber-800 transition-color duration-200 delay-200" onClick={start}>시작하기</button> */}
      {showModal ? (
        <div className="bg-black">
          <div className="login-box">
            <div className="login-close" onClick={closeLogin}>&times;</div>
            <picture>
              {/* <source srcSet={Webp} type="image/webp" />
              <img className="-image" src={Svg} /> */}
            </picture>
            <div className="head1 fc-dark-down">A Cup of Words</div>
            <div className="head2 fc-dark-down">하루를 바꿀 단 하나의 질문!</div>
            <div className="head3 fc-light-down">한잔의 향기를 즐기며 변화를 느껴보세요.</div>
            <GoogleOAuthProvider clientId={process.env.REACT_APP_CLIENT_ID || ''}>
              <GoogleLogin
                onSuccess={(res) => {
                  const url = `${process.env.REACT_APP_SERVER}/api/oauth/google/members`;
                  const config = { 'content-type': 'application/json' };
                  const token = {
                    "idToken": res.credential
                  };
                  // Axios.post(url, token, config)
                  // .then((response) => {
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
                  //     localStorage.setItem("id",response.data.id);
                  // })
                  // .catch((error) => {
                  //     console.error(error);
                  // });
                }}
              // onFailure={(err : any) => {
              //     console.log(err);
              // }}
              />
            </GoogleOAuthProvider>
          </div>
        </div>
      ) : null}
    </div >

  )
}
