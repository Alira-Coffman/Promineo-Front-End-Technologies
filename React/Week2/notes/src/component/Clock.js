import React from "react"

class Clock extends React.Component{
    constructor(props)
    {
        super(props);
        this.state = {
            time : new Date().toLocaleString()
        };
    }
    tick(){
        this.setState({
            time : new Date().toLocaleString()
        })
    }
    componentDidMount(){
        this.intervalID = setInterval(() => this.tick(), 1000);

    }
    componentWillUnmount(){
        clearInterval(this.intervalID);
    }
   render()
   {
       return <p>This is the time: {this.state.time}</p>;
   }
}
export default Clock;