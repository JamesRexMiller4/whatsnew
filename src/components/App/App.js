import React, { Component } from 'react';
import local from '../../data/local';
import './App.css';
import NewsContainer from '../NewsContainer/NewsContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      local : local
    }
  }

  render() {
    return (
      <div className="app">
        <NewsContainer local= {this.state.local}/>
      </div>
    );
  }
}

export default App;
