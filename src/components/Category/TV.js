import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { TVGenreData } from './CategoryData/TVData/TVGenreData';
import { TVForYouData } from './CategoryData/TVData/TVForYouData';
import { TVNetworksData } from './CategoryData/TVData/TVNetworksData';
import { TVAdultAnimationData } from './CategoryData/TVData/TVAdultAnimationData';
import { TVRealityData } from './CategoryData/TVData/TVRealityData';
import { TVHBOData } from './CategoryData/TVData/TVHBOData';
import { TVShowtimeData } from './CategoryData/TVData/TVShowtimeData';

import { TV90sData } from './CategoryData/TVData/TV90sData';
import { TVBingData } from './CategoryData/TVData/TVBingData';
import { TVBooksData } from './CategoryData/TVData/TVBooksData';
import { TVClassicData } from './CategoryData/TVData/TVClassicData';
import { TVDubbedData } from './CategoryData/TVData/TVDubbedData';
import { TVFullSeriesComedyData, TVFullSeriesDramaData } from './CategoryData/TVData/TVFullSeriesData';
import { TVInvestigationData } from './CategoryData/TVData/TVInvestigationData';
import { TVNostalgicData } from './CategoryData/TVData/TVNostalgicData';
import { TVSCIFIData } from './CategoryData/TVData/TVSCIFIData';
import { TVStaffData } from './CategoryData/TVData/TVStaffData';
import { TVStarzData } from './CategoryData/TVData/TVStarzData';
import { TVSuspensefulData } from './CategoryData/TVData/TVSuspensefulData';
import { TVTerrifyingData } from './CategoryData/TVData/TVTerrifyingData';

import './CategoryStyles/TVCard.scss';
import './CategoryStyles/TV.scss';
import './CategoryStyles/TVGenre.scss';

