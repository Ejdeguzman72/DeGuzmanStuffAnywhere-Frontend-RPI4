import React from 'react';
import { Helmet } from 'react-helmet';
import { MediaPhotoPageContainerComponent } from './photo-page-container-component';
import { VideoPageContainerComponent } from './video-page-container-component';
import { FooterComponent } from '../../footer-component/footer-component';

export class PhotoVideoPageComponent extends React.Component<any,any> {
    render() {
        return (
            <div>
                <Helmet>
                    <title>Media</title>
                </Helmet>
                <div id="white-background">
                    <MediaPhotoPageContainerComponent />
                    <VideoPageContainerComponent />
                </div>
                <FooterComponent />
            </div>
        )
    }
}