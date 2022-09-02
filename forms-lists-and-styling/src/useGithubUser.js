import useSWR from 'swr'

const fetcher = a => fetch(a).then(res => res.json())

export function UseGithubUser(username) {
    const { data, error } = useSWR(`https://api.github.com/users/${username}`, fetcher)
    return {
        utente: data,
        error,
        isLoading: !data && !error
    }
}