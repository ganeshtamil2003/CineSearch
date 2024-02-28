import React from "react";
import { useEffect, useState } from "react";
import "./App.css";
import SearchIcon from "./search.svg";
import MovieCard from "./components/MovieCard";

// import { useState, useEffect } from 'react';

//-> PROPS example
// const Person = (props) => {
//   return (
//     <>
//       <h1>Name : {props.name} </h1>
//       <h2>Last Name :{props.lastname} </h2>
//       <h3>Age : {props.age} </h3>
//     </>

//   )
// }

// const App = () => {
//   return (
//     <div className="App">

//       {/* <Person
//         name='Rajesh'
//         lastname='tamil'
//         age={26}
//       />
//       <Person
//         name='Ganesh'
//         lastname='Ram'
//         age={20} 
//       /> */}
//     </div>

//   );
// }


// States example
// const App = () => {
//   const [counter, setCounter] = useState(0);

// useEffect(()=>{
//  alert("You've Changed the Counter to "+ counter);
// },[counter])

// return (
//     <div className="App">
//       <button onClick={() => setCounter((prevCount) => prevCount - 1)}>-</button>
//       <h1>{counter} </h1>
//       <button onClick={() => setCounter((prevCount) => prevCount + 1)}>+</button>
//     </div>
//   )
// }


// 71c002bd --> api key


const API_URL = 'http://www.omdbapi.com?apikey=71c002bd';


const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);

  }

  useEffect(() => {
    searchMovies('spiderman')
  }, []);

  return (
    <div className="app">
      <h1>CineSearch</h1>
      <div className="search">
        <input
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}

        />
      </div>

      {
        movies?.length > 0
          ? (
            <div className="container">
              {movies.map((movie) => (
                <MovieCard movie={movie} />
              ))}
            </div>
          ) :
          (
            <div className="empty">
              <h2>No movies Found</h2>
            </div>
          )
      }



    </div>
  );
}


export default App;
