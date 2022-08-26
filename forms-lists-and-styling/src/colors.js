import React from "react"

export class Colors extends React.Component {
    render() {
        return(
            <ul>
                {this.props.items.map(color => <li key={color.id}>{color.name}</li>)}
            </ul>
        )
    }
}
