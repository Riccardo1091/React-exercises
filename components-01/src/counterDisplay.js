import React from "react";

/*State04*/
export class CounterDisplay extends React.Component {
    render() {
        return this.props.conteggio && <h1>{this.props.conteggio}</h1>
    }
}