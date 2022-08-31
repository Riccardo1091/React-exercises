import { useForm } from "./useForm"

export function FormBello() {
    const {username, password, handle} = useForm({username:"", password:""})

    return (
        <>
            <input type="text" onChange={handle} value={username} name="username"/>
            <input type="password" onChange={handle} value={password} name="password"/>
        </>
    )
}