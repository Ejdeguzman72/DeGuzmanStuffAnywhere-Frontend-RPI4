import React from 'react';
import { Helmet } from 'react-helmet';
import { FooterComponent } from '../../footer-component/footer-component';
import { DeGuzmanRecipeTabCompoent } from '../../tab-components/deguzman-recipe-tab-component';
import BarbequeRecipeTable from './category-recipe-tables/BarbequeRecipeTable';

const BarbequeCategoryPageComponent = () => {
    return (
        <div>
            <Helmet>
                <title>
                    Barbeque Recipes
                </title>
            </Helmet>
            <div id="white-background">
                <br></br>
                <DeGuzmanRecipeTabCompoent />
                <br></br>
                <br></br>
                <BarbequeRecipeTable />
            </div>
            <FooterComponent />
        </div>
    )
}

export default BarbequeCategoryPageComponent;