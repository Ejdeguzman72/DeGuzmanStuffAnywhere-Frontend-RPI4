import React, { useState, useEffect } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import CardioTrackerService from '../../services/CardioTrackerService';
import '../../style-sheets/run-tracker-page.css';
import Axios from 'axios';
import UserDropdown from '../dropdown-components/UserDropdown';
import CardioTypesDropdown from '../dropdown-components/CardioTypesDropdown';

export default function AddCardioInfoModalComponent({ props }) {
  const [show, setShow] = useState(false);
  const [cardio, setCardio] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const initialState = {
    cardioId: 0,
    cDate: "",
    cDistance: 0,
    cTIme: "",
    userId: 0,
    cardioTypeId: 0
  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCardio({ ...cardio, [name]: value });
  }

  const handleUser = (userId) => {
    setCardio({
      ...cardio, userId: userId
    });
  }

  const handleCardioType = (cardioTypeId) => {
    setCardio({
      ...cardio, cardioTypeId: cardioTypeId
    });
  }

  const saveCardioInformation = () => {
    const data = {
      cardioId: cardio.cardioId,
      cDate: cardio.cDate,
      cDistance: cardio.cDistance,
      cTime: cardio.cTime,
      userId: cardio.userId,
      cardioTypeId: cardio.cardioTypeId
    }

    CardioTrackerService.addCardioInfo(data)
      .then(response => {
        setCardio({
          cardioId: response.data.cardioId,
          cDate: response.data.cDate,
          cDistance: response.data.cDistance,
          cTIme: response.data.cTIme,
          userId: response.data.userId,
          cardioTypeId: response.data.cardioTypeId
        });
        console.log(data);
        setSubmitted(true);

        window.location.reload();
      })
      .catch(error => (
        alert('Application is facing issues ' + error)
      ));
  }

  const newEntry = () => {
    setCardio(initialState);
    setSubmitted(false);
  }

  return (
    <>
      <Button variant="info" size="lg" onClick={handleShow}>
        Add
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Cardio</Modal.Title>
        </Modal.Header>

        {
          submitted ? (
            <Modal.Body>
              <div>
                <h4>Cardio Information has been added</h4>
                <Button className="btn btn-success" onClick={newEntry} size="lg" variant="info">
                  Add
                </Button>
              </div>
            </Modal.Body>
          ) : (
            <Modal.Body>
              Please fill out the following information:
              <br></br>
              <div className="modal-container">
                <input
                  type="number"
                  placeholder="Distance (00 : 00 miles)"
                  className="form-control"
                  id="cDistance"
                  name="cDistance"
                  value={cardio.cDistance}
                  onChange={handleInputChange} /><br></br>

                <input
                  type="text"
                  placeholder="Time (00 m : 00 s)"
                  className="form-control"
                  id="cTime"
                  name="cTime"
                  value={cardio.cTime}
                  onChange={handleInputChange} /><br></br>

                <Form.Group controlId="cDate">
                  <Form.Label>Select Date</Form.Label>
                  <Form.Control type="date" name="cDate" placeholder="Date" className="form-control" onChange={handleInputChange} />
                </Form.Group>

                <UserDropdown
                  handleUser={handleUser}
                />
                <br></br>
                <CardioTypesDropdown
                  handleCardioType={handleCardioType}
                />
              </div>
            </Modal.Body>
          )
        }

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={saveCardioInformation}>Submit</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}