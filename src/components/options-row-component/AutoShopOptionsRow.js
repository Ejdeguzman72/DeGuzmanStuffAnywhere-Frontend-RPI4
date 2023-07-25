import React from 'react';
import { Col, Row } from 'react-bootstrap';
import AddAutoShopModalComponent from '../auto-repair-shops-component/AddAutoShopModalComponent'
import ExportAutoShopCSV from '../auto-repair-shops-component/ExportAutoShopCSV';
import SearchAutoShopDropdown from '../dropdown-components/SearchAutoShopDropdown';

const AutoShopOptionsRow = (autoShop,fileName) => {
    return (
        <Row>
            <Col md={4}>
                <AddAutoShopModalComponent />
            </Col>
            <Col md={4}>
                <SearchAutoShopDropdown />
            </Col>
            <Col md={2}>

            </Col>
            <Col md={1}>
                {/* <ExportAutoShopCSV csvData={autoShop.data} fileName={fileName} /> */}
            </Col>
            <Col md={1}>

            </Col>
        </Row>
    )
}

export default AutoShopOptionsRow;