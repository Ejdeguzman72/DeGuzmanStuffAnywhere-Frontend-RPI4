import React from 'react';
import { Helmet } from 'react-helmet';
import VideoUplaodsTabComponent from '../../tab-components/video-uploads-tab-component';

export class VideoPageComponent extends React.Component<any,any> {
    render() {
        return (
            <div>
                <Helmet>
                    <title>Videos</title>
                </Helmet>
                <div id="white-background">
                    <br></br>
                    <VideoUplaodsTabComponent />
                </div>
            </div>
        )
    }
}