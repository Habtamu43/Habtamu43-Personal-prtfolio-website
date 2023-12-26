import React from 'react';
import FloatingDiv from './components/Resume/Resume';
import './App.css';
import Intro from './components/Intro/intro';
import Navbar from './components/Navbar';

function APP() {
  return (
    <div className="APP">
      <Navbar />
      <Intro />
    </div>
  );
}

export default APP;
