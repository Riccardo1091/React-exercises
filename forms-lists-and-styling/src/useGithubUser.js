import useSWR from 'swr'

// const fetcher = async username => {
//     const res = await fetch(username)
//     if (!res.ok) {
//         const error = new Error('Errore nel fetch').message
//         error.info = await res.json()
//         error.status = res.status
//         throw error
//     } else {return await res.json()}  
// }

export function UseGithubUser(username) {
    const { data, error, mutate } = useSWR(username ? `https://api.github.com/users/${username}`: null)
    

    function reFetchData(){
        mutate()
    }

    return {
        data, error, reFetchData
    }
}