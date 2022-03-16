import React from "react"
// import Input from "./Input";
import './ToDoList.css'
class ToDoList extends React.Component{
    constructor(props)
    {
        super(props);
        this.state = {
            todolistItems: ['feed Cat']
        }
        this.addItem = this.addItem.bind(this);
        this.deleteThisListItem = this.deleteThisListItem.bind(this);
    }
    addItem(event)
    {
        event.preventDefault();
        //this.setState()
        let myTodo = document.getElementById('task').value;
        console.log(myTodo);
        this.setState({ todolistItems: [...this.state.todolistItems, myTodo] }) //simple value

        console.log(this.state.todolistItems);
     
        
    }
    deleteThisListItem(event)
    {
        event.preventDefault();
        console.log(this);
    }
    render(){
        return(
            <div className="todoListMain">
               <form onSubmit={this.addItem}>
                <input type="text" id='task' placeholder="add a task" />
                <button type="submit">Add</button>
                </form>

                <div className="items">
                    <ul className="list">
                        
                    {this.state.todolistItems.map(x => 
                        //TODO: Delete TODOLIST ITEM!
                        <><li key={x}>{x} <br/><button onClick={this.deleteThisListItem} className="deleteBtn">Delete</button></li> </>
                    )}
                    </ul>
                    </div>
            </div>
        )
    }
}
export default ToDoList;