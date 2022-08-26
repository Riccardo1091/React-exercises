import React from "react";

export class ClickTracker extends React.Component {

    state = {
        lastClicked: "",
    }

    clickHandler = (e) => {
        this.setState({
            lastClicked: e.target.id
        })
    }

    render() {
        return (
            <>  
                <h1>Click tracker</h1>
                {this.state.lastClicked ? <h1>Last button clicked is {this.state.lastClicked}</h1> : <h1>Click something</h1>}
                <button id="button1" onClick={this.clickHandler}>Button 1</button>
                <button id="button2" onClick={this.clickHandler}>Button 2</button>
                <button id="button3" onClick={this.clickHandler}>Button 3</button>
            </>
        )
    }
}