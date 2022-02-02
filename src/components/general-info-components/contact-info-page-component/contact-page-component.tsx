import React from 'react';
import { Helmet } from 'react-helmet';
import { FooterComponent } from '../../footer-component/footer-component';
import ContactInfoEditableTableComponent from './contact-info-editable-table-component';
import ContactList from './ContactList';

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
                    <ContactInfoEditableTableComponent />
                    <br></br>
                    <ContactList />
                </div>
                <FooterComponent />
            </div>
        )
    }
}