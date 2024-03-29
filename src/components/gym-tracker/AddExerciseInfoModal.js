import React, { useState } from 'react';
import Select from 'react-select';
import { Button, Modal } from 'react-bootstrap';
import '../../style-sheets/book-recommendations.css';
import Axios from 'axios';
import { Form } from 'react-bootstrap';
import UserDropdown from '../dropdown-components/UserDropdown';
import ExerciseService from '../../services/ExerciseService';

const AddExerciseModal = () => {
    const initialState = {
        exerciseId: 0,
        exerciseName: "",
        sets: "",
        reps: "",
        weight: 0,
        date: "",
        exerciseTypeId: 0,
        userId: 0
    };

    const [exercise, setExercise] = useState(initialState);
    const [submitted, setSubmitted] = useState(false);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setExercise({ ...exercise, [name]: value });

    };

    const handleUser = (userId) => {
        setExercise({
            ...exercise, userId: userId
        });
    }

    const saveExercise = () => {

        let data = {
            exerciseId: exercise.exerciseId,
            exerciseName: exercise.exerciseName,
            sets: exercise.sets,
            reps: exercise.reps,
            weight: exercise.weight,
            date: exercise.date,
            exerciseTypeId: exercise.exerciseTypeId,
            userId: exercise.userId
        };

        ExerciseService.addExerciseInformation(data)
            .then(response => {
                setExercise({
                    exerciseId: response.data.exerciseId,
                    exerciseName: response.data.exerciseName,
                    sets: response.data.sets,
                    reps: response.data.reps,
                    weight: response.data.weight,
                    date: response.data.date,
                    exerciseTypeId: response.data.exerciseTypeId,
                    userId: response.data.userId
                });
                setSubmitted(true);

                window.location.reload();
            })
            .catch(error => {
                console.log(error);
            });
    }

    const newExercise = () => {
        setExercise(initialState);
        setSubmitted(false);
    }

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <><Button variant="info" size="lg" onClick={handleShow}>
            Add Entry
        </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add Exercise</Modal.Title>
                </Modal.Header>

                {submitted ? (
                    <Modal.Body>
                        <div>
                            <h4>Entry has been added successfully</h4>
                            <Button className="btn btn-success" onClick={newExercise} size="lg" variant="info">
                                Add
                            </Button>
                        </div>
                    </Modal.Body>
                ) : (
                    <Modal.Body>
                        Please fill out the following information:
                        <div className="modal-container">
                            <div className="form-group">
                                <label htmlFor="name">Exercise Name</label>
                                <input
                                    type="text"
                                    // className="book-name-input"
                                    id="exerciseName"
                                    required
                                    className="form-control"
                                    value={exercise.exerciseName}
                                    onChange={handleInputChange}
                                    name="exerciseName"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="sets">Sets</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="sets"
                                    required
                                    value={exercise.sets}
                                    onChange={handleInputChange}
                                    name="sets"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="reps">Reps</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="reps"
                                    required
                                    value={exercise.reps}
                                    onChange={handleInputChange}
                                    name="reps"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="weight">Weight</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="weight"
                                    required
                                    value={exercise.reweightps}
                                    onChange={handleInputChange}
                                    name="weight"
                                />
                            </div>
                            <Form.Group controlId="date">
                                <Form.Label>Select Date</Form.Label>
                                <Form.Control type="date" name="date" placeholder="Date" onChange={handleInputChange} />
                            </Form.Group>
                            <select
                                id="exerciseTypeId"
                                name="exerciseTypeId"
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
                            <br></br>
                     
                            <UserDropdown
                                handleUser={handleUser}
                            />
                        </div>

                    </Modal.Body>
                )}
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={saveExercise}>Submit</Button>
                </Modal.Footer>
            </Modal></>
    )
}

export default AddExerciseModal;