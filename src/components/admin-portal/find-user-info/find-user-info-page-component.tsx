import React from 'react';
import { Helmet } from 'react-helmet';
import FindUserInfo from './find-user-info';

const FindUserInfoPageComponent = () => {
    return (
        <div>
            <Helmet>
                <title>
                    Admin Portal: Find User Info
                </title>
            </Helmet>
            <div id="white-background">
                <FindUserInfo  />
            </div>
        </div>
    )
}

export default FindUserInfoPageComponent;