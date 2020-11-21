import React, { useState, useEffect } from 'react';
import VideoCard from './VideoCard';
import axios from '../axios';
import requests from '../requests';

function Results({ selectedOption }) {
  const [movies, setMovies] = useState([1, 2]);
  
  // selectedOption is outside the useEffect so we have to say that it's a dependecy.
  // because the useEffect function depends on the selectedOption variable which come from outside.
  useEffect(() => {
    async function fetchData() {
    // asynchronese function means ANYTHING that involves sending information to a server and pulling it in.
    // Whenevewe go to a server and grad some information it's going to have a delay.

    // selectedOption is for the navbar when you click it display the right categories.
      const request = await axios.get(selectedOption);
      setMovies(request.data.results);
      return request;
      // console.log(request);
    }

    fetchData();

  // run this code EVERY time Results component loads/mounts, IF the array contains an argument,
  // run this code once when the Results component loads/mounts, IF the array in the bottom is empty.
  }, [selectedOption])

  return (
    <div className="results">
      {movies.map((movie) => (
        <VideoCard
          key={movie.id}
          movie={movie}
        />
      ))}
    </div>
  )
}

export default Results
