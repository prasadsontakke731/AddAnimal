import bird from './assets/bird.svg';
import cat from './assets/cat.svg';
import cow from './assets/cow.svg';
import dog from './assets/dog.svg';
import gator from './assets/gator.svg';
import heart from './assets/heart.svg';
import horse from './assets/horse.svg';
import './AnimalShow.css';
import React, { useState } from 'react';

const svgMap = {
  bird,
  cat,
  cow,
  dog,
  gator,

  horse,
};
function AnimalShow({ type }) {
  // states
  const [clicks, setClicks] = useState(0);

  // onclick function
  const handleClick = () => {
    setClicks(clicks + 1);
  };
  return (
    <div onClick={handleClick} className='animal-show'>
      <img alt='animal' className='animal' src={svgMap[type]} />
      <img
        alt='heart'
        className='heart'
        src={heart}
        style={{ width: 10 + 10 * clicks + 'px' }}
      />
    </div>
  );
}

export default AnimalShow;
