import React from 'react'
import { SWRConfig } from 'swr'
import { GithubUser } from './githubUser'

const fetcher = async username => {
    const res = await fetch(`https://api.github.com/users/${username}`)
    if (!res.ok) {
        throw Error('Errore nel fetch')
    } else {return await res.json()}  
}

export function App() {
    return (
        <>  
            <SWRConfig value={{fetcher}}>
                <GithubUser username="riccardo1091"/>
            </SWRConfig>
        </>
    )    
}
