import React from "react";
import "./App.css";
import Movie from "./Movie";

const movieTitles = ["Matrix", "The Hunger Games", "Oldboy", "Star Wars"];

const movieImages = [
  "https://images-na.ssl-images-amazon.com/images/I/51vpnbwFHrL._SY445_.jpg",
  "https://upload.wikimedia.org/wikipedia/en/1/12/Catching-Fire_poster.jpg",
  "http://www.zonalibre.org/blog/clone/archives/old-boy-2.jpg",
  "https://images-na.ssl-images-amazon.com/images/I/51QvoX064kL._SX303_BO1,204,203,200_.jpg"
];

function App() {
  return (
    <div className="App">
      <Movie title={movieTitles[0]} poster={movieImages[0]} />
      <Movie title={movieTitles[1]} poster={movieImages[1]} />
      <Movie title={movieTitles[2]} poster={movieImages[2]} />
      <Movie title={movieTitles[3]} poster={movieImages[3]} />
    </div>
  );
}

export default App;
