import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { RecipePageComponent } from '../recipe-page-component/MainRecipePage';
import RecipeCategoriesPage from '../recipe-page-component/RecipCategoriesPage';

const RecipeRoutes = () => {
    return (
        <HashRouter>
            <Switch>
                <Route path="/recipes" exact component={RecipePageComponent} />
                <Route path="/recipe-categories" exact component={RecipeCategoriesPage} />
            </Switch>
        </HashRouter>
    )
}

export default RecipeRoutes;