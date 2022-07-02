import React, {useState} from "react";
import {
  YellowStarButton, RedStarButton,
  CoralStarButton, BlueClamButton, PinkClamButton,
  OctopusButton, CoralButton, ShellButton,
  PinkStarButton, FishButton, Title, RecommendBtn
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
import { First, Second, Third, Fourth  } from "../Style/style";
import JsonLocalStorage from "../Localstorage/JsonLocalStorage";
import Modal2 from "../Components/Modal2";
import Modal1 from "../Components/Modal1";

const Main = () => {
  const myName = JsonLocalStorage.getItem("name");

  const [showModal1, setShowModal1] = useState(false);


  const onClickNewRecommend = () => {
    setShowModal1(prev => !prev);
  }

  return (
    <>
      <Title>
        Recommen For ME
      </Title>
      <RecommendBtn onClick={onClickNewRecommend}>
        추천하기
      </RecommendBtn>
      <Modal1 show={showModal1} />
      <First>
        <YellowStarButton src={YStar} alt="" />
      </First>

      <Second>
        <RedStarButton src={RStar} alt="" />
        <CoralStarButton src={CStar} alt="" />
      </Second>

      <Third>
        <BlueClamButton src={BClam} alt="" />
        <PinkClamButton src={PClam} alt="" />
        <CoralButton src={Coral} alt="" />
      </Third>

      <Fourth>
        <OctopusButton src={Octopus} alt="" />
        <ShellButton src={Shell} alt="" />
        <PinkStarButton src={PStar} alt="" />
        <FishButton src={Fish} alt="" />
      </Fourth>
    </>
  );
};

export default Main;
