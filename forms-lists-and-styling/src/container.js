import React from 'react'

export class Container extends React.Component {
    render() {
        return (
               <div className="container border-solid border-2 border-red-900">
                    <h1>{this.props.title}</h1>
                    <div className="content">{this.props.children}</div>
               </div>
        )    
    } 
}