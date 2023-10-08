import React, { useState } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import '../../style-sheets/App.css'
import AutoShopService from '../../services/AutoShopService';
import AutoShop from './AutoShop';

const SearchAutoShopForm = () => {

    const initialState = {
        autoShopId: 0,
        autoShopName: "",
        address: "",
        city: "",
        state: "",
        zip: "",
    }

    const [autoshop, setAutoShop] = useState(initialState);

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
        AutoShopService.searchAutoShopByName(autoShopName)
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
                            <Form.Group className="mb-3" controlId="zip">
                                <Form.Label>Search Zip Code</Form.Label>
                                <input
                                    type="text"
                                    placeholder="Zip"
                                    className="form-control"
                                    name="zip" onChange={handleInputChange} /><br></br>
                            </Form.Group>
                        </Form>
                        <Button variant="info" onClick={getAutoShopsByZip}>Submit</Button>
                    </Col>
                    <Col md={5}>
                        <Form>
                            <Form.Group className="mb-3" controlId="autoShopName">
                                <Form.Label>Search By Name</Form.Label>
                                <input
                                    type="text"
                                    placeholder="Enter Shop Name"
                                    className="form-control"
                                    name="autoShopName"
                                    onChange={handleInputChange} /><br></br>
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