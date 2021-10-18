import React from 'react';
import { Helmet } from 'react-helmet';
import { DeGuzmanRecipeTabCompoent } from '../../../tab-components/deguzman-recipe-tab-component';
import FrenchToastRecipeContainer from '../../recipe-containers/breakfeast-recipe-containers/FrenchToastRecipeContainer';

const FrenchToastRecipePage = () => {
    return (
        <div>
            <Helmet>
                <title>
                    French Toast Recipe
                </title>
            </Helmet>
            <div id="white-background">
                <br></br>
                <DeGuzmanRecipeTabCompoent />
                <br></br>
                <FrenchToastRecipeContainer />
            </div>
        </div>
    )
}

export default FrenchToastRecipePage;