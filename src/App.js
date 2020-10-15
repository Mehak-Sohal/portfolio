import React from 'react';
import './App.css';
import Navbar from './Navbar'
import Header from './Header'
import About from './About'
import Resume from './Resume'
import Projects from './Projects'


function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Resume />
      <Projects />
    </div>
  );
}

export default App;
