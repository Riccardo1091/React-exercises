import React from "react";
import { CounterDisplay } from "./counterDisplay";

export class Counter extends React.Component {
    state = {
        count: 0
    }
    componentDidMount() {
        this._interval = setInterval(() => {
            this.setState(state => ({
                count: state.count + 1
            }))
        }, 1000)
    }
    componentWillUnmount() {
        if(this._interval) {
            clearInterval(this._interval)
        }  
    }
    render() {                                                                
        return <CounterDisplay conteggio={this.state.count}/>
    }
}