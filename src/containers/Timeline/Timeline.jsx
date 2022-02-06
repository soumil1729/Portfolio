import React from 'react';
import './Timeline.css';
import { SectionText, SectionTitle } from '../../components';
import { Carousel } from '../../components';
import { TimeLineData } from '../../constants/constants';

const Timeline = () => {
  return (
    <section className="section__padding">
      <SectionTitle>About</SectionTitle>
      <SectionText>
        I am an aspiring web developer with, having good problem solving skills.
        I am quite passionate about learning and trying out new things. <br />I
        consistently demonstrate a can-do attitude and embrace tough challenges
        with energy and enthusiasm. I am always on the lookout for opportunities
        to collaborate on new ideas and technologies.
      </SectionText>
      <SectionText>
        skills: <br />
        HTML5, Cascading Style Sheets, JavaScript, React.js, Bootstrap, Sass,
        Git, GitHub.
      </SectionText>
      <br />
      <h2 className="portfolio__timeline-heading">My Timeline:</h2>
      <div className="portfolio__CarouselContainer">
        <ul className="portfolio__CarouselContainer-items">
          {TimeLineData.map((timeline) => (
            <Carousel data={timeline} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Timeline;
