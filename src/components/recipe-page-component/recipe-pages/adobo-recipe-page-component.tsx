import React from 'react';
import { DeGuzmanRecipeTabCompoent } from '../../tab-components/deguzman-recipe-tab-component';
import { Helmet } from 'react-helmet';
import AdoboRecipeContainerComponent from '../recipe-containers/adobo-recipe-container-component';

export class AdoboRecipePageComponent extends React.Component<any,any> {
    render() {
        return (
            <div>
                <Helmet>
                    <title>
                        Adobo Recipe
                    </title>
                </Helmet>
                <div id="white-background">
                    <br></br>
                    <DeGuzmanRecipeTabCompoent />
                    <br></br>
                    <AdoboRecipeContainerComponent />
                </div>
            </div>
        )
    }
}