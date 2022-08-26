import React from "react";

export class CounterButton extends React.Component {
    render() {
        return <button onClick={this.props.handle}>Click me</button>
    }
}