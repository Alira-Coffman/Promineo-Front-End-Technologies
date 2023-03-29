import React from "react";

class List extends React.Component{
    render(){
        let list = ['hello', 'world', 'My', 'name']
        return(
            <>
                {
                    list.map((i, index)=>{
                        return <li key={index}>{i}</li>
                    })
                }
                <span>Hello </span>
                <span>Hello </span>
                <div>
                    <span>Hello </span>
                </div>
            </>
        )
    }
}
export default List


//css selector specificity?

