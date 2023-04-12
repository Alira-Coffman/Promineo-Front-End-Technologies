
import React from "react";

export default class Star extends React.Component{


    render()
    {
     return(
            <icon className={`{this.props.star && bg-yello}`}
        )
    }
}