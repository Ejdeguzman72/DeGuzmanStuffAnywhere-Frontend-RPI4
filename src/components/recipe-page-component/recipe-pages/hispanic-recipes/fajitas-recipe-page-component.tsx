import React from 'react';
import { DeGuzmanRecipeTabCompoent } from '../../../tab-components/deguzman-recipe-tab-component';
import { Helmet } from 'react-helmet';
import FajitasRecipeContainer from '../../recipe-containers/hispanic-recipe-containers/fajitas-recipe-container-component';
import { FooterComponent } from '../../../footer-component/footer-component';

export class FajitasRecipePageComponent extends React.Component<any, any> {
    render() {
        return (
            <div>
                <Helmet>
                    <title>
                        Fajitas Recipe
                    </title>
                </Helmet>
                <div id="white-background">
                    <br></br>
                    <DeGuzmanRecipeTabCompoent />
                    <br></br>
                    <FajitasRecipeContainer />
                    <br></br>
                    <br></br>
                </div>
                <FooterComponent />
            </div>
        )
    }
}