import React from 'react';
import { Helmet } from 'react-helmet';
import { FooterComponent } from '../../footer-component/footer-component';

export class RecipePageComponent extends React.Component<any,any> {
    render() {
        return (
            <div>
                <Helmet>
                    <title>Recipes</title>
                </Helmet>
                <div id="white-background">
                    
                </div>
                <FooterComponent />
            </div>
        )
    }
}