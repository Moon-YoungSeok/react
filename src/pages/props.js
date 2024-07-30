import React from "react";

export default function Page3(props) {
  console.log(props);
  return (
    <>
      <a href="https://fastcampus.co.kr/">fastcampus</a>
      <p>이름 : {props.name}</p>      
      <p>위치 : {props.location}</p>      
      <p>길이 : {props.arr.length}</p>      

    </>
  
  );
}

// 값 전달시 props 사용하면 아래와 같이 예외처리를 할 수 있음 그러나 오류나서 확인 결과 미래에 없어질 기능
// Page3.defaultProps = { 
//   name : "입력값 없음",
//   location : "위치값 없음",
//   arr: [], 
//   };