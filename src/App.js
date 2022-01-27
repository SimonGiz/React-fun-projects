import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import { Cardlist } from "./Component/Cardlist";
class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((user) => this.setState({ monsters: user }));
  }
  render() {
    return (
      <div className="App">
        <Cardlist monsters={this.state.monsters} />
      </div>
    );
  }
}

export default App;
