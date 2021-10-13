import React from 'react';
import { Helmet } from 'react-helmet';
import { DeGuzmanRecipeTabCompoent } from '../../tab-components/deguzman-recipe-tab-component';
import BreakfeastRecipeTable from '../category-recipe-tables/BreakfeastRecipeTable';

const BreakfeastCategoryPageComponent = () => {
    return (
        <div>
            <Helmet>
                <title>
                    Breakfeast Recipes
                </title>
            </Helmet>
            <div id="white-background">
                <br></br>
                <DeGuzmanRecipeTabCompoent />
                <br></br>
                <br></br>
                <BreakfeastRecipeTable />
            </div>
        </div>
    )
}

export default BreakfeastCategoryPageComponent;