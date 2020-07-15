import React from 'react';
import { Helmet } from 'react-helmet';
import { DeGuzmanRecipeTabCompoent } from '../../tab-components/deguzman-recipe-tab-component';
import { FooterComponent } from '../../footer-component/footer-component';
import MeatSauceContainer from '../recipe-containers/meat-sauce-container-component';

export class MeatSaucePageComponent extends React.Component<any,any> {
    render() {
        return (
            <div>
                <Helmet>
                    <title>
                        Meat Sauce
                    </title>
                </Helmet>
                <div id="white-background">
                    <br></br>
                    <DeGuzmanRecipeTabCompoent />
                    <br></br>
                    <br></br>
                    <MeatSauceContainer />
                    <br></br>
                    <br></br>
                </div>
                <FooterComponent />
            </div>
        )
    }
}

