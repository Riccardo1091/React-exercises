import { useEffect, useState } from "react";

export function Counter() {
    const [counter, setCounter] = useState(0)

    useEffect(() => {
        let intervallo = setInterval(() => {
            setCounter(counter => counter + 1)      
        }, 1000)
        console.log('Counter ON')
    
      return () => {
        clearInterval(intervallo)
        console.log('Counter OFF')
      }
    }, [])

    return (
        <>  
            <h1>{counter}</h1>
        </>
    )
}