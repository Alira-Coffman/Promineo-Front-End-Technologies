///to display a  hard coded value of James Bond. h1, 
//name it User
import React from "react";
class User extends React.Component{
    constructor() {
        super();

        //prop
        this.props = {firstName: 'default fn', lastName: 'default ln'}
    }
    render() {
       return <h1>{this.props.firstName} {this.props.lastName}</h1> 
    }
}

export default User;