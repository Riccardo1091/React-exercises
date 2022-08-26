import React from "react";
import { Welcome } from "./welcome";

export default class InteractiveWelcome extends React.Component {
    state = {
      name: ""
    }
    handleInput = e => {
        const name = e.target.name
        this.setState({
            [name]: e.target.value
        })
    }
    render() {
        return (
            <>
                <input type="text" name="name" value={this.state.name} onChange={this.handleInput} />
                <Welcome name={this.state.name}/>
            </>
        )
    }
}