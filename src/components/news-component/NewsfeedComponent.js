import React, { useState, useEffect } from 'react';
import NewsService from '../../services/NewsService';
import { Form, Button, Row } from 'react-bootstrap';
import NewsItem from './NewsItem';
import '../../style-sheets/newsroom.css'
import NewsfeedTabs from '../tab-components/NewsFeedTabs';

const NewsfeedComponent = () => {
    const [list, setList] = useState(null);
    const [query, setQuery] = useState("");
    async function searchNews(topic) {
        topic = encodeURIComponent(topic);
        const response = await NewsService.searchNewsTopic(topic)
        const body = await response.data;
        return body;
    }

    const search = (event) => {
        event.preventDefault();
        searchNews(query).then(setList);
    }

    return (
        <div>

            <Form>
                <Form.Group controlId="query">
                    <Row>
                        <Form.Control
                            className="newsroom-input"
                            type="text"
                            name="query"
                            value={query}
                            onChange={(event) => setQuery(event.target.value)}
                        />
                    </Row>
                        <Button className="newsroom-button" variant="info" size="lg" onClick={search}>Search</Button>
                </Form.Group>
            </Form>
            <NewsfeedTabs />
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

export default NewsfeedComponent;