import React from 'react';
import { Helmet } from 'react-helmet';
import { FooterComponent } from '../footer-component/footer-component';
import ContactInfoEditableTableComponent from './ContactInfoTable';
import ContactList from './ContactList';
import ContactInfoTabs from '../tab-components/ContactInfoTabs';
import ContactOptionsDropdown from '../dropdown-components/ContactOptionsDropdown';

export class ContactPageComponent extends React.Component<any,any> {
    render() {
        return (
            <div>
                <Helmet>
                    <title>Contact Information</title>
                </Helmet>
                <div id="white-background">
                    <br></br>
                    <ContactInfoTabs />
                    <br></br>
                    <ContactInfoEditableTableComponent />
                </div>
                <FooterComponent />
            </div>
        )
    }
}