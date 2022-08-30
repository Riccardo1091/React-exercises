import React, { useState, useEffect, useCallback } from "react"

export function ClickCounter({initialValue, increment}) {
    const [counter, setCounter] = useState(initialValue)

    const onCounterChange = useCallback(() => {
        console.log(`The counter is ${counter}`)
    }, [counter])

    useEffect(() => {
        onCounterChange()
      }, [counter, onCounterChange])

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