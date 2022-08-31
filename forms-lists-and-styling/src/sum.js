import React from "react";

export function Sum ({numeri=[1,1,1,1]}){
    return (
        <h1>La somma di {numeri.toString()} è: {numeri.reduce((prev,next) => prev+next)}</h1>
    )
}