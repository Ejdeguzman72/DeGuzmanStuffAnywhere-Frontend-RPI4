import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { FooterComponent } from '../footer-component/footer-component';
import BookrecommendationsTabComponent from '../tab-components/BookRecommendationsTabComponent';
import BooksList from './BooksList';

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
                    {/* <Col md={6}>
                        <button className="btn btn-dark">
                            <Link to="/add-book-information" id="add-book-information-btn">
                                Add Book Information
                            </Link>
                        </button>
                    </Col>
                    <br></br><br></br>
                    <Col md={6}>
                        <button className="btn btn-dark">
                            <Link to="/update-book-information" id="update-book-information-btn">
                                Update Book Information
                            </Link>
                        </button>
                    </Col> */}
                </Row>
                <br></br>
                <br></br>
                <br></br>
                <BooksList />
            </div>
            <FooterComponent />
        </div>
    )
}

export default BookRecommendationPageComponent;