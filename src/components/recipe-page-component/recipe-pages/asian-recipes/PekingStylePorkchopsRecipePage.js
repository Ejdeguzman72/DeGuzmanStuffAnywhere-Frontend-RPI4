import React from 'react';
import { Helmet } from 'react-helmet';
import { FooterComponent } from '../../../footer-component/footer-component';
import { DeGuzmanRecipeTabCompoent } from '../../../tab-components/deguzman-recipe-tab-component';
import PekingStylePorkchopsContainer from '../../recipe-containers/asian-recipe-containers/PekingStylePorkchopsContainer';

const PekingStyleRecipePage = () => {
    return (
        <div id="white-background">
            <Helmet>
                <title>
                    Peking Style Porkchops Recipe
                </title>
            </Helmet>
            <div id="white-background">
                <br></br>
                <DeGuzmanRecipeTabCompoent />
                <br></br>
                <br></br>
                <PekingStylePorkchopsContainer />
            </div>
            <FooterComponent />
        </div>
    )

}

export default PekingStyleRecipePage