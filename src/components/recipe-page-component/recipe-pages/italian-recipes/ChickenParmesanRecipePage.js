import React from 'react';
import { DeGuzmanRecipeTabCompoent } from '../../../tab-components/deguzman-recipe-tab-component';
import { Helmet } from 'react-helmet';
import { FooterComponent } from '../../../footer-component/footer-component';
import ChickenParmesanContainer from '../../recipe-containers/italian-recipe-containers/ChickenParmesanContainer';

export class ChickenParmesanRecipePage extends React.Component {
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
                    <ChickenParmesanContainer />
                </div>
                <FooterComponent />
            </div>
        )
    }
}