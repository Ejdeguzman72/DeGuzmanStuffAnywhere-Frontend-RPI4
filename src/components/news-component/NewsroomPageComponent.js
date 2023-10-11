import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import '../../style-sheets/newsroom.css'
import DateContainer from './DateContainer';
import JokeContainer from './JokeContainer';
import { Button, Modal, Row, Col, Form, Container } from 'react-bootstrap';
import WeatherContainer from './WeatherContainer';
import NewsfeedComponent from './NewsfeedComponent';

const NewsroomPageComponent = () => {

    return (
        <div>
            <Helmet>
                <title>DSA Newsroom</title>
            </Helmet>
            <div id="white-background">
                <Row>
                    <Col md={4}>
                        <JokeContainer />
                    </Col>
                    <Col md={4}>
                        <div className="newsroom-container">
                            <DateContainer />
                        </div>
                    </Col>
                    <Col md={1}>

                    </Col>
                    <Col md={1}>

                    </Col>
                    <Col md={2}>
                        <WeatherContainer />
                    </Col>
                </Row>
                <Container fluid="true">
                    <Row>
                        <Col sm={3}></Col>
                        <Col sm={6}>
                        <div>
                            <NewsfeedComponent />
                        </div>
                        </Col>
                        <Col sm={3}></Col>
                    </Row>
                </Container>
            </div>
        </div >
    )
}

export default NewsroomPageComponent;