import React, { useState } from "react";

export function ClickCounter({initialValue, increment}) {
    const [counter, setCounter] = useState(initialValue);

    function handleCounterClick() {
        setCounter(valorePrecedente => {
            return valorePrecedente + increment;
        })
    }

    return (
        <>  
            <h1>Click Counter</h1>
            <button onClick={handleCounterClick}>Click me</button>
            <h3>{counter}</h3>
        </>
    )

}