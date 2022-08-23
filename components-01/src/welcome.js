// props01
import React from "react";
import { Age } from "./age";

export class Welcome extends React.Component {
    render() {
        return (
            <>  
                {/*props02*/}
                {/*this.props.name ? <p>Welcome, {this.props.name}!</p> : <p>Welcome, stranger!</p>*/}
                                                {/*props04*/}   
                {this.props.name && <p>Welcome, <strong>{this.props.name}!</strong></p>}
                {!this.props.name && <p>Welcome, stranger!</p>}

                {/*props03*/}
                {/*this.props.age ? <p>Your age is {this.props.age}</p> : <p>How old are you?</p>*/}

                {/*props05*/}
                {this.props.age && <Age age={this.props.age}/>}

                {/*conditional rendering 01*/}
                {/*this.props.age>=18 && <Age age={this.props.age}/>*/}

                {/*conditional rendering 02*/}
                {/*this.props.age && <Age age={this.props.age}/>*/}

                {/*conditional rendering 03*/}
                {/*this.props.age>18 && this.props.age<65 && <Age age={this.props.age}/>*/}

                {/*conditional rendering 04*/}
                {/*this.props.age>18 && this.props.age<65 && this.props.name==="John" && <Age age={this.props.age}/>*/}
            </> 
        )
    }
}