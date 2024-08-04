import {useState} from "react";

export default function State() {
    const [count, setCount] = useState(0);
    const [text, setText] = useState();
    const [option, setOption] = useState();
    const [userinfo, setUserinfo] = useState({
      name : "",
      gender : "",
      brith : "",
      etc : "",
    });
    /*
    상태의 변화를 인지하고 변화를 실시간으로 업데이트 해주는 역할.

State는 변수 대신에 쓸 수 있는 데이터 저장 공간이다.

useState는 배열을 return 한다 → 첫번째 요소는 우리가 담으려는 data값, 두번쨰 요소는 데이터 값을 사용할 modifier이다.

state에 저장된 데이터에 변경이 생기면 HTML이 새로고침 없이 리렌더링된다.

따라서 자주 바뀌는 데이터는 state를 사용하고, 고정된 데이터는 일반 변수에 저장해서 사용하면 된다.
    */ 

    const onlncrease =()=>{
        setCount(count + 1);
        console.log(count);//호출시 이전의 값이나옴
        };
        const ondecrease =()=>{
            setCount(count - 1);
            console.log(count);//호출시 이전의 값이나옴

            };
            const handleOnChange = (e) => {
              let type = e.target.id;
              if(type=="numinput")
              {
                setText(e.target.value);
              }else if(type=="selectinput"){
                setOption(e.target.value);
                console.log(e.target.value);
                console.log(option);
              }else if(type=="username")
              {
                setUserinfo({
                  ...userinfo,//기존 스테이트의 값을 지정을 안하면 아래 설정된 구조로 바뀜
                  name : e.target.value
                });
                console.log(userinfo);
              }
              else if(type=="usergender")
                {
                  setUserinfo({
                    ...userinfo,
                    gender : e.target.value
                  });
                  console.log(userinfo);
                }
                else if(type=="userbirth")
                  {
                    setUserinfo({
                      ...userinfo,
                      birth : e.target.value
                    });
                    console.log(userinfo);
                  }
                };
  return (
    <>
    <div>
    <h1>State</h1>
        <div>
        <p>{count}</p>
        <button onClick={onlncrease}>+</button>
        <button onClick={ondecrease}>-</button>
        </div>
        <div>
        <input id="numinput" value={text} onChange={handleOnChange}></input>
        <p>{text}</p>
        </div>
        <div>
          <select id="selectinput" value={option} onChange={handleOnChange}>
            <option key={"l번"}>1번</option>
            <option key={"2번"}>2번</option>
            <option key={"3번"}>3번</option>
          </select>
        </div>
        <div>
        <p>이름</p>
        <input id="username" value={userinfo.name} onChange={handleOnChange}></input>
        <p>성별</p>
        <select id="usergender" value={userinfo.gender} onChange={handleOnChange}>
            <option key={"남"}>남</option>
            <option key={"여"}>여</option>
        </select>
        <p>생일</p>
        <input id="userbirth" type="date" value={userinfo.birth} onChange={handleOnChange}></input>
        </div>
    </div>
       
       
    </>
  );
}