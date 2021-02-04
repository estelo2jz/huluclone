import React from 'react'
import { Link } from 'react-router-dom';
import { TVGenreData } from './TVGenreData';

function GenreComponent() {
  return (
    <div>
      <div className="tv__container">
        <div className="tv__heading">
          <p>genres</p>
        </div>
        <div className="tv__movie-card-container">
          <div className="tv__movie-card-container-helper">
            <div className="tv-genre__outer">
              {TVGenreData.map((item, index) => {
                return (
                  <div key={index} className="tv-genre__container">
                    <Link to={item.path} >
                      {/* <div className="tv-genre__img">
                        </div> */}
                      <div className="tv-genre__info">
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
      
    </div>
  )
}

export default GenreComponent
