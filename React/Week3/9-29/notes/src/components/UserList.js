import React, { useState, useEffect } from "react";
import User from "./User";




export default function UserList(){
 
    const [list, setList] = useState([]);
    const [number, setNumber] = useState(1);

    const fetchUrl = () => {
      const url = 'https://reqres.in/api/users?page=2'
      fetch(url).then(res => res.json()).then(data => {console.log(data.data); setList(data.data)}) 
    }

    useEffect(() => {
        const url = 'https://reqres.in/api/users?page=2'
      fetch(url).then(res => res.json()).then(data => {console.log(data.data); setList(data.data)})
    }, [])
    
    // fetchUrl();
    return(
        <div>
        <div className="d-flex flex-wrap justify-content-center "> 
        {
          list && list.slice(0,1).map((item, i) => {
            return <User details= {item} stateChanger={setNumber}/>
          })  
        }
        <p>{number}</p>

        {/* <button onClick={() => setNumber(2)}>Click</button> */}
      </div>
          <button onClick={fetchUrl}>Get Users</button>
        </div>
    )
}