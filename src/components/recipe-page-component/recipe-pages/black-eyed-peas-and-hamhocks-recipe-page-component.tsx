import React from 'react';
import { DeGuzmanRecipeTabCompoent } from '../../tab-components/deguzman-recipe-tab-component';
import { Helmet } from 'react-helmet';
import BlacyEyedPeasAndHamHockContainer from '../recipe-containers/black-eyed-peas-and-hamhock-container-component';
import { FooterComponent } from '../../footer-component/footer-component';

export class BlackEyedPeasAndHamHockRecipePageComponent extends React.Component<any, any> {
    render() {
        return (
            <div>
                <Helmet>
                    <title>
                        Black Eyed Peas and Ham Hock
                    </title>
                </Helmet>
                <div id="white-background">
                    <br></br>
                    <DeGuzmanRecipeTabCompoent />
                    <br></br>
                    <BlacyEyedPeasAndHamHockContainer />
                    <br></br>
                    <br></br>
                </div>
                <FooterComponent />
            </div>
        )
    }
}