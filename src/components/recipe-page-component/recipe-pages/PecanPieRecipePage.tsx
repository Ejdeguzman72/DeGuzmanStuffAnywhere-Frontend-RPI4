import React from 'react';
import { Helmet } from 'react-helmet';
import { DeGuzmanRecipeTabCompoent } from '../../tab-components/deguzman-recipe-tab-component';
import PecanPieRecipeContainerComponent from '../recipe-containers/PecanPieRecipeContainer';

const PecanPieRecipePage = () => {
    return (
        <div>
            <Helmet>
                <title>
                    Pecan Pie
                </title>
            </Helmet>
            <div id="white-background">
                <br></br>
                <DeGuzmanRecipeTabCompoent />
                <br></br>
                <PecanPieRecipeContainerComponent />
            </div>
        </div>
    )
}

export default PecanPieRecipePage;