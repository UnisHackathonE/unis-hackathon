import React, {useState} from "react";
import {
  Wrapper, YellowStarButton, RedStarButton,
  CoralStarButton, BlueClamButton, PinkClamButton,
  OctopusButton, CoralButton, ShellButton,
  PinkStarButton, FishButton, Title, BackgroundImg, RecommendBtn
} from "../Style/style";

import YStar from "../Assets/KakaoTalk_Photo_2022-07-02-15-00-58 004.png";
import RStar from "../Assets/KakaoTalk_Photo_2022-07-02-15-00-58 005.png";
import CStar from "../Assets/KakaoTalk_Photo_2022-07-02-15-00-58 006.png";
import BClam from "../Assets/KakaoTalk_Photo_2022-07-02-15-00-59 011.png";
import PClam from "../Assets/KakaoTalk_Photo_2022-07-02-15-00-59 013.png";
import Octopus from "../Assets/KakaoTalk_Photo_2022-07-02-15-00-58 005.png";
import Coral from "../Assets/KakaoTalk_Photo_2022-07-02-15-00-58 002.png";
import Shell from "../Assets/KakaoTalk_Photo_2022-07-02-15-00-59 010.png";
import PStar from "../Assets/KakaoTalk_Photo_2022-07-02-15-00-58 003.png";
import Fish from "../Assets/KakaoTalk_Photo_2022-07-02-15-00-59 009.png";
import BeachImg from "../Assets/KakaoTalk_Photo_2022-07-02-15-00-59 007.png";
import { First, Second, Third, Fourth  } from "../Style/style";
import JsonLocalStorage from "../Localstorage/JsonLocalStorage";
import Modal2 from "../Components/Modal2";
import Modal1 from "../Components/Modal1";

const Main = () => {
  const myName = JsonLocalStorage.getItem("name");

  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [recommendedList, setRecommendedList] = useState(() => {
    return JsonLocalStorage.getItem("recommendedList") || []
  })
  const [selectedName, setSelectedName] = useState("");
  const [selectedMsg, setSelectedMsg] = useState("");
  const [selectedUrlId, setSelectedUrlId] = useState(""); // 유투브 video id
  const len = recommendedList.length;

  // 추천하기 버튼 클릭
  const onClickNewRecommend = () => {
    setShowModal1(prev => !prev);
  }

  // 조개 하나 클릭
  const onClickOne = (e: any) => {
    const targetId = parseInt(e.target.id);
    const data = JsonLocalStorage.getItem("recommendedList")[targetId];
    if(!data) {
      alert("추천 노래가 없습니다.");
      return;
    }
    setShowModal2(prev => !prev);
    setSelectedName(data[0]);
    setSelectedMsg(data[1]);
    setSelectedUrlId(data[2]);
  }

  return (
    <Wrapper>
      <BackgroundImg src={BeachImg}>
      </BackgroundImg>
      <Title>
        To. {myName}
      </Title>
      <RecommendBtn onClick={onClickNewRecommend}>
        추천하기
      </RecommendBtn>
      <Modal1 show={showModal1} /> {/*추천하기 모달*/}
      <Modal2 show={showModal2} name={selectedName} message={selectedMsg} id={selectedUrlId} /> {/*조개 하나 모달*/}
      <First>
        <YellowStarButton src={YStar} alt="" id="0" onClick={onClickOne}/>
      </First>
      <Second>
        <RedStarButton src={RStar} alt="" id="1" onClick={onClickOne}/>
        <CoralStarButton src={CStar} alt="" id="2" onClick={onClickOne}/>
      </Second>

      <Third>
        <BlueClamButton src={BClam} alt="" id="3" onClick={onClickOne}/>
        <PinkClamButton src={PClam} alt="" id="4" onClick={onClickOne}/>
        <CoralButton src={Coral} alt="" id="5" onClick={onClickOne}/>
      </Third>

      <Fourth>
        <OctopusButton src={Octopus} alt="" id="6" onClick={onClickOne}/>
        <ShellButton src={Shell} alt="" id="7" onClick={onClickOne}/>
        <PinkStarButton src={PStar} alt="" id="8" onClick={onClickOne}/>
        <FishButton src={Fish} alt="" id="9" onClick={onClickOne}/>
      </Fourth>
    </Wrapper>
  );
};

export default Main;
