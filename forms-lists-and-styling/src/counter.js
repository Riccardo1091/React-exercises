import { UseCounter } from "./useCounter"

export function Counter() {
    const {valore, piu, meno, reset} = UseCounter(0)

    return (
        <>
            <h1>Conteggio: {valore}</h1>
            <button onClick={piu}>+</button>
            <button onClick={meno}>-</button>
            <button onClick={reset}>Reset</button>
        </>
    )
}