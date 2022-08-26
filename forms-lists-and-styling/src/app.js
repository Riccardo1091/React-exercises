import React from 'react'
import { Colors } from './colors'

export class App extends React.Component {
    render() {
        return (
            <>
                <h1>Colors list 2</h1>
                <Colors items={[{id:1, name:"red"}, {id:2, name:"cyab"}, {id:3, name:"blue"}, {id:4, name:"yellow"}]}/>
            </>
        )    
    } 
}
