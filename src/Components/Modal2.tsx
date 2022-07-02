import React, {useState} from 'react';
import {CloseBtn, From, IFrame, ModalWrapper, Msg, NameBtn, StoreBtn,} from "../Style/Modal";
import YoutubeIframe from "./YoutubeIframe";
import JsonLocalStorage from "../Localstorage/JsonLocalStorage";

interface Props {
  show: boolean;
  name: string;
  message: string;
  id: string;
}

const Modal2 = ({show, name, message, id}: Props) => {

  const [myList, setMyList] = useState(() => {
    return JsonLocalStorage.getItem("myList") || []
  });

  // 작성자 이름 클릭
  const onClickWriter = (e: any) => {
    console.log(e.target.innerHTML);
    // 작성자 프로필?로 이동
  }

  // 노래 저장하기
  const onClickStore = () => {
    let nextList: any = [...myList, id];
    setMyList(nextList);
    JsonLocalStorage.setItem("myList", nextList);
    alert("노래를 저장했습니다.");
    // 광고 삽입
    if(myList.length % 5 === 0){
      const adIdx = myList.length / 5;
      const newAD: string = "광고" + adIdx.toLocaleString;
      nextList = [...myList, newAD];
      setMyList(nextList);
      JsonLocalStorage.setItem("myList", nextList);
    }
  }

  // 모달창 닫기
  const onCloseModal = (e: any) => {
    const displayTarget = e.target.closest('div');
    displayTarget.style.display = "none"; // 살짝 논리에 안맞지만 일단 임시방편..
  };


  if(!show) return null;

  return (
      <ModalWrapper>
        <CloseBtn onClick={onCloseModal}>&times;</CloseBtn>
        <From>
          <span>From. </span>
          <NameBtn onClick={onClickWriter}>{name}</NameBtn>
        </From>
        <Msg>{message}</Msg>
        <IFrame>
          <YoutubeIframe id={id} width="90%" height="150px"/>
        </IFrame>
        <StoreBtn onClick={onClickStore}>노래 저장</StoreBtn>
      </ModalWrapper>
  )
}

export default Modal2;