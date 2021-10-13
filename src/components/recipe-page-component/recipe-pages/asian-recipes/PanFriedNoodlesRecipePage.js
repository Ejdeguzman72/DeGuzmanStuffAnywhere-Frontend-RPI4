import React from 'react';
import { Helmet } from 'react-helmet';
import { FooterComponent } from '../../../footer-component/footer-component';
import { DeGuzmanRecipeTabCompoent } from '../../../tab-components/deguzman-recipe-tab-component';
import PanFriedNoodlesContainer from '../../recipe-containers/asian-recipe-containers/PanFriedNoodlesContainer';


const PanFriedNoodlesRecipePage = () => {
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
                <PanFriedNoodlesContainer />
            </div>
            <FooterComponent />
        </div>
    )

}

export default PanFriedNoodlesRecipePage