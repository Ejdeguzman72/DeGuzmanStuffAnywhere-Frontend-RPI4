import React from 'react';
import { Helmet } from 'react-helmet';

export class VideoPageComponent extends React.Component<any,any> {
    render() {
        return (
            <div>
                <Helmet>
                    <title>Videos</title>
                </Helmet>
                <div id="white-background">
                    <h1>Video Page</h1>
                </div>
            </div>
        )
    }
}