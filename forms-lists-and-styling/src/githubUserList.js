import { useState } from "react"
import { GithubUser } from "./githubUser"

export function GithubUserList({usernames}) {
    const [utenti, setUtenti] = useState(usernames)
    
    function addUser(e) {
        e.preventDefault();
        setUtenti(prevUtenti => (
                usernames = [...prevUtenti, e.target.elements.addUser.value]
        ))
    }

    return (
        <>
            <form onSubmit={addUser}>
                {/* Non ho trovato il modo con gli hooks di ripulire l'input dopo il submit */}
                <input name="addUser" type="text"/>
                <button type="submit">Add User</button>
            </form>
            <ul>
                {utenti.map((username, index) => <li key={index}><GithubUser username={username}/></li>)}
            </ul>
        </>
    )
}