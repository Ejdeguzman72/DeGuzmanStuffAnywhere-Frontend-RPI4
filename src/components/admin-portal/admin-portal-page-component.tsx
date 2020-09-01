import React from 'react';
import { Helmet } from 'react-helmet';
import AdminPortalTabComponent from '../tab-components/admin-portal-tab-components';

export default class AdmimPortalPageComponent extends React.Component<any, any> {
    render() {
        return (
            <div>
                <Helmet>
                    <title>
                        Admin Portal
                    </title>
                </Helmet>
                <div id="white-background">
                    <br></br>
                    <AdminPortalTabComponent />
                </div>
            </div>
        )
    }
}