import React from 'react';
import { Helmet } from 'react-helmet';
import SocialMediaTabs from '../tab-components/SocialMediaTabsComponent';
import PostList from './PostList';
import '../../style-sheets/social-media.css'

const SocialMediaPage = () => {
    return (
        <div>
            <Helmet>
                <title>Social Media Feed</title>
            </Helmet>
            <div id="social-media-background">
                <br></br>
                <SocialMediaTabs />
                <br></br>
                <br></br>
                <PostList />
            </div>
        </div>
    )
}

export default SocialMediaPage;