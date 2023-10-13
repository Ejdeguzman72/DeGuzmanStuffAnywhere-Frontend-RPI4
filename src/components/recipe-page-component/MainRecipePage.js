import React from 'react';
import { Helmet } from 'react-helmet';
import { FooterComponent } from '../footer-component/footer-component';
import { RecipeNotesContainerComponent } from './RecipeNotesContainer';
import RecipeOptionsRow from '../options-row-component/RecipeOptionsRow';
import RecipeList from './list-components/MainRecipeList';
import MainRecipePageTab from '../tab-components/recipe-tabs/MainRecipePageTab';

export class RecipePageComponent extends React.Component {
    render() {
        return (
            <div>
                <Helmet>  
                    <title>Recipes</title>
                </Helmet>
                <div id="white-background">
                    <br></br>
                    <MainRecipePageTab />
                    <br></br>
                    <RecipeNotesContainerComponent />
                    <br></br>
                    <RecipeOptionsRow />
                    <br></br>
                    <RecipeList />
                    <br></br>
                </div>
                <FooterComponent />
            </div>
        )
    }
}