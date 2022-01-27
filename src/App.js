import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import { Cardlist } from "./Component/Cardlist";
class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((user) => this.setState({ monsters: user }));
  }

  render() {
    const { monsters, searchField } = this.state;
    console.log(monsters);
    const filterMonster = monsters.filter((monster) =>
      monster.name.toLowerCase().include(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <input
          type="search"
          placeholder="search monsters"
          onChange={(e) => this.setState({ searchField: e.target.value })}
        ></input>
        <Cardlist monsters={filterMonster} />
      </div>
    );
  }
}

export default App;
