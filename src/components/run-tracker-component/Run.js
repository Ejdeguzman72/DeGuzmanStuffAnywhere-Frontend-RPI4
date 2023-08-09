import React, { useState, useEffect } from 'react';
import { Button, Col, Row, Form } from 'react-bootstrap';
import RunTrackerService from '../../services/RunTrackerService';
import RunTrackerTabComponent from '../tab-components/RunTrackerTabComponent';
import UserDropdown from '../dropdown-components/UserDropdown';

const Run = props => {
    const initialState = {
        runId: 0,
        runDate: "",
        runDistance: 0,
        runTime: 0,
        userId: 0
    };

    const [currentRun, setCurrentRun] = useState(initialState);
    const [message, setMessage] = ("");

    const handleUser = (userId) => {
        setCurrentRun({
            ...currentRun, userId: userId
        });
    }

    const getRun = (runId) => {
        RunTrackerService.getRunTrackerById(runId)
            .then(response => {
                setCurrentRun(response.data.run);
            })
            .catch(error => {
                console.log(error);
            });
    };

    useEffect(() => {
        getRun(props.match.params.runId);
    }, [props.match.params.runId]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setCurrentRun({ ...currentRun, [name]: value });
    };

    const updateRun = () => {
        RunTrackerService.updateRunInformation(currentRun.runId, currentRun)
            .then(response => {
                alert("The run was updated successfully");
            })
            .catch(error => {
                console.log(error);
            });
    };

    const deleteRun = () => {
        RunTrackerService.deleteRun(currentRun.runId)
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
                {currentRun ? (
                    <div className="edit form">
                        <h4>Run Tracker Info</h4>
                        <form className="update-book-container">
                            <div className="form-group">
                                <label htmlFor="runDate">Date of Run</label>
                                <Form.Group controlId="runDate">
                                <Form.Label>Select Date</Form.Label>
                                <Form.Control type="date" name="runDate" placeholder="Date" onChange={handleInputChange} />
                            </Form.Group>
                            </div>
                            <div className="form-group">
                                <label htmlFor="runDistance">Distance</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="runDistance"
                                    name="runDistance"
                                    value={currentRun.runDistance}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="runTime">Time</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="runTime"
                                    name="runTime"
                                    value={currentRun.runTime}
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
                        <Button className="badge badge-danger mr-2" onClick={() => updateRun(true)}>
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
                            <Button type="submit" size="lg" variant="dark" onClick={updateRun}>Update</Button>
                        </div>
                    </Col>
                    <Col md={2}>
                        <div>
                            <Button type="submit" size="lg" variant="outline-danger" onClick={deleteRun}>
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

export default Run;;

