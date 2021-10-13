import React from 'react';
import { Helmet } from 'react-helmet';
import { DeGuzmanRecipeTabCompoent } from '../../../tab-components/deguzman-recipe-tab-component';
import { FooterComponent } from '../../../footer-component/footer-component';
import MeatballsRecipeContainer from '../../recipe-containers/italian-recipe-containers/meatballs-recipe-container-component';

export class MeatballsPageComponent extends React.Component<any, any> {
    render() {
        return (
            <div>
                <Helmet>
                    <title>
                        Meatballs Recipe
                    </title>
                </Helmet>
                <div id="white-background">
                    <br></br>
                    <DeGuzmanRecipeTabCompoent />
                    <br></br>
                    <br></br>
                    <MeatballsRecipeContainer />
                </div>
                <FooterComponent />
            </div>
        )
    }
}