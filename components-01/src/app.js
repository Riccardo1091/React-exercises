import React from 'react'
import { Hello } from './hello'
import { Message } from './message'

//components03
export class App extends React.Component {
    render() {
        return (
            <>
            <Hello/>
            {/* components08 - Abbiamo un duplicato del componente*/}
            <Hello/>
            {/* components09 - Abbiamo un duplicato del componente Messaggio*/}
            <Message/>
            </>
        )    
    } 
}