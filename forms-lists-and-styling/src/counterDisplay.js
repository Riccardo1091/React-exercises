import React from "react";

/*State04*/
export class CounterDisplay extends React.Component {
    render() {
        let stile = {
            backgroundColor: "red",
            color: "white",
            padding: "1rem"
        }
        return this.props.conteggio && <h1 style={stile}>{this.props.conteggio}</h1>
    }
}