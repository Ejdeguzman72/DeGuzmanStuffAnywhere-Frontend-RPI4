import React from 'react';
import { Container } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import AddBookRecommendation from './AddBookRecommendation';
import '../../style-sheets/App.css';

const AddBookRecommendationPageComponent = () => {
    return (
        <div>
            <Helmet>
                <title>Add Book Recommendation</title>
            </Helmet>
            <div id="white-background">
                <br></br>
                <br></br>
                    <AddBookRecommendation />
            </div>   
        </div>
    )
}

export default AddBookRecommendationPageComponent;