import React from 'react';
import { Helmet } from 'react-helmet';
import ContactOptionsDropdown from '../../dropdown-components/ContactOptionsDropdown';
import ContactInfoTabs from '../../tab-components/ContactInfoTabs';
import ContactList from './ContactList';
import { FooterComponent } from '../../footer-component/footer-component';

export class ContactGridView extends React.Component<any, any> {
    render() {
        return (
            <div>
                <Helmet>
                    <title>Contact Information</title>
                </Helmet>
                <div id="white-background">
                    <ContactInfoTabs />
                    <br></br>
                    <ContactOptionsDropdown />
                    <br></br>
                    <ContactList />
                </div>
                <FooterComponent />
            </div>
        )
    }
}