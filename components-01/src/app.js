import React from 'react'
import { Counter } from './counter'
import { Hello } from './hello'
import { Message } from './message'
import { Welcome } from './welcome'

//components03
export class App extends React.Component {
    render() {
        return (
            <>
            <Hello/>
            {/* components08 - Abbiamo un duplicato del componente*/}
            <Hello/>
            {/* components09 - Abbiamo un duplicato del componente Messaggio all'interno del componente Hello*/}
            <Message/>
            {/*<Welcome/>*/}
            {/* props02 */}
            <Welcome name="John" age={16}/>
            {/* props03 */}
            <Counter initialValue={5} increment={5} interval={1000}/>
            </>
        )    
    } 
}