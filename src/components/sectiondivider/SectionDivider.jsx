import React from 'react';
import './sectionDivider.css';

const SectionDivider = ({ second }) => {
  return second ? (
    <div className="section__divider two"></div>
  ) : (
    <div className="section__divider"></div>
  );
};

export default SectionDivider;
