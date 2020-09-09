import React from 'react';
import { Helmet } from 'react-helmet';
import AdminPortalPendingUsersTableComponent from './approve-users-table-component';

const ApproveUserPageComponent = () => {
    return (
        <div>
            <Helmet>
                <title>
                    Admin Portal: Approve User
                </title>
            </Helmet>
            <div id="white-background">
                <br></br>
                <AdminPortalPendingUsersTableComponent />
            </div>
        </div>
    )
}

export default ApproveUserPageComponent;