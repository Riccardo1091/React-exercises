import { useForm } from "./useForm"

export function FormBello() {                           // Qualora avessi molti campi?
    const {username, password, handleChange} = useForm({username:"", password:""})

    return (
        <>
            <input type="text" onChange={handleChange} value={username} name="username"/>
            <input type="password" onChange={handleChange} value={password} name="password"/>
        </>
    )
}