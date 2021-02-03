import React from 'react';
import { Link } from 'react-router-dom';
import { NetworksData } from '../Category/CategoryData/NetworksData/NetworksData';
import { NetworkKidsData } from '../Category/CategoryData/NetworksData/NetworkKidsData';
import { NetworkNewsData } from '../Category/CategoryData/NetworksData/NetworkNewsData';
import { NetworkAZData } from '../Category/CategoryData/NetworksData/NetworkAZData';

import './CategoryStyles/NetworkStyles/Network.scss';

function Networks() {
  return (
    <div>
      <div className="network__container">
        <div className="network__title">
          <p>Networks</p>
        </div>
        <div className="network__heading">
          <p>entertainment</p>
        </div>
        <div className="network__movie-card-container">
          <div className="network-for-you__outer">
              {NetworksData.map((item, index) => {
                return (
                  <div key={index} className="network-for-you__container">
                    <Link to={item.path} >
                      <div className="network-for-you__img">
                        <img src={item.image} alt="adult-animation-img" />
                      </div>
                      <div className="network-for-you__info">
                        <div className="network-for-you__info-title">
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
      <div className="network__container">
        <div className="network__heading">
          <p>kids</p>
        </div>
        <div className="network__movie-card-container">
          <div className="network-for-you__outer">
              {NetworkKidsData.map((item, index) => {
                return (
                  <div key={index} className="network-for-you__container">
                    <Link to={item.path} >
                      <div className="network-for-you__img">
                        <img src={item.image} alt="adult-animation-img" />
                      </div>
                      <div className="network-for-you__info">
                        <div className="network-for-you__info-title">
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
      <div className="network__container">
        <div className="network__heading">
          <p>news</p>
        </div>
        <div className="network__movie-card-container">
          <div className="network-for-you__outer">
              {NetworkNewsData.map((item, index) => {
                return (
                  <div key={index} className="network-for-you__container">
                    <Link to={item.path} >
                      <div className="network-for-you__img">
                        <img src={item.image} alt="adult-animation-img" />
                      </div>
                      <div className="network-for-you__info">
                        <div className="network-for-you__info-title">
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
      <div className="network__container">
        <div className="network__heading">
          <p>a-z</p>
        </div>
        <div className="network__movie-card-container">
          <div className="network-for-you__outer">
              {NetworkAZData.map((item, index) => {
                return (
                  <div key={index} className="network-for-you__container">
                    <Link to={item.path} >
                      <div className="network-for-you__img">
                        <img src={item.image} alt="adult-animation-img" />
                      </div>
                      <div className="network-for-you__info">
                        <div className="network-for-you__info-title">
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
    </div>
  )
}

export default Networks
