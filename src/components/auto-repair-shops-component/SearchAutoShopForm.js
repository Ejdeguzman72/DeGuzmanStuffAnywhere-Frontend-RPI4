import React, { useState } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import '../../style-sheets/App.css'
import AutoShopService from '../../services/AutoShopService';
import AutoShop from './AutoShop';

const SearchAutoShopForm = () => {

    const [autoshop, setAutoShop] = useState([]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setAutoShop({ ...autoshop, [name]: value });
    };

    const getAutoShopsByZip = (zip) => {
        AutoShopService.getAutoShopsByZip(zip)
            .then(response => {
                setAutoShop(response.data.list);
                console.log(autoshop)
            })
            .catch(error => {
                console.log(error)
            });
    };

    const getAutoShopByName = (autoShopName) => {
        AutoShopService.getAutoShopByName(autoShopName)
            .then(response => {
                setAutoShop(response.data.list);
                console.log(autoshop)
            })
            .catch(error => {
                console.log(error)
            });
        }

    return (
        <div id="white-background">
            <br></br>
            <div>
                <Row>
                    <Col md={1}></Col>
                    <Col md={5}>
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Search Zip Code</Form.Label>
                                <Form.Control className="search-container-input" type="zip" placeholder="Enter Zip Code" onChange={handleInputChange} />
                            </Form.Group>
                        </Form>
                        <Button variant="info" onClick={getAutoShopsByZip}>Submit</Button>
                    </Col>
                    <Col md={5}>
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Search By Name</Form.Label>
                                <Form.Control className="search-container-input"type="autoShopName" placeholder="Enter Auto Repair Shop Name" onChange={handleInputChange} />
                            </Form.Group>
                        </Form>
                        <Button variant="info" onClick={getAutoShopByName}>Submit</Button>
                    </Col>
                    <Col md={1}></Col>
                </Row>
            </div>
            <br></br>
        </div>
    )
}

export default SearchAutoShopForm;