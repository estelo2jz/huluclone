import React from 'react';
import { Link } from 'react-router-dom';
import { SketchComedyMovieData } from './GenreData/MoviesSketchComedy';
import "../../../CategoryStyles/TVStyles/TVGenre.scss";

function GenreAction() {
  return (
    <div className="genre-main__container">
      <div className="genre-main__outer">
        <div className="genre-main__heading">
          <p>sketch comedy movies</p>
        </div>
        <div className="genre-main__card-container">
          <div className="genre-main__card-outer">
            {SketchComedyMovieData.map((item, index) => {
              return (
                <div key={index} className="genre-main__card">
                  <Link to={item.path} >
                    <div className="genre-main__img">
                      <img src={item.image} alt="adult-animation-img" />
                    </div>
                    <div className="genre-main__info">
                      <div className="genre-main-for-you__info-title">
                        <p>{item.title}</p>
                      </div>
                      {/* <div className="genre-main__info-bio">
                        <p>{item.rated} &#8226; {item.year}</p>
                      </div> */}
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

export default GenreAction
