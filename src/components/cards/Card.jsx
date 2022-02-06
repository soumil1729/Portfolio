import React from 'react';
import './Card.css';

const Card = ({ proj }) => {
  const { image, title, description, tags, source, visit } = proj;
  return (
    <div className="portfolio__card">
      <img src={image} />
      <div className="portfolio__card-title_content">
        <div className="portfolio__card-title_content-heading3">
          <h3>{title}</h3>
          <div className="portfolio__card-title_content-description">
            {description}
          </div>
          <div className="portfolio__card-title_content-divider"></div>
        </div>
        <div>
          <div className="portfolio__card-title_content-taglist">
            <ul>
              {tags.map((tag, i) => (
                <li key={i}>{tag}</li>
              ))}
            </ul>
          </div>
          <div className="portfolio__card-title_content-btn">
            <a href={visit}>View webpage</a>
            <a href={source}>View code</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
