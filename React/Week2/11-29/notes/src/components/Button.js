//class based component called button that will display 
//a button

/**
 * 1. import react
 * 2. define the class and it inhertis from React.Component
 * 3. Render & Return
 * 4. Inside the return we have html
 * 5. Make sure you export whatever you intend to import
 */

import React from "react";

export default class Button extends React.Component {
    constructor(props)
    {
        super(props); //inhert.
        this.state = {
            text: props.text
        }
    }
    changeState()
    {
        let currentText = this.state.text; //default

        this.setState({text: 'New Button'});
    }
    render(){
        let text = this.state.text;
        return(
            <button onClick={() => this.changeState()}>{text}</button>
        )
    }

}


