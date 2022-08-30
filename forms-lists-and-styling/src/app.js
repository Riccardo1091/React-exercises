import React, { useState } from 'react'
import { Counter } from './counter'

export function App() {

    const [onOff, setOnOff] = useState(true)

    function onOffCounter() {
      setOnOff(onOff => !onOff) 
    }

    return (
        <>  
            <button onClick={onOffCounter}>On/Off Counter</button>
            {onOff && <Counter/>}
            
        </>
    )    
}
