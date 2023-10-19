import React from 'react';
import { Helmet } from 'react-helmet';
import { FooterComponent } from '../footer-component/footer-component';
import RecipeCategoriesMainTab from '../tab-components/RecipeCategoriesMainTab';
import MainRecipePageTab from '../tab-components/recipe-tabs/MainRecipePageTab';
import '../../style-sheets/recipe-styles.css'
import { RecipeNotesContainerComponent } from './RecipeNotesContainer';

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
                <RecipeNotesContainerComponent />
                <hr></hr>
                <RecipeCategoriesMainTab />
            </div>
            <FooterComponent />
        </div>
    )
}

export default RecipeCategoriesPage;