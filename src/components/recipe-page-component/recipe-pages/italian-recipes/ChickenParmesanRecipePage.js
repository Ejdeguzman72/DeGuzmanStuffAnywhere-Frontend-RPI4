import React from 'react';
import { DeGuzmanRecipeTabCompoent } from '../../../tab-components/deguzman-recipe-tab-component';
import { Helmet } from 'react-helmet';
import { FooterComponent } from '../../../footer-component/footer-component';
import ChickenParmesanContainer from '../../recipe-containers/italian-recipe-containers/ChickenParmesanContainer';

const ChickenParmesanRecipePage = () => {
    return (
        <div>
            <Helmet>

                <title>
                    Chicken Parmesan Recipe
                </title>
            </Helmet>
            <div id="white-background">
                <br></br>
                <DeGuzmanRecipeTabCompoent />
                <br></br>
                <br></br>
                <ChickenParmesanContainer />
            </div>
            <FooterComponent />
        </div>
    )
}

export default ChickenParmesanRecipePage