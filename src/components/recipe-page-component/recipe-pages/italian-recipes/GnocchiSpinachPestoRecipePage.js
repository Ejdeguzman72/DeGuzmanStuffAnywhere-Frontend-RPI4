import React from 'react';
import { DeGuzmanRecipeTabCompoent } from '../../../tab-components/deguzman-recipe-tab-component';
import { Helmet } from 'react-helmet';
import { FooterComponent } from '../../../footer-component/footer-component';
import ChickenParmesanContainer from '../../recipe-containers/italian-recipe-containers/ChickenParmesanContainer';
import GnocchiSpinachPestoRecipeContainer from '../../recipe-containers/italian-recipe-containers/GnocchiSpinachPestoPastaRecipeContainer';

const GnocchiSpinachPestoRecipePage = () => {
    return (
        <div>
            <Helmet>

                <title>
                    Gnocchi Spinach Pesto Pasta Recipe
                </title>
            </Helmet>
            <div id="white-background">
                <br></br>
                <DeGuzmanRecipeTabCompoent />
                <br></br>
                <br></br>
                <GnocchiSpinachPestoRecipeContainer />
            </div>
            <FooterComponent />
        </div>
    )
}

export default GnocchiSpinachPestoRecipePage;