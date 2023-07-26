import React from 'react';
import { DeGuzmanRecipeTabCompoent } from '../../../tab-components/deguzman-recipe-tab-component';
import { Helmet } from 'react-helmet';
import { FooterComponent } from '../../../footer-component/footer-component';
import ChilaquilesRecipeContainer from '../../recipe-containers/hispanic-recipe-containers/ChilaquilesRecipeContainer';

const ChilaquilesRecipePage = () => {
        return (
            <div>
                <Helmet>
                    <title>Chilaquiles Recipe</title>
                </Helmet>
                <div id="white-background">
                    <br></br>
                    <DeGuzmanRecipeTabCompoent />
                    <br></br>
                    <ChilaquilesRecipeContainer />
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                </div>
                <FooterComponent />
            </div>
        )
}

export default ChilaquilesRecipePage;