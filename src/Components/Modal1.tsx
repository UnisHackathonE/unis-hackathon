import React, {useState} from 'react';
import {
  InputWrapper, ListWrapper,
  ModalWrapper,
  MsgInput, OneSelect,
  SearchBtn,
  SendButton,
  WriterInput,
  YoutubeSearch
} from "../Style/Modal";
import YoutubeAPI from "./YoutubeAPI";
import JsonLocalStorage from "../Localstorage/JsonLocalStorage";

interface Props {
  show: boolean;
}

const Modal1 = ({show}: Props) => {

  const [writer, setWriter] = useState("");
  const [msgs, setMsgs] = useState("");
  const [searchKeyword, setSearchKeyword] = useState("");
  const [youtubeDataList, setYoutubeDataList] = useState<string[] | []>([]);
  const [showSearchResult, setShowSearchResult] = useState("none");
  const [selectId, setSelectId] = useState(""); // 선택한 video의 id
  const [recommendedList, setRecommendedList] = useState(() => {
    return JsonLocalStorage.getItem("recommendedList") || []
  });

  const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);
  };

  const handleChange2 = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMsgs(event.target.value);
  };

  const handleChange3 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(event.target.value);
  };

  async function callYoutube() {
    return await YoutubeAPI(searchKeyword);
  }

  // 검색 버튼 클릭
  const onClickSearch = () => {
    callYoutube()
        .then((res) => {
          console.log(res);
          setYoutubeDataList(res);
        })
        .catch((err) => {
          console.log(err);
        })

    setShowSearchResult("flex");
  }

  // 검색결과 중 하나 선택
  const onClickSelect = (e: any) => {
    setSearchKeyword(e.target.innerHTML);
    setSelectId(e.target.id);
    setShowSearchResult("none");
  }

  // 추천 보내기
  const onClickSend = () => {
    if(!writer || !msgs || !selectId){
      alert("내용을 입력하세요.");
      return;
    }
    const oneContent = [writer, msgs, selectId];
    const nextList: any = [...recommendedList, oneContent];
    setRecommendedList(nextList);
    JsonLocalStorage.setItem("recommendedList", nextList);
    alert("노래를 추천했습니다!");
    setWriter("");
    setMsgs("");
    setSearchKeyword("");
  }

  // 유튜브 검색 결과 리스트
  const SearchResultList = youtubeDataList.map((data) => {
    const id = "id";
    const videoId = "videoId";
    const snippetIdx = "snippet";
    const titleIdx = "title";
    const thumbnails = "thumbnails";
    // @ts-ignore
    const urlId = data[id][videoId];
    // @ts-ignore
    const title = data[snippetIdx][titleIdx];
    // @ts-ignore
    const thumbnail = data[snippetIdx][thumbnails].default.url;
    return(
        <OneSelect id={urlId} onClick={onClickSelect}>
          <img src={thumbnail} alt=""/>
          <p style={{marginTop: 0, fontSize: "small", fontWeight: "bold"}}>{title}</p>
        </OneSelect>
    )
  })

  if(!show) return null;

  return (
      <ModalWrapper style={{justifyContent: "center"}}>
        <InputWrapper>
          <label htmlFor="writer">작성자</label>
          <WriterInput id="writer" type="text" placeholder="이름" value={writer} onChange={handleChange1}/>
        </InputWrapper>
        <InputWrapper>
          <label htmlFor="msg">추천 메세지</label>
          <MsgInput id="msg" placeholder="추천 메세지" value={msgs} onChange={handleChange2}/>
        </InputWrapper>
        <div style={{margin: "10px"}}>
          <YoutubeSearch type="text" placeholder="음악 검색" value={searchKeyword} onChange={handleChange3}/>
          <SearchBtn onClick={onClickSearch}>검색</SearchBtn>
          <ListWrapper style={{display: showSearchResult}}>
            {SearchResultList}
          </ListWrapper>
        </div>
        <SendButton onClick={onClickSend}>
          추천하기
        </SendButton>
      </ModalWrapper>
  )
}

export default Modal1;