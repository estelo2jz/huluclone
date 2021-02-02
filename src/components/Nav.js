import React from 'react';
import requests from '../requests';

function Nav({ setSelectedOption }) {
  return (
    <div className="nav">
      <div className="nav__item">
        <h2 onClick={() => setSelectedOption(requests.fetchTrending)}>Trending</h2>
      </div>
      <div className="nav__item">
        <h2 onClick={() => setSelectedOption(requests.fetchTopRated)}>Top Rated</h2>
      </div>
      <div className="nav__item">
        <h2 onClick={() => setSelectedOption(requests.fetchActionMovies)}>Action</h2>
      </div>
      <div className="nav__item">
        <h2 onClick={() => setSelectedOption(requests.fetchComedyMovies)}>Comedy</h2>
      </div>
      <div className="nav__item">
        <h2 onClick={() => setSelectedOption(requests.fetchHorrorMovies)}>Horror</h2>
      </div>
      <div className="nav__item">
        <h2 onClick={() => setSelectedOption(requests.fetchRomanceMovies)}>Romance</h2>
      </div>
      <div className="nav__item">
        <h2 onClick={() => setSelectedOption(requests.fetchMystery)}>Mystery</h2>
      </div>
      <div className="nav__item">
        <h2 onClick={() => setSelectedOption(requests.fetchScifi)}>Sci-fi</h2>
      </div>
      <div className="nav__item">
        <h2 onClick={() => setSelectedOption(requests.fetchWestern)}>Western</h2>
      </div>
      <div className="nav__item">
        <h2 onClick={() => setSelectedOption(requests.fetchActionMovies)}>Animation</h2>
      </div>
      <div className="nav__item">
        <h2 onClick={() => setSelectedOption(requests.fetchTV)}>TV Movie</h2>
      </div>
    </div>
  )
}

export default Nav
