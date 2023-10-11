import React, { useState, useEffect } from 'react';
import NewsService from '../../../services/NewsService';
import { Form, Button } from 'react-bootstrap';
import NewsItem from '../NewsItem';
import '../../../style-sheets/newsroom.css'
import NewsfeedTabs from '../../tab-components/NewsFeedTabs';

const TechnologyNewsFeed = () => {
    const [list, setList] = useState(null);

    async function retrieveTechnologyNews() {
        const response = await NewsService.getTechnologyNews();
        const body = await response.data;
        return body;
    }

    const retrieveNews = () => {
        retrieveTechnologyNews().then(setList);
    }

    useEffect(() => {
        retrieveNews()
    }, [])

    return (
        <div>
            {
                !list ? null : list.length === 0 ? <p><i>No Results</i></p> : <ul>
                    {list.articles.map((item, i) => (
                        <NewsItem key={i} item={item} />
                    ))}
                </ul>
            }
        </div>
    )
}

export default TechnologyNewsFeed;