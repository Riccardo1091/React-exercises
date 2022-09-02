import { useEffect, useState } from "react"

export function GithubUser({username}) {
    const [utente, setUtente] = useState(username)

    useEffect(() => {
        (async () => {
            const res = await fetch(`https://api.github.com/users/${username}`)
            if (res.ok) {
                if (res.status !== 404) {
                    const data = await res.json()
                    setUtente(data)
                } 
                
            } else {
                alert('Utente Non trovato, Riprova')
            }   
        })();    
    }, [username]);

    return (
        <>  
            {!utente.login & !utente.name ? "No Name" : <h1>{utente.login} {utente.name ? `- ${utente.name}` : " "}</h1>}
            {!utente.bio ? "No Bio" : <h3>Bio: {utente.bio}</h3>}
        </>
    )
}