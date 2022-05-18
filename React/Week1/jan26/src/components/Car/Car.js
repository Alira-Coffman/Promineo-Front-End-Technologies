import React, {useState} from "react";
import './Car.css'
class Car extends React.Component{
    constructor(){
        super();
        this.state = {make:"ford", model:"ranger", color:"blue"}
    }
    changeColor = () => {
        this.state.color === 'blue' ?
             this.setState({color: "red"}) :
              this.setState({color: "blue"})
        
          
    }
    render() {
        
        return <><h2 style={{color:'green'}} className='bg'>Hi, I am a car!</h2> 
        <p className={`text-decor ${this.state.color === 'blue' ? 'blue-text' : 'red-text'}`} >
            {this.state.make} {this.state.model} {this.state.color}
            </p>
        <button onClick={this.changeColor}>click</button></>;
    }
}

export default Car
// function Car(){
   
//     const [carMake, setCarMake] = useState("ford");
//     const [carModel, setCarModel] = useState("ranger");
//     const [carColor, setCarColor] = useState("blue");

//     let changeColor = () => {
//         setCarColor("red");
//     }
//     return <><h2>Hi, I am a car!</h2> <p>{carMake} {carModel} {carColor}</p>
//      <button onClick={changeColor}>click</button>
//     </>
// }
// export default Car;
