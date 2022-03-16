import React from "react"

class Car extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            brand:'ford',
            model: "F150",
            color:'blue',
            year: 2020};


        // this.changeColor = this.changeColor.bind(this);
    }
    //Why did this work, but not toggle();
   changeColor = () => {
       this.setState({color:'red'})
   }
    
    render()
    {
        return (
        <> <h2> I am a {this.state.brand}!</h2>
        <p>It is a {this.state.color}</p>
        <button type='button' onClick={this.changeColor}>click!</button>
      
        </>
       
        )
    }
}
export default Car;