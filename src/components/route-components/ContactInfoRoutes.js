import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { ContactPageComponent } from '../general-info-components/contact-info-page-component/ContactInfoPage';
import { ContactGridView } from '../general-info-components/contact-info-page-component/ContactGridView';
import Contact from '../general-info-components/contact-info-page-component/Contact';

const ContactInfoRoutes = () => {
    return (
        <HashRouter>
            <Switch>
                <Route path="/contact-info-table" exact component={ContactPageComponent} />
                <Route path="/contact-info-grid" exact component={ContactGridView} />
                <Route path="/update-contact/:personId" exact component={Contact} />
            </Switch>
        </HashRouter>
    )
}

export default ContactInfoRoutes;