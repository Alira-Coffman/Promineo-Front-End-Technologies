//make a classbased component that has props: firstName, lastName; State {career, age};


import React from "react";

export default class Person extends React.Component {
    constructor(props)
    {
        super(props)
        //state 
        // this.setState()
        this.state = {
            career: props.career,
            age: props.age
        }
    }

    apiExample(data)
    {
        fetch('https://randomuser.me/api/', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
              },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
    //     .then((data) => {
    //         let result = data.results[0];
    //         console.log('Welcome ' + result.name.first + 
    //                            ' ' + result.name.last)
    //    } );
    }
    render(){
        let firstName = this.props.firstName;
        return(
            <>
            {this.apiExample()}
                <h1>Hello, I am {firstName} {this.props.lastName}! I am a {this.state.career} !</h1>
            </>
        )
    }
}