import React, { useState, useEffect } from 'react';
import { Button, Col, Row, Form } from 'react-bootstrap';
import ExerciseService from '../../services/ExerciseService';
import GymTrackerTabComponent from '../tab-components/GymTrackerTabComponent';
import UserDropdown from '../dropdown-components/UserDropdown';

const Exercise = props => {
    const initialState = {
        exercise_id: 0,
        exerciseName: "",
        sets: "",
        reps: "",
        weight: "",
        date: "",
        exercise_type_id: 0,
        user_id: 0,
    };

    const [currentExercise, setCurrentExercise] = useState(initialState);
    const [message, setMessage] = ("");

    const handleExerciseType = (exercise_type_id) => {
        setCurrentExercise({
            ...currentExercise, exercise_type_id: exercise_type_id
        })
    }

    const handleUser = (user_id) => {
        setCurrentExercise({
            ...currentExercise, user_id: user_id
        });
    }

    const getExercise = (exercise_id) => {
        ExerciseService.getExerciseInformationById(exercise_id)
            .then(response => {
                setCurrentExercise(response.data);
                console.log(response.data)
            })
            .catch(error => {
                console.log(error);
            });
    };

    useEffect(() => {
        getExercise(props.match.params.exercise_id);
    }, [props.match.params.exercise_id]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setCurrentExercise({ ...currentExercise, [name]: value });
    };

    const updateExercise = () => {
        ExerciseService.updateExerciseinformation(currentExercise.exercise_id, currentExercise)
            .then(response => {
                console.log(response.data);
                alert("The exercise was updated successfully");
            })
            .catch(error => {
                console.log(error);
            });
    };

    const deleteContact = () => {
        ExerciseService.deleteExercise(currentExercise.exercise_id)
            .then(response => {
                console.log(response.data);
                props.history.push("/gym-tracker");
            })
            .catch(error => {
                console.log(error);
            });
    };

    return (
        <div>
            <br></br>
            <GymTrackerTabComponent />
            <div id="white-background">
                <br></br>
                {currentExercise ? (
                    <div className="edit form">
                        <h4>Exericse Info</h4>
                        <form className="update-book-container">
                            <div className="form-group">
                                <label htmlFor="exercise_name">Exercise Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exercise_name"
                                    name="exercise_name"
                                    value={currentExercise.exercise_name}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="sets">Sets</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="sets"
                                    name="sets"
                                    value={currentExercise.sets}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="reps">Reps</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="reps"
                                    name="reps"
                                    value={currentExercise.reps}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="weight">Weight</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="weight"
                                    name="weight"
                                    value={currentExercise.weight}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <Form.Group controlId="date">
                                <Form.Label>Select Date</Form.Label>
                                <Form.Control type="date" name="date" placeholder="Date" onChange={handleInputChange} />
                            </Form.Group>
                            <div className="form-group">
                                <label htmlFor="exercise_type_id">Exercise Type</label><br></br>
                                <select
                                    id="exercise_type_id"
                                    name="exercise_type_id"
                                    type="number"
                                    className="form-control"
                                    onChange={handleInputChange} >
                                    <option value="Please choose an Exercise Type">Please Choose an Exercise Type</option>
                                    <option value="1">Chest</option>
                                    <option value="2">Abs</option>
                                    <option value="3">Biceps</option>
                                    <option value="4">Triceps</option>
                                    <option value="5">Legs</option>
                                    <option value="6">Back</option>
                                    <option value="7">Legs</option>
                                </select>
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
                        <Button className="badge badge-danger mr-2" onClick={() => updateExercise(true)}>
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
                            <Button type="submit" size="lg" variant="dark" onClick={updateExercise}>Update</Button>
                        </div>
                    </Col>
                    <Col md={2}>
                        <div>
                            <Button type="submit" size="lg" variant="outline-danger" onClick={deleteContact}>
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

export default Exercise;

