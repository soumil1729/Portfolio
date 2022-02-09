import React from 'react';
import './SocialIcons.css';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

const SocialIcons = () => {
  return (
    <div className="social-icon-container">
      <div className="portfolio__navbar-Social_icons">
        <a href="https://github.com/soumil1729">
          <AiFillGithub size="3rem" />
        </a>
        <a href="https://www.linkedin.com/in/soumil007/">
          <AiFillLinkedin size="3rem" />
        </a>
        <a href="https://github.com/soumil1729">
          <AiFillInstagram size="3rem" />
        </a>
      </div>
    </div>
  );
};

export default SocialIcons;
