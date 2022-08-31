import React from "react";

class Car extends React.Component{
    constructor(){
        super();
        this.state = {}
        //this.props = {make: '', model: '', color:''}
    }
    render()
    {
        return <h1> I am a {this.props.make} {this.props.model} {this.props.color} car</h1>
    }
}

export default Car