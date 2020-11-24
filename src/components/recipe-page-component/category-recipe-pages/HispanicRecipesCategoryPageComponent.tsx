import React from 'react';
import { Helmet } from 'react-helmet';
import { DeGuzmanRecipeTabCompoent } from '../../tab-components/deguzman-recipe-tab-component';
import HispanicRecipeTable from './category-recipe-tables/HispanicRecipeTable';

const HispanicRecipesCategoryPageComponent = () => {
    return (
        <div>
            <Helmet>
                <title>
                    Hispanic/TexMex Recipes
                </title>
            </Helmet>
            <div id="white-background">
                <br></br>
                <DeGuzmanRecipeTabCompoent />
                <br></br>
                <br></br>
                <HispanicRecipeTable />
            </div>
        </div>
    )
}

export default HispanicRecipesCategoryPageComponent;