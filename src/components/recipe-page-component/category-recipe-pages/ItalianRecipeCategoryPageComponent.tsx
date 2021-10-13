import React from 'react';
import { Helmet } from 'react-helmet';
import { DeGuzmanRecipeTabCompoent } from '../../tab-components/deguzman-recipe-tab-component';
import ItalianRecipeTable from '../category-recipe-tables/ItalianRecipeTable';

const ItalianRecipeCategoryPageComponent = () => {
    return (
        <div>
            <Helmet>
                <title>
                    Italian Recipes
                </title>
            </Helmet>
            <div id="white-background">
                <br></br>
                <DeGuzmanRecipeTabCompoent />
                <br></br>
                <br></br>
                <ItalianRecipeTable />
            </div>
        </div>
    )
}

export default ItalianRecipeCategoryPageComponent;