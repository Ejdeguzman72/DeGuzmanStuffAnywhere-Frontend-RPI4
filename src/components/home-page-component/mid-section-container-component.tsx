import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../../style-sheets/home-page.css';
import ChatSquare from './chat-square-icon-component';
import BlogIcon from './blog-square-icon-component';
import MediaIcon from './media-square-icon-component';

const MidSectionContainerComponent = () => {
    return (
        <div>
            <Container className="mid-section-container">
                <br></br>
                <h3>Hundreds of Miles Apart? No Problem!</h3>
                <hr color="white"></hr>
                <h3>Keep in touch with family and friends!</h3>
                <h4>DeGuzmanStuffAnywhere.com</h4>
                <Row>
                    {/* <div className="center">  */}
                    <Col md={4}>
                        <ChatSquare />
                    </Col>
                    <Col md={4}>
                        <BlogIcon />
                    </Col>
                    <Col  md={4}>
                        <MediaIcon />
                    </Col>
                    {/* </div> */}
                </Row>
            </Container>
        </div>
    )
}

export default MidSectionContainerComponent;