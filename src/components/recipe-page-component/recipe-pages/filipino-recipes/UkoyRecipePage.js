import React from 'react';
import { DeGuzmanRecipeTabCompoent } from '../../../tab-components/deguzman-recipe-tab-component';
import { Helmet } from 'react-helmet';
import { FooterComponent } from '../../../footer-component/footer-component';
import  UkoyRecipeContainer  from '../../recipe-containers/filipino-recipe-containers/UkoyRecipeContainer';

export class UkoyRecipePage extends React.Component {
    render() {
        return (
            <div>
                <Helmet>
                    <title>
                        Ukoy Recipe
                    </title>
                </Helmet>
                <div id="white-background">
                    <br></br>
                    <DeGuzmanRecipeTabCompoent />
                    <br></br>
                    <UkoyRecipeContainer />
                    <br></br>
                    <br></br>
                </div>
                <FooterComponent />
            </div>
        )
    }
}