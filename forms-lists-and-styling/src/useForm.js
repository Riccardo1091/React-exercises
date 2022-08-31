import {useState} from "react"

export function useForm(aaa) {
    const [form, setForm] = useState(aaa)

    function handleChange(e) {
        setForm(form => ({
            ...form, [e.target.name]: e.target.value 
        }))
    }

    return {
        username: form.username,
        password: form.password,
        handleChange
    }
}