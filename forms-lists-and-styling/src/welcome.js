// props01
import React from "react";

export class Welcome extends React.Component {
    render() {
        return (
            <>  <div className={this.props.className}>
                    {this.props.name ? <p>Welcome, {this.props.name}!</p> : <p>Welcome, stranger!</p>}
                </div>
            </> 
        )
    }
}