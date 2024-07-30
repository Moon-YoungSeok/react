// App.jsx
/* eslint-disable react/prop-types */  // props내 value, onClick 정의시 eslint관련 경고를 방지하기위함
import './App.css'
import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"; 
import TicTacToe from "./pages/tictactoe";
import Home from "./pages/home";
import Page3 from "./pages/test3";
import Header from "./components/Header";




function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/test/tictactoe.js" element={<TicTacToe />} />
        <Route path="/test/test3.js" element={<Page3 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App  // 컴포넌트 실행을 위한 수출 명령