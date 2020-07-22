import React from 'react';
import { Helmet } from 'react-helmet';
import { FooterComponent } from '../../footer-component/footer-component';
import ContactInfoTable from './contact-page-table-component';
import MaterialTableDemo from './fancy-contact-table-component';


export class ContactPageComponent extends React.Component<any,any> {
    render() {
        return (
            <div>
                <Helmet>
                    <title>Contact Information</title>
                </Helmet>
                <div id="white-background">
                    <br></br>
                    <br></br>
                    <ContactInfoTable />
                    <br></br><br></br>
                    <MaterialTableDemo />
                </div>
                <FooterComponent />
            </div>
        )
    }
}