import React, { useEffect, useRef, useState } from "react";

export function Login() {
    const [form, setForm ] = useState({
        username: "",
        password: "",
        remember: false,
        login: false
    })

    function handleInput(e) {
        // let name = e.target.name
        // let type = e.target.type
        // let value = e.target.value
        // let checked = e.target.checked
        const {name, type, value, checked} = e.target
        setForm(prevData => ({
            ...prevData,
            [name]: type === "checkbox" ? checked : value
        }))
    }

    function onLogin(e) {
        setForm(prevData => ({
            ...prevData,
            login: true
        }))
    }

    const focusRef = useRef()

    useEffect(() => {
      focusRef.current.focus()
    }, [])
    

    console.log(form)
    return (
        <div className="login">
            <div className="form-group">
                <label>Username</label>
                <input ref={focusRef} type="text" name="username" value={form.username} onChange={handleInput}/><br/>
                <label>Password</label>
                <input type="password" name="password" value={form.password} onChange={handleInput}/><br/>
                <label>Remember me?</label>
                <input type="checkbox" name="remember" checked={form.remember} onChange={handleInput}/><br/><br/>
                {form.username && form.password ? <button type="submit" name="login" value={form.login} onClick={onLogin}>Login</button> : <button type="submit" name="login" disabled>Login</button>}
            </div>
        </div>
    )
}