import React, { useState, useEffect } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import AutoShopService from '../../services/AutoShopService';
import { AutoFinanceTabsComponent } from '../tab-components/AutoFinanceTabsComponent';

const AutoShop = props => {
    const initialState = {
        autoShopId: 0,
        autoShopName: "",
        address: "",
        city: "",
        state: "",
        zip: "",
    };

    const [currentShop, setCurrentShop] = useState(initialState);
    const [message, setMessage] = useState("");

    const getShop = (autoShopId) => {
        AutoShopService.getAutoShopById(autoShopId)
            .then(response => {
                setCurrentShop(response.data.autoShop);
            })
            .catch(error => {
                console.log(error);
            });
    };

    useEffect(() => {
        getShop(props.match.params.autoShopId);
    }, [props.match.params.autoShopId]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setCurrentShop({ ...currentShop, [name]: value });
    };

    const updateShop = () => {
        AutoShopService.updateAutoShop(currentShop.autoShopId, currentShop)
            .then(response => {
                alert("The Auto repair shop was updated successfully");
            })
            .catch(error => {
                console.log(error);
            });
    };

    const deleteShop = () => {
        AutoShopService.deleteAutoShop(currentShop.autoShopId)
            .then(response => {
                props.history.push("/auto-shops-grid");
            })
            .catch(error => {
                console.log(error);
            });
    };

    return (
        <div>
            <br></br>
            <AutoFinanceTabsComponent />
            <div id="white-background">
                <br></br>
                {currentShop ? (
                    <div className="edit form">
                        <h4>Auto Repair Shop Info</h4>
                        <form className="update-book-container">
                            <div className="form-group">
                                <label htmlFor="autoShopName">Auto Repair Shop Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="autoShopName"
                                    name="namautoShopNamee"
                                    value={currentShop.autoShopName}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="descr">Address</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="address"
                                    name="address"
                                    value={currentShop.address}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="descr">City</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="city"
                                    name="city"
                                    value={currentShop.city}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="descr">State</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="state"
                                    name="state"
                                    value={currentShop.state}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="descr">Zip</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="zip"
                                    name="zip"
                                    value={currentShop.zip}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </form>
                    </div>
                ) : (
                    <div>
                        <Button className="badge badge-danger mr-2" onClick={() => updateShop(true)}>
                            Update
                        </Button>
                    </div>
                )}

                <br></br>
                <Row>
                    <Col md={4}>

                    </Col>
                    <Col md={2}>
                        <div>
                            <Button type="submit" size="lg" variant="dark" onClick={updateShop}>Update</Button>
                        </div>
                    </Col>
                    <Col md={2}>
                        <div>
                            <Button type="submit" size="lg" variant="outline-danger" onClick={deleteShop}>
                                Delete
                            </Button>
                        </div>
                    </Col>
                    <Col md={4}>

                    </Col>
                </Row>
                <p>{message}</p>
            </div>
        </div>
    )
}

export default AutoShop;

