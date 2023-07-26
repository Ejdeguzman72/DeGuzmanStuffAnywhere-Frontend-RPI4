import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import RestaurantRecommendationPageComponent from '../restaurant-recomendation-component/RestaurantRecommendationPageComponent';
import RestaurantGridView from '../restaurant-recomendation-component/RestaurantGridView';
import Restaurant from '../restaurant-recomendation-component/Restaurant';

const RestaurantRecommendationRoutes = () => {
    return (
        <HashRouter>
            <Switch>
                <Route path="/restaurant-recommendations-table" exact component={RestaurantRecommendationPageComponent} />
                <Route path="/restaurant-recommendations-grid" exact component={RestaurantGridView} />
                <Route path="/update-restaurant/:restaurant_id" exact component={Restaurant} />
            </Switch>
        </HashRouter>
    )
}

export default RestaurantRecommendationRoutes;