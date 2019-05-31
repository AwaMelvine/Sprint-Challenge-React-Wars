import React, { Component } from "react";
import "./App.css";
import StarwarsCharList from "./components/StarWarsCharList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: []
    };
  }

  componentDidMount() {
    this.getCharacters("https://swapi.co/api/people/");
  }

  getCharacters = URL => {
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log("---", data.results);
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    const { starwarsChars } = this.state;

    return (
      <div className="App">
        <div className="starwars-container">
          <h1 className="Header">React Wars</h1>
          <StarwarsCharList starwarsChars={starwarsChars} />
        </div>
      </div>
    );
  }
}

export default App;
