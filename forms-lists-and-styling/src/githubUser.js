import { useEffect, useState } from "react"

export function GithubUser({username}) {
    const [utente, setUtente] = useState(username)

    useEffect(() => {
        (async () => {
            const res = await fetch(`https://api.github.com/users/${username}`)
            if (res.ok) {
                if (res.status !== 404) {
                    const data = await res.json()
                    setUtente(data) // punto chiave
                } 
                
            } else {
                alert('Utente Non trovato, Riprova')
                // L'elemento viene comunque aggiunto, da sistemare....
            }   
        })();    
    }, [username]);

    return (
        <>  
            {!utente.login ? "No Name" : <h1>{utente.login} {`- ${utente.name}`}</h1>}
            {!utente.bio ? "No Bio" : <h3>Bio: {utente.bio}</h3>}
        </>
    )
}