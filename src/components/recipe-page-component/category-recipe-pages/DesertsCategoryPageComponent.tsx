import React from 'react';
import { Helmet } from 'react-helmet';
import { DeGuzmanRecipeTabCompoent } from '../../tab-components/deguzman-recipe-tab-component';
import DesertsRecipeTable from '../category-recipe-tables/DesertsRecipetable';

const DesertsCategoryPageComponent = () => {
    return (
        <div>
            <Helmet>
                <title>
                    Deserts Recipes
                </title>
            </Helmet>
            <div id="white-background">
                <br></br>
                <DeGuzmanRecipeTabCompoent />
                <br></br>
                <br></br>
                <DesertsRecipeTable />
            </div>
        </div>
    )
}

export default DesertsCategoryPageComponent;