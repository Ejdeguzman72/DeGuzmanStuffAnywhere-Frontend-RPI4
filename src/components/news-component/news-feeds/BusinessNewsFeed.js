import React, { useState, useEffect } from 'react';
import NewsService from '../../../services/NewsService';
import { Form, Button } from 'react-bootstrap';
import NewsItem from '../NewsItem';
import '../../../style-sheets/newsroom.css'
import NewsfeedTabs from '../../tab-components/NewsFeedTabs';

const itemsPerPage = 5;

const BusinessNewsfeed = () => {
    const [list, setList] = useState(null);
    const [currentPage,setCurrentPage] = useState(1);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = list && list.articles ? list.articles.slice(startIndex, endIndex) : [];

    const totalPages = list && list.articles ? Math.ceil(list.articles.length / itemsPerPage) : 0;

    const handlePageChange = (page) => {
        setCurrentPage(page);
    }

    async function retrieveBusinessNews() {
        const response = await NewsService.getBusinessNews();
        const body = await response.data;
        return body;
    }

    const retrieveNews = () => {
        retrieveBusinessNews().then(setList);
    }

    useEffect(() => {
        retrieveNews()
    }, [])

    return (
        <div>
            {
                list === null ? null : list.length === 0 ? (
                    <p><i>No Results</i></p>
                ) : (
                    <div>
                        <ul>
                            {currentItems.map((item, i) => (
                                <NewsItem key={i} item={item} />
                            ))}
                        </ul>

                        <div>
                            <span className="page-number">
                                Page {currentPage} of {totalPages}
                            </span>
                            <br></br>
                            <ul className="news-pagination">
                                {Array.from({ length: totalPages }, (_, index) => (
                                    <Button variant="info" key={index} onClick={() => handlePageChange(index + 1)}
                                    className="list-item-pagination">
                                        {index + 1}
                                    </Button>
                                ))}
                            </ul>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default BusinessNewsfeed;