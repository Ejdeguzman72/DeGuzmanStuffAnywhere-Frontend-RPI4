import React, { useState, useEffect } from 'react';
import ExerciseService from '../../../services/ExerciseService';
import PaginationComponent from '../../pagination/Pagination';
import { Row, Button, Modal } from 'react-bootstrap';

const AbExerciseList = () => {
    const [list, setList] = useState([]);
    const [currentExercise, setCurrentExercise] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(-1);
    const [currentPage, setCurrentPage] = useState(1);
    const [show, setShow] = useState(false);
    const itemsPerPage = 8;

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = list.slice(indexOfFirstItem, indexOfLastItem);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const retrieveExerciseData = () => {
        const exerciseTypeId = 1;
        ExerciseService.getAllExercisesByType(exerciseTypeId)
            .then(response => {
                console.log(response.data.list)
                setList(response.data.list);
            })
            .catch(error => {
                console.log(error);
            }, [])
    }

    useEffect(() => {
        retrieveExerciseData();
    }, []);

    const setActiveExercise = (exercise, index) => {
        setCurrentExercise(exercise);
        setCurrentIndex(index);
        setShow(true);
    }

    const handleClose = () => {
        setShow(false);
        setCurrentExercise(null)
        setCurrentIndex(-1)
    }

    return (
        <div>
            <div>
                <ul className="list-group">
                    {currentItems.map((exercise, index) => (
                        <li key={exercise.exerciseId}
                            className={"list-group-item selected-book" + (index === currentIndex ? "active" : "")}
                            onClick={() => setActiveExercise(exercise, index)}>
                            {exercise.exerciseName} - Sets: {exercise.sets}, Reps: {exercise.reps}, Weight: {exercise.weight}
                        </li>
                    ))}
                </ul>
                <PaginationComponent
                    itemsPerPage={itemsPerPage}
                    totalItems={list.length}
                    currentPage={currentPage}
                    onPageChange={handlePageChange}
                />
                {
                    currentExercise ? (
                        <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
                            <Modal.Header closeButton>
                                <Modal.Title>Exercise Information</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <div className="recipe-modal-container">
                                    <div className="form-group">
                                        <p>Name: {currentExercise.exerciseName}</p>
                                        <p>Category: {currentExercise.exerciseTypeName}</p>
                                        <p>Date: {currentExercise.date}</p>
                                        <p>Sets: {currentExercise.sets}</p>
                                        <p>Reps: {currentExercise.reps}</p>
                                        <p>Weight: {currentExercise.weight}</p>
                                        <p>User: {currentExercise.username}</p>
                                    </div>
                                </div>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="primary" onClick={handleClose}>
                                    Close
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    ) : null
                }
            </div>
        </div>
    )
}

export default AbExerciseList;