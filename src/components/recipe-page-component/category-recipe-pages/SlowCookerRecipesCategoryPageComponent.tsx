import React from 'react';
import { Helmet } from 'react-helmet';
import { DeGuzmanRecipeTabCompoent } from '../../tab-components/deguzman-recipe-tab-component';
import SlowCookerRecipeTable from '../category-recipe-tables/SlowCookerRecipeTable';

const SlowCookerRecipeCategoryPageComponent = () => {
    return (
        <div>
            <Helmet>
                <title>
                    Slow Cooker Recipes
                </title>
            </Helmet>
            <div id="white-background">
                <br></br>
                <DeGuzmanRecipeTabCompoent />
                <br></br>
                <br></br>
                <SlowCookerRecipeTable />
            </div>
        </div>
    )
}

export default SlowCookerRecipeCategoryPageComponent;