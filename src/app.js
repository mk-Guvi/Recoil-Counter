import React from "react"
import CounterDisplay from "./countDisplay"
import Counter from "./counter"

const App=()=>{
    return(
        <div>
            <h1>Hello Recoil</h1>
            <Counter/>
            <CounterDisplay/>
        </div>
    )
}

export default App  