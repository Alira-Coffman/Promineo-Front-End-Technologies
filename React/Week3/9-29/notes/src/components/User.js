import React from "react"

export default function User({details, stateChanger})
{
    //console.log(details);

    const {avatar, first_name, last_name, email } = details
    return(
        <div className="m-1 d-flex text-white text-center bg-primary border border-success border-4 rounded w-25">
            <img className="img-fluid img-thumbnail" src={avatar} alt='profile'/>
            <div>
                <h4>{first_name} {last_name}</h4>
                <a className="link-light" href={`mailto:${email}`}>email me</a>
            </div>
           
            <button onClick={() => stateChanger(2)}>Click</button>

            {/* //mailto: */}

        </div>
    )
}


