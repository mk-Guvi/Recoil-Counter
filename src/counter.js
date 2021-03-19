import React, { useState } from "react";
import { useRecoilState } from "recoil"; //to use atom as shared state,use useRecoilState
import { counterState } from "./recoil/counterState"; //to use its default value

const Counter = () => {
  // const [count,setCount]=useState(0)
  //this behaves same as use state the only differnce is its is shared state
  const [count, setCount] = useRecoilState(counterState);
  return (
    <div>
      Counter
      <button onClick={() => setCount(count + 1)}>+</button>
      {count}
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
};

export default Counter;
