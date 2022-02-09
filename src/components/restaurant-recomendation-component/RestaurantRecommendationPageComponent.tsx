import React from 'react';
import { Helmet } from 'react-helmet';
import RestaurantTabComponent from '../tab-components/RestaurantTabComponent';
import RestaurantRecommendationTableComponent from './RestaurantRecommendationTableComponent';
import RestaurantList from './pagination/RestaurantList';

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
                <br></br>
                <br></br>
                <RestaurantList />
            </div>
        </div>
    )
}

export  default RestaurantRecommendationPageComponent;