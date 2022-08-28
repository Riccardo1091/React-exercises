import React from "react";
import Button from 'react-bootstrap/button';

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
            <>  <div className="text-center w-25 container d-inline-flex p-2 flex-column justify-content-center position-absolute top-50 start-50  translate-middle">
                    <h1>Click Counter</h1>
                    <Button variant="primary mb-2" onClick={this.handleCounterClick}>Click me</Button>
                    <h3>{this.state.count}</h3>
                </div>
            </>
        )
    }
}