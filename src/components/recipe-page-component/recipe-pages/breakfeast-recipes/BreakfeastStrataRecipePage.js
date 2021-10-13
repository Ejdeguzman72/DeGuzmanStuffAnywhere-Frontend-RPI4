import React from 'react';
import { Helmet } from 'react-helmet';
import { DeGuzmanRecipeTabCompoent } from '../../../tab-components/deguzman-recipe-tab-component';
import BreakfeastStrataRecipeContainer from '../../recipe-containers/breakfeast-recipe-containers/BreakfeastStrataRecipeContainer';

const BreakfeastStrataRecipePage = () => {
    return (
        <div>
            <Helmet>
                <title>
                    Breakfeast Strata Recipe
                </title>
            </Helmet>
            <div id="white-background">
                <br></br>
                <DeGuzmanRecipeTabCompoent />
                <br></br>
                <BreakfeastStrataRecipeContainer />
            </div>
        </div>
    )
}

export default BreakfeastStrataRecipePage;