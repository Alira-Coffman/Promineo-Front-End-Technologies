import React, { useState } from "react";


const FunctionalComponent = () => {
    const [count, setCount] = useState()

    const increase = () =>
    {
        setCount(count+1);
    }
    return(  <div>
        <h2>{count}</h2>
        <button onClick={increase}>Click</button>
    </div>)
      
}

export default FunctionalComponent;