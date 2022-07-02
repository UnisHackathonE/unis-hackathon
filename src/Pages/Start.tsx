import React, {useEffect, useState} from 'react';
import {LoginInput, LoginWrapper, StartBtn, Wrapper} from "../Style/Start";
import {useNavigate} from "react-router-dom";
import JsonLocalStorage from "../Localstorage/JsonLocalStorage";


const Start = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");

  useEffect(() => {
    console.log(JsonLocalStorage.getItem("name"));
    if(JsonLocalStorage.getItem("name") !== null) navigate("/main");
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const onClickStart = () => {
    JsonLocalStorage.setItem("name", name);
    navigate("/main");
  }


  return (
      <Wrapper>
        <LoginWrapper>
          <p>이름을 입력해주세요!</p>
          <LoginInput value={name} onChange={handleChange}/>
          <StartBtn onClick={onClickStart}>시작하기</StartBtn>
        </LoginWrapper>
      </Wrapper>
  )
}

export default Start;