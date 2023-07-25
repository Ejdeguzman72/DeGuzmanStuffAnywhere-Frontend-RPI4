import React from 'react';
import { Helmet } from 'react-helmet';
import { FooterComponent } from '../../footer-component/footer-component';
import { GeneralFinanceTabsComponent } from '../../tab-components/general-finance-tabs-components';
import GeneralFinancePageTableComponent from './GeneralFinanceTable';
import GeneralTrxList from './pagination/GeneralTrxList';
import GeneralTrxOptionsDropdown from '../../dropdown-components/GeneralTrxOptionsDropdown';

export class GeneralFinanceGridView extends React.Component<any,any> {
    render() {
        return (
            <div>
                <Helmet>
                    <title>Finance</title>
                </Helmet>
                <div id="white-background">
                    <br></br>
                    <GeneralFinanceTabsComponent />
                    <br></br>
                    <GeneralTrxOptionsDropdown />
                    <br></br>
                    <GeneralTrxList />
                </div>
                <FooterComponent />
            </div>
        )
    }
}