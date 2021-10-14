import React from 'react';
import { DeGuzmanRecipeTabCompoent } from '../../../tab-components/deguzman-recipe-tab-component';
import { Helmet } from 'react-helmet';
import { FooterComponent } from '../../../footer-component/footer-component';
import SinigangRecipeContainer from '../../recipe-containers/filipino-recipe-containers/SinigangRecipeContainer';

const SinigangRecipePage = () => {
    return (
        <div>
            <Helmet>
                <title>
                    Pork Sinigang Recipe
                </title>
            </Helmet>
            <div id="white-background">
                <br></br>
                <DeGuzmanRecipeTabCompoent />
                <br></br>
                <SinigangRecipeContainer />
                <br></br>
                <br></br>
            </div>
            <FooterComponent />
        </div>
    )
}

export default SinigangRecipePage;