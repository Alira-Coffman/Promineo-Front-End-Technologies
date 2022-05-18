import React from "react";
import "./Todo.css";
import ListItem from "../ListItem";

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: [
        "watch react videos",
        "cry about react",
        "toss class based component into trashcan",
      ],
    };
  }

  handleChange(event) {
    event.preventDefault();
    console.log(this.state.todo);
    //     let todolist = this.state.todo;
    //     let newTodo = event.target.value;

    //     console.log(newTodo)
    //    todolist.push(newTodo)
    //    console.log(todolist);
    this.setState({ todo: [...this.state.todo, event.target.value] });
  }
  removeListItem(e) {
    let filteredArray = this.state.todo.filter((item) => item !== e.target.id);
    this.setState({ todo: filteredArray });
  }
  render() {
    return (
      <div className="modal">
        <div className="input-group">
          <label htmlFor="">Enter a Todo Item </label>
          <input
            type="text"
            id="todolistItem"
            onBlur={this.handleChange.bind(this)}
          />
        </div>
        <div id="list">
          {this.state.todo &&
            this.state.todo?.map((item, x) => {
              return (
                <div key={item} id={`listitem`}>
                  <ListItem todo={item} />
                  <button
                    onClick={this.removeListItem.bind(this)}
                    id={item}
                    type="button"
                  >
                    delete me
                  </button>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

export default Todo;
