import React from 'react';
import { DeGuzmanRecipeTabCompoent } from '../../../tab-components/deguzman-recipe-tab-component';
import { Helmet } from 'react-helmet';
import { FooterComponent } from '../../../footer-component/footer-component';
import ChickenNoodleSoupContainer from '../../recipe-containers/comfort-food-recipe-containers/ChickenNoodleSoupContainer';

const ChickenNoodleSoupRecipePage = () => {
        return (
            <div>
                <Helmet>
                    <title>Chicken Noodle Soup Recipe</title>
                </Helmet>
                <div id="white-background">
                    <br></br>
                    <DeGuzmanRecipeTabCompoent />
                    <br></br>
                    <ChickenNoodleSoupContainer />
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                </div>
                <FooterComponent />
            </div>
        )
}

export default ChickenNoodleSoupRecipePage;