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
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleCounterClick}>Click me</button>
            <h3 className="font-medium leading-tight text-3xl mt-0 mb-2 text-blue-600">{counter}</h3>
        </>
    )

}