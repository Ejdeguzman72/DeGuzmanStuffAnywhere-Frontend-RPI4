import React from 'react';
import { Helmet } from 'react-helmet';
import { DeGuzmanRecipeTabCompoent } from '../../../tab-components/deguzman-recipe-tab-component';
import BreakfeastStrataRecipeContainer from '../../recipe-containers/breakfeast-recipe-containers/BreakfeastStrataRecipeContainer';
import WaffleRecipeContainer from '../../recipe-containers/breakfeast-recipe-containers/WafflesRecipeContainer';

const WaffleRecipePage = () => {
    return (
        <div>
            <Helmet>
                <title>
                    Waffle Recipe
                </title>
            </Helmet>
            <div id="white-background">
                <br></br>
                <DeGuzmanRecipeTabCompoent />
                <br></br>
                <WaffleRecipeContainer />
            </div>
        </div>
    )
}

export default WaffleRecipePage;