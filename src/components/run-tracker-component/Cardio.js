import React, { useState, useEffect } from 'react';
import { Button, Col, Row, Form } from 'react-bootstrap';
import CardioTrackerService from '../../services/CardioTrackerService';
import RunTrackerTabComponent from '../tab-components/CardioTrackerTabComponent';
import UserDropdown from '../dropdown-components/UserDropdown';

const Cardio = props => {
    const initialState = {
        cardioId: 0,
        cDate: "",
        cDistance: 0,
        cTime: 0,
        userId: 0,
        cardioTypeId: 0
    };

    const [currentCardio, setCurrentCardio] = useState(initialState);
    const [message, setMessage] = ("");

    const handleUser = (userId) => {
        setCurrentCardio({
            ...currentCardio, userId: userId
        });
    }

    const getCardio = (cardioId) => {
        CardioTrackerService.getCardioTrackerById(cardioId)
            .then(response => {
                setCurrentCardio(response.data.cardio);
            })
            .catch(error => {
                console.log(error);
            });
    };

    useEffect(() => {
        getCardio(props.match.params.cardioId);
    }, [props.match.params.cardioId]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setCurrentCardio({ ...currentCardio, [name]: value });
    };

    const updateCardio = () => {
        CardioTrackerService.updateCardioInformation(currentCardio.cardioId, currentCardio)
            .then(response => {
                alert("The cardio was updated successfully");
            })
            .catch(error => {
                console.log(error);
            });
    };

    const deleteCardio = () => {
        CardioTrackerService.deleteCardio(currentCardio.cardioId)
            .then(response => {
                props.history.push("/run-tracker-grid");
            })
            .catch(error => {
                console.log(error);
            });
    };

    return (
        <div>
            <br></br>
            <RunTrackerTabComponent />
            <div id="white-background">
                <br></br>
                {currentCardio ? (
                    <div className="edit form">
                        <h4>Cardio Tracker Info</h4>
                        <form className="update-book-container">
                            <div className="form-group">
                                <label htmlFor="cDate">Date</label>
                                <Form.Group controlId="cDate">
                                <Form.Label>Select Date</Form.Label>
                                <Form.Control type="date" name="cDate" placeholder="Date" onChange={handleInputChange} />
                            </Form.Group>
                            </div>
                            <div className="form-group">
                                <label htmlFor="cDistance">Distance</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="cDistance"
                                    name="cDistance"
                                    value={currentCardio.cDistance}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="cTime">Time</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="cTime"
                                    name="cTime"
                                    value={currentCardio.cTime}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="user_id">User</label>
                                <UserDropdown
                                    handleUser={handleUser}
                                />
                            </div>
                        </form>
                    </div>
                ) : (
                    <div>
                        <Button className="badge badge-danger mr-2" onClick={() => updateCardio(true)}>
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
                            <Button type="submit" size="lg" variant="dark" onClick={updateCardio}>Update</Button>
                        </div>
                    </Col>
                    <Col md={2}>
                        <div>
                            <Button type="submit" size="lg" variant="outline-danger" onClick={deleteCardio}>
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

export default Cardio;

