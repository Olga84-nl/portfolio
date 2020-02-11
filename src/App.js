import React, {Component} from 'react';
import './App.css';
import Header from './gegevens/Header/Header';
import Nav from './gegevens/Nav/Nav';
import Content from './gegevens/Content/Content';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Content />
    </div>
  )
}

export default App;
