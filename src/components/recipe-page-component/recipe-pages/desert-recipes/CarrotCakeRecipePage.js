import React from 'react';
import { Helmet } from 'react-helmet';
import { DeGuzmanRecipeTabCompoent } from '../../../tab-components/deguzman-recipe-tab-component';
import CarrotCakeRecipeContainer from '../../recipe-containers/desert-recipe-containers/CarrotCakeRecipeContainer';

const CarrotCakeRecipePage = () => {
    return (
        <div>
            <Helmet>
                <title>
                    Carrot Cake Recipe
                </title>
            </Helmet>
            <div id="white-background">
                <br></br>
                <DeGuzmanRecipeTabCompoent />
                <br></br>
                <CarrotCakeRecipeContainer />
            </div>
        </div>
    )
}

export default CarrotCakeRecipePage;