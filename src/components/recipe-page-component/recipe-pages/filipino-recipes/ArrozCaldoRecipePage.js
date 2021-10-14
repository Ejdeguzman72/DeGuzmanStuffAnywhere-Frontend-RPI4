import React from 'react';
import { DeGuzmanRecipeTabCompoent } from '../../../tab-components/deguzman-recipe-tab-component';
import { Helmet } from 'react-helmet';
import { FooterComponent } from '../../../footer-component/footer-component';
import ArrozCaldoRecipeContainer from '../../recipe-containers/filipino-recipe-containers/ArrozCaldoRecipeContainer';

const ArrozCaldoRecipePage = () => {
    return (
        <div>
            <Helmet>
                <title>
                    Arroz Caldo Recipe
                </title>
            </Helmet>
            <div id="white-background">
                <br></br>
                <DeGuzmanRecipeTabCompoent />
                <br></br>
                <ArrozCaldoRecipeContainer />
                <br></br>
                <br></br>
            </div>
            <FooterComponent />
        </div>
    )
}

export default ArrozCaldoRecipePage;