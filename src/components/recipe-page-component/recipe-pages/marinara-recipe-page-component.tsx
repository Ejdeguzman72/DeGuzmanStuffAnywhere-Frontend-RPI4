import React from 'react';
import { DeGuzmanRecipeTabCompoent } from '../../tab-components/deguzman-recipe-tab-component';
import { Helmet } from 'react-helmet';
import MarinaraRecipeContainer from '../recipe-containers/marinara-recipe-container-component';
import { FooterComponent } from '../../footer-component/footer-component';

export class MarinaraRecipePageComponent extends React.Component<any, any> {
    render() {
        return (
            <div>
                <Helmet>
                    <title>Basic Marinara Sauce Recipe</title>
                </Helmet>
                <div id="white-background">
                    <br></br>
                    <DeGuzmanRecipeTabCompoent />
                    <br></br>
                    <MarinaraRecipeContainer />
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                </div>
                <FooterComponent />
            </div>
        )
    }
}