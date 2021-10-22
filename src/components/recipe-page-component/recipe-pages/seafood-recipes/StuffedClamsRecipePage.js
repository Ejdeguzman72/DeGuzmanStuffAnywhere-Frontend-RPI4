import React from 'react';
import { DeGuzmanRecipeTabCompoent } from '../../../tab-components/deguzman-recipe-tab-component';
import { Helmet } from 'react-helmet';
import { FooterComponent } from '../../../footer-component/footer-component';
import BakedRedSnapperRecipeContainer from '../../recipe-containers/seafood-recipe-containers/BakedRedSnapperRecipeContainer';
import StuffedClamsRecipeContainer from '../../recipe-containers/seafood-recipe-containers/StuffedClamsRecipeContainer';

const BakedRedSnapperRecipePage = () => {
        return (
            <div>
                <Helmet>
                    <title>Baked Stuffed Clams Recipe</title>
                </Helmet>
                <div id="white-background">
                    <br></br>
                    <DeGuzmanRecipeTabCompoent />
                    <br></br>
                    <StuffedClamsRecipeContainer />
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                </div>
                <FooterComponent />
            </div>
        )
}

export default BakedRedSnapperRecipePage;