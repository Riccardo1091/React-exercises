import React from "react";
import { CounterDisplay } from "./counterDisplay";

/*State01*/

export class Counter extends React.Component {
    //inizializzazione attraverso proprietà di classe
    // state = {
    //     count: 0
    // }

    //Component Lifecycle - 01 - se inizializziamo lo state come proprietà di classe il constructor diventa inutile
    constructor(props) {
        super(props)

        this.state = {
                    //props03
            count: this.props.initialValue
        }

        /*State02
        per aumentare il valore del counter usiamo una funzione per avere la possibilità di usare
        un parametro che sarà sempre aggiornato all'ultima versione piuttosto che un parametro definito che corre
        il rischio di non "accorgersi" di eventuali altri aggiornamenti altrove*/


        // setInterval(() => {
        //     // update come oggetto
        //     // this.setState({
        //     //     count: this.state.count + 1 
        //     // })

        //     //State05
        //     if (this.state.count >= this.props.initialValue*10) {
        //         this.setState(state => ({
        //             count: this.props.initialValue - this.props.initialValue
        //         }))
        //     }

        //     //update con callback
        //     this.setState(state => ({
        //         // props03
        //         count: state.count + this.props.increment
        //     }))
        //     //props03
        // }, this.props.interval);
    }

    //Component Lifecycle - 01
    componentDidMount() {
        // Se in Component Lifecycle 01 si sottointende che è possibile non usare il constructor
        // in quale altro posto è possibile definire "this._interval" ?
        this._interval = setInterval(() => {
            // aumenta il counter secondo il valore di incremento definito nel props
            this.setState(state => ({
                // props03
                count: state.count + this.props.increment
            }))
        }, this.props.interval)
    }

    //Component Lifecycle - 03
    componentDidUpdate() {
        // Controllare se il counter è superiore a 10 volte il valore iniziale
        if (this.state.count > this.props.initialValue*10) {
            this.setState(state => ({
                count: this.props.initialValue
            }))
        }
    }

    //Component Lifecycle - 02
    componentWillUnmount() {
        if(this._interval) {
            clearInterval(this._interval)
        }  
    }

    render() {                                                                
        return (<CounterDisplay conteggio={this.state.count} initialValue={this.props.initialValue} increment={this.props.increment} interval={this.props.interval}/>)       
        
        //props03
        // eslint-disable-next-line
        {/*<h1>{this.state.count}</h1>*/}   
    }
}