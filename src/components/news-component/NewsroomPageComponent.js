import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import '../../style-sheets/newsroom.css'
import { Button, Modal, Row, Col, Form, Container } from 'react-bootstrap';
import NewsfeedComponent from './NewsfeedComponent';
import WeatherInfoModal from './WeatherInfoModal';
import JokeModal from './JokeModal';

const NewsroomPageComponent = () => {

    return (
        <div>
            <Helmet>
                <title>DSA Newsroom</title>
            </Helmet>
            <div id="white-background">
                <br></br>
                <Container fluid="true">
                    <Row>
                        <Col sm={3}><WeatherInfoModal /></Col>
                        <Col sm={6}>
                            <div>
                                <NewsfeedComponent />
                            </div>
                        </Col>
                        <Col sm={3}><JokeModal /></Col>
                    </Row>
                </Container>
            </div>
        </div >
    )
}

export default NewsroomPageComponent;