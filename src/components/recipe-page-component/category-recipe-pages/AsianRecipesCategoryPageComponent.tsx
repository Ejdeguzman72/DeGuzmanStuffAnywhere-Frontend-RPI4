import React from 'react';
import { Helmet } from 'react-helmet';
import { DeGuzmanRecipeTabCompoent } from '../../tab-components/deguzman-recipe-tab-component';
import { AsianRecipeTable } from './category-recipe-tables/AsianRecipeTable';

const AsianRecipeCategoryPageComponent = () => {
    return (
        <div>
            <Helmet>
                <title>
                    Asian Recipes
                </title>
            </Helmet>
            <div id="white-background">
                <br></br>
                <DeGuzmanRecipeTabCompoent />
                <br></br>
                <br></br>
                <AsianRecipeTable />
            </div>
        </div>
    )
}

export default AsianRecipeCategoryPageComponent;