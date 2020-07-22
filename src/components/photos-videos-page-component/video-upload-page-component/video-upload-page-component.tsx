import React from 'react';
import VideoUplaodsTabComponent from '../../tab-components/video-uploads-tab-component';
import { Helmet } from 'react-helmet';
import VideosUploadComponent from '../../file-upload-components/video-upload-component';

export class VideoUploadPageComponent extends React.Component<any,any> {
    render() {
        return (
            <div>
                <Helmet>
                    <title>Video Uploads</title>
                </Helmet>
                <div id="white-background">
                    <br></br>
                    <VideoUplaodsTabComponent />
                    <br></br>
                    <br></br>
                    <VideosUploadComponent />
                </div>
            </div>
        )
    }
}