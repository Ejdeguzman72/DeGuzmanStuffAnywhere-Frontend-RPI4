import React from 'react';
import { Helmet } from 'react-helmet';
import BirthdayPageTableComponent from './birthday-page-table-component';
import { FooterComponent } from '../../footer-component/footer-component';

export class BirthdayPageComponent extends React.Component<any,any> {
    render() {
        return (
            <div>
                <Helmet>
                    <title>Birthdays</title>
                </Helmet>
                <div id="white-background">
                    <br></br>
                    <BirthdayPageTableComponent />
                </div>
                <FooterComponent />
            </div>
        )
    }
}