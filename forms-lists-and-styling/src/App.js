import React from 'react'
import { ClickCounter } from './clickCounter'
import 'bootstrap/dist/css/bootstrap.min.css';

export class App extends React.Component {
    render() {
        return (
            <>
            	<ClickCounter initialValue={5} increment={5}/>
            </>
        )    
    } 
}
