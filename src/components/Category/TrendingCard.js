import React from 'react';
import './CategoryStyles/TrendingCard.scss';

function TrendingCard() {
  return (
    <div className="trending-card__container">
      <div className="trending-card__img">
        <img src="https://images.pexels.com/photos/6497049/pexels-photo-6497049.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
        <div className="trending-card__info">
          <p>Trending Card</p>
          <p>For fans of Comedy</p>
          <p>R &middot; Comedy, Korean &middot; 2019</p>
        </div>
      </div>
    </div>
  )
}

export default TrendingCard
