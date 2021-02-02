import React from 'react';
import './CategoryStyles/MyStuff.scss';
import MyStuffCard from './MyStuffCard';

function MyStuff() {
  return (
    <div className="my-stuff__container">
      <p>My Stuff</p>
      <div className="my-stuff__movie-card-container">
        <div className="my-stuff__movie-card-container-helper">
          <MyStuffCard />
          <MyStuffCard />
          <MyStuffCard />
          <MyStuffCard />
          <MyStuffCard />
          <MyStuffCard />
          <MyStuffCard />
          <MyStuffCard />
          <MyStuffCard />
          <MyStuffCard />
        </div>
      </div>
    </div>
  )
}

export default MyStuff
