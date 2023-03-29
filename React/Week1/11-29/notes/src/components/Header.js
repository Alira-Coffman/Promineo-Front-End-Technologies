import React from "react";
import '../App.css';


class Header extends React.Component {

    constructor() {
        super();
        this.state ={color: 'text-teal'}
    }
    toggleClass = () => {
        this.state.color == 'text-teal' ? this.setState({color: 'text-pink'}) :  this.setState({color: 'text-teal'})
    }
    render(){
        return <>

            <h1 className={this.state.color}>This is a header</h1>
            <button onClick={this.toggleClass}>Change Text Color</button>
        </>
    }
}

export default Header;