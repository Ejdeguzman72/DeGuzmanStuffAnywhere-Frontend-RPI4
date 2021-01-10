import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import BookrecommendationsTabComponent from '../tab-components/BookRecommendationsTabComponent';

const BookRecommendationPageComponent = () => {
    return (
        <div>
            <Helmet>
                <title>Book Recommendations</title>
            </Helmet>
            <div id="white-background">
                <br></br>
                <BookrecommendationsTabComponent />
                <br></br>
                <Row>
                    <Col md={6}>
                        <button >
                            <Link to="/add-book-information">
                                Add Book Information
                            </Link>
                        </button>
                    </Col>
                    <br></br><br></br>
                    <Col md={6}>
                        <button >
                            <Link to="/update-book-information">
                                Update Book Information
                            </Link>
                        </button>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default BookRecommendationPageComponent;