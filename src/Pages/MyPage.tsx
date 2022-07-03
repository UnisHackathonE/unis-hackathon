import React from "react";
import {
  FollowerButton, NicknameButton,
  NameButton, PhotoButton, Nickname,
  ProfileButton, Follower, Number, MyListWrapper, OneWrapper, Line, MyPageTitle, OneTitleWrapper
} from "../Style/style";
import JsonLocalStorage from "../Localstorage/JsonLocalStorage";
import YoutubeIframe from "../Components/YoutubeIframe";



const MyPage = () => {

  const myName = JsonLocalStorage.getItem("name");
  const MyList = JsonLocalStorage.getItem("myList") || [];

  let cnt = 0;
  const List = MyList.map((oneList: any[]) => {
    let boolAD = false; // 광고
    if(cnt !== 0 && cnt % 5 === 0) boolAD = true; // 광고 삽입
    cnt += 1;
    const id = oneList[0];
    const title = oneList[1];
    return (
        <div>
          {boolAD &&
              <div>
                <OneWrapper>
                  <OneTitleWrapper>광고 {(cnt-1)/5}</OneTitleWrapper>
                </OneWrapper>
                <Line />
              </div>
          }
          <OneWrapper>
            <YoutubeIframe id={id} width="90px" height="60px"/>
            <OneTitleWrapper>{title}</OneTitleWrapper>
          </OneWrapper>
          <Line />
        </div>
    )


  })


  return (
      <>
        <div>
          <MyPageTitle>
            MyPage
          </MyPageTitle>
          <ProfileButton>
            <NicknameButton>
              <Nickname>
                @happy
              </Nickname>
              <NameButton>
                {myName}
              </NameButton>
            </NicknameButton>
            <PhotoButton src="https://assetbucketdevelopment.blob.core.windows.net/testing/3823423148494587-Female_10.jpg" alt=""/>
            <FollowerButton>
              <Follower>
                팔로우
              </Follower>
              <Number>
                5K
              </Number>
            </FollowerButton>
          </ProfileButton>
        </div>
      <MyListWrapper>
        {List}
      </MyListWrapper>

      </>

  );
};

export default MyPage;