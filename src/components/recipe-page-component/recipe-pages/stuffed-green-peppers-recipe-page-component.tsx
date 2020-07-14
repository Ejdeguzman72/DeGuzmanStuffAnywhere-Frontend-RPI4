import React from 'react';
import { DeGuzmanRecipeTabCompoent } from '../../tab-components/deguzman-recipe-tab-component';
import { Helmet } from 'react-helmet';

export class StuffedGreenPeppersPageComponent extends React.Component<any,any> {
    render() {
        return (
            <div>
                <Helmet>
                    <title>
                        Stuffed Green Peppers
                    </title>
                </Helmet>
                <div id="white-background">
                    <br></br>
                    <DeGuzmanRecipeTabCompoent />
                </div>
            </div>
        )
    }
}