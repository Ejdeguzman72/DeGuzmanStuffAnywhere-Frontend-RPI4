import React, { useState, useEffect } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import RestaurantRecommendationService from '../../services/RestaurantRecommendationsService';
import RestaurantTabComponent from './../tab-components/RestaurantTabComponent';
import { MedicalTabsComponent } from './../tab-components/medical-tabs-component';
import MedicalOfficeService from '../../services/MedicalOfficeService';

const MedicalOffice = props => {
    const initialState = {
        medicalOfficeId: 0,
        name: "",
        address: "",
        city: "",
        state: "",
        zip: "",
    };

    const [currentOffice, setCurrentOffice] = useState(initialState);
    const [message, setMessage] = useState("");

    const getOffice = (medicalOfficeId) => {
        MedicalOfficeService.getMedicalOfficeById(medicalOfficeId)
            .then(response => {
                setCurrentOffice(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    };

    useEffect(() => {
        getOffice(props.match.params.medicalOfficeId);
    }, [props.match.params.medicalOfficeId]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setCurrentOffice({ ...currentOffice, [name]: value });
    };

    const updateOffice = () => {
        MedicalOfficeService.updateMedicalOfficeInformation(currentOffice.medicalOfficeId, currentOffice)
            .then(response => {
                console.log(response.data);
                alert("The medical office was updated successfully");
            })
            .catch(error => {
                console.log(error);
            });
    };

    const deleteOffice = () => {
        MedicalOfficeService.deleteMedicalOffice(currentOffice.medicalOfficeId)
            .then(response => {
                console.log(response.data);
                props.history.push("/medical-offices");
            })
            .catch(error => {
                console.log(error);
            });
    };

    return (
        <div>
            <br></br>
            <MedicalTabsComponent />
            <div id="white-background">
                <br></br>
                {currentOffice ? (
                    <div className="edit form">
                        <h4>Medical Office Info</h4>
                        <form className="update-book-container">
                            <div className="form-group">
                                <label htmlFor="name">Medical Office Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    name="name"
                                    value={currentOffice.name}
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
                                    value={currentOffice.address}
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
                                    value={currentOffice.city}
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
                                    value={currentOffice.state}
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
                                    value={currentOffice.zip}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </form>
                    </div>
                ) : (
                    <div>
                        <Button className="badge badge-danger mr-2" onClick={() => updateOffice(true)}>
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
                            <Button type="submit" size="lg" variant="dark" onClick={updateOffice}>Update</Button>
                        </div>
                    </Col>
                    <Col md={2}>
                        <div>
                            <Button type="submit" size="lg" variant="outline-danger" onClick={deleteOffice}>
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

export default MedicalOffice;

