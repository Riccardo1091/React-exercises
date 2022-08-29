import React from 'react'

export function Welcome(props) {
    return (
        <>
            {props.name ? <h1>Hello, I'm {props.name}</h1> : <h1>Hello, I'm Unknown</h1>}
        </>
    )
}