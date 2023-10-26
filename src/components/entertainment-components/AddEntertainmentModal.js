import React, { useState } from 'react';
import EntertainmentService from '../../services/EntertainmentService';
import { Button, Modal } from 'react-bootstrap';
import '../../style-sheets/book-recommendations.css';
import EntertainmentTypesDropdown from '../dropdown-components/EntertainmentTypeDropdown';

const AddEntertainmentModal = () => {
    const initialState = {
        entityId: 0,
        name: "",
        entertainmentTypeId: "",
    };

    const [entertainment, setEntertainment] = useState(initialState);
    const [submitted, setSubmitted] = useState(false);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setEntertainment({ ...entertainment, [name]: value });

    };

    const handleEntertainmentType = (entertainmentTypeId) => {
        setEntertainment({
            ...entertainment,entertainmentTypeId:entertainmentTypeId
        })
    }

    const saveEntertainment = () => {

        let data = {
            name: entertainment.name,
            entertainmentTypeId: entertainment.entertainmentTypeId
        };

        EntertainmentService.addEntertainmentInfo(data)
            .then(response => {
                setEntertainment({
                    name: response.data.name,
                    entertainmentTypeId: response.data.entertainmentTypeId
                });
                setSubmitted(true);

                window.location.reload();
            })
            .catch(error => {
                console.log(error);
            });
    }

    const newEntertainment = () => {
        setEntertainment(initialState);
        setSubmitted(false);
    }

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <><Button variant="info" size="lg" onClick={handleShow}>
            Add Entertainment
        </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add Entertainment</Modal.Title>
                </Modal.Header>

                {submitted ? (
                    <Modal.Body>
                        <div>
                            <h4>{entertainment.name} has been added successfully</h4>
                            <Button className="btn btn-success" onClick={newEntertainment} size="lg" variant="info">
                                Add
                            </Button>
                        </div>
                    </Modal.Body>
                ) : (
                    <Modal.Body>
                        Please fill out the following information:
                        <br></br>
                        <div className="modal-container">
                            <div className="form-group">
                                <label htmlFor="name">Title</label>
                                <br></br>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    required
                                    value={entertainment.name}
                                    onChange={handleInputChange}
                                    name="name"
                                />
                            </div>
                            <div className="form-group">
                                <EntertainmentTypesDropdown handleEntertainmentType={handleEntertainmentType}/>
                            </div>
                        </div>

                    </Modal.Body>
                )}
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={saveEntertainment}>Submit</Button>
                </Modal.Footer>
            </Modal></>
    )
}

export default AddEntertainmentModal;