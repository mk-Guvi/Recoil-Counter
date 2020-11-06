import React from "react"

import {useRecoilState} from "recoil"

import {counterDoubleSelector} from "./recoil/counterState"

const CounterDoubleDisplay=()=>{
    const [count]=useRecoilState(counterDoubleSelector)
    return(
        
        <div>
            <p>count value:{count}</p>
        </div>
    )
}

export default CounterDoubleDisplay