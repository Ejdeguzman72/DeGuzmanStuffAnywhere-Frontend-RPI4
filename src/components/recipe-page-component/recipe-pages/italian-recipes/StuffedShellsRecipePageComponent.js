import React from 'react';
import { DeGuzmanRecipeTabCompoent } from '../../../tab-components/deguzman-recipe-tab-component';
import { Helmet } from 'react-helmet';
import { FooterComponent } from '../../../footer-component/footer-component';
import StuffedShellsContainer from './../../recipe-containers/italian-recipe-containers/StuffedShellsRecipeContainer';

export class StuffedShellsRecipePageComponent extends React.Component {
    render() {
        return (
            <div>
                <Helmet>
                    
                    <title>
                        Stuffed Shells
                    </title>
                </Helmet>
                <div id="white-background">
                    <br></br>
                    <DeGuzmanRecipeTabCompoent />
                    <br></br>
                    <br></br>
                    <StuffedShellsContainer />
                </div>
                <FooterComponent />
            </div>
        )
    }
}