import React from "react";
import TextDisplay from "./TextDisplay";


/**
 * 
 * 
 * const Header = h_text => {
 * return <h1>{h_text}</h1>
 * }
 * 
 */


export default function Header({h_text, paragraph})
{

    // const {h_text, paragraph} = props;
    return(
        <>
        <h1>{h_text}</h1>
        <TextDisplay p_text={paragraph} />
        </>
    )
}

//export default Header