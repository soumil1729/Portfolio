import React from 'react';
import './List.css';

const List = ({ items }) => {
  const { icon, heading, description } = items;
  return (
    <>
      <li className="portfolio__list-item">
        <picture>{icon}</picture>
        <div className="portfolio__list-item_container">
          <h3 className="portfolio__list-item-heading">{heading}</h3>
          <p className="portfolio__list-item-description">{description}</p>
        </div>
      </li>
    </>
  );
};

export default List;
