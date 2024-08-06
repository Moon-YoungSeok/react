import React from "react";
import { useRef, useState } from "react";

export default function Ref() {
    const [text, setText] = useState("");
    const textRef = useRef(); 
    //useRef에서 기억할 것은 이러한 current라는 키값을 지닌 프로퍼티가 생성되고, 값에 어떤 변경을 줄때도 이 current를 이용해서 한다는 점이다.
/*

State의 변화 ➡️ 렌더링 ➡️ 컴포넌트 내부 변수들 초기화
Ref의 변화 ➡️ No 렌더링 ➡️ 변수들의 값이 유지됨
State의 변화 ➡️ 렌더링 ➡️ 그래도 Ref의 값은 유지됨

✅ 변경시 렌더링을 발생시키지 말아야하는 값을 다룰때 사용한다

(변화는 감지해야하지만, 그 변화가 렌더링을 발생시키면 안될때!!)

1️⃣ 변화는 감지하지만 렌더링 발생 X ➡️  성능향상 (state는 변화시, 재렌더링됨)

2️⃣ DOM요소에 손쉽게 접근 (ref속성 사용)

3️⃣ 전생애주기를 통해 유지 (언마운트 되기전까지는 값을 계속 기억함)
*/

    /*
    참고 : https://blog.naver.com/soona809/223517465024
■ useEffect
■ useContext
■ useReducer
■ useCallback
■ useMemo
    */

    const handleOnChange = (e) => {
        setText(e.target.value);
    };
    const handleOnClick = () => {
        alert(text);
        textRef.current.value = "";//jQuery에서 특정 요소 접근할때처럼 사용
        textRef.current.focus();


    };


    return (
        <>
            <p>Ref</p>
            <div>
                <input value={text} onChange={handleOnChange} ref={textRef}></input>
                <button onClick={handleOnClick}>작성완료</button>
            </div>
        </>

    );
}