import React, { useState, useEffect } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { AutoFinanceTabsComponent } from '../tab-components/AutoFinanceTabsComponent';
import VehicleInformationService from '../../services/VehicleInformationService';

const Vehicle = props => {
    const initialState = {
        vehicleId: 0,
        make: "",
        model: "",
        year: "",
        capacity: 0,
        transmission: "",
    };

    const [currentVehicle, setCurrentVehicle] = useState(initialState);
    const [message, setMessage] = useState("");

    const getVehicle = (vehicleId) => {
        VehicleInformationService.getVehicleInformationById(vehicleId)
            .then(response => {
                setCurrentVehicle(response.data.vehicle);
            })
            .catch(error => {
                console.log(error);
            });
    };

    useEffect(() => {
        getVehicle(props.match.params.vehicleId);
    }, [props.match.params.vehicleId]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setCurrentVehicle({ ...currentVehicle, [name]: value });
    };

    const updateVehicle = () => {
        VehicleInformationService.updateVehicleInformation(currentVehicle.vehicleId, currentVehicle)
            .then(response => {
                console.log(response.data);
                alert("The vehicle was updated successfully");
            })
            .catch(error => {
                console.log(error);
            });
    };

    const deleteVehicle = () => {
        VehicleInformationService.deleteVehicle(currentVehicle.vehicleId)
            .then(response => {
                console.log(response.data);
                props.history.push("/view-cars-grid");
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
                {currentVehicle ? (
                    <div className="edit form">
                        <h4>Vehicle Library</h4>
                        <form className="update-book-container">
                            <div className="form-group">
                                <label htmlFor="make">Manufacturer</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="make"
                                    name="make"
                                    value={currentVehicle.make}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="model">Model</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="model"
                                    name="model"
                                    value={currentVehicle.model}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="year">Year</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="year"
                                    name="year"
                                    value={currentVehicle.year}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="capacity">Capacity</label>
                                <select
                                    type="capacity"
                                    className="form-control"
                                    id="capacity"
                                    name="capacity"
                                    value={currentVehicle.capacity}
                                    onChange={handleInputChange}
                                >
                                    <option value="2">2</option>
                                    <option value="4">4</option>
                                    <option value="6">6</option>
                                    <option value="8">8</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="transmission">Transmission</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="transmission"
                                    name="transmission"
                                    value={currentVehicle.transmission}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </form>
                    </div>
                ) : (
                    <div>
                        <Button className="badge badge-danger mr-2" onClick={() => updateVehicle(true)}>
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
                            <Button type="submit" size="lg" variant="dark" onClick={updateVehicle}>Update</Button>
                        </div>
                    </Col>
                    <Col md={2}>
                        <div>
                            <Button type="submit" size="lg" variant="outline-danger" onClick={deleteVehicle}>
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

export default Vehicle;

