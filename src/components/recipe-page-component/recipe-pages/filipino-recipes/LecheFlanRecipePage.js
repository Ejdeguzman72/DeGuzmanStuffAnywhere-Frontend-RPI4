import React from 'react';
import { DeGuzmanRecipeTabCompoent } from '../../../tab-components/deguzman-recipe-tab-component';
import { Helmet } from 'react-helmet';
import { FooterComponent } from '../../../footer-component/footer-component';
import LecheFlanRecipeContainer from '../../recipe-containers/filipino-recipe-containers/LecheFlanRecipeContainer';

export class LecheFlanRecipePage extends React.Component {
    render() {
        return (
            <div>
                <Helmet>
                    <title>
                        Leche Flan Recipe
                    </title>
                </Helmet>
                <div id="white-background">
                    <br></br>
                    <DeGuzmanRecipeTabCompoent />
                    <br></br>
                    <LecheFlanRecipeContainer />
                    <br></br>
                    <br></br>
                </div>
                <FooterComponent />
            </div>
        )
    }
}