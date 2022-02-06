import React from 'react';
import './technologies.css';
import {
  SectionDivider,
  SectionTitle,
  SectionText,
  List,
} from '../../components';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';

const Technologies = () => {
  return (
    <div className="section__flex section__padding">
      <SectionDivider />
      <SectionTitle>Technologies</SectionTitle>
      <SectionText>
        I've worked with a range a technologies in the web development world.
        From Front-end To Back-end.
      </SectionText>
      <ul className="portfolio__list">
        {[
          {
            icon: <DiReact size="3rem" />,
            heading: 'Front end',
            description: 'Experiece with React.js',
          },
          {
            icon: <DiFirebase size="3rem" />,
            heading: 'Front end',
            description: 'Experiece with React.js',
          },
          {
            icon: <DiZend size="3rem" />,
            heading: 'Front end',
            description: 'Experiece with React.js',
          },
        ].map((item, i) => (
          <List key={i} items={item} />
        ))}
      </ul>
      <br />
      <br />
      <SectionDivider second={true} />
    </div>
  );
};

export default Technologies;
