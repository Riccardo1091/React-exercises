import { useEffect, useState } from "react"

export function GithubUser({username}) {
    const [utente, setUtente] = useState(username)

    useEffect(() => {
        (async () => {
            const res = await fetch(`https://api.github.com/users/${username}`)
            const data = await res.json()
            setUtente(data) // punto chiave
        })();    
    }, [username]);

    return (
        <>  
            {utente.login ? <h1>The username is: {utente.login}</h1> : <h1>Fetching Username....</h1>}
            {utente.bio ? <h3>Bio: {utente.bio}</h3> : <h3>Fetching Bio....</h3>}
        </>
    )
}