import {useState} from "react";

export default function State() {
    const [count, setCount] = useState(0);
    const [text, setText] = useState();

    const onlncrease =()=>{
        setCount(count + 1);
        };
        const ondecrease =()=>{
            setCount(count - 1);
            };
            const handleOnChange = (e) => {
                setText(e.target.value);
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
        <input value={text} onChange={handleOnChange}></input>
        <p>{text}</p>
        </div>
    </div>
       
       
    </>
  );
}