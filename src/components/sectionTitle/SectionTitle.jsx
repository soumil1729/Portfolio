import React from 'react';
import './sectionTitle.css';
import { Children } from 'react';

const SectionTitle = (props) => {
  return <h2 className="section-title">{props.children}</h2>;
};

export default SectionTitle;
