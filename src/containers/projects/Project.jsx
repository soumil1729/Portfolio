import React from 'react';
import './project.css';
import { SectionDivider, SectionTitle } from '../../components';
import { projects } from '../../constants/constants.js';
import { Card } from '../../components';

const Project = () => {
  return (
    <div className="portfolio__projects section__padding" id="projects">
      <SectionDivider />
      <SectionTitle>Projects</SectionTitle>
      <div className="protfolio__project-grid_container">
        {projects.map((project, i) => (
          <Card key={i} proj={project} />
        ))}
      </div>
    </div>
  );
};

export default Project;
