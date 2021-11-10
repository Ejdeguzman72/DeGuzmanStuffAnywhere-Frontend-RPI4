import React from 'react';
import { DeGuzmanRecipeTabCompoent } from '../../../tab-components/deguzman-recipe-tab-component';
import { Helmet } from 'react-helmet';
import { FooterComponent } from '../../../footer-component/footer-component';
import CrabCakesRecipeContainer from '../../recipe-containers/seafood-recipe-containers/CrabCakesRecipeContainter';

const CrabCakesRecipePage = () => {
        return (
            <div>
                <Helmet>
                    <title>Crab Cakes Recipe</title>
                </Helmet>
                <div id="white-background">
                    <br></br>
                    <DeGuzmanRecipeTabCompoent />
                    <br></br>
                    <CrabCakesRecipeContainer />
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                </div>
                <FooterComponent />
            </div>
        )
}

export default CrabCakesRecipePage;