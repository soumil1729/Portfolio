import React from 'react';
import './Box.css';

const Box = ({ data }) => {
  const { number, text } = data;
  return (
    <div className="portfolio__accomplishment-item">
      <h5 className="portfolio__accomplishment-heading">{number}</h5>
      <p className="portfolio__accomplishment-text">{text}</p>
    </div>
  );
};

export default Box;
