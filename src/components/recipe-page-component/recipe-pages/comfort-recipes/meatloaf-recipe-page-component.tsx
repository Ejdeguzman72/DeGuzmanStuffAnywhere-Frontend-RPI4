import React from 'react';
import { Helmet } from 'react-helmet';
import { DeGuzmanRecipeTabCompoent } from '../../../tab-components/deguzman-recipe-tab-component';
import { FooterComponent } from '../../../footer-component/footer-component'
import MeatloafRecipeContainer from '../../recipe-containers/comfort-food-recipe-containers/MeatloafContainer';

export class MeatloadRecipePageComponent extends React.Component<any, any> {
    render() {
        return (
            <div>
                <Helmet>
                    <title>
                        Meatloaf Recipe
                    </title>
                </Helmet>
                <div id="white-background">
                    <br></br>
                    <DeGuzmanRecipeTabCompoent />
                    <br></br>
                    <br></br>
                    <MeatloafRecipeContainer />
                </div>
                <FooterComponent />
            </div>
        )
    }
}