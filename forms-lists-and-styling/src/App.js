import React from 'react'
import { Colors } from './colors'

export class App extends React.Component {
    render() {
        return (
            <>
                <h1>Colors list 2</h1>
                <Colors items={["red","cyan","blue","yellow"]}/>
            </>
        )    
    } 
}
