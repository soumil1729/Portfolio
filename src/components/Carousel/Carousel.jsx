import React from 'react';
import './Carousel.css';
import timeline from '../svg/timeline.svg';

const Carousel = ({ data }) => {
  const { year, text } = data;
  return (
    <div className="portfolio__CarouselContainer-content">
      <h4 className="portfolio__Carousel-title">
        {year}
        <img className="portfolio__Carousel-svg" src={timeline}></img>
      </h4>
      <p className="portfolio__Carousel-text">{text}</p>
    </div>
  );
};

export default Carousel;
