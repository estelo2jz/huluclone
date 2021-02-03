import React from 'react';
import { Link } from 'react-router-dom';
import { MovieGenreData } from './CategoryData/MovieData/MovieGenreData';
import { MoviePopularData } from './CategoryData/MovieData/MoviePopularData';

import './CategoryStyles/MovieStyles/Movie.scss';

function Movies() {
  return (
    <div>
      <div className="movie__container">
        <div className="movie__title">
          <p>Movies</p>
        </div>
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
                        {/* <div className="movie-genre__img">
                        </div> */}
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
      <div className="movie__container">
        <div className="movie__heading">
          <p>popular</p>
        </div>
        <div className="movie__movie-card-container">
          <div className="movie-for-you__outer">
            {MoviePopularData.map((item, index) => {
              return (
                <div key={index} className="movie-for-you__container">
                  <Link to={item.path} >
                    <div className="movie-for-you__img">
                      <img src={item.image} alt="" />
                    </div>
                    <div className="movie-for-you__info">
                      <div className="movie-for-you__info-title">
                        <p>{item.title}</p>
                      </div>
                      <div className="movie-for-you__info-bio">
                        <p>{item.rated} &#8226; {item.genre} &#8226; {item.series} {item.year}</p> 
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="movie__container">
        <div className="movie__heading">
          <p>featured</p>
        </div>
        <div className="movie__movie-card-container">
          <div className="movie-for-you__outer">
            {MoviePopularData.map((item, index) => {
              return (
                <div key={index} className="movie-for-you__container">
                  <Link to={item.path} >
                    <div className="movie-for-you__img">
                      <img src={item.image} alt="" />
                    </div>
                    <div className="movie-for-you__info">
                      <div className="movie-for-you__info-title">
                        <p>{item.title}</p>
                      </div>
                      <div className="movie-for-you__info-bio">
                        <p>{item.rated} &#8226; {item.genre} &#8226; {item.series} {item.year}</p> 
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="movie__container">
        <div className="movie__heading">
          <p>blockbuster movies</p>
        </div>
        <div className="movie__movie-card-container">
          <div className="movie-for-you__outer">
            {MoviePopularData.map((item, index) => {
              return (
                <div key={index} className="movie-for-you__container">
                  <Link to={item.path} >
                    <div className="movie-for-you__img">
                      <img src={item.image} alt="" />
                    </div>
                    <div className="movie-for-you__info">
                      <div className="movie-for-you__info-title">
                        <p>{item.title}</p>
                      </div>
                      <div className="movie-for-you__info-bio">
                        <p>{item.rated} &#8226; {item.genre} &#8226; {item.series} {item.year}</p> 
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="movie__container">
        <div className="movie__heading">
          <p>comedy movies</p>
        </div>
        <div className="movie__movie-card-container">
          <div className="movie-for-you__outer">
            {MoviePopularData.map((item, index) => {
              return (
                <div key={index} className="movie-for-you__container">
                  <Link to={item.path} >
                    <div className="movie-for-you__img">
                      <img src={item.image} alt="" />
                    </div>
                    <div className="movie-for-you__info">
                      <div className="movie-for-you__info-title">
                        <p>{item.title}</p>
                      </div>
                      <div className="movie-for-you__info-bio">
                        <p>{item.rated} &#8226; {item.genre} &#8226; {item.series} {item.year}</p> 
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="movie__container">
        <div className="movie__heading">
          <p>action movies</p>
        </div>
        <div className="movie__movie-card-container">
          <div className="movie-for-you__outer">
            {MoviePopularData.map((item, index) => {
              return (
                <div key={index} className="movie-for-you__container">
                  <Link to={item.path} >
                    <div className="movie-for-you__img">
                      <img src={item.image} alt="" />
                    </div>
                    <div className="movie-for-you__info">
                      <div className="movie-for-you__info-title">
                        <p>{item.title}</p>
                      </div>
                      <div className="movie-for-you__info-bio">
                        <p>{item.rated} &#8226; {item.genre} &#8226; {item.series} {item.year}</p> 
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="movie__container">
        <div className="movie__heading">
          <p>award-winning films</p>
        </div>
        <div className="movie__movie-card-container">
          <div className="movie-for-you__outer">
            {MoviePopularData.map((item, index) => {
              return (
                <div key={index} className="movie-for-you__container">
                  <Link to={item.path} >
                    <div className="movie-for-you__img">
                      <img src={item.image} alt="" />
                    </div>
                    <div className="movie-for-you__info">
                      <div className="movie-for-you__info-title">
                        <p>{item.title}</p>
                      </div>
                      <div className="movie-for-you__info-bio">
                        <p>{item.rated} &#8226; {item.genre} &#8226; {item.series} {item.year}</p> 
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="movie__container">
        <div className="movie__heading">
          <p>cinemax</p>
        </div>
        <div className="movie__movie-card-container">
          <div className="movie-for-you__outer">
            {MoviePopularData.map((item, index) => {
              return (
                <div key={index} className="movie-for-you__container">
                  <Link to={item.path} >
                    <div className="movie-for-you__img">
                      <img src={item.image} alt="" />
                    </div>
                    <div className="movie-for-you__info">
                      <div className="movie-for-you__info-title">
                        <p>{item.title}</p>
                      </div>
                      <div className="movie-for-you__info-bio">
                        <p>{item.rated} &#8226; {item.genre} &#8226; {item.series} {item.year}</p> 
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="movie__container">
        <div className="movie__heading">
          <p>hbo max</p>
        </div>
        <div className="movie__movie-card-container">
          <div className="movie-for-you__outer">
            {MoviePopularData.map((item, index) => {
              return (
                <div key={index} className="movie-for-you__container">
                  <Link to={item.path} >
                    <div className="movie-for-you__img">
                      <img src={item.image} alt="" />
                    </div>
                    <div className="movie-for-you__info">
                      <div className="movie-for-you__info-title">
                        <p>{item.title}</p>
                      </div>
                      <div className="movie-for-you__info-bio">
                        <p>{item.rated} &#8226; {item.genre} &#8226; {item.series} {item.year}</p> 
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="movie__container">
        <div className="movie__heading">
          <p>showtime</p>
        </div>
        <div className="movie__movie-card-container">
          <div className="movie-for-you__outer">
            {MoviePopularData.map((item, index) => {
              return (
                <div key={index} className="movie-for-you__container">
                  <Link to={item.path} >
                    <div className="movie-for-you__img">
                      <img src={item.image} alt="" />
                    </div>
                    <div className="movie-for-you__info">
                      <div className="movie-for-you__info-title">
                        <p>{item.title}</p>
                      </div>
                      <div className="movie-for-you__info-bio">
                        <p>{item.rated} &#8226; {item.genre} &#8226; {item.series} {item.year}</p> 
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="movie__container">
        <div className="movie__heading">
          <p>starz</p>
        </div>
        <div className="movie__movie-card-container">
          <div className="movie-for-you__outer">
            {MoviePopularData.map((item, index) => {
              return (
                <div key={index} className="movie-for-you__container">
                  <Link to={item.path} >
                    <div className="movie-for-you__img">
                      <img src={item.image} alt="" />
                    </div>
                    <div className="movie-for-you__info">
                      <div className="movie-for-you__info-title">
                        <p>{item.title}</p>
                      </div>
                      <div className="movie-for-you__info-bio">
                        <p>{item.rated} &#8226; {item.genre} &#8226; {item.series} {item.year}</p> 
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="movie__container">
        <div className="movie__heading">
          <p>hulu originals</p>
        </div>
        <div className="movie__movie-card-container">
          <div className="movie-for-you__outer">
            {MoviePopularData.map((item, index) => {
              return (
                <div key={index} className="movie-for-you__container">
                  <Link to={item.path} >
                    <div className="movie-for-you__img">
                      <img src={item.image} alt="" />
                    </div>
                    <div className="movie-for-you__info">
                      <div className="movie-for-you__info-title">
                        <p>{item.title}</p>
                      </div>
                      <div className="movie-for-you__info-bio">
                        <p>{item.rated} &#8226; {item.genre} &#8226; {item.series} {item.year}</p> 
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="movie__container">
        <div className="movie__heading">
          <p>staff picks</p>
        </div>
        <div className="movie__movie-card-container">
          <div className="movie-for-you__outer">
            {MoviePopularData.map((item, index) => {
              return (
                <div key={index} className="movie-for-you__container">
                  <Link to={item.path} >
                    <div className="movie-for-you__img">
                      <img src={item.image} alt="" />
                    </div>
                    <div className="movie-for-you__info">
                      <div className="movie-for-you__info-title">
                        <p>{item.title}</p>
                      </div>
                      <div className="movie-for-you__info-bio">
                        <p>{item.rated} &#8226; {item.genre} &#8226; {item.series} {item.year}</p> 
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="movie__container">
        <div className="movie__heading">
          <p>award-winning action movies</p>
        </div>
        <div className="movie__movie-card-container">
          <div className="movie-for-you__outer">
            {MoviePopularData.map((item, index) => {
              return (
                <div key={index} className="movie-for-you__container">
                  <Link to={item.path} >
                    <div className="movie-for-you__img">
                      <img src={item.image} alt="" />
                    </div>
                    <div className="movie-for-you__info">
                      <div className="movie-for-you__info-title">
                        <p>{item.title}</p>
                      </div>
                      <div className="movie-for-you__info-bio">
                        <p>{item.rated} &#8226; {item.genre} &#8226; {item.series} {item.year}</p> 
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="movie__container">
        <div className="movie__heading">
          <p>family comedy movies</p>
        </div>
        <div className="movie__movie-card-container">
          <div className="movie-for-you__outer">
            {MoviePopularData.map((item, index) => {
              return (
                <div key={index} className="movie-for-you__container">
                  <Link to={item.path} >
                    <div className="movie-for-you__img">
                      <img src={item.image} alt="" />
                    </div>
                    <div className="movie-for-you__info">
                      <div className="movie-for-you__info-title">
                        <p>{item.title}</p>
                      </div>
                      <div className="movie-for-you__info-bio">
                        <p>{item.rated} &#8226; {item.genre} &#8226; {item.series} {item.year}</p> 
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="movie__container">
        <div className="movie__heading">
          <p>raunchy movies</p>
        </div>
        <div className="movie__movie-card-container">
          <div className="movie-for-you__outer">
            {MoviePopularData.map((item, index) => {
              return (
                <div key={index} className="movie-for-you__container">
                  <Link to={item.path} >
                    <div className="movie-for-you__img">
                      <img src={item.image} alt="" />
                    </div>
                    <div className="movie-for-you__info">
                      <div className="movie-for-you__info-title">
                        <p>{item.title}</p>
                      </div>
                      <div className="movie-for-you__info-bio">
                        <p>{item.rated} &#8226; {item.genre} &#8226; {item.series} {item.year}</p> 
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="movie__container">
        <div className="movie__heading">
          <p>horror-thrillers</p>
        </div>
        <div className="movie__movie-card-container">
          <div className="movie-for-you__outer">
            {MoviePopularData.map((item, index) => {
              return (
                <div key={index} className="movie-for-you__container">
                  <Link to={item.path} >
                    <div className="movie-for-you__img">
                      <img src={item.image} alt="" />
                    </div>
                    <div className="movie-for-you__info">
                      <div className="movie-for-you__info-title">
                        <p>{item.title}</p>
                      </div>
                      <div className="movie-for-you__info-bio">
                        <p>{item.rated} &#8226; {item.genre} &#8226; {item.series} {item.year}</p> 
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="movie__container">
        <div className="movie__heading">
          <p>action comedies</p>
        </div>
        <div className="movie__movie-card-container">
          <div className="movie-for-you__outer">
            {MoviePopularData.map((item, index) => {
              return (
                <div key={index} className="movie-for-you__container">
                  <Link to={item.path} >
                    <div className="movie-for-you__img">
                      <img src={item.image} alt="" />
                    </div>
                    <div className="movie-for-you__info">
                      <div className="movie-for-you__info-title">
                        <p>{item.title}</p>
                      </div>
                      <div className="movie-for-you__info-bio">
                        <p>{item.rated} &#8226; {item.genre} &#8226; {item.series} {item.year}</p> 
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="movie__container">
        <div className="movie__heading">
          <p>horror movies</p>
        </div>
        <div className="movie__movie-card-container">
          <div className="movie-for-you__outer">
            {MoviePopularData.map((item, index) => {
              return (
                <div key={index} className="movie-for-you__container">
                  <Link to={item.path} >
                    <div className="movie-for-you__img">
                      <img src={item.image} alt="" />
                    </div>
                    <div className="movie-for-you__info">
                      <div className="movie-for-you__info-title">
                        <p>{item.title}</p>
                      </div>
                      <div className="movie-for-you__info-bio">
                        <p>{item.rated} &#8226; {item.genre} &#8226; {item.series} {item.year}</p> 
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="movie__container">
        <div className="movie__heading">
          <p>cult classic movies</p>
        </div>
        <div className="movie__movie-card-container">
          <div className="movie-for-you__outer">
            {MoviePopularData.map((item, index) => {
              return (
                <div key={index} className="movie-for-you__container">
                  <Link to={item.path} >
                    <div className="movie-for-you__img">
                      <img src={item.image} alt="" />
                    </div>
                    <div className="movie-for-you__info">
                      <div className="movie-for-you__info-title">
                        <p>{item.title}</p>
                      </div>
                      <div className="movie-for-you__info-bio">
                        <p>{item.rated} &#8226; {item.genre} &#8226; {item.series} {item.year}</p> 
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="movie__container">
        <div className="movie__heading">
          <p>into the dark</p>
        </div>
        <div className="movie__movie-card-container">
          <div className="movie-for-you__outer">
            {MoviePopularData.map((item, index) => {
              return (
                <div key={index} className="movie-for-you__container">
                  <Link to={item.path} >
                    <div className="movie-for-you__img">
                      <img src={item.image} alt="" />
                    </div>
                    <div className="movie-for-you__info">
                      <div className="movie-for-you__info-title">
                        <p>{item.title}</p>
                      </div>
                      <div className="movie-for-you__info-bio">
                        <p>{item.rated} &#8226; {item.genre} &#8226; {item.series} {item.year}</p> 
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="movie__container">
        <div className="movie__heading">
          <p>documentaries</p>
        </div>
        <div className="movie__movie-card-container">
          <div className="movie-for-you__outer">
            {MoviePopularData.map((item, index) => {
              return (
                <div key={index} className="movie-for-you__container">
                  <Link to={item.path} >
                    <div className="movie-for-you__img">
                      <img src={item.image} alt="" />
                    </div>
                    <div className="movie-for-you__info">
                      <div className="movie-for-you__info-title">
                        <p>{item.title}</p>
                      </div>
                      <div className="movie-for-you__info-bio">
                        <p>{item.rated} &#8226; {item.genre} &#8226; {item.series} {item.year}</p> 
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="movie__container">
        <div className="movie__heading">
          <p>drama movies</p>
        </div>
        <div className="movie__movie-card-container">
          <div className="movie-for-you__outer">
            {MoviePopularData.map((item, index) => {
              return (
                <div key={index} className="movie-for-you__container">
                  <Link to={item.path} >
                    <div className="movie-for-you__img">
                      <img src={item.image} alt="" />
                    </div>
                    <div className="movie-for-you__info">
                      <div className="movie-for-you__info-title">
                        <p>{item.title}</p>
                      </div>
                      <div className="movie-for-you__info-bio">
                        <p>{item.rated} &#8226; {item.genre} &#8226; {item.series} {item.year}</p> 
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="movie__container">
        <div className="movie__heading">
          <p>'80S binge</p>
        </div>
        <div className="movie__movie-card-container">
          <div className="movie-for-you__outer">
            {MoviePopularData.map((item, index) => {
              return (
                <div key={index} className="movie-for-you__container">
                  <Link to={item.path} >
                    <div className="movie-for-you__img">
                      <img src={item.image} alt="" />
                    </div>
                    <div className="movie-for-you__info">
                      <div className="movie-for-you__info-title">
                        <p>{item.title}</p>
                      </div>
                      <div className="movie-for-you__info-bio">
                        <p>{item.rated} &#8226; {item.genre} &#8226; {item.series} {item.year}</p> 
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="movie__container">
        <div className="movie__heading">
          <p>action thrillers</p>
        </div>
        <div className="movie__movie-card-container">
          <div className="movie-for-you__outer">
            {MoviePopularData.map((item, index) => {
              return (
                <div key={index} className="movie-for-you__container">
                  <Link to={item.path} >
                    <div className="movie-for-you__img">
                      <img src={item.image} alt="" />
                    </div>
                    <div className="movie-for-you__info">
                      <div className="movie-for-you__info-title">
                        <p>{item.title}</p>
                      </div>
                      <div className="movie-for-you__info-bio">
                        <p>{item.rated} &#8226; {item.genre} &#8226; {item.series} {item.year}</p> 
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="movie__container">
        <div className="movie__heading">
          <p>'90S binge</p>
        </div>
        <div className="movie__movie-card-container">
          <div className="movie-for-you__outer">
            {MoviePopularData.map((item, index) => {
              return (
                <div key={index} className="movie-for-you__container">
                  <Link to={item.path} >
                    <div className="movie-for-you__img">
                      <img src={item.image} alt="" />
                    </div>
                    <div className="movie-for-you__info">
                      <div className="movie-for-you__info-title">
                        <p>{item.title}</p>
                      </div>
                      <div className="movie-for-you__info-bio">
                        <p>{item.rated} &#8226; {item.genre} &#8226; {item.series} {item.year}</p> 
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="movie__container">
        <div className="movie__heading">
          <p>indie horror films</p>
        </div>
        <div className="movie__movie-card-container">
          <div className="movie-for-you__outer">
            {MoviePopularData.map((item, index) => {
              return (
                <div key={index} className="movie-for-you__container">
                  <Link to={item.path} >
                    <div className="movie-for-you__img">
                      <img src={item.image} alt="" />
                    </div>
                    <div className="movie-for-you__info">
                      <div className="movie-for-you__info-title">
                        <p>{item.title}</p>
                      </div>
                      <div className="movie-for-you__info-bio">
                        <p>{item.rated} &#8226; {item.genre} &#8226; {item.series} {item.year}</p> 
                      </div>
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

export default Movies
