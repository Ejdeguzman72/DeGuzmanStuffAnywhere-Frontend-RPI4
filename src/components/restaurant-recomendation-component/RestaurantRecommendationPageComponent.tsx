import React from 'react';
import { Helmet } from 'react-helmet';
import RestaurantTabComponent from '../tab-components/RestaurantTabComponent';
import RestaurantRecommendationTableComponent from './RestaurantRecommendationTableComponent';

const RestaurantRecommendationPageComponent = () => {
    return (
        <div>
            <Helmet>
                <title>Restaurant Recommendations</title>
            </Helmet>
            <div id="white-background">
                <br></br>
                <RestaurantTabComponent />
                <br></br>
                <br></br>
                <RestaurantRecommendationTableComponent />
            </div>
        </div>
    )
}

export  default RestaurantRecommendationPageComponent;