import React from 'react';
import './NewsArticle.css';
import PropTypes from 'prop-types';

const NewsArticle = ({id, headline, image, description, url}) => {
    return (
        <div className='news-card-div'>
          <img src={image} className='article-image' alt='a cat sits on a tree'/>
          <h2>{headline}</h2>
          <p className='article-paragraph'>{description}</p>
          <a className='article-anchor' href={url}>Link to Article</a>
        </div>
    )
}

NewsArticle.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  description: PropTypes.string,
  removeIdea: PropTypes.func
}

export default NewsArticle;