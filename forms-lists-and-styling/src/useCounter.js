export function UseCounter(valoreIniziale=0) {
    const [valore, setValore] = UseCounter(valoreIniziale)

    function piu() {
        setValore(valore => valore + 1)
    }
    function meno() {
        setValore(valore => valore - 1)
    }
    function reset() {
        setValore(valore => valoreIniziale)
    }
    return {
        valore: valore,
        su: piu,
        giu: meno,
        reset: reset
    }
}