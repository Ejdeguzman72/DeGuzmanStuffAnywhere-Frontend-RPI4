import React from 'react';
import { Helmet } from 'react-helmet';
import PhotoUploadsTabComponent from '../../tab-components/photo-uploads-tab-component';
// import { PhotoUploadComponent } from '../../file-upload-components/photo-upload-component';

export class PhotoUploadPageComponent extends React.Component<any,any> {
    render() {
        return (
            <div>
            <Helmet>
                <title>Photo Uploads</title>
            </Helmet>
            <div id="white-background">
                <br></br>
                <PhotoUploadsTabComponent />
                <br></br>
                <br></br>
                {/* <PhotoUploadComponent /> */}
                <br></br>
            </div>
        </div>
        )
    }
}