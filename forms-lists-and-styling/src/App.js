import React from 'react'
import { Container } from './container'
import { Message } from './message'

export class App extends React.Component {
    render() {
        return (
            <Container title="Titolo Container">
                <Message />
            </Container>
        )    
    } 
}
