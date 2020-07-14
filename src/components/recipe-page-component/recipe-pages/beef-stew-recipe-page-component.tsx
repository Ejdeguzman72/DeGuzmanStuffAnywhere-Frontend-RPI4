import React from 'react';
import { DeGuzmanRecipeTabCompoent } from '../../tab-components/deguzman-recipe-tab-component';
import { Helmet } from 'react-helmet';
import BeefStewRecipeContainerComponent from '../recipe-containers/beef-stew-recipe-container-component';

export class BeefstewRecipePageComponent extends React.Component<any, any> {
    render() {
        return (
            <div>
                <Helmet>
                    <title>
                        Beef Stew Recipe
                    </title>
                </Helmet>
                <div id="white-background">
                    <br></br>
                    <DeGuzmanRecipeTabCompoent />
                    <br></br>
                    <BeefStewRecipeContainerComponent />
                </div>
            </div>
        )
    }
}