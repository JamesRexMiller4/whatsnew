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
  }

  chooseNews = (id) => {
    let news = id
    news === 'entertainment' ? news = entertainment 
    : id === 'health' ? news = health
    : id === 'science' ? news = science
    : id === 'technology' ? news = technology : news = local
    this.setState({displayNews: news})
  }

  filterNews = (query) => {
   const filteredNews = this.state.displayNews.filter(article => {
      if (article.headline.toLowerCase().includes(query.query.toLowerCase())) {
        return article
      }
    })
    this.setState({displayNews: filteredNews})
  }

  render() {
    return (
      <div className="app">
        <Header filterNews={this.filterNews}/>
        <Menu chooseNews={this.chooseNews}/>
        <NewsContainer displayNews= {this.state.displayNews}/>
      </div>
    );
  }
}

export default App;
