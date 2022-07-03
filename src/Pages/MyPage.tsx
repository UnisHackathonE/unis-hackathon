import React, {useEffect, useState} from "react";
import {
  FollowerButton, NicknameButton,
  NameButton, PhotoButton, Nickname,
  ProfileButton, Follower, Number, MyListWrapper, OneWrapper, Line, OneTitleWrapper
} from "../Style/style";
import JsonLocalStorage from "../Localstorage/JsonLocalStorage";
import YoutubeAPI from "../Components/YoutubeAPI";
import YoutubeIframe from "../Components/YoutubeIframe";
import OneTitle from "../Components/OneTitle";
import YoutubeAPI2 from "../Components/YoutubeAPI2";


const MyPage = () => {

  const MyList = JsonLocalStorage.getItem("myList");

  // const [list, setList] = useState<string[] | []>([]);
  let list: any[] = [];

  useEffect(() => {
    let idx = 1;
    MyList.map((videoId: string) => {
      // console.log("list: ", list);
      let addElement;
      let nextElement;
      if (idx % 5 === 0) {  // 광고
        addElement = ["AD 영상", videoId];
        // nextElement = [...list, addElement];
        list.push(addElement);
      }
      else{
        callYoutube(videoId)
            .then((res) => {
              const title = res;
              const video = <YoutubeIframe id={videoId} width="90px" height="60px"/>;
              addElement = [title, video];
              // nextElement = [...list, addElement];
              // console.log("addElement: ", addElement);
              // console.log("nextElement", nextElement);
              list.push(addElement);
              idx += 1;
            })
            .catch((err) => {
              return null;
            })
      }
      // @ts-ignore
      // setList(nextElement);
    })
  }, []);

  // 영상 제목 불러오기
  async function callYoutube(videoId: string) {
      return await YoutubeAPI2(videoId);
  }

  const List = list.map((data) => {
    return (
        <div>
          <OneWrapper>
            {data[1]}
            <OneTitleWrapper>{data[0]}</OneTitleWrapper>
          </OneWrapper>
        </div>
    )
  })


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
          {List}
      </MyListWrapper>
      </>

  );
};

export default MyPage;