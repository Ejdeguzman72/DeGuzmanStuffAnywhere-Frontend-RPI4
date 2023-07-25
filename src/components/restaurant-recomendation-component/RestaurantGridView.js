import React from 'react';
import { Helmet } from 'react-helmet';
import RestaurantTabComponent from '../tab-components/RestaurantTabComponent';
import RestaurantRecommendationTableComponent from './RestaurantRecommendationTableComponent';
import RestaurantList from './pagination/RestaurantList';
import RestaurantOptionsDropdown from '../dropdown-components/RestaurantOptionsDropdown';

const RestaurantGridView = () => {
    return (
        <div>
            <Helmet>
                <title>Restaurant Recommendations</title>
            </Helmet>
            <div id="white-background">
                <RestaurantTabComponent />
                <br></br>
                <RestaurantOptionsDropdown />
                <br></br>
                <RestaurantList />
            </div>
        </div>
    )
}

export  default RestaurantGridView;