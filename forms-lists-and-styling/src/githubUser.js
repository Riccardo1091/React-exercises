import { UseGithubUser } from "./useGithubUser"

export function GithubUser({username}) {
    const {utente, error, isLoading} = UseGithubUser(username)

    return (
        <>  
            {utente && <h1>The username is: {utente.login}</h1>}
            {utente && <h3>Bio: {utente.bio}</h3>}
        </>
    )
}