import React from 'react';
import { Table } from 'react-bootstrap';
import DownloadLink from 'react-download-link';
import DSADownloadsLinkComponent from './DSADownloadsLinkComponent';
import DownloadLinkComponent from './HAPIDownloadLinkComponent';
import HAPIDownloadLinkComponent from './HAPIDownloadLinkComponent';
import DSAIOSMobileLink from './DSAIOSMobileLink';
import DSAAndroidMobileLink from './DSAAndriodMobileLink'

const DownloadsTableComponent = () => {
    return (
        <div>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Applications Downloads</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                           <HAPIDownloadLinkComponent />
                        </td>
                    </tr>
                    <tr>
                        <td>
                           <DSADownloadsLinkComponent />
                        </td>
                    </tr>
                    <tr>
                        <td>
                           <DSAIOSMobileLink />
                        </td>
                    </tr>
                    <tr>
                        <td>
                          <DSAAndroidMobileLink />
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default DownloadsTableComponent;