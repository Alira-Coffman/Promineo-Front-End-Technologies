import React from 'react'
import carimage from '../';
//<script></script>
class Car extends React.Component{
    constructor()
    {
        super(); //inheritence
        //state
        this.state = {};
        //props
        this.props = {make: '', model: '', color:''};
    }
    render(){
        return <>
            <img src='./Automotive-Photography-Guide-1.jpg'/>
            <p>This is the car component</p>
            <p>I am a {this.props.color} {this.props.make} {this.props.model} </p>
        </>
    }
}

export default Car


