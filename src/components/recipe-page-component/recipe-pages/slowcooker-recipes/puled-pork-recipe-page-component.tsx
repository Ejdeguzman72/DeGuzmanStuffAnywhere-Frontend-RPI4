import React from 'react';
import { Helmet } from 'react-helmet';
import { DeGuzmanRecipeTabCompoent } from '../../../tab-components/deguzman-recipe-tab-component';
import { FooterComponent } from '../../../footer-component/footer-component';
import PulledPorkRecipeContainer from '../../recipe-containers/slowcooker-container-recipes/pulled-pork-recipe-container-component';

export class PulledPorkRecipePageComponent extends React.Component<any, any> {
    render() {
        return (
            <div>
                <Helmet>
                    <title>
                        Pulled Pork Recipe
                    </title>
                </Helmet>
                <div id="white-background">
                    <br></br>
                    <DeGuzmanRecipeTabCompoent />
                    <br></br>
                    <br></br>
                    <PulledPorkRecipeContainer />
                </div>
                <FooterComponent />
            </div>
        )
    }
}