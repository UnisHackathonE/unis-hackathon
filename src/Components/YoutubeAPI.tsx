import axios from 'axios';
import React, {useState} from 'react';

const YoutubeAPI = async (keyword: string) => {
  const search = keyword;
  const YOUTUBE_API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
  let result: Array<string> = [];

  await axios
      .get('https://www.googleapis.com/youtube/v3/search', {
        params: {
          key: YOUTUBE_API_KEY,
          part: "snippet",
          maxResults: 50,
          q: search,
        }
      })
      .then((res) => {
        console.log("유튜브API 데이터 가져오기 성공", res.data);
        result = res.data.items;
      })
      .catch((err) => {
        console.log("유튜브API 데이터 가져오기 실패", err);
      })

  return result;
}

export default YoutubeAPI;