import React from "react"

class Input extends React.Component{
    render(){
        return(
            <form action="">
                <input type="text" placeholder="add a task" />
                <button type="submit">Add</button>
                </form>
        )
    }
}
export default Input;