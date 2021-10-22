import React from 'react';
import { Helmet } from 'react-helmet';
import { FooterComponent } from '../../../footer-component/footer-component';
import { DeGuzmanRecipeTabCompoent } from '../../../tab-components/deguzman-recipe-tab-component';
import KoreanStyleRibsContainer from '../../recipe-containers/filipino-recipe-containers/KoreanStyleRibsContainer';

const KoreanStyleRibsRecipePage = () => {
    return (
        <div id="white-background">
            <Helmet>
                <title>
                    Korean Style Ribs Recipe
                </title>
            </Helmet>
            <div id="white-background">
                <br></br>
                <DeGuzmanRecipeTabCompoent />
                <br></br>
                <br></br>
                <KoreanStyleRibsContainer />
            </div>
            <FooterComponent />
        </div>
    )

}

export default KoreanStyleRibsRecipePage