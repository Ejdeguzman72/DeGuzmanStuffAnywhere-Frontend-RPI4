import React from 'react';
import { DeGuzmanRecipeTabCompoent } from '../../../tab-components/deguzman-recipe-tab-component';
import { Helmet } from 'react-helmet';
import { FooterComponent } from '../../../footer-component/footer-component';
import HoneyGarlicPorkRecipeContainer from '../../recipe-containers/comfort-food-recipe-containers/HoneyGarlicPorkRecipeContainer'; 

const HoneyGarlicPorkRecipePage = () => {
        return (
            <div>
                <Helmet>
                    <title>Honey Garlic Pork Recipe</title>
                </Helmet>
                <div id="white-background">
                    <br></br>
                    <DeGuzmanRecipeTabCompoent />
                    <br></br>
                    <HoneyGarlicPorkRecipeContainer />
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                </div>
                <FooterComponent />
            </div>
        )
}

export default HoneyGarlicPorkRecipePage;