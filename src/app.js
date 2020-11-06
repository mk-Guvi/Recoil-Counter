import React from "react"
import CounterDisplay from "./countDisplay"
import Counter from "./counter"
import CounterDoubleDisplay from "./countDoubleDisplay"

const App=()=>{
    return(
        <div>
            <h1>Hello Recoil</h1>
            <Counter/>
            <CounterDisplay/>
            <CounterDoubleDisplay/>
        </div>
    )
}

export default App  