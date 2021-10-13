import React from 'react';
import { DeGuzmanRecipeTabCompoent } from '../../../tab-components/deguzman-recipe-tab-component';
import { Helmet } from 'react-helmet';
import { FooterComponent } from '../../../footer-component/footer-component';
import SalisburySteaksRecipeContainer from '../../recipe-containers/comfort-food-recipe-containers/salisbury-steaks-recipe-container-component';

export class SalisburySteaksRecipePageComponent extends React.Component<any,any> {
    render() {
        return (
            <div>
                <Helmet>
                    <title>
                        Salisbury Steaks Recipe
                    </title>
                </Helmet>
                <div id="white-background">
                    <br></br>
                    <DeGuzmanRecipeTabCompoent />
                    <br></br>
                    <br></br>
                    <SalisburySteaksRecipeContainer />
                </div>
                <FooterComponent />
            </div>
        )
    }
}