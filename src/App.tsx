import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { HomePage } from './componnets/HomePage/HomePage';
import { About } from './componnets/AboutPage/About';

function App() {
  return (
    <div className="app">
      <HomePage/>
      <About/>
    </div>
  );
}

export default App;
