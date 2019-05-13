import React, { Component } from "react";
import "./App.css";
import Movie from "./Movie";

const movies = [
  {
    title: "Matrix",
    poster: "https://images-na.ssl-images-amazon.com/images/I/51vpnbwFHrL._SY445_.jpg"
  },
  {
    title: "The Hunger Games",
    poster: "https://upload.wikimedia.org/wikipedia/en/1/12/Catching-Fire_poster.jpg"
  },
  {
    title: "Oldboy",
    poster: "http://www.zonalibre.org/blog/clone/archives/old-boy-2.jpg"
  },
  {
    title: "Star Wars",
    poster:
      "https://images-na.ssl-images-amazon.com/images/I/51QvoX064kL._SX303_BO1,204,203,200_.jpg"
  }
];

class App extends Component {
  state = {
    greeting: "Hello!"
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        greeting: "Hello again!"
      });
    }, 5000);
  }

  render() {
    return (
      <div className="App">
        {this.state.greeting}
        {movies.map((movie, index) => {
          return <Movie title={movie.title} poster={movie.poster} key={index} />;
        })}
      </div>
    );
  }
}

export default App;
