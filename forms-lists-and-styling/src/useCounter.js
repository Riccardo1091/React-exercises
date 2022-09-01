import { useCallback, useState } from "react"

export function UseCounter(milleBolleBlu) {
    const [valore, setValore] = useState(milleBolleBlu)

    const piu = useCallback(() => {
        setValore(valore => valore + 1)
      },[]
    )
    const meno = useCallback(() => {
            setValore(valore => valore - 1)
        },[]
    )
    const reset = useCallback(() => {
        setValore(milleBolleBlu)
    },[milleBolleBlu]
    )
    return {
        valore, piu, meno, reset
    }
}