import { useState } from "react"

export function UseCounter(milleBolleBlu) {
    const [valore, setValore] = useState(milleBolleBlu)

    function piu() {
        setValore(valore => valore + 1)
    }
    function meno() {
        setValore(valore => valore - 1)
    }
    function reset() {
        setValore(valore => milleBolleBlu)
    }
    return {
        valore, piu, meno, reset
    }
}