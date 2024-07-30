import React from "react";

export default function handler() {
    const handleOnClick = (e) =>
    {
        console.log("핸들버튼 클릭!");
        console.log(e.target.name);

    }
  return (
    <>
        <h1>handler</h1>
        <button name="핸들러입니다~" onClick={handleOnClick}>핸들러 이벤트버튼</button>

    </>
  );
}