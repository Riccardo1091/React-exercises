import { useState } from "react"
import { Link } from "react-router-dom";

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
                <input type="text" id="first_name" className="max-w-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="addUser"/>
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Add User</button>
            </form>
            <ul>
                {/* {utenti.map((username, index) => <li key={index}><GithubUser username={username}/></li>)} */}
                {utenti.map((username, index) => <li key={index}><Link username={username} to={username}>{username}</Link></li>)}
            </ul>
        </>
    )
}