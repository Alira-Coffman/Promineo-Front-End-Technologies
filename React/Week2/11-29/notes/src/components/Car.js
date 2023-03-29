//class based component called Car that displays the words hello, I am a car

import React from "react";



//type of car
export default class Car extends React.Component{

    render(){
        let make = this.props.make;
        let model = this.props.model || 'undefined';
        let year = this.props.year || '0000';
        return(<h1>Hello I am a {make} {model} {year}</h1>)
    }
}

