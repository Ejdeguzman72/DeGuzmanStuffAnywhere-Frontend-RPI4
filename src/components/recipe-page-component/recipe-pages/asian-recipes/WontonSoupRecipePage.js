import React from 'react';
import { Helmet } from 'react-helmet';
import { FooterComponent } from '../../../footer-component/footer-component';
import { DeGuzmanRecipeTabCompoent } from '../../../tab-components/deguzman-recipe-tab-component';
import PekingStylePorkchopsContainer from '../../recipe-containers/asian-recipe-containers/PekingStylePorkchopsContainer';
import WontonSoupRecipeContainer from '../../recipe-containers/asian-recipe-containers/WontonSoupContainer';

const WontonSoupRecipePage = () => {
    return (
        <div id="white-background">
            <Helmet>
                <title>
                    Wonton Soup Recipe
                </title>
            </Helmet>
            <div id="white-background">
                <br></br>
                <DeGuzmanRecipeTabCompoent />
                <br></br>
                <br></br>
                <WontonSoupRecipeContainer />
            </div>
            <FooterComponent />
        </div>
    )

}

export default WontonSoupRecipePage