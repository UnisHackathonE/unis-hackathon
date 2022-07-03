import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from "./Pages/Main";
import MyPage from './Pages/MyPage';
import Start from "./Pages/Start";
import JsonLocalStorage from "./Localstorage/JsonLocalStorage";

const App = () => {
  const myName = JsonLocalStorage.getItem("name");
  return (
    <Routes>
      <Route path="/" element={<Start />} />
      <Route path="/main" element={<Main />} />
      <Route path="/mypage" element={<MyPage/>} />
    </Routes>
  )
}

export default App;
