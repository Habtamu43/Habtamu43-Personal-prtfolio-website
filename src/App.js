import React from 'react';
import FloatingDiv from './components/FloatingDiv/floatingdiv';
import './App.css'
import Intro from './components/Intro/intro';
import Navbar from './components/Navbar';
function APP()
{
  return (
    <div className="APP">
      <Navbar/>
      <FloatingDiv/>
      <Intro/>
    </div>
  )
}
export default APP