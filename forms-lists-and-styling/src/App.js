import React from 'react'
import { CarDetails } from './CarDetails'

export class App extends React.Component {
    render() {
        return (
            <>
                <CarDetails initialValues={{model:"Tesla", year:"2021", color:"Blue"}}/>  
            </>
        )    
    } 
}
