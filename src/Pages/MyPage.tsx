import React, {useEffect, useState} from "react";
import {
  FollowerButton, NicknameButton,
  NameButton, PhotoButton, Nickname,
  ProfileButton, Follower, Number, MyListWrapper, OneWrapper, Line, MyPageTitle, OneTitleWrapper
} from "../Style/style";
import JsonLocalStorage from "../Localstorage/JsonLocalStorage";
import YoutubeIframe from "../Components/YoutubeIframe";
import YoutubeAPI2 from "../Components/YoutubeAPI2";



const MyPage = () => {

  const MyList = JsonLocalStorage.getItem("myList");

  // const [list, setList] = useState<string[] | []>([]);
  // let list: any[] = [];


  // useEffect(() => {
  //   let idx = 1;
  //   /*MyList.map((videoId: string) => {
  //     // console.log("list: ", list);
  //     let addElement;
  //     let nextElement;
  //     if (idx % 5 === 0) {  // 광고
  //       addElement = ["AD 영상", videoId];
  //       // nextElement = [...list, addElement];
  //       list.push(addElement);
  //     }
  //     else{
  //       callYoutube(videoId)
  //           .then((res) => {
  //             const title = res;
  //             const video = <YoutubeIframe id={videoId} width="90px" height="60px"/>;
  //             addElement = [title, video];
  //             // nextElement = [...list, addElement];
  //             // console.log("addElement: ", addElement);
  //             // console.log("nextElement", nextElement);
  //             list.push(addElement);
  //             idx += 1;
  //           })
  //           .catch((err) => {
  //             return null;
  //           })
  //     }
  //     // @ts-ignore
  //     // setList(nextElement);
  //   })*/
  // }, []);


  // // 영상 제목 불러오기
  // async function callYoutube(videoId: string) {
  //     return await YoutubeAPI2(videoId);
  // }

  // const List = (() => {
  //   return (
  //       <div>
  //         <OneWrapper>
  //           <YoutubeIframe id="Zof6hhWkCU0" width="90px" height="60px"/>
  //           <OneTitleWrapper>[ᴘʟᴀʏʟɪsᴛ] 여름 냄새 가득한 음악이 흘러나오던 제주의 어느 호텔 앞에서</OneTitleWrapper>
  //         </OneWrapper>
  //         <OneWrapper>
  //           <YoutubeIframe id="QPBE9DtQI88" width="90px" height="60px"/>
  //           <OneTitleWrapper>Anne-Marie's '2002' | Blind Auditions | The Voice UK 2021</OneTitleWrapper>
  //         </OneWrapper>
  //         <OneWrapper>
  //           <YoutubeIframe id="UCrd_-o6_Tc" width="90px" height="60px"/>
  //           <OneTitleWrapper>[UNBOXING] 변송균(Byeon Song Gyun) - 사랑, 떠난 뒤에도 ｜LIFE THE SONG｜언박싱 프로젝트 EP.02</OneTitleWrapper>
  //         </OneWrapper>
  //         <OneWrapper>
  //           <YoutubeIframe id="3iM_06QeZi8" width="90px" height="60px"/>
  //           <OneTitleWrapper>[IU] '내 손을 잡아(Hold My Hand)' Live Clip (2019 IU Tour Concert 'Love, poem')</OneTitleWrapper>
  //         </OneWrapper>
  //         <OneWrapper>
  //           <OneTitleWrapper>광고</OneTitleWrapper>
  //         </OneWrapper>
  //         <OneWrapper>
  //           <YoutubeIframe id="0-q1KafFCLU" width="90px" height="60px"/>
  //           <OneTitleWrapper>[MV] IU(아이유) _ Celebrity</OneTitleWrapper>
  //         </OneWrapper>
  //       </div>
  //   )
  // });


  // @ts-ignore
  return (
      <>
       <MyPageTitle>
          MyPage  
        </MyPageTitle>
        <ProfileButton>
            <NicknameButton>
                <Nickname>
                    @happy
                </Nickname>
                <NameButton>
                    짱구
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
      <MyListWrapper>
        <div>
          <OneWrapper>
            <YoutubeIframe id="Zof6hhWkCU0" width="90px" height="60px"/>
            <OneTitleWrapper>[ᴘʟᴀʏʟɪsᴛ] 여름 냄새 가득한 음악이 흘러나오던 제주의 어느 호텔 앞에서</OneTitleWrapper>
          </OneWrapper>
          <Line/>
          <OneWrapper>
            <YoutubeIframe id="QPBE9DtQI88" width="90px" height="60px"/>
            <OneTitleWrapper>Anne-Marie's '2002' | Blind Auditions | The Voice UK 2021</OneTitleWrapper>
          </OneWrapper>
          <Line/>
          <OneWrapper>
            <YoutubeIframe id="UCrd_-o6_Tc" width="90px" height="60px"/>
            <OneTitleWrapper>[UNBOXING] 변송균(Byeon Song Gyun) - 사랑, 떠난 뒤에도 ｜LIFE THE SONG｜언박싱 프로젝트 EP.02</OneTitleWrapper>
          </OneWrapper>
          <Line/>
          <OneWrapper>
            <YoutubeIframe id="3iM_06QeZi8" width="90px" height="60px"/>
            <OneTitleWrapper>[IU] '내 손을 잡아(Hold My Hand)' Live Clip (2019 IU Tour Concert 'Love, poem')</OneTitleWrapper>
          </OneWrapper>
          <Line/>
          <OneWrapper>
            <OneTitleWrapper>광고</OneTitleWrapper>
          </OneWrapper>
          <Line/>
          <OneWrapper>
            <YoutubeIframe id="0-q1KafFCLU" width="90px" height="60px"/>
            <OneTitleWrapper>[MV] IU(아이유) _ Celebrity</OneTitleWrapper>
          </OneWrapper>
          <Line/>
        </div>
      </MyListWrapper>

      </>

  );
};

export default MyPage;