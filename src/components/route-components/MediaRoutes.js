import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { PhotoVideoPageComponent } from '../photos-videos-page-component/media-page-component/photo-video-page-component';
import { PhotoPageComponent } from '../photos-videos-page-component/photo-page-component/photo-page-component';
import { PhotoUploadPageComponent } from '../photos-videos-page-component/photo-upload-page-component/photo-upload-page-component';
import FirebasePhotoGalleryBtn from '../photos-videos-page-component/media-page-component/FirebasePhotoGalleryBUttonComponent';
import FirebasePhotoGalleryPageComponent from '../photos-videos-page-component/firebase-photo-gallery/components/firebase-photo-gallery-page-component';
import { VideoPageComponent } from '../photos-videos-page-component/video-page-component/video-page-component';
import { VideoUploadPageComponent } from '../photos-videos-page-component/video-upload-page-component/video-upload-page-component';
import DownloadsPageComponent from '../downloads-component/DownloadsPageComponent';
import SocialMediaPage from '../social-media-component/SocialMediaPage';
import UtilityPageComponent from '../utility-components/utility-page-component';

const MediaRoutes = () => {
    return (
        <div>
            <HashRouter>
                <Switch>
                    <Route path="/downloads" exact component={DownloadsPageComponent} />
                    <Route path="/media" exact component={PhotoVideoPageComponent} />
                    <Route path="/photos" exact component={PhotoPageComponent} />
                    <Route path="/photo-uploads" exact component={PhotoUploadPageComponent} />
                    <Route path="/firebase-photo-gallery" exact component={FirebasePhotoGalleryPageComponent} />
                    <Route path="/videos" exaxt component={VideoPageComponent} />
                    <Route path="/video-uploads" exact component={VideoUploadPageComponent} />
                    <Route path="/utility-tracker" exact component={UtilityPageComponent} />
                    <Route path="/social-media-feed" exact component={SocialMediaPage} />
                </Switch>
            </HashRouter>
        </div>
    )
}

export default MediaRoutes;