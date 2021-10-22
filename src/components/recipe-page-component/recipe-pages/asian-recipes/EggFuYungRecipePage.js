import React from 'react';
import { Helmet } from 'react-helmet';
import { FooterComponent } from '../../../footer-component/footer-component';
import { DeGuzmanRecipeTabCompoent } from '../../../tab-components/deguzman-recipe-tab-component';
import EggFuYungRecipeContainer from '../../recipe-containers/asian-recipe-containers/EggFuYungRecipeContainer';

const EggFuYungRecipePage = () => {
    return (
        <div id="white-background">
            <Helmet>
                <title>
                    Egg Fu Yung Recipe
                </title>
            </Helmet>
            <div id="white-background">
                <br></br>
                <DeGuzmanRecipeTabCompoent />
                <br></br>
                <br></br>
                <EggFuYungRecipeContainer />
            </div>
            <FooterComponent />
        </div>
    )

}

export default EggFuYungRecipePage