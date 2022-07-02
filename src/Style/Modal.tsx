import styled from "styled-components";

///////////////////// Modal1 ////////////////////////////
export const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 400px;
  border: solid;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  z-index: 2;
  background-color: white;
`

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
`

export const WriterInput = styled.input`
  width: 50%;
  padding: 5px;
`

export const MsgInput = styled.textarea`
  width: 90%;
  height: 50px;
  resize: none;
  padding: 10px;
`

export const YoutubeSearch = styled.input`
  margin: 10px 5px 0 0;
  padding: 5px;
  width: 70%;
  height: 20px;
  border: 1px solid red;
`

export const SearchBtn = styled.button`
  margin: 0 5px;
`

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 200px;
  height: 150px;
  border: 1px solid;
  overflow-y: scroll;
  position: absolute;
  z-index: 3;
`

export const OneSelect = styled.div`
  border-width: 1px 0 1px 0;
  border-style: solid;
`

export const SendButton = styled.button`
  align-self: flex-end;
  margin: 10px;
`

///////////////////////////// Modal2 //////////////////////////////
export const From = styled.div`
  align-self: center;
  margin: 10px 0;
`

export const NameBtn = styled.button`
  background-color: white;
  padding: 0;
  margin: 0;
  border: none;
  cursor: pointer;
`

export const Msg = styled.div`
  border: 1px solid;
  align-self: center;
  width: 90%;
  height: 100px;
  margin: 10px 0;
`

export const IFrame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 0;
`

export const StoreBtn = styled.button`
  width: 50%;
  margin-top: 20px;
  align-self: center;
  
`