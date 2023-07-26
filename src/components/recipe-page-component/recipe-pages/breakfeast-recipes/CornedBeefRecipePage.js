import React from 'react';
import { Helmet } from 'react-helmet';
import { DeGuzmanRecipeTabCompoent } from '../../../tab-components/deguzman-recipe-tab-component';
import CornedBeefRecipeContainer from '../../recipe-containers/breakfeast-recipe-containers/CornedBeefRecipeContainer';

const CornedBeefRecipePage = () => {
    return (
        <div>
            <Helmet>
                <title>
                    Corned Beef Hash Recipe
                </title>
            </Helmet>
            <div id="white-background">
                <br></br>
                <DeGuzmanRecipeTabCompoent />
                <br></br>
                <CornedBeefRecipeContainer />
            </div>
        </div>
    )
}

export default CornedBeefRecipePage;