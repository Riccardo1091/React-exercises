import { UseGithubUser } from "./useGithubUser"

export function GithubUser({username}) {
    const {data, error, reFetchData} = UseGithubUser(username)

    return (
        <>  
            <button onClick={reFetchData}>Re-Fetch Data</button>

            {error && <h3>C'è stato un errore...</h3>}
            {!data && !error && <h3>Caricamento...</h3>}
            
            {data && <h1>The username is: {data.login}</h1>}
            {data && <h3>Bio: {data.bio}</h3>}
        </>
    )
}