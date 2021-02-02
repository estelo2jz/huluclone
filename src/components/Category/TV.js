import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TVGenreData } from './CategoryData/TVData/TVGenreData';
import './CategoryStyles/TVCard.scss';
import './CategoryStyles/TV.scss';
import './CategoryStyles/TVGenre.scss';

function TVCard() {
  return (
    <div className="tv-card__container">
      <div className="tv-card__img">
        <img src="https://images.pexels.com/photos/6497049/pexels-photo-6497049.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
        <div className="tv-card__info">
          <div>
            <p>TV Card</p>
          </div>
          <div>
            <p>
            From prolific creators Ryan Murphy and Brad Falchuk, new procedural drama 9-1-1 is a fast-paced exploration into the lives and careers of first responders – cops, paramedics, firefighters – the people who put their lives on the line to save others.
            </p>
          </div>
          {/* <div>
            <p>Details</p>
          </div> */}
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
    </div>
    </div>
  )
}

export default TV
