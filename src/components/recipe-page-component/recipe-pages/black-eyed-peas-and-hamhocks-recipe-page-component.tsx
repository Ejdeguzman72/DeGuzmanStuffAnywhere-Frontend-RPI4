import React from 'react';
import { DeGuzmanRecipeTabCompoent } from '../../tab-components/deguzman-recipe-tab-component';
import { Helmet } from 'react-helmet';

export class BlackEyedPeasAndHamHockRecipePageComponent extends React.Component<any,any> {
    render() {
        return (
            <div>
                <Helmet>
                    <title>
                        Black Eyed Peas and Ham Hock
                    </title>
                </Helmet>
                <div id="white-background">
                    <DeGuzmanRecipeTabCompoent />
                </div>
            </div>
        )
    }
}