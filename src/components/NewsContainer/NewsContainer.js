import React from 'react';
import './NewsContainer.css';
import NewsArticle from '../NewsArticle/NewsArticle.js';

const NewsContainer = ({displayNews}) => {
    const articles = displayNews.map((article, index) => {
        return (
            <NewsArticle
                id = {article.id}
                key = {index}
                image = {article.img}
                headline = {article.headline}
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