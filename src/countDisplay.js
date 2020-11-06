import React from "react"

import {useRecoilState} from "recoil"

import {counterState} from "./recoil/counterState"

const CounterDisplay=()=>{
    const [count]=useRecoilState(counterState)
    return(
        <div>
         <p>   counter value :{count}</p>

                   </div>
    )
}

export default CounterDisplay