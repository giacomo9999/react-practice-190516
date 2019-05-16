import React from "react";
import ReactDOM from "react-dom";
import Todo from "./Todo";
import "./index.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
  }
  render() {
    return <Todo />;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
