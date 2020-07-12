import React from 'react';
import { Helmet } from 'react-helmet';
import { FooterComponent } from '../footer-component/footer-component';
import { DeGuzmanRecipeTabCompoent } from '../tab-components/deguzman-recipe-tab-component';
import { RecipeTableComponent } from './recipes-table-component';
import { RecipeNotesContainerComponent } from './recipe-notes-container';


export class RecipePageComponent extends React.Component<any,any> {
    render() {
        return (
            <div>
                <Helmet>
                    <title>Recipes</title>
                </Helmet>
                <div id="white-background">
                    <br></br>
                    <RecipeNotesContainerComponent />
                    <br></br>
                    <RecipeTableComponent />
                    <br></br>
                    <br></br>
                </div>
                <FooterComponent />
            </div>
        )
    }
}