import React, { Component } from "react";

class Todo extends Component {
  state = {
    edit: false,
    id: null,
    mockData: [
      { id: 1, title: "Meet Drug Dealer", done: false, date: new Date() },
      { id: 2, title: "Fix Door Lock", done: false, date: new Date() },
      { id: 3, title: "Install Security Camera", done: false, date: new Date() }
    ]
  };

  onSubmitHandle(e) {
    e.preventDefault();
    console.log(e.target.item.value);
    this.setState({
      mockData: [
        ...this.state.mockData,
        {
          id: Date.now(),
          title: e.target.item.value,
          done: false,
          date: new Date()
        }
      ]
    });
    e.target.item.value = "";
  }

  onDeleteHandle(e) {
    e.preventDefault();
  }

  onEditHandle(e) {
    e.preventDefault();
  }

  onCompleteHandle(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div className="container">
        <h1>I Am The To-Do Component</h1>
        <form onSubmit={this.onSubmitHandle.bind(this)}>
          <input type="text" name="item" className="item" />
          <button className="btn-add-item">Add</button>
        </form>
        <ul>
          {this.state.mockData.map(item => (
            <li key={item.id}>
              {item.title}
              <button onClick={this.onDeleteHandle.bind(this, item.id)}>
                Delete
              </button>
              <button onClick={this.onEditHandle.bind(this, item.title)}>
                Edit
              </button>
              <button onClick={this.onCompleteHandle.bind(this)}>
                Complete
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export default Todo;
