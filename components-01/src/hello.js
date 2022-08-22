import React from "react"
import { Message } from "./message"

//components02
export class Hello extends React.Component {
    render() {
        return (
        <>
            <h1>Hello</h1>
            {/* components06 */}
            {/*<p>What a beautiful day!</p>*/}
            <Message />
        </>
        )
    }
}