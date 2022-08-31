import { UseGithubUser } from "./useGithubUser"

export function GithubUser({username}) {
    const {utente, error, loading} = UseGithubUser(username)

    return (
        <>  
            {error ? "Ci sono dei problemi" : loading ? <h1>Caricamento...</h1> : <h1>The username is: {utente.login}</h1>}
            {error ? "Ci sono dei problemi" : loading ? <h1>Caricamento...</h1> : <h3>Bio: {utente.bio}</h3>}
        </>
    )
}