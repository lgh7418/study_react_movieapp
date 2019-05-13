import React, { Component } from "react";
import "./App.css";
import Movie from "./Movie";

class App extends Component {
  state = {};

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        movies: [
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
          },
          {
            title: "Zootopia",
            poster:
              "https://upload.wikimedia.org/wikipedia/ko/thumb/7/75/%EC%A3%BC%ED%86%A0%ED%94%BC%EC%95%84.jpg/250px-%EC%A3%BC%ED%86%A0%ED%94%BC%EC%95%84.jpg"
          }
        ]
      });
    }, 3000);
  }

  _renderMovies = () => {
    const movies = this.state.movies.map((movie, index) => {
      return <Movie title={movie.title} poster={movie.poster} key={index} />;
    });
    return movies;
  };

  render() {
    return <div className="App">{this.state.movies ? this._renderMovies() : "Loading"}</div>;
  }
}

export default App;
