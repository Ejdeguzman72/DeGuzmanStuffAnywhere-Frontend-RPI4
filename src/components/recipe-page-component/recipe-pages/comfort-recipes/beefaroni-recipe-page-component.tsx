import React from 'react';
import { Helmet } from 'react-helmet';
import { DeGuzmanRecipeTabCompoent } from '../../../tab-components/deguzman-recipe-tab-component';
import BeefaroniRecipeContainer from '../../recipe-containers/comfort-food-recipe-containers/beefaroni-recipe-container-component';
import { FooterComponent } from '../../../footer-component/footer-component';


export class BeefaroniRecipePageComponent extends React.Component<any, any> {
    render() {
        return (
            <div>
                <Helmet>
                    <title>
                        Beefaroni Recipe
                    </title>
                </Helmet>
                <div id="white-background">
                    <br></br>
                    <DeGuzmanRecipeTabCompoent />
                    <br></br>
                    <BeefaroniRecipeContainer />
                    <br></br>
                    <br></br>
                </div>
                <FooterComponent />
            </div>
        )
    }
}