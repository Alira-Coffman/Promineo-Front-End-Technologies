import React from "react";

// export class AddButton extends React.Component{
//     render(){
//         return React.createElement('button', {className: 'btn btn-primary'}, 'Add')
//     }
// }

export class AddButton extends React.Component
{
    render()
    {
        return <button className={`btn btn-primary`}> Add</button>
    }
}