import React from 'react';
import { Helmet } from 'react-helmet';
import { DeGuzmanRecipeTabCompoent } from '../../tab-components/deguzman-recipe-tab-component';
import ComfortFoodRecipeTable from './category-recipe-tables/ComfortFoodRecipeTable';

const ComfortFoodCategoryPageComponent = () => {
    return (
        <div>
            <Helmet>
                <title>
                    Comfort Food Recipes
                </title>
            </Helmet>
            <div id="white-background">
                <br></br>
                <DeGuzmanRecipeTabCompoent />
                <br></br>
                <br></br>
                <ComfortFoodRecipeTable />
            </div>
        </div>
    )
}

export default ComfortFoodCategoryPageComponent;