import React from 'react';
import './NewsContainer.css';
import NewsArticle from '../NewsArticle/NewsArticle.js';

const NewsContainer = ({displayNews}) => {
    const articles = displayNews.map(article => {
        return (
            <NewsArticle
                key = {article.id}
                image = {article.img}
                title = {article.title}
                description = {article.description}
                url = {article.url}
            />
        )
    })

    return (
        <div className="news-container">
            {articles}
        </div>
    )
}

export default NewsContainer;