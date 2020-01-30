import React, {Component} from 'react';
import './App.css';
import Header from './gegevens/Header.js';
import Nav from './gegevens/Nav.js';
import Content from './gegevens/Content.js';

const App = () => {
  return (
    <div className="App">
      <Header/>
      <Nav/>
      <Content/>
      

    </div>
  );
}


export default App;
