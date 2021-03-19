import React from "react";

import { useRecoilState, useRecoilValue } from "recoil";

import { counterState } from "./recoil/counterState";

const CounterDisplay = () => {
  //const [count]=useRecoilState(counterState)
  //since we use useRecoilValue no need to destructure the array
  const count = useRecoilValue(counterState);
  return (
    <div>
      <p> counter value :{count}</p>
    </div>
  );
};

export default CounterDisplay;
