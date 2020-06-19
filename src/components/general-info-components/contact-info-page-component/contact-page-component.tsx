import React from 'react';
import { Helmet } from 'react-helmet';
import ContactPageTableComponent from './contact-page-table-component';
import { FooterComponent } from '../../footer-component/footer-component';

export class ContactPageComponent extends React.Component<any,any> {
    render() {
        return (
            <div>
                <Helmet>
                    <title>Contact Information</title>
                </Helmet>
                <div id="white-background">
                    <br></br>
                    <ContactPageTableComponent />
                </div>
                <FooterComponent />
            </div>
        )
    }
}