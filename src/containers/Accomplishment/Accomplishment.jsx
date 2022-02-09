import React from 'react';
import './Accomplishment.css';
import { SectionTitle, SectionDivider, Box } from '../../components';

const data = [
  { number: '4*', text: 'Code Chef' },
  { number: '4*', text: 'Code force' },
  { number: '2000+', text: 'Leetcode' },
  { number: '5+', text: 'Open source projects' },
];

const Accomplishment = () => {
  return (
    <section className="section__padding">
      <SectionDivider />
      <SectionTitle>Accomplishment</SectionTitle>
      <div className="portfolio__accomplishments-container">
        {data.map((d, i) => (
          <Box key={i} data={d} />
        ))}
      </div>
    </section>
  );
};

export default Accomplishment;
