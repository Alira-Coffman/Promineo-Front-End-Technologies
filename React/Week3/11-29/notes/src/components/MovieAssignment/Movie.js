
import React from "react";

export default class Movie extends React.Component{

//a component that represents movie data (i.e. image, synopsis, rating, etc…)
    render(){
        return(
            <>
                {this.props.name}
                {this.props.synopsis}
                <ReviewList {PROPS} />
            </>
        )
    }
}

