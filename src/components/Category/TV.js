import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TVGenreData } from './CategoryData/TVData/TVGenreData';
import { TVForYouData } from './CategoryData/TVData/TVForYouData';
import { TVAdultAnimationData } from './CategoryData/TVData/TVAdultAnimationData';
import { TVRealityData } from './CategoryData/TVData/TVRealityData';
import { TVHBOData } from './CategoryData/TVData/TVHBOData';
import { TVShowtimeData } from './CategoryData/TVData/TVShowtimeData';
import './CategoryStyles/TVCard.scss';
import './CategoryStyles/TV.scss';
import './CategoryStyles/TVGenre.scss';

function TVCard() {
  return (
    <div className="tv-card__container">
      <div className="tv-card__img">
        <img src="https://images-na.ssl-images-amazon.com/images/I/91UjyAWXgpL._RI_.jpg" alt="" />
        <div className="tv-card__info">
          <div className="tv-card__info-title">
            <p>Ready Player One</p>
          </div>
          <div className="tv-card__info-bio">
            <p>
              From prolific creators Ryan Murphy and Brad Falchuk, new procedural drama 9-1-1 is a fast-paced exploration into the lives and careers of first responders – cops, paramedics, firefighters – the people who put their lives on the line to save others.
            </p>
          </div>
          <div>
            <p>Details</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function TV() {
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
      <div className="tv__container">
        <div className="tv__heading">
          <p>for you</p>
        </div>
        <div className="tv__movie-card-container">
          <div className="tv-for-you__outer">
            {TVForYouData.map((item, index) => {
              return (
                  <div key={index} className="tv-for-you__container">
                    <Link to={item.path} >
                      <div className="tv-for-you__img">
                        <img src={item.image} alt="" />
                      </div>
                      <div className="tv-for-you__info">
                        <div className="tv-for-you__info-title">
                          <p>{item.title}</p>
                        </div>
                        <div className="tv-for-you__info-bio">
                          <p>{item.rated}</p> &#8226;
                          <p>{item.genre}</p> &#8226;
                          <p>{item.series}</p>
                          <p>{item.year}</p>
                        </div>
                      </div>
                    </Link>
                  </div>
              );
            })}
          </div>
        </div>
       </div>
      <div className="tv__container">
        <div className="tv__heading">
          <p>popular</p>
        </div>
        <div className="tv__movie-card-container"> 
         <div className="tv__movie-card-container-helper">
          <TVCard />
          <TVCard />
          <TVCard />
          <TVCard />
          <TVCard />
          <TVCard />
          <TVCard />
          <TVCard />
          <TVCard />
          <TVCard />
        </div>
      </div>
      <div className="tv__container">
        <div className="tv__heading">
          <p>adult animation</p>
        </div>
        <div className="tv__movie-card-container">
          <div className="tv-for-you__outer">
              {TVAdultAnimationData.map((item, index) => {
                return (
                  <div key={index} className="tv-for-you__container">
                    <Link to={item.path} >
                      <div className="tv-for-you__img">
                        <img src={item.image} alt="adult-animation-img" />
                      </div>
                      <div className="tv-for-you__info">
                        <div className="tv-for-you__info-title">
                          <p>{item.title}</p>
                        </div>
                        <div className="tv-for-you__info-bio">
                          <p>{item.rated}</p> &#8226;
                          <p>{item.genre}</p> &#8226;
                          <p>{item.series}</p>
                          <p>{item.year}</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
        <div className="tv__container">
          <div className="tv__heading">
            <p>reality tv</p>
          </div>
          <div className="tv__movie-card-container">
            <div className="tv-for-you__outer">
              {TVRealityData.map((item, index) => {
                return (
                  <div key={index} className="tv-for-you__container">
                    <Link to={item.path} >
                      <div className="tv-for-you__img">
                        <img src={item.image} alt="" />
                      </div>
                      <div className="tv-for-you__info">
                        <div className="tv-for-you__info-title">
                          <p>{item.title}</p>
                        </div>
                        <div className="tv-for-you__info-bio">
                          <p>{item.rated}</p> &#8226;
                          <p>{item.genre}</p> &#8226;
                          <p>{item.series}</p>
                          <p>{item.year}</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="tv__container">
          <div className="tv__heading">
            <p>hbo max</p>
          </div>
          <div className="tv__movie-card-container">
            <div className="tv-for-you__outer">
              {TVHBOData.map((item, index) => {
                return (
                  <div key={index} className="tv-for-you__container">
                    <Link to={item.path} >
                      <div className="tv-for-you__img">
                        <img src={item.image} alt="" />
                      </div>
                      <div className="tv-for-you__info">
                        <div className="tv-for-you__info-title">
                          <p>{item.title}</p>
                        </div>
                        <div className="tv-for-you__info-bio">
                          <p>{item.rated}</p> &#8226;
                          <p>{item.genre}</p> &#8226;
                          <p>{item.series}</p>
                          <p>{item.year}</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="tv__container">
          <div className="tv__heading">
            <p>showtime</p>
          </div>
          <div className="tv__movie-card-container">
            <div className="tv-for-you__outer">
              {TVShowtimeData.map((item, index) => {
                return (
                  <div key={index} className="tv-for-you__container">
                    <Link to={item.path} >
                      <div className="tv-for-you__img">
                        <img src={item.image} alt="" />
                      </div>
                      <div className="tv-for-you__info">
                        <div className="tv-for-you__info-title">
                          <p>{item.title}</p>
                        </div>
                        <div className="tv-for-you__info-bio">
                          <p>{item.rated}</p> &#8226;
                          <p>{item.genre}</p> &#8226;
                          <p>{item.series}</p>
                          <p>{item.year}</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="tv__container">
          <div className="tv__heading">
            <p>starz</p>
          </div>
          <div className="tv__movie-card-container">
            <div className="tv-for-you__outer">
              {TVForYouData.map((item, index) => {
                return (
                  <div key={index} className="tv-for-you__container">
                    <Link to={item.path} >
                      <div className="tv-for-you__img">
                        <img src={item.image} alt="" />
                      </div>
                      <div className="tv-for-you__info">
                        <div className="tv-for-you__info-title">
                          <p>{item.title}</p>
                        </div>
                        <div className="tv-for-you__info-bio">
                          <p>{item.rated}</p> &#8226;
                          <p>{item.genre}</p> &#8226;
                          <p>{item.series}</p>
                          <p>{item.year}</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="tv__container">
          <div className="tv__heading">
            <p>staff picks</p>
          </div>
          <div className="tv__movie-card-container">
            <div className="tv-for-you__outer">
              {TVForYouData.map((item, index) => {
                return (
                  <div key={index} className="tv-for-you__container">
                    <Link to={item.path} >
                      <div className="tv-for-you__img">
                        <img src={item.image} alt="" />
                      </div>
                      <div className="tv-for-you__info">
                        <div className="tv-for-you__info-title">
                          <p>{item.title}</p>
                        </div>
                        <div className="tv-for-you__info-bio">
                          <p>{item.rated}</p> &#8226;
                          <p>{item.genre}</p> &#8226;
                          <p>{item.series}</p>
                          <p>{item.year}</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="tv__container">
          <div className="tv__heading">
            <p>bing-worthy tv</p>
          </div>
          <div className="tv__movie-card-container">
            <div className="tv-for-you__outer">
              {TVForYouData.map((item, index) => {
                return (
                  <div key={index} className="tv-for-you__container">
                    <Link to={item.path} >
                      <div className="tv-for-you__img">
                        <img src={item.image} alt="" />
                      </div>
                      <div className="tv-for-you__info">
                        <div className="tv-for-you__info-title">
                          <p>{item.title}</p>
                        </div>
                        <div className="tv-for-you__info-bio">
                          <p>{item.rated}</p> &#8226;
                          <p>{item.genre}</p> &#8226;
                          <p>{item.series}</p>
                          <p>{item.year}</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="tv__container">
          <div className="tv__heading">
            <p>investigation tv</p>
          </div>
          <div className="tv__movie-card-container">
            <div className="tv-for-you__outer">
              {TVForYouData.map((item, index) => {
                return (
                  <div key={index} className="tv-for-you__container">
                    <Link to={item.path} >
                      <div className="tv-for-you__img">
                        <img src={item.image} alt="" />
                      </div>
                      <div className="tv-for-you__info">
                        <div className="tv-for-you__info-title">
                          <p>{item.title}</p>
                        </div>
                        <div className="tv-for-you__info-bio">
                          <p>{item.rated}</p> &#8226;
                          <p>{item.genre}</p> &#8226;
                          <p>{item.series}</p>
                          <p>{item.year}</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="tv__container">
          <div className="tv__heading">
            <p>sci-fi tv</p>
          </div>
          <div className="tv__movie-card-container">
            <div className="tv-for-you__outer">
              {TVForYouData.map((item, index) => {
                return (
                  <div key={index} className="tv-for-you__container">
                    <Link to={item.path} >
                      <div className="tv-for-you__img">
                        <img src={item.image} alt="" />
                      </div>
                      <div className="tv-for-you__info">
                        <div className="tv-for-you__info-title">
                          <p>{item.title}</p>
                        </div>
                        <div className="tv-for-you__info-bio">
                          <p>{item.rated}</p> &#8226;
                          <p>{item.genre}</p> &#8226;
                          <p>{item.series}</p>
                          <p>{item.year}</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="tv__container">
          <div className="tv__heading">
            <p>'90s family comedy</p>
          </div>
          <div className="tv__movie-card-container">
            <div className="tv-for-you__outer">
              {TVForYouData.map((item, index) => {
                return (
                  <div key={index} className="tv-for-you__container">
                    <Link to={item.path} >
                      <div className="tv-for-you__img">
                        <img src={item.image} alt="" />
                      </div>
                      <div className="tv-for-you__info">
                        <div className="tv-for-you__info-title">
                          <p>{item.title}</p>
                        </div>
                        <div className="tv-for-you__info-bio">
                          <p>{item.rated}</p> &#8226;
                          <p>{item.genre}</p> &#8226;
                          <p>{item.series}</p>
                          <p>{item.year}</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="tv__container">
          <div className="tv__heading">
            <p>classic sitcoms</p>
          </div>
          <div className="tv__movie-card-container">
            <div className="tv-for-you__outer">
              {TVForYouData.map((item, index) => {
                return (
                  <div key={index} className="tv-for-you__container">
                    <Link to={item.path} >
                      <div className="tv-for-you__img">
                        <img src={item.image} alt="" />
                      </div>
                      <div className="tv-for-you__info">
                        <div className="tv-for-you__info-title">
                          <p>{item.title}</p>
                        </div>
                        <div className="tv-for-you__info-bio">
                          <p>{item.rated}</p> &#8226;
                          <p>{item.genre}</p> &#8226;
                          <p>{item.series}</p>
                          <p>{item.year}</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="tv__container">
          <div className="tv__heading">
            <p>nostalgic cartoons</p>
          </div>
          <div className="tv__movie-card-container">
            <div className="tv-for-you__outer">
              {TVForYouData.map((item, index) => {
                return (
                  <div key={index} className="tv-for-you__container">
                    <Link to={item.path} >
                      <div className="tv-for-you__img">
                        <img src={item.image} alt="" />
                      </div>
                      <div className="tv-for-you__info">
                        <div className="tv-for-you__info-title">
                          <p>{item.title}</p>
                        </div>
                        <div className="tv-for-you__info-bio">
                          <p>{item.rated}</p> &#8226;
                          <p>{item.genre}</p> &#8226;
                          <p>{item.series}</p>
                          <p>{item.year}</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="tv__container">
          <div className="tv__heading">
            <p>full series: comedy</p>
          </div>
          <div className="tv__movie-card-container">
            <div className="tv-for-you__outer">
              {TVForYouData.map((item, index) => {
                return (
                  <div key={index} className="tv-for-you__container">
                    <Link to={item.path} >
                      <div className="tv-for-you__img">
                        <img src={item.image} alt="" />
                      </div>
                      <div className="tv-for-you__info">
                        <div className="tv-for-you__info-title">
                          <p>{item.title}</p>
                        </div>
                        <div className="tv-for-you__info-bio">
                          <p>{item.rated}</p> &#8226;
                          <p>{item.genre}</p> &#8226;
                          <p>{item.series}</p>
                          <p>{item.year}</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="tv__container">
          <div className="tv__heading">
            <p>full series: drama</p>
          </div>
          <div className="tv__movie-card-container">
            <div className="tv-for-you__outer">
              {TVForYouData.map((item, index) => {
                return (
                  <div key={index} className="tv-for-you__container">
                    <Link to={item.path} >
                      <div className="tv-for-you__img">
                        <img src={item.image} alt="" />
                      </div>
                      <div className="tv-for-you__info">
                        <div className="tv-for-you__info-title">
                          <p>{item.title}</p>
                        </div>
                        <div className="tv-for-you__info-bio">
                          <p>{item.rated}</p> &#8226;
                          <p>{item.genre}</p> &#8226;
                          <p>{item.series}</p>
                          <p>{item.year}</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="tv__container">
          <div className="tv__heading">
            <p>based on books</p>
          </div>
          <div className="tv__movie-card-container">
            <div className="tv-for-you__outer">
              {TVForYouData.map((item, index) => {
                return (
                  <div key={index} className="tv-for-you__container">
                    <Link to={item.path} >
                      <div className="tv-for-you__img">
                        <img src={item.image} alt="" />
                      </div>
                      <div className="tv-for-you__info">
                        <div className="tv-for-you__info-title">
                          <p>{item.title}</p>
                        </div>
                        <div className="tv-for-you__info-bio">
                          <p>{item.rated}</p> &#8226;
                          <p>{item.genre}</p> &#8226;
                          <p>{item.series}</p>
                          <p>{item.year}</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="tv__container">
          <div className="tv__heading">
            <p>terrifying tv</p>
          </div>
          <div className="tv__movie-card-container">
            <div className="tv-for-you__outer">
              {TVForYouData.map((item, index) => {
                return (
                  <div key={index} className="tv-for-you__container">
                    <Link to={item.path} >
                      <div className="tv-for-you__img">
                        <img src={item.image} alt="" />
                      </div>
                      <div className="tv-for-you__info">
                        <div className="tv-for-you__info-title">
                          <p>{item.title}</p>
                        </div>
                        <div className="tv-for-you__info-bio">
                          <p>{item.rated}</p> &#8226;
                          <p>{item.genre}</p> &#8226;
                          <p>{item.series}</p>
                          <p>{item.year}</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="tv__container">
          <div className="tv__heading">
            <p>dubbed anime</p>
          </div>
          <div className="tv__movie-card-container">
            <div className="tv-for-you__outer">
              {TVForYouData.map((item, index) => {
                return (
                  <div key={index} className="tv-for-you__container">
                    <Link to={item.path} >
                      <div className="tv-for-you__img">
                        <img src={item.image} alt="" />
                      </div>
                      <div className="tv-for-you__info">
                        <div className="tv-for-you__info-title">
                          <p>{item.title}</p>
                        </div>
                        <div className="tv-for-you__info-bio">
                          <p>{item.rated}</p> &#8226;
                          <p>{item.genre}</p> &#8226;
                          <p>{item.series}</p>
                          <p>{item.year}</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
                <div className="tv__container">
          <div className="tv__heading">
            <p>suspenseful tv dramas</p>
          </div>
          <div className="tv__movie-card-container">
            <div className="tv-for-you__outer">
              {TVForYouData.map((item, index) => {
                return (
                  <div key={index} className="tv-for-you__container">
                    <Link to={item.path} >
                      <div className="tv-for-you__img">
                        <img src={item.image} alt="" />
                      </div>
                      <div className="tv-for-you__info">
                        <div className="tv-for-you__info-title">
                          <p>{item.title}</p>
                        </div>
                        <div className="tv-for-you__info-bio">
                          <p>{item.rated}</p> &#8226;
                          <p>{item.genre}</p> &#8226;
                          <p>{item.series}</p>
                          <p>{item.year}</p>
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
    </div>
  )
}

export default TV
