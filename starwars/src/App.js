import React, { Component } from "react";
import "./App.css";
import StarwarsCharList from "./components/StarWarsCharList";
import Pagination from "./components/Pagination";

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      next: null,
      previous: null
    };
  }

  componentDidMount() {
    this.getCharacters("https://swapi.co/api/people/");
  }

  nextPage = () => {
    console.log(this.state.next);
    this.getCharacters(this.state.next);
  };

  previousPage = () => {
    this.getCharacters(this.state.previous);
  };

  getCharacters = URL => {
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        const { next, previous } = data;

        const chars = data.results.map(char => ({
          ...char,
          expand: false
        }));
        this.setState({ ...this.state, next, previous, starwarsChars: chars });
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
    const { starwarsChars, next, previous } = this.state;

    return (
      <div className="App">
        <div className="starwars-container">
          <h1 className="Header">React Wars</h1>
          <StarwarsCharList
            starwarsChars={starwarsChars}
            expandDetails={this.expandDetails}
          />

          <Pagination
            nextPage={this.nextPage}
            previousPage={this.previousPage}
            previous={previous}
            next={next}
          />
        </div>
      </div>
    );
  }
}

export default App;
