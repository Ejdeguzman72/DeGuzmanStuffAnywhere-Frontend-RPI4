import React from 'react';
import { DeGuzmanRecipeTabCompoent } from '../../../tab-components/deguzman-recipe-tab-component';
import { Helmet } from 'react-helmet';
import { FooterComponent } from '../../../footer-component/footer-component';
import ChickenPotPieRecipeContainer from '../../recipe-containers/comfort-food-recipe-containers/ChickenPotPieContainer';

const ChickenPotPieRecipePage = () => {
        return (
            <div>
                <Helmet>
                    <title>Chicken Pot Pie Recipe</title>
                </Helmet>
                <div id="white-background">
                    <br></br>
                    <DeGuzmanRecipeTabCompoent />
                    <br></br>
                    <ChickenPotPieRecipeContainer />
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                </div>
                <FooterComponent />
            </div>
        )
}

export default ChickenPotPieRecipePage;