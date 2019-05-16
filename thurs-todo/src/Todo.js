import React, { Component } from "react";

class Todo extends Component {
  state = {
    edit: false,
    id: null,
    mockData: [
      { id: 1, title: "Meet Drug Dealer", done: false, date: new Date() },
      { id: 2, title: "Fix Door Lock", done: false, date: new Date() },
      { id: 1, title: "Install Security Camera", done: false, date: new Date() }
    ]
  };
  render() {
    return (
      <div className="container">
        <h1>I Am The To-Do Component</h1>
      </div>
    );
  }
}
export default Todo;
