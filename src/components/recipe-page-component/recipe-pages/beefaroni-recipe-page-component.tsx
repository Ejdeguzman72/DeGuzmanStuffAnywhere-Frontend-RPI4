import React from 'react';
import { Helmet } from 'react-helmet';
import { DeGuzmanRecipeTabCompoent } from '../../tab-components/deguzman-recipe-tab-component';
import BeefaroniRecipeContainer from '../recipe-containers/beefaroni-recipe-container-component';

export class BeefaroniRecipePageComponent extends React.Component<any, any> {
    render() {
        return (
            <div>
                <Helmet>
                    <title>
                        Beefaroni Recipe
                    </title>
                </Helmet>
                <div id="white-background">
                    <br></br>
                    <DeGuzmanRecipeTabCompoent />
                    <br></br>
                    <BeefaroniRecipeContainer />
                </div>
            </div>
        )
    }
}