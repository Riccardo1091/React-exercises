import React from 'react'
import { Sum } from './sum'
import { Welcome }  from './welcome'

export class App extends React.Component {
    render() {
        return (
            <>
                <Welcome name="Riccardo"/> 
                <Sum numbers={[25,65,12,85]}/>
            </>
        )    
    } 
}