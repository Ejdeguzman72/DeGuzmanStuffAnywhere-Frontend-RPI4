import React, { useState, useEffect } from 'react';
import { Button, Col, Row, Form } from 'react-bootstrap';
import RunTrackerService from '../../services/run-tracker-service';
import RunTrackerTabComponent from '../tab-components/RunTrackerTabComponent';
import UserDropdown from '../dropdown-components/UserDropdown';

const Run = props => {
    const initialState = {
        run_id: 0,
        run_date: "",
        run_distance: 0,
        runTime: 0,
        user_id: 0
    };

    const [currentRun, setCurrentRun] = useState(initialState);
    const [message, setMessage] = ("");

    const handleUser = (user_id) => {
        setCurrentRun({
            ...currentRun, user_id: user_id
        });
    }

    const getRun = (run_id) => {
        RunTrackerService.getRunTrackerById(run_id)
            .then(response => {
                setCurrentRun(response.data);
                console.log(response.data)
            })
            .catch(error => {
                console.log(error);
            });
    };

    useEffect(() => {
        getRun(props.match.params.run_id);
    }, [props.match.params.run_id]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setCurrentRun({ ...currentRun, [name]: value });
    };

    const updateRun = () => {
        RunTrackerService.updateRunInformation(currentRun.run_id, currentRun)
            .then(response => {
                console.log(response.data);
                alert("The run was updated successfully");
            })
            .catch(error => {
                console.log(error);
            });
    };

    const deleteRun = () => {
        RunTrackerService.deleteRun(currentRun.run_id)
            .then(response => {
                console.log(response.data);
                props.history.push("/run-tracker");
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
                                <input
                                    type="number"
                                    className="form-control"
                                    id="user_id"
                                    name="user_id"
                                    value={currentRun.run_id}
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

