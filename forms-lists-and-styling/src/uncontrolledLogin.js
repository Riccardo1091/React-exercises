import React, {createRef} from "react";

export default class UncontrolledLogin extends React.Component {
    _formRef = createRef()

    formSubmit = e => {
        e.preventDefault()
        const username = e.target.elements.username.value
        const password = e.target.elements.password.value
        const checked = e.target.elements.remember.checked

        console.log({
            username,
            password,
            checked
        })
    }

    handlePrefill = () => {
        this._formRef.current.elements.username.value = "Gino"
        this._formRef.current.elements.password.value = "123456"
        this._formRef.current.elements.remember.checked = true
    }

    render() {
        return (
            <div className="login">
                <h1>Uncontrolled Login</h1>
                <div className="form-group">
                    <form ref={this._formRef} onSubmit={this.formSubmit}>
                        <label>Username</label>
                        <input type="text" name="username"/><br/>
                        <label>Password</label>
                        <input type="password" name="password"/><br/>
                        <label>Remember me?</label>
                        <input type="checkbox" name="remember"/><br/><br/>
                        <button type="submit">Submit</button>
                        <button type="reset">Reset</button>
                        <button type="button" onClick={this.handlePrefill}>Prefill</button>
                    </form>
                </div>
            </div>
        )
    }
}