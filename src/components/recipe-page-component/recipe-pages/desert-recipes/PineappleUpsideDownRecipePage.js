import React from 'react';
import { Helmet } from 'react-helmet';
import { DeGuzmanRecipeTabCompoent } from '../../../tab-components/deguzman-recipe-tab-component';
import PineappleUpsideDownCakeContainer from '../../recipe-containers/desert-recipe-containers/PineappleUpsideDownCakeContainer';

const PineappleUpsideDownRecipePage = () => {
    return (
        <div>
            <Helmet>
                <title>
                    Pineapple Upside Down Cake
                </title>
            </Helmet>
            <div id="white-background">
                <br></br>
                <DeGuzmanRecipeTabCompoent />
                <br></br>
                <PineappleUpsideDownCakeContainer />
            </div>
        </div>
    )
}

export default PineappleUpsideDownRecipePage;