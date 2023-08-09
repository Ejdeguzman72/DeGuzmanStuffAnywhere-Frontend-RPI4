import React from 'react';
import { Helmet } from 'react-helmet';
import RestaurantTabComponent from '../tab-components/RestaurantTabComponent';
import RestaurantRecommendationTableComponent from './RestaurantRecommendationTableComponent';
import RestaurantList from './pagination/RestaurantList';
import RestaurantOptionsDropdown from '../dropdown-components/RestaurantOptionsDropdown';

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
                <RestaurantRecommendationTableComponent />
                <br></br>
            </div>
        </div>
    )
}

export  default RestaurantRecommendationPageComponent;