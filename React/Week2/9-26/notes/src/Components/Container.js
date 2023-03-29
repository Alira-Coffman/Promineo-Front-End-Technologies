/**CLASS BASED COMPONENTS */

import React from "react";
import Decrement from "./Decrement";
import Increment from "./Increment";
import NumberDisplay from "./NumberDisplay";
import List from "./List";
class Container extends React.Component{
    constructor()
    {
        super();
        // Might need for state purposes
    }
    render(){
        return <>
            
            <List />
                
            {/* <NumberDisplay count={15}/> */}
            
        </>
    }
}
export default Container

