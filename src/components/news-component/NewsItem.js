import React from 'react';
import { Link } from 'react-router-dom';

function NewsItem({ item }) {
    const separateWords = s => s.replace(/[A-Z][a-z]+/g, '$& ').trim();
    const formatDate = s => new Date(s).toLocaleDateString(undefined, { dateStyle: 'long' });
    return (
        <li className="item">
            {item.image &&
                <img className="thumbnail"
                    alt=""
                    src={item.image?.thumbnail?.contentUrl}
                />
            }
            <h2 className="title">
                <a href={item.url}>{item.name}</a>
            </h2>
            <p className="description">
                {item.description}
            </p>
            <a href={item.url}>
                <p>{item.url}</p>
            </a>
            <div className="meta">
                <span>{formatDate(item.publishedAt)}</span>
                {/* <span className="provider">
                    <img className="provider-thumbnail"
                        alt=""
                        src={item.urlToImage}
                    />
                </span> */}
                {item.category &&
                    <span>{separateWords(item.category)}</span>
                }
            </div>
        </li>
    );
}

export default NewsItem;