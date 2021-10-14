import React from 'react';
import { DeGuzmanRecipeTabCompoent } from '../../../tab-components/deguzman-recipe-tab-component';
import { Helmet } from 'react-helmet';
import { FooterComponent } from '../../../footer-component/footer-component';
import BakedRedSnapperRecipeContainer from '../../recipe-containers/seafood-recipe-containers/BakedRedSnapperRecipeContainer';

const BakedRedSnapperRecipePage = () => {
        return (
            <div>
                <Helmet>
                    <title>Baked Red Snapper Recipe</title>
                </Helmet>
                <div id="white-background">
                    <br></br>
                    <DeGuzmanRecipeTabCompoent />
                    <br></br>
                    <BakedRedSnapperRecipeContainer />
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