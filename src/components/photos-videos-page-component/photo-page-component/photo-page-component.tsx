import React from 'react';
import { Helmet } from 'react-helmet';

export class PhotoPageComponent extends React.Component<any,any> {
    render() {
        return (
            <div>
                <Helmet>
                    <title>Photos</title>
                </Helmet>
                <div id="white-backgound">
                    <h1>Photos</h1>
                </div>
            </div>
        )
    }
}