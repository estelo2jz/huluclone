import React from 'react'
import { Link } from 'react-router-dom';
import { MovieGenreData } from './MovieGenreData';

function GenreComponent() {
  return (
    <div className="movie__container">
      <div className="movie__heading">
        <p>genres</p>
      </div>
      <div className="movie__movie-card-container">
        <div className="movie__movie-card-container-helper">
          <div className="movie-genre__outer">
            {MovieGenreData.map((item, index) => {
              return (
                <div key={index} className="movie-genre__container">
                  <Link to={item.path} >
                    <div className="movie-genre__info">
                      <p>{item.title}</p>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default GenreComponent
