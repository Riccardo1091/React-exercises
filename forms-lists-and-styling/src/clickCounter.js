import React from "react";
import { CounterButton } from "./counterButton";

export class ClickCounter extends React.Component {

    state = {
        count: this.props.initialValue
    }

    handleCounterClick = e => {
        this.setState(state => {
            return {
                count: state.count + this.props.increment
            }
        })
    }

    render() {
        return (
            <>  
                <h1>Click Counter</h1>
                <button onClick={this.handleCounterClick}>Click me</button>
                <h3>{this.state.count}</h3>

            </>
        )
    }
}