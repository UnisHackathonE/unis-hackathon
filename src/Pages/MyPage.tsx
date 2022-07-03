import React from "react";
import { FollowerButton, NicknameButton, 
         NameButton, PhotoButton, Nickname,
         ProfileButton, Follower, Number, StorageListBtn, MyPageTitle     
            } from "../Style/style";


const MyPage = () => {
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
        <hr></hr>
        <StorageListBtn>
        {/* mapping 함수 */}
        </StorageListBtn>
        </>

    );
};

export default MyPage;