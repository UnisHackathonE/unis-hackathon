import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from "./Pages/Main";
import MyPage from './Pages/MyPage';

const App = () => {
  return (
    <Routes>
      <Route path="/main" element={<Main />} />
      <Route path="/mypage" element={<MyPage/>} />
    </Routes>
  )
}

export default App;
