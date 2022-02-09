import React from 'react';
import './Footer.css';
import { SectionDivider, SocialIcons } from '../../components';

const Footer = () => {
  let year = new Date().getFullYear();
  return (
    <footer className="section__padding  portfolio__footer-container">
      <SectionDivider second={true} />
      <div className="portfolio__footer-items">
        <p>Copyright &copy; {year}. All rights reserved</p>
        <SocialIcons />
      </div>
    </footer>
  );
};

export default Footer;
