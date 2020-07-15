import React from 'react';
import { DeGuzmanRecipeTabCompoent } from '../../tab-components/deguzman-recipe-tab-component';
import { Helmet } from 'react-helmet';
import { FooterComponent } from '../../footer-component/footer-component';
import StuffedGreenPeppersRecipeContainer from '../recipe-containers/stuffed-green-peppers-recipe-container-component';

export class StuffedGreenPeppersPageComponent extends React.Component<any,any> {
    render() {
        return (
            <div>
                <Helmet>
                    <title>
                        Stuffed Green Peppers
                    </title>
                </Helmet>
                <div id="white-background">
                    <br></br>
                    <DeGuzmanRecipeTabCompoent />
                    <br></br>
                    <br></br>
                    <StuffedGreenPeppersRecipeContainer />
                </div>
                <FooterComponent />
            </div>
        )
    }
}