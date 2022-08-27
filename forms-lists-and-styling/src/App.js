import React from 'react'
import { Welcome } from './welcome'


export class App extends React.Component {
    render() {
        return (
            <>
               <Welcome className="welcome" name="Gino"/>
            </>
        )    
    } 
}
