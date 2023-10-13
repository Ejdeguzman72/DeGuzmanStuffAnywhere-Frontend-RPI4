import React from 'react';
import { Helmet } from 'react-helmet';
import { FooterComponent } from '../footer-component/footer-component';
import RecipeCategoriesMainTab from '../tab-components/RecipeCategoriesMainTab';
import MainRecipePageTab from '../tab-components/recipe-tabs/MainRecipePageTab';
import '../../style-sheets/recipe-styles.css'

const RecipeCategoriesPage = () => {
    return (
        <div>
            <Helmet>
                <title>Recipe Categories</title>
            </Helmet>
            <div id="recipe-categories-background">
                <br></br>
                <MainRecipePageTab />
                <br></br>
                <RecipeCategoriesMainTab />
            </div>
            <FooterComponent />
        </div>
    )
}

export default RecipeCategoriesPage;