// App.jsx
/* eslint-disable react/prop-types */  // props내 value, onClick 정의시 eslint관련 경고를 방지하기위함
import './App.css'
import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"; 
import TicTacToe from "./pages/tictactoe";
import Home from "./pages/home";
import Page3 from "./pages/props";
import Handler from "./pages/handler";
import State from "./pages/state";
import Ref from "./pages/ref";

import Header from "./components/Header";




function App() {
  const text = {
    name : "테스트",
    location : "시흥",
    arr : [1,2,3,4],
  };
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/test/tictactoe.js" element={<TicTacToe />} />
        <Route path="/test/props.js" element={<Page3 {...text} />} />
        <Route path="/test/handler.js" element={<Handler />} />
        <Route path="/test/state.js" element={<State  />} />
        <Route path="/test/ref.js" element={<Ref  />} />


        {/* 값 전달 기본적인 구조 (스프레드 연산자 사용가능) */}
        {/* <Route path="/test/test3.js" element={<Page3 name={text.name} location={text.location} arr={text.arr} />} />  */}

      </Routes>
    </BrowserRouter>
  );
}

export default App  // 컴포넌트 실행을 위한 수출 명령