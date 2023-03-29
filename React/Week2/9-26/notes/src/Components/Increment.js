/**CLASS BASED COMPONENTS */

import React from "react";
class Increment extends React.Component{
    constructor()
    {
        super();
        // Might need for state purposes
    }
    render(){
        return <>
           <i className="bi bi-plus-circle-fill"></i>
        </>
    }
}
export default Increment