import React from 'react';
import { DeGuzmanRecipeTabCompoent } from '../../../tab-components/deguzman-recipe-tab-component';
import { Helmet } from 'react-helmet';
import { FooterComponent } from '../../../footer-component/footer-component';
import LumpiaRecipeContainer from '../../recipe-containers/filipino-recipe-containers/LumpiaRecipeContainer';

const LumpiaRecipePage = () => {
    return (
        <div>
            <Helmet>
                <title>
                    Lumpia Recipe
                </title>
            </Helmet>
            <div id="white-background">
                <br></br>
                <DeGuzmanRecipeTabCompoent />
                <br></br>
                <LumpiaRecipeContainer />
                <br></br>
                <br></br>
            </div>
            <FooterComponent />
        </div>
    )
}

export default LumpiaRecipePage;