import { useState } from "react"
import User from "./User";

const Users = () => {
    //state 
    const [userInfo, setUserInfo] = useState('');

    //api call

   
    const getUsers = () => 
    {
        const url= 'https://randomuser.me/api/?results=10'

        fetch(url)
        .then(response => response.json())
        .then(data => setUserInfo(data));
    }

    return(
        <>

        {/**MAP OVER DATA, cell,dob,email,name */}

        {
           userInfo && userInfo?.results.map((user, index) =>{
                return <User key={index} cell={user.cell} dob={user.dob.date} email={user.email} name={user.name} />
            })
        }
        <button onClick={getUsers}>Get Users</button>
        </>
    )


}

export default Users;