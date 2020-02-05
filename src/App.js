import React, {Component} from 'react';
import './App.css';
import Header from './gegevens/Header/Header.js/index.js';
import Nav from './gegevens/Nav/Nav.js/index.js';
import Content from './gegevens/Content/Content.js/index.js';

const App = () => {
  return (
    <div className="App">
      <Header/>
      <Nav/>
      <Content/>  
    </div>
  )
}


export default App;
