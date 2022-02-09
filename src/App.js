import React from 'react';
import './App.css';
import { Navbar } from './components';
import {
  Hero,
  Project,
  Technologies,
  Timeline,
  Accomplishment,
  Footer,
} from './containers';

const App = () => {
  return (
    <div className="APP">
      <div className="container">
        <Navbar />
        <Hero />
        <Project />
        <Technologies />
        <Timeline />
        {/* <Accomplishment /> */}
        <Footer />
      </div>
    </div>
  );
};

export default App;
