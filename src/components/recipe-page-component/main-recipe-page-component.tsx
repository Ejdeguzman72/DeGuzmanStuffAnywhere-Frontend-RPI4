import React from 'react';
import { Helmet } from 'react-helmet';
import { FooterComponent } from '../footer-component/footer-component';
import { RecipeNotesContainerComponent } from './recipe-notes-container';
import { BarbequeTabsComponent } from './recipe-tabs/BarbequeTabsComponent';
import { BreakfeastRecipeTabsComponent } from './recipe-tabs/BreakfeastTabsRecipeComponent';
import { DesertsTabComponent } from './recipe-tabs/DesertstTabComponent';
import { FilipinoDishesTabComponent } from './recipe-tabs/FilipinoDishesTabComponent';
import { ItalianRecipesTabComponent } from './recipe-tabs/ItalianRecipesTabComponent';
import { SeafoodRecipeTabComponent } from './recipe-tabs/SeafoodRecipeTabComponent';
import { SlowCookerRecipes } from './recipe-tabs/SlowCookerRecipes';
import { ComfortFoodRecipesTabComponent } from './recipe-tabs/ComfortFoodRecipeTabComponent';
import { HispanicRecipesTabComponent } from './recipe-tabs/HispanicRecipesTabComponent';
import { AsianRecipeTabsComponent } from './recipe-tabs/AsianRecipesTabComponent';

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
                    <AsianRecipeTabsComponent />
                    <BarbequeTabsComponent />
                    <BreakfeastRecipeTabsComponent />
                    <ComfortFoodRecipesTabComponent />
                    <DesertsTabComponent />
                    <FilipinoDishesTabComponent />
                    <HispanicRecipesTabComponent />
                    <ItalianRecipesTabComponent />
                    <SeafoodRecipeTabComponent />
                    <SlowCookerRecipes />
                    <br></br>
                    <br></br>
                </div>
                <FooterComponent />
            </div>
        )
    }
}