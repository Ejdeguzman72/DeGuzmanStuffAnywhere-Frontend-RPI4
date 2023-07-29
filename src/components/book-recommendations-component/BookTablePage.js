import React from 'react';
import { Helmet } from 'react-helmet';
import { FooterComponent } from '../footer-component/footer-component';
import BookrecommendationsTabComponent from '../tab-components/BookRecommendationsTabComponent';
import BookTable from './BookTable';

const BookTablePage = () => {
    return (
        <div>
            <Helmet>
                <title>Book Recommendations - Table View</title>
            </Helmet>
            <div id="white-background">
                <br></br>
                <BookrecommendationsTabComponent />
                <br></br>
                <BookTable />
            </div>
            <FooterComponent />
        </div>
    )
}

export default BookTablePage;