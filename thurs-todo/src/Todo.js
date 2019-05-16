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
    let id = arguments[0];
    this.setState({
      mockData: this.state.mockData.filter(item => {
        return item.id !== id;
      })
    });
  }

  onEditHandle(e) {
    this.setState({ edit: true, id: arguments[0], title: arguments[1] });
  }

  renderEditForm() {
    if (this.state.edit) {
      return (
        <form onSubmit={this.onUpdateHandle.bind(this)}>
          <input
            type="text"
            name="updatedItem"
            className="item"
            defaultValue={this.state.title}
          />
          <button className="update-add-item">Update</button>
        </form>
      );
    }
  }

  onUpdateHandle(e) {
    e.preventDefault();
    // console.log(e.target.updatedItem.value);
    this.setState({
      mockData: this.state.mockData.map(entry => {
        console.log(entry.id === this.state.id);
        if (entry.id === this.state.id) {
          entry.title = e.target.updatedItem.value;
        }
        return entry;
      })
    });
  }

  onCompleteHandle() {
    let id = arguments[0];
    console.log(id);
    this.setState({
      mockData: this.state.mockData.map(entry => {
        if (entry.id === id) {
          entry.done = true;
          console.log(entry.id === id);
        }
        return entry;
      })
    });
    console.log(this.state);
  }

  render() {
    return (
      <div className="container">
        {this.renderEditForm()}
        <h1>I Am The To-Do Component</h1>
        <form onSubmit={this.onSubmitHandle.bind(this)}>
          <input type="text" name="item" className="item" />
          <button className="btn-add-item">Add</button>
        </form>
        <ul>
          {this.state.mockData.map(item => (
            <li key={item.id} className={item.done ? "done" : "hidden"}>
              {item.title}
              <button onClick={this.onDeleteHandle.bind(this, item.id)}>
                Delete
              </button>
              <button
                onClick={this.onEditHandle.bind(this, item.id, item.title)}
              >
                Edit
              </button>
              <button onClick={this.onCompleteHandle.bind(this,item.id)}>
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
