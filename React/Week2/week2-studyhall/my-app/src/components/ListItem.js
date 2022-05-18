import React from 'react';

class ListItem extends React.Component {
    
 render() {
   return (
    <li className="listItem">
        {this.props.todo} 
       

    </li>
    
   )
 }
}
 
export default ListItem;