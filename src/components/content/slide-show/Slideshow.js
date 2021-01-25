import React from 'react';
import japaness from '../../../assets/img/japanese-umbrellas-636870_1920.jpg';
import './Slideshow.scss';

const Slideshow = () => {
  return (
    <div className="slider">
      <div className="slider-slides">
        <div className="slider-image" style={{ backgroundImage: `url(${japaness})` }}></div>
      </div>
    </div>
  );
};

export default Slideshow;
