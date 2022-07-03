import React from 'react';
import axios from "axios";


const YoutubeAPI2 = async (id: string) => {
  const videoId = id;
  const YOUTUBE_API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

  // 영상제목, 채널제목, 썸네일, 재생시간
  let title;

  // title, channelTitle, thumbnail
  await axios
      .get('https://www.googleapis.com/youtube/v3/videos', {
        params: {
          key: YOUTUBE_API_KEY,
          part: "snippet",
          id: videoId,
        }
      })
      .then((res) => {
        const data = res.data.items[0]["snippet"];
        title = data.title;
        // console.log("👍유튜브 영상제목 가져오기 성공");
      })
      .catch((err) => {
        // console.log("🧨유튜브 영상제목 가져오기 실패", err);
      })


  return title;
};

export default YoutubeAPI2;