import React, {useEffect, useState} from "react";
import {
  FollowerButton, NicknameButton,
  NameButton, PhotoButton, Nickname,
  ProfileButton, Follower, Number, MyListWrapper, OneWrapper, Line
} from "../Style/style";
import JsonLocalStorage from "../Localstorage/JsonLocalStorage";
import YoutubeAPI from "../Components/YoutubeAPI";
import YoutubeIframe from "../Components/YoutubeIframe";
import OneTitle from "../Components/OneTitle";


const MyPage = () => {

  const MyList = JsonLocalStorage.getItem("myList");

  const [videoTitle, setVideoTitle] = useState("");
  const [list, setList] = useState([]);


  useEffect(() => {
    let idx=1;
    const List = MyList.map((videoId: string) => {
      setVideoTitle("");
      if(idx % 5 === 0){  // 광고
        return (
            <OneWrapper>
              <div>{videoId}</div>
            </OneWrapper>
        )
      }
      callYoutube(videoId)
          .then((res) => {
            const data = res[0];    // 리스트 첫번째 요소
            const snippetIdx = "snippet";
            const titleIdx = "title";
            // @ts-ignore
            setVideoTitle(data[snippetIdx][titleIdx]);
            // videoTitle = data[snippetIdx][titleIdx];
            idx += 1;
          })
          .catch((err) => {
            return null;
          })

      return (
          <div>
            <OneWrapper>
              <YoutubeIframe id={videoId} width="90px" height="60px"/>
              <OneTitle id={videoTitle} />
            </OneWrapper>
            <Line />
          </div>
      )
    });
    setList(List);
  },[]);

  async function callYoutube(videoId: string) {
      return await YoutubeAPI(videoId);
  }


  return (
      <>
      <ProfileButton>
          <NicknameButton>
              <Nickname>
                  @happy
              </Nickname>
              <NameButton>
                  짱스파
              </NameButton>
          </NicknameButton>

          <PhotoButton src="https://assetbucketdevelopment.blob.core.windows.net/testing/3823423148494587-Female_10.jpg" alt=""></PhotoButton>
          <FollowerButton>
              <Follower>
                  팔로우
              </Follower>
              <Number>
                  5K
              </Number>
          </FollowerButton>
      </ProfileButton>
      <MyListWrapper>
          {list}
      </MyListWrapper>
      </>

  );
};

export default MyPage;