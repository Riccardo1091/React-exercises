import { useState, useEffect } from "react"

export function UseGithubUser(username) {
    const [utente, setUtente] = useState(username)

    useEffect(() => {
        (async () => {
            const res = await fetch(`https://api.github.com/users/${username}`)
            const data = await res.json()
            setUtente(data) // punto chiave
        })();    
    }, [username]);

    return {
        utente: utente
    }
}