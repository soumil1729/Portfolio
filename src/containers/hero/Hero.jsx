import React from 'react';
import './hero.css';
import {
  BackgroundAnimation,
  SectionTitle,
  SectionText,
} from '../../components';

const Hero = () => {
  return (
    <div className="portfolio__hero section__padding" id="hero">
      <div className="portfolio__hero-content">
        <SectionTitle>
          Hi, I'm <br />
          SOUMIL SANTRA
        </SectionTitle>
        <SectionText>
          I am an aspiring Web Developer, having good problem solving skills.
          <br /> I am quite passionate about learning and trying out new things.
        </SectionText>
        <button
          className="portfolio__hero-content_button"
          onClick={() => (window.location = 'https:/google.com')}
        >
          Learn more
        </button>
      </div>
      <div className="portfolio__hero-background">
        <BackgroundAnimation />
      </div>
    </div>
  );
};

export default Hero;
