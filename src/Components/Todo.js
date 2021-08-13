import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      todos: [],
    };
  }
  render() {
    const { todos } = this.state;

    const yengisIsh = (e) => {
      e.preventDefault();
      this.setState({
        todos: [
          ...todos,
          {
            name: this.state.inputValue,
            id: uuidv4(),
          },
        ],
        inputValue: "",
      });
    };

    const revomeItem = (id) => {
      this.setState({
        todos: this.state.todos.filter((vazifa) => vazifa.id !== id),
      });
    };

    return (
      <>
        <form onSubmit={yengisIsh}>
          <input
            type="text"
            value={this.state.inputValue}
            placeholder="yengi ish"
            onChange={(e) => {
              this.setState({
                inputValue: e.target.value,
              });
            }}
          />
          <button type="submit">Qoshish</button>
        </form>
        <ul>
          {todos.map((vazifa) => {
            return (
              <li key={vazifa.id}>
                {vazifa.name}{" "}
                <button
                  onClick={() => {
                    revomeItem(vazifa.id);
                  }}
                >
                  X
                </button>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}

export default Todo;
