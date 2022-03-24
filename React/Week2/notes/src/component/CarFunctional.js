import React, {useState} from "react";

const CarFunctional = () =>{
    const [brand, setBrand] =useState('ford');
    const [model, setModel] = useState('f150');
    const [color, setColor] = useState('blue');
    const [year, setYear] = useState(2020);
    
    const setCar = () =>
    {
        setBrand('Yoda');
        setColor('red');
        
    }

    return (
        <> <h2> I am a {brand}!</h2>
        <p>It is a {color}</p>
        <button type='button' onClick={setCar}>click!</button>
      
        </>
       
        )


}

export default CarFunctional;