import React from 'react';
import './technologies.css';
import {
  SectionDivider,
  SectionTitle,
  SectionText,
  List,
} from '../../components';

import { DiHtml5, DiReact, DiJavascript1 } from 'react-icons/di';

const Technologies = () => {
  return (
    <div className="section__flex section__padding" id="tech">
      <SectionDivider />
      <SectionTitle>Technologies</SectionTitle>
      <SectionText>
        I've worked with Html, Css, JavaScript and React js.
      </SectionText>
      <ul className="portfolio__list">
        {[
          {
            icon: <DiHtml5 size="3rem" />,
            heading: 'Html and CSS',
            description: 'Worked with Html Css',
          },
          {
            icon: <DiJavascript1 size="3rem" />,
            heading: 'JavaScript',
            description: 'Worked with JavaScript',
          },
          {
            icon: <DiReact size="3rem" />,
            heading: 'React',
            description: 'Worked with React.js',
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