function TVCard({title, desc, movieImg}) {
  return (
    <div className="tv-card__container">
      <div className="tv-card__img">
        <img src={movieImg} alt="" />
        <div className="tv-card__info">
          <div className="tv-card__info-title">
            <p>{title}</p>
          </div>
          <div className="tv-card__info-bio">
            <p>{desc}</p>
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
      {/* <div className="tv__container">
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
       </div> */}
      <div className="tv__container">
        <div className="tv__heading">
          <p>popular</p>
        </div>
        <div className="tv__movie-card-container"> 
         <div className="tv__movie-card-container-helper">
          <TVCard
            title = "Ready Player One"
            desc = "From prolific creators Ryan Murphy and Brad Falchuk, new procedural drama 9-1-1 is a fast-paced exploration into the lives and careers of first responders – cops, paramedics, firefighters – the people who put their lives on the line to save others."          
            movieImg = "https://images-na.ssl-images-amazon.com/images/I/91UjyAWXgpL._RI_.jpg"
          />
          <TVCard
            title = "Godzilla vs. Kong"
            desc = "Fearsome monsters Godzilla and King Kong square off in an epic battle for the ages, while humanity looks to wipe out both of the creatures and take back the planet once and for all."
            movieImg ="https://m.media-amazon.com/images/M/MV5BZmYzMzU4NjctNDI0Mi00MGExLWI3ZDQtYzQzYThmYzc2ZmNjXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg"          
          />
          <TVCard
            title = "The Little Things"
            desc = "Deputy Sheriff Joe 'Deke' Deacon joins forces with Sgt. Jim Baxter to search for a serial killer who's terrorizing Los Angeles. As they track the culprit, Baxter is unaware that the investigation is dredging up echoes of Deke's past, uncovering disturbing secrets that could threaten more than his case."
            movieImg ="https://data1.ibtimes.co.in/en/full/754220/little-things.jpg"          
          />
          <TVCard
            title = "The White TIger"
            desc = "A rich Indian family's ambitious driver uses his wit and cunning to escape from poverty and rise to the top as an entrepreneur."
            movieImg ="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRXUIl22nPPzOfKqcuKWdAsuR8Htzn0Wzgm85ERYDyiXNq4294l"          
          />
          <TVCard
            title = "The Dig"
            desc = "An excavator and his team discover a wooden ship from the Dark Ages while digging up a burial ground on a woman's estate."
            movieImg ="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSjD_ANj8PzSCCYRVPMLG9sRHVmbNlkV-hIlqn69COwcn04q3mt"          
          />
          <TVCard
            title = "Soul"
            desc = "Ever wonder where your passion, your dreams and your interests come from? What is it that makes you... YOU? In 2020, Pixar Animation Studios takes you on a journey from the streets of New York City to the cosmic realms to discover the answers to life's most important questions."
            movieImg ="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRad-FUIhFTsBo8thIqcdj615FVg11vRfobZoIreSdKLcH_08Dq"          
          />
          <TVCard
            title = "Mortal Kombat"
            desc = "Mortal Kombat is a mysterious, intergalactic tournament of ancient martial arts. Shaolin Monk Liu Kang, from Earth, gets invited as a competitor."
            movieImg ="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTdgv6IdGtMsNQRPa2xomFv9u053mmOK4xDbguK4gB8XRx7llCn"          
          />
          <TVCard
            title = "Wonder Woman 1984"
            desc = "Diana Prince lives quietly among mortals in the vibrant, sleek 1980s -- an era of excess driven by the pursuit of having it all. Though she's come into her full powers, she maintains a low profile by curating ancient artifacts, and only performing heroic acts incognito. But soon, Diana will have to muster all of her strength, wisdom and courage as she finds herself squaring off against Maxwell Lord and the Cheetah, a villainess who possesses superhuman strength and agility."
            movieImg ="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQkZT1pFtcu6i3SIdbmL0QXRGjLSVYv7Le6qamWuz0eaqCifY1m"          
          />
          <TVCard
            title = "Outside the Wire"
            desc = "In the near future, a drone pilot sent into a war zone finds himself paired up with a top-secret android officer on a mission to stop a nuclear attack."
            movieImg ="https://upload.wikimedia.org/wikipedia/en/b/b8/OutsideTheWire.jpeg"          
          />
          <TVCard
            title = "Master"
            desc = "An alcoholic professor is sent to a juvenile school, where he clashes with a gangster who uses the school's children for criminal activities."
            movieImg ="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQMSht-LDmcdy8dLa7Zf2dFTjNVox1liGxUAJlpevqT_pWX9xj3"          
          />
        </div>
      </div>
      <div className="tv__container">
        <div className="tv__heading">
          <p>all networks</p>
        </div>
        <div className="tv__movie-card-container">
          <div className="tv-for-you__outer">
              {TVNetworksData.map((item, index) => {
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
        <div className="tv__container">
          <div className="tv__heading">
            <p>starz</p>
          </div>
          <div className="tv__movie-card-container">
            <div className="tv-for-you__outer">
              {TVStarzData.map((item, index) => {
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
        <div className="tv__container">
          <div className="tv__heading">
            <p>staff picks</p>
          </div>
          <div className="tv__movie-card-container">
            <div className="tv-for-you__outer">
              {TVStaffData.map((item, index) => {
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
        <div className="tv__container">
          <div className="tv__heading">
            <p>bing-worthy tv</p>
          </div>
          <div className="tv__movie-card-container">
            <div className="tv-for-you__outer">
              {TVBingData.map((item, index) => {
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
        <div className="tv__container">
          <div className="tv__heading">
            <p>investigation tv</p>
          </div>
          <div className="tv__movie-card-container">
            <div className="tv-for-you__outer">
              {TVInvestigationData.map((item, index) => {
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
        <div className="tv__container">
          <div className="tv__heading">
            <p>sci-fi tv</p>
          </div>
          <div className="tv__movie-card-container">
            <div className="tv-for-you__outer">
              {TVSCIFIData.map((item, index) => {
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
        <div className="tv__container">
          <div className="tv__heading">
            <p>'90s family comedy</p>
          </div>
          <div className="tv__movie-card-container">
            <div className="tv-for-you__outer">
              {TV90sData.map((item, index) => {
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
        <div className="tv__container">
          <div className="tv__heading">
            <p>classic sitcoms</p>
          </div>
          <div className="tv__movie-card-container">
            <div className="tv-for-you__outer">
              {TVClassicData.map((item, index) => {
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
        <div className="tv__container">
          <div className="tv__heading">
            <p>nostalgic cartoons</p>
          </div>
          <div className="tv__movie-card-container">
            <div className="tv-for-you__outer">
              {TVNostalgicData.map((item, index) => {
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
        <div className="tv__container">
          <div className="tv__heading">
            <p>full series: comedy</p>
          </div>
          <div className="tv__movie-card-container">
            <div className="tv-for-you__outer">
              {TVFullSeriesComedyData.map((item, index) => {
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
        <div className="tv__container">
          <div className="tv__heading">
            <p>full series: drama</p>
          </div>
          <div className="tv__movie-card-container">
            <div className="tv-for-you__outer">
              {TVFullSeriesDramaData.map((item, index) => {
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
        <div className="tv__container">
          <div className="tv__heading">
            <p>based on books</p>
          </div>
          <div className="tv__movie-card-container">
            <div className="tv-for-you__outer">
              {TVBooksData.map((item, index) => {
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
        <div className="tv__container">
          <div className="tv__heading">
            <p>terrifying tv</p>
          </div>
          <div className="tv__movie-card-container">
            <div className="tv-for-you__outer">
              {TVTerrifyingData.map((item, index) => {
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
        <div className="tv__container">
          <div className="tv__heading">
            <p>dubbed anime</p>
          </div>
          <div className="tv__movie-card-container">
            <div className="tv-for-you__outer">
              {TVDubbedData.map((item, index) => {
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
                <div className="tv__container">
          <div className="tv__heading">
            <p>suspenseful tv dramas</p>
          </div>
          <div className="tv__movie-card-container">
            <div className="tv-for-you__outer">
              {TVSuspensefulData.map((item, index) => {
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
    </div>
  )
}

export default TV
