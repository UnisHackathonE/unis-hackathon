import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`

export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 450px;
  margin: auto;
  background-color: lightgray;
`

export const LoginInput = styled.input`
  width: 200px;
  height: 40px;
  border: 1px solid;
  border-radius: 4px;
  padding: 0 5px 0 5px;
  font-size: large;
`

export const StartBtn = styled.button`
  margin: 20px 0;
  background-color: #77e8ff;
  width: 100px;
  height: 40px;
  font-size: large;
`