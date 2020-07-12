import React from 'react';
import { DeGuzmanRecipeTabCompoent } from '../../tab-components/deguzman-recipe-tab-component';
import { Helmet } from 'react-helmet';

export class PotRoastRecipePageComponent extends React.Component<any,any> {
    render() {
        return (
            <div>
                <Helmet>
                    <title>
                        Pot Roast Recipe    
                    </title>
                </Helmet>
                <div id="white-background">
                    <DeGuzmanRecipeTabCompoent />
                </div>
            </div>
        )
    }
}