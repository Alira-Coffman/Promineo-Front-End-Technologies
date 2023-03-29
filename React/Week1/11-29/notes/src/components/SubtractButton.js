import React from "react";

export class SubtractButton extends React.Component {
    render() {
      return React.createElement('button', 
        { className:'btn btn-primary'}, 
        'Subtract');
    }
  }
  
export default SubtractButton;