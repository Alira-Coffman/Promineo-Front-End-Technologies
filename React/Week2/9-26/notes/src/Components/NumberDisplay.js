
/**CLASS BASED COMPONENTS */

import React from "react";
import Decrement from "./Decrement";
import Increment from "./Increment";



class NumberDisplay extends React.Component{
    constructor(props)
    {
        super(props);
        // Might need for state purposes
        this.state ={
            count: this.props.count
        }
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }
    decrement(event)
    {
        console.log(event)
        let currentCount = this.state.count;
        this.setState({count:currentCount-1})
    }
    increment()
    {
        let currentCount = this.state.count;
        this.setState({count:currentCount+1})
    }
    render(){
        // setTimeout(() => {
        //     let currentCount = this.state.count;
        //     this.setState({count:currentCount+1})
        // }, 1000);
        return (<div className="d-flex">
            {/* <Decrement/> */}
            <i className="bi bi-dash-circle-fill" onClick={this.decrement}></i>
            <span>{this.state.count}</span>
            {/* <Increment /> */}
            <i className="bi bi-plus-circle-fill" onClick={this.increment}></i>
        </div>)
        
    }
}
export default NumberDisplay