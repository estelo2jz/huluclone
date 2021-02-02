import React from 'react';
import './CategoryStyles/MyStuffCard.scss';

function MyStuffCard() {
  return (
    <div className="my-stuff-card__container">
      <div className="my-stuff-card__img">
        <img src="https://images.pexels.com/photos/6497049/pexels-photo-6497049.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
        <div className="my-stuff-card__info">
          <div>
            <p>My Stuff Card</p>
          </div>
          <div>
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

export default MyStuffCard
