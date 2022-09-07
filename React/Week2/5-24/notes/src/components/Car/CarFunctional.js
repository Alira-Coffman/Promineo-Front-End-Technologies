import React, { useState } from "react";


// export default function CarFunctional()
// {

// }

const CarFunctional = ({make, model, year}) =>
{
    const [color, setColor] = useState('red');

    const changeColor = () =>
    {
        setColor('blue');
    }

    return(
        <>
        
            <h2>I am a {make} {model}</h2>
            <p>I was made in {year}</p>
            <p id='recolor' style={{background:color}}>I am the color {color}</p>

            <button onClick={changeColor}>Change color of car</button>
          
        </>
    )
}
export default CarFunctional;