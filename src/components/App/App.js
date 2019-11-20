import React, { Component } from 'react';
import local from '../../data/local';
import entertainment from '../../data/entertainment';
import health from '../../data/health';
import science from '../../data/science';
import technology from '../../data/technology';
import './App.css';
import NewsContainer from '../NewsContainer/NewsContainer';
import Menu from '../Menu/Menu';
import Header from '../Header/Header';

class App extends Component {
  constructor() {
    super();
    this.state = {
      displayNews : [
        ...local, 
        ...entertainment, 
        ...technology, 
        ...science, 
        ...health
      ]
    }
    this.chooseNews = this.chooseNews.bind(this)
  }

  chooseNews(id) {
    let news = id
    news === 'entertainment' ? news = entertainment 
    : id === 'health' ? news = health
    : id === 'science' ? news = science
    : id === 'technology' ? news = technology : news = local
    this.setState({displayNews: news})
  }

  render() {
    return (
      <div className="app">
        <Header />
        <Menu chooseNews={this.chooseNews}/>
        <NewsContainer displayNews= {this.state.displayNews}/>
      </div>
    );
  }
}

export default App;
