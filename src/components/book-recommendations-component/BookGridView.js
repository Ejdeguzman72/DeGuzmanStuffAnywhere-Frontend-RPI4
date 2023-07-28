import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { FooterComponent } from '../footer-component/footer-component';
import BookrecommendationsTabComponent from '../tab-components/BookRecommendationsTabComponent';
import BooksList from './BooksList';

const BookGridView = () => {
    return (
        <div>
            <Helmet>
                <title>Book Recommendations</title>
            </Helmet>
            <div id="white-background">
                <br></br>
                <BookrecommendationsTabComponent />
                <br></br>
                <BooksList />
            </div>
            <FooterComponent />
        </div>
    )
}

export default BookGridView;