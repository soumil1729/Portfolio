import React from 'react';
import './SectionText.css';

const SectionText = (props) => {
  return <p className="porfolio__section-text">{props.children}</p>;
};

export default SectionText;
