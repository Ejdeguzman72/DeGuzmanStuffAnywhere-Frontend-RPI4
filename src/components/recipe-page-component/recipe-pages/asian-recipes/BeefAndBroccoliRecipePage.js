import React from 'react';
import { Helmet } from 'react-helmet';
import { FooterComponent } from '../../../footer-component/footer-component';
import { DeGuzmanRecipeTabCompoent } from '../../../tab-components/deguzman-recipe-tab-component';
import BeefAndBroccoliRecipeContainer from '../../recipe-containers/asian-recipe-containers/BeefAndBrocoliContainer';

const BeefAndBroccoliRecipePage = () => {
    return (
        <div id="white-background">
            <Helmet>
                <title>
                    Beef and Broccoli Recipe
                </title>
            </Helmet>
            <div id="white-background">
                <br></br>
                <DeGuzmanRecipeTabCompoent />
                <br></br>
                <br></br>
                <BeefAndBroccoliRecipeContainer />
            </div>
            <FooterComponent />
        </div>
    )

}

export default BeefAndBroccoliRecipePage