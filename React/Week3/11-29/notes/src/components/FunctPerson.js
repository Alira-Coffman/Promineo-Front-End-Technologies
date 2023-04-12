import { useState } from "react";




export default function FunctPerson ({firstName, lastName} ) {
    const [career, setCareer] = useState('default career');

    const updateCareer = async (value) => {
        // setCareer(value);
    }
    return(
        <>
        <h1>Hello, I am {firstName} {lastName}! I am a {career}</h1>

        <button onClick={() => setCareer('chef')}>Change Careers</button>
        </>
    )
}

// const FunctPerson = () => {

// }