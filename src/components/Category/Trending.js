import React from 'react';
import './CategoryStyles/Trending.scss';
import TrendingCard from './TrendingCard';

function Trending() {
  return (
    <div className="trending__container">
      <p>Trending</p>
      <div className="trending__movie-card-container">
        <div className="trending__movie-card-container-helper">
          <TrendingCard />
          <TrendingCard />
          <TrendingCard />
          <TrendingCard />
          <TrendingCard />
          <TrendingCard />
          <TrendingCard />
          <TrendingCard />
          <TrendingCard />
          <TrendingCard />
        </div>
      </div>
    </div>
  )
}

export default Trending
