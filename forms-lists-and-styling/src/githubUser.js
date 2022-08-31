import { UseGithubUser } from "./useGithubUser"

export function GithubUser({username}) {
    const {utente} = UseGithubUser(username)

    return (
        <>  
            {utente.login ? <h1>The username is: {utente.login}</h1> : <h1>Fetching Username....</h1>}
            {utente.bio ? <h3>Bio: {utente.bio}</h3> : <h3>Fetching Bio....</h3>}
        </>
    )
}