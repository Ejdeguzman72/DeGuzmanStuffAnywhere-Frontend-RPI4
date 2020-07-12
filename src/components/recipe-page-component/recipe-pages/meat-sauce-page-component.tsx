import React from 'react';
import { Helmet } from 'react-helmet';
import { DeGuzmanRecipeTabCompoent } from '../../tab-components/deguzman-recipe-tab-component';

export class MeatSaucePageComponent extends React.Component<any,any> {
    redner() {
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
                </div>
            </div>
        )
    }
}

