/**
 * prop: character trait: good, evil, funny, musical etc, bard, warlock.
 * display the text I am a trait person.
 * state we will have an array of charater traits, and when we click a button,
 * we will choose a random character trait
 */
import React from "react";
export default class PersonOne extends React.Component{
    
    render()
    {
        let trait = this.props.trait;
        return(
            <>
                <h1> I am a {trait} character.</h1>
            </>
            
        )
    }

}


/**
 * 1. import react x
 * 2. define the class and it inhertis from React.Component x
 * 3. Render & Return
 * 4. Inside the return we have html
 * 5. Make sure you export whatever you intend to import x
 */