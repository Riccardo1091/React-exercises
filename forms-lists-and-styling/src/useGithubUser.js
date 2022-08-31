import { useState, useEffect } from "react"

export function UseGithubUser(username) {
    const [utente, setUtente] = useState(username)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        (async () => {
            setLoading(true)
            const res = await fetch(`https://api.github.com/users/${username}`)
            if (!res.ok) {
                setError(true)
                setLoading(false)
            } else {
                const data = await res.json()
                setUtente(data) // punto chiave
            }
            setLoading(false)
        })()
    }, [username])

    return {
        utente, error, loading
    }
}