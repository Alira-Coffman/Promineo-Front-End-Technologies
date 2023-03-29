/**
 * prop: character trait: good, evil, funny, musical etc, bard, warlock.
 * display the text I am a trait person.
 * state we will have an array of charater traits, and when we click a button,
 * we will choose a random character trait
 */
import React from "react";
import PersonOne from "./PersonOne";
export default class Person extends React.Component{
    constructor(props)
    {
        super(props)
        this.state = {
            trait: props.trait
        }
    }
    
    changeTrait()
    {
        //create array of strings 
        let trait_arr = ['good', 'evil', 'fun', 'silent'];

        //evil = trait_arr[1]
        //find a random trait.
        let randomValue = Math.floor(Math.random() * trait_arr.length);
        console.log(trait_arr[randomValue]);

        this.setState({
            trait: trait_arr[randomValue]
        })

    }
    render()
    {
        let trait = this.state.trait;
        return(
            <>
               <PersonOne trait={trait}/>
                <button onClick={() => this.changeTrait()}>Change trait</button>

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