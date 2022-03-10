import React from "react"
import './Car.css'
class Car extends React.Component{
    constructor(){
        super();
        this.state = {make: "GMC", model:"Safari", color:'blue'}
    }
    changeColor = () => {
        this.setState({color:"red"});
    }
    render(){
        let inputStyle = {
           color: this.state.color
          };
        return <div> 
            <h1>I am a 
                <span className={this.state.color === 'red' ? 'red' : 'blue'}>
                    {this.state.color}
                </span> 
                ${this.state.make} {this.state.model}
            </h1>

            <h1 style={{color:'green', fontSize: "100px"}}>I am a 
                <span className={`bg ${this.state.color === 'red' ? 'red' : 'blue'}`}>
                    {this.state.color}
                </span> 
                ${this.state.make} {this.state.model}
            </h1>
            <button onClick={this.changeColor} className="red">Click</button>

            <h1>I am a 
                <span className={`bg text-decor ${this.state.color === 'red' ? 'red' : 'blue'}`}>
                    {this.state.color}
                </span> 
                ${this.state.make} {this.state.model}
            </h1>
            <button onClick={this.changeColor} className="red">Click</button>

        </div>
       
    }

}
// function Car(){
//     return <h1>I am in the car component</h1>
// }
export default Car;