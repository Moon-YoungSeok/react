import React from "react";
import { useRef, useState } from "react";

export default function Sign() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
      });
    const [pwtext, setPwtext] = useState("State : 비밀번호를 확인해주세요");
    const pwinput = useRef();
    let pw_text = "일반 변수 : 비밀번호를 확인해주세요";
      const handleChange = (e) => {
        const { name, value } = e.target; // ES6 구조 분해 할당
        if(name!="password_check")
        {
            setFormData(prevState => ({
                ...prevState,
                [name]: value
              }));
        }else{
            if(value==formData.password)
            {
                console.log(value==formData.password);
                formData.password = ""; // value값 삭제는 가능하나 돔요소를 지정할 수 없어 input에 접근 불가
                pw_text = "일반변수 : 비밀번호가 일치합니다.";
                setPwtext("State : 비밀번호가 일치합니다.");
                console.log(pwinput);
            }
        }
      
       
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
      };

  return (
    <>
     <div className="sign">
      <h2>회원가입</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">사용자 이름:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">이메일:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="password">비밀번호:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <label htmlFor="password_check">비밀번호 확인:</label>
        <input
          type="password"
          id="password_check"
          name="password_check"
          onChange={handleChange}
          ref={pwinput}
          required
        />

        <p id="pw_text">
        {pw_text}
        </p>

        <p id="pwtext">
        {pwtext}
        </p>

        <button type="submit">가입하기</button>
      </form>
    </div>
    </>
  );
}