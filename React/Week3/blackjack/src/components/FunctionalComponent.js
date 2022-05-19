import React, {useState} from "react";

const FunctionalComponent = ({countStart, increment}) => {
    const [count,setCount] = useState(countStart);

    const increase = () => {
        setCount(count+increment);
    }

    return (
        <div>
            <h1>Welcome</h1>
            <h3>Counter App</h3>

            <h2>{count}</h2>

            <button onClick = {increase}>Add</button>
        </div>
    )
}
export default FunctionalComponent;