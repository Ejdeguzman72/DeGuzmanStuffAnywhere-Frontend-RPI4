import React from 'react';
import { DeGuzmanRecipeTabCompoent } from '../../../tab-components/deguzman-recipe-tab-component';
import { Helmet } from 'react-helmet';
import { FooterComponent } from '../../../footer-component/footer-component';
import CheeseSpinachQuicheContainer from '../../recipe-containers/comfort-food-recipe-containers/QuicheContainer';

export class CheeseSpinachQuicheRecipePage extends React.Component {
    render() {
        return (
            <div>
                <Helmet>
                    <title>
                        Cheese and Spiinach Quiche Recipe
                    </title>
                </Helmet>
                <div id="white-background">
                    <br></br>
                    <DeGuzmanRecipeTabCompoent />
                    <br></br>
                    <br></br>
                    <CheeseSpinachQuicheContainer />
                </div>
                <FooterComponent />
            </div>
        )
    }
}