import React from "react";

export class Login extends React.Component {
    state = {
        username: "",
        password: "",
        remember: false,
        login: false
    }

    handleInput = e => {
        // Perchè siamo costretti a definire name e ad usare [name] ? Name è forse un termine che utilizza react?
        const name = e.target.name
        this.setState({
        [name]: e.target.type === "checkbox" ? e.target.checked : e.target.value,
        })
    }

    onLogin = e => {
        this.setState({
            login: true
        })
    }

    render() {
        return (
            <div className="login">
                <div className="form-group">
                    <label>Username</label>
                    <input type="text" name="username" value={this.state.username} onChange={this.handleInput}/><br/>
                    <label>Password</label>
                    <input type="password" name="password" value={this.state.password} onChange={this.handleInput}/><br/>
                    <label>Remember me?</label>
                    <input type="checkbox" name="remember" value={this.state.remember} onChange={this.handleInput}/><br/><br/>
                    {this.state.username && this.state.password ? <button type="submit" name="login" value={this.state.login} onClick={this.onLogin}>Login</button> : <button type="submit" name="login" disabled>Login</button>}
                </div>
            </div>
        )
    }
}