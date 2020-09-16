import React from 'react';
import { Helmet } from 'react-helmet';
import { FooterComponent } from '../../footer-component/footer-component';
import { DeGuzmanRecipeTabCompoent } from '../../tab-components/deguzman-recipe-tab-component';

export default class PadThaiRecipePageComponent extends React.Component<any,any> {
    render() {
        return (
            <div id="white-background">
                <Helmet>
                    <title>
                        Pad Tha Recipe
                    </title>
                </Helmet>
                <div id="white-background">
                    <br></br>
                    <DeGuzmanRecipeTabCompoent />
                    <br></br>
                    <br></br>
                    
                </div>
                <FooterComponent />
            </div>
        )
    }
}