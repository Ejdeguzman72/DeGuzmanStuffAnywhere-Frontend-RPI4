import React from 'react';
import { DeGuzmanRecipeTabCompoent } from '../../../tab-components/deguzman-recipe-tab-component';
import { Helmet } from 'react-helmet';
import { FooterComponent } from '../../../footer-component/footer-component';
import TeriyakiSalmonRecipeContainer from '../../recipe-containers/seafood-recipe-containers/TeriyakiSalmonRecipeContainer';

const TeriyakiSalmonRecipePage = () => {
        return (
            <div>
                <Helmet>
                    <title>Teriyaki Salmon Recipe</title>
                </Helmet>
                <div id="white-background">
                    <br></br>
                    <DeGuzmanRecipeTabCompoent />
                    <br></br>
                    <TeriyakiSalmonRecipeContainer />
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                </div>
                <FooterComponent />
            </div>
        )
}

export default TeriyakiSalmonRecipePage;