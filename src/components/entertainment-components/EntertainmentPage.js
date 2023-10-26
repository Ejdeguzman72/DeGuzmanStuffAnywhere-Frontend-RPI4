import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { FooterComponent } from '../footer-component/footer-component';
import EntertainmentList from './EntertainmentList';
import EntertainmentLibraryTab from '../tab-components/EntertainnentLibraryTab';
import AddEntertainmentModal from './AddEntertainmentModal';

const EntertainmentPage = () => {
    return (
        <div>
            <Helmet>
                <title>Entertainment Library</title>
            </Helmet>
            <div id="white-background">
                <br></br>
                <EntertainmentLibraryTab />
                <br></br>
                <Col md={4}>
                    
                </Col>
                <Col md={4}>
                    <AddEntertainmentModal />
                </Col>
                <Col md={4}>

                </Col>
                <br></br>
                <EntertainmentList />
            </div>
            <FooterComponent />
        </div>
    )
}

export default EntertainmentPage;