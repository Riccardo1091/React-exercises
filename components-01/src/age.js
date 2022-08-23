import React from "react"

// eslint-disable-next-line
{/*props05*/}

export class Age extends React.Component {
    render() {
        return (
            <>
                {/*this.props.age && <p>Your age is {this.props.age}</p>*/}

                {/*conditional rendering 05*/}
                {this.props.age>=18 && <p>Your age is {this.props.age}</p>}
                {this.props.age<18 && <p>{this.props.age}?! You are very young!</p>}
            </>
        )
    }
}