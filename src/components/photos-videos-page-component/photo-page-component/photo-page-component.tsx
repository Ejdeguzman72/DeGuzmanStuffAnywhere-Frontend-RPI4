import React from 'react';
import { Helmet } from 'react-helmet';
import { FooterComponent } from '../../footer-component/footer-component';
import PhotoUploadsTabComponent from '../../tab-components/photo-uploads-tab-component';

export class PhotoPageComponent extends React.Component<any,any> {
    render() {
        return (
            <div>
                <Helmet>
                    <title>Photos</title>
                </Helmet>
                <div id="white-background">
                    <br></br>
                    <PhotoUploadsTabComponent />
                </div>
                <FooterComponent />
            </div>
        )
    }
}