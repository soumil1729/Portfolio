import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import './navbar.css';

const Navbar = () => {
  return (
    <div className="portfolio__navbar">
      <div className="portfolio__navbar__icon_container">
        <a href="/#">
          <DiCssdeck size="3rem" />
          <span>Portfolio</span>
        </a>
      </div>
      <div className="portfolio__navbar-links_container">
        <p>
          <a href="#projects">Projects</a>
        </p>
        <p>
          <a href="#tech">Technologies</a>
        </p>
        <p>
          <a href="#about">About</a>
        </p>
      </div>
      <div className="portfolio__navbar-Social_icons">
        <a href="https://github.com/soumil1729">
          <AiFillGithub size="3rem" />
        </a>
        <a href="https://github.com/soumil1729">
          <AiFillLinkedin size="3rem" />
        </a>
        <a href="https://github.com/soumil1729">
          <AiFillInstagram size="3rem" />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
