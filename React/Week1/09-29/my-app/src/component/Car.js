import React from "react";
import './Car.css'
export class Car extends React.Component{
    constructor()
    {
        super(); //inheritence
        this.state = {make: "GMC", model: 'Safari', year: "2002", color:'red'}
    }
    changeColor = () =>
    {
        this.state.color === 'red' ?
            this.setState({color: 'blue'}) :
            this.setState({color: 'red'});
    }
    render()
    {
        return <>
        <h1 className={`${this.state.color === 'blue' ? 'blue' : 'red'}`}>This is a {this.state.make} {this.state.model} {this.state.year}!</h1>
        <button onClick={this.changeColor}>change color</button>
        </>
    }
}