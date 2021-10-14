import React from 'react';
import { Helmet } from 'react-helmet';
import { DeGuzmanRecipeTabCompoent } from '../../tab-components/deguzman-recipe-tab-component';
import SeafoodRecipeTable from '../category-recipe-tables/SeafoodRecipeTable';

const SeafoodRecipeCategoryPageComponent = () => {
    return (
        <div>
            <Helmet>
                <title>
                    Seafood Recipes
                </title>
            </Helmet>
            <div id="white-background">
                <br></br>
                <DeGuzmanRecipeTabCompoent />
                <br></br>
                <br></br>
                <SeafoodRecipeTable />
            </div>
        </div>
    )
}

export default SeafoodRecipeCategoryPageComponent;