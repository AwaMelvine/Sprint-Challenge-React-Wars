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
        const chars = data.results.map(char => ({
          ...char,
          expand: false,
          id: Date.now()
        }));
        this.setState({ starwarsChars: chars });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  expandDetails = async char => {
    const { starwarsChars } = this.state;
    const updatedChars = starwarsChars.map(item => {
      if (char.created === item.created) {
        return { ...item, expand: !item.expand };
      }
      return item;
    });
    await this.setState({
      starwarsChars: updatedChars
    });
  };

  render() {
    const { starwarsChars } = this.state;

    return (
      <div className="App">
        <div className="starwars-container">
          <h1 className="Header">React Wars</h1>
          <StarwarsCharList
            starwarsChars={starwarsChars}
            expandDetails={this.expandDetails}
          />
        </div>
      </div>
    );
  }
}

export default App;
