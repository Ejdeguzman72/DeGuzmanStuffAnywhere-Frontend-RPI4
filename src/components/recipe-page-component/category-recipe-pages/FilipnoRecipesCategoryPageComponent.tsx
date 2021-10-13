import React from 'react';
import { Helmet } from 'react-helmet';
import { DeGuzmanRecipeTabCompoent } from '../../tab-components/deguzman-recipe-tab-component';
import FilipinoRecipeTable from '../category-recipe-tables/FilipinoRecipeTable';

const FilipinoRecipesCategoryPageComponent = () => {
    return (
        <div>
            <Helmet>
                <title>
                    Filipno Recipes
                </title>
            </Helmet>
            <div id="white-background">
                <br></br>
                <DeGuzmanRecipeTabCompoent />
                <br></br>
                <br></br>
                <FilipinoRecipeTable />
            </div>
        </div>
    )
}

export default FilipinoRecipesCategoryPageComponent;