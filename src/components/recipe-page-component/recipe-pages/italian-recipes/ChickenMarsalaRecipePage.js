import React from 'react';
import { DeGuzmanRecipeTabCompoent } from '../../../tab-components/deguzman-recipe-tab-component';
import { Helmet } from 'react-helmet';
import ChickenMarsalaRecipeContainer from '../../recipe-containers/italian-recipe-containers/ChickenMarsalaRecipeContainer';
import { FooterComponent } from '../../../footer-component/footer-component';

const ChickenMarsalaRecipePage = () => {
        return (
            <div>
                <Helmet>
                    <title>Chicken Marsala Recipe</title>
                </Helmet>
                <div id="white-background">
                    <br></br>
                    <DeGuzmanRecipeTabCompoent />
                    <br></br>
                    <ChickenMarsalaRecipeContainer />
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                </div>
                <FooterComponent />
            </div>
        )
}

export default ChickenMarsalaRecipePage;