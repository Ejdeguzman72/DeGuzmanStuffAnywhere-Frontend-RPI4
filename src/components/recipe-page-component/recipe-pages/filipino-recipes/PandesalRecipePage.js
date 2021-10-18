import React from 'react';
import { DeGuzmanRecipeTabCompoent } from '../../../tab-components/deguzman-recipe-tab-component';
import { Helmet } from 'react-helmet';
import { FooterComponent } from '../../../footer-component/footer-component';
import PandesalRecipeContainer from '../../recipe-containers/filipino-recipe-containers/PandesalRecipeContainer';

const PandesalRecipePage = () => {
    return (
        <div>
            <Helmet>
                <title>
                    Pandesal Recipe
                </title>
            </Helmet>
            <div id="white-background">
                <br></br>
                <DeGuzmanRecipeTabCompoent />
                <br></br>
                <PandesalRecipeContainer />
                <br></br>
                <br></br>
            </div>
            <FooterComponent />
        </div>
    )
}

export default PandesalRecipePage;