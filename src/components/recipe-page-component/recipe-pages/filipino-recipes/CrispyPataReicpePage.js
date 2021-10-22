import React from 'react';
import { DeGuzmanRecipeTabCompoent } from '../../../tab-components/deguzman-recipe-tab-component';
import { Helmet } from 'react-helmet';
import { FooterComponent } from '../../../footer-component/footer-component';
import CrispyPataRecipeContainer from '../../recipe-containers/filipino-recipe-containers/CrispyPataRecipeContainer';

const CrispyPataRecipePage = () => {
    return (
        <div>
            <Helmet>
                <title>
                    Crispy Pata Recipe
                </title>
            </Helmet>
            <div id="white-background">
                <br></br>
                <DeGuzmanRecipeTabCompoent />
                <br></br>
                <CrispyPataRecipeContainer />
                <br></br>
                <br></br>
            </div>
            <FooterComponent />
        </div>
    )
}

export default CrispyPataRecipePage;