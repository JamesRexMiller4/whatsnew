import React from 'react';
import './NewsArticle.css';

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

export default NewsArticle;