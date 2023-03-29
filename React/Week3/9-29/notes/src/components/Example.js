import React from "react";

class Parent extends React.Component{

    constructor(props)
    {
        super(props); //calls constructor for React
        this.changeState = this.changeState.bind(this)
    }

    changeState() {
        this.setState({
            number: 1
        })
    }

    render()
    {
        return <Child change={this.changeState}/>
    }
}

class Child extends React.Component {
    render(){
        return <button onClick ={this.props.change}></button>
    }
}


