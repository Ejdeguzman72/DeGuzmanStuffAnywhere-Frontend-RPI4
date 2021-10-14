import React from 'react';
import { DeGuzmanRecipeTabCompoent } from '../../../tab-components/deguzman-recipe-tab-component';
import { Helmet } from 'react-helmet';
import { FooterComponent } from '../../../footer-component/footer-component';
import StuffedFlounderRecipeContainer from '../../recipe-containers/seafood-recipe-containers/StuffedFlounderRecipeContainer';

const StuffedFlounderRecipePage = () => {
        return (
            <div>
                <Helmet>
                    <title>Stuffed Flounder Recipe</title>
                </Helmet>
                <div id="white-background">
                    <br></br>
                    <DeGuzmanRecipeTabCompoent />
                    <br></br>
                    <StuffedFlounderRecipeContainer />
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                </div>
                <FooterComponent />
            </div>
        )
}

export default StuffedFlounderRecipePage;