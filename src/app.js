import React from "react"
import CounterDisplay from "./countDisplay"
import Counter from "./counter"
import CounterDoubleDisplay from "./countDoubleDisplay"
import Re from "./ReusableHooks"
const App=()=>{
    return(
        <div>
            <h1>Hello Recoil</h1>
            <Counter/>
            <CounterDisplay/>
            <CounterDoubleDisplay/>
            <br/>
            <Re/>
        </div>
    )
}

export default App  