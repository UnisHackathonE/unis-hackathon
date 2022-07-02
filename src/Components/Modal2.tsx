import React, {useState} from 'react';
import {
  From, IFrame,
  ModalWrapper, Msg, NameBtn, StoreBtn,
} from "../Style/Modal";
import YoutubeIframe from "./YoutubeIframe";

interface Props {
  show: boolean;
  url: string;
}

const Modal2 = ({show, url}: Props) => {

  // 작성자 이름 클릭
  const onClickWriter = (e: any) => {
    console.log(e.target.innerHTML);
    // 작성자 프로필?로 이동
  }

  // 노래 저장하기
  const onClickStore = () => {
    alert("노래를 저장했습니다.");
    // url 넘기기
  }


  if(!show) return null;

  return (
      <ModalWrapper>
        <From>
          <span>From. </span>
          <NameBtn onClick={onClickWriter}>{"작성자"}</NameBtn>
        </From>
        <Msg>{"작성 메시지"}</Msg>
        <IFrame>
          <YoutubeIframe url={url}/>
        </IFrame>
        <StoreBtn onClick={onClickStore}>노래 저장</StoreBtn>
      </ModalWrapper>
  )
}

export default Modal2;