import React from 'react'
import { ClickCounter } from './clickCounter'

export class App extends React.Component {
    render() {
        return (
            <>
                <ClickCounter initialValue={5} increment={5}/>
            </>
        )    
    } 
}
