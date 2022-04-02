import React from 'react';
import { DeGuzmanRecipeTabCompoent } from '../../../tab-components/deguzman-recipe-tab-component';
import { Helmet } from 'react-helmet';
import { FooterComponent } from '../../../footer-component/footer-component';
import PotRoastRecipeContainer from '../../recipe-containers/slowcooker-container-recipes/PotRoastContainer';

export class PotRoastRecipePageComponent extends React.Component<any, any> {
    render() {
        return (
            <div>
                <Helmet>
                    <title>
                        Pot Roast Recipe
                    </title>
                </Helmet>
                <div id="white-background">
                    <br></br>
                    <DeGuzmanRecipeTabCompoent />
                    <br></br>
                    <br></br>
                    <PotRoastRecipeContainer />
                </div>
                <FooterComponent />
            </div>
        )
    }
}