import React from 'react';
import { Helmet } from 'react-helmet';
import { DeGuzmanRecipeTabCompoent } from '../../tab-components/deguzman-recipe-tab-component';
import CreamyPastaAndCrispyMushroomsContainer from '../recipe-containers/creamy-pasta-and-crispy-mushroom';
import { FooterComponent } from '../../footer-component/footer-component';

export default class CreamyPastaAndCrispyMushroomsRecipePageComponent extends React.Component<any, any> {
    render() {
        return (
            <div>
                <Helmet>
                    <title>Creamy Pasta and Crispy Mushrooms</title>
                </Helmet>
                <div id="white-background">
                    <br></br>
                    <DeGuzmanRecipeTabCompoent />
                    <br></br>
                    <CreamyPastaAndCrispyMushroomsContainer/>
                    <br></br>
                    <br></br>
                    <FooterComponent />
                </div>
            </div>
        )
    }
}