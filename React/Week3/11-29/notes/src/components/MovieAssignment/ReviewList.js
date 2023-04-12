import React from "react";

export default class ReviewList extends React.Component{
    ///[REVIEWS]

    constructor(props)
    {
        super(props);
        this.state = {
            reviews: [{review: 'description', stars: 5}]
        }
    }
    addNewReview(data)
    {
        this.setState({review: [...this.state.reviews], data})
    }
    render(){
        return( <>
        
           {this.state.reviews.map(review => 
            return <Review />)}

            <ReviewForm callback ={addNewReview}/>
        </>)
        
    }
}
