import { useEffect, useState } from "react"

export function GithubUser({username}) {
    const [utente, setUtente] = useState(username)

    useEffect(() => {
        (async () => {
            const res = await fetch(`https://api.github.com/users/${username}`)
            const data = await res.json()
            setUtente(data)
        })();    
    }, [username]);

    return (
        <>  
            {utente.login ? <h1>The username is: {utente.login}</h1> : <h1>This user doesn't exist</h1>}
            {utente.bio ? <h3>Bio: {utente.bio}</h3> : <h3>No Bio...</h3>}
        </>
    )
}