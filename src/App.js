import React from 'react';
import './App.css';
import { Navbar } from './components';
import { Hero, Project, Technologies, Timeline } from './containers';

const App = () => {
  return (
    <div className="APP">
      <div className="container">
        <Navbar />
        <Hero />
        <Project />
        <Technologies />
        <Timeline />
      </div>
    </div>
  );
};

export default App;
