import React, { useState, useEffect } from 'react';
import { Button, Modal, Row, Col, Form } from 'react-bootstrap';
import Axios from 'axios';
import '../../style-sheets/medical-finance-page.css';

export default function AddMedicalOfficeModalComponent() {

  const initialState = {
    medicalOfficeId: 0,
    name: "",
    address: "",
    city: "",
    state: "",
    zip: ""
  }

  const [medicalOffice, setMedicalOffice] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setMedicalOffice({ ...medicalOffice, [name]: value });
  };

  const saveMedicalOffice = () => {
    let data = {
      medicalOfficeId: medicalOffice.medicalOfficeId,
      name: medicalOffice.name,
      address: medicalOffice.address,
      city: medicalOffice.city,
      state: medicalOffice.state,
      zip: medicalOffice.zip
    };

    Axios.post('http://localhost:8080/app/medical-offices/add', data)
      .then(response => {
        setMedicalOffice({
          medicalOfficeId: response.data.medicalOfficeId,
          name: response.data.name,
          address: response.data.address,
          city: response.data.city,
          state: response.data.state,
          zip: response.data.zip
        });
        setSubmitted(true);
        console.log(data);
      })
  }

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const newMedicalOffice = () => {
    setMedicalOffice(initialState);
    setSubmitted(false);
  }

  return (
    <>
      <Button variant="info" size="lg" onClick={handleShow}>
        Add Medical Office
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Medical Office Information</Modal.Title>
        </Modal.Header>

        {submitted ? (
          <Modal.Body>
            <div>
              <h4>Medical Office has been added successfully</h4>
              <Button className="btn btn-success" onClick={newMedicalOffice} size="lg" variant="info">
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
                type="text"
                placeholder="Enter Facility Name"
                className="form-control"
                name="name"
                onChange={handleInputChange} /><br></br>

              <input
                type="text"
                placeholder="Address"
                className="form-control"
                name="address"
                onChange={handleInputChange} /><br></br>

              <input
                type="text"
                placeholder="City"
                className="form-control"
                name="city"
                onChange={handleInputChange} /><br></br>

              <select
                id="state"
                name="state"
                type="number"
                onChange={handleInputChange}
                className="form-control" >
                <option value="Please choose a Restaurant Type">Please Choose a State</option>
                <option value="Alabama">Alabama</option>
                <option value="Alaska">Alaska</option>
                <option value="Arizona">Arizona</option>
                <option value="Arkansas">Arkansas</option>
                <option value="California">California</option>
                <option value="Colorado">Colorado</option>
                <option value="Conneticut">Conneticut</option>
                <option value="Delaware">Delaware</option>
                <option value="Florida">Florida</option>
                <option value="Georgia">Georgia</option>
                <option value="Hawaii">Hawaii</option>
                <option value="Idaho">Idaho</option>
                <option value="Illinois">Illinois</option>
                <option value="Indiana">Indiana</option>
                <option value="Iowa">Iowa</option>
                <option value="Kansas">Kansas</option>
                <option value="Kentucky">Kentucky</option>
                <option value="Louisiana">Louisiana</option>
                <option value="Maine">Maine</option>
                <option value="Maryland">Maryland</option>
                <option value="Massachussetts">Massachussetts</option>
                <option value="Michigan">Michigan</option>
                <option value="Minnesota">Minnesota</option>
                <option value="Mississippi">Mississippi</option>
                <option value="Missouri">Missouri</option>
                <option value="Montana">Montana</option>
                <option value="Nebraska">Nebraska</option>\
                <option value="Nevaada">Nevada</option>
                <option value="New Hampshire">New Hampshire</option>
                <option value="New Jersey">New Jersey</option>
                <option value="New Mexico">New Mexico</option>
                <option value="New York">New York</option>
                <option value="North Carolina">North Carolina</option>
                <option value="North Dakota">North Dakota</option>
                <option value="Ohio">Ohio</option>
                <option value="Oklahoma">Oklahoma</option>
                <option value="Oregon">Oregon</option>
                <option value="Pennsylvania">Pennsylvania</option>
                <option value="Rhode Island">Rhode Island</option>
                <option value="South Carolina">South Carolina</option>
                <option value="South Dakota">South Dakota</option>
                <option value="Tennessee">Tennessee</option>
                <option value="Texas">Texas</option>
                <option value="Utah">Utah</option>
                <option value="Vermont">Vermont</option>
                <option value="Virginia">Virginia</option>
                <option value="Washington">Washington</option>
                <option value="West Virginia">West Virginia</option>
                <option value="Wisconsin">Wisconsin</option>
                <option value="Wyoming">Wyoming</option>
              </select><br></br>

              {/* <input
                type="text"
                placeholder="State"
                className="input"
                name="state" onChange={handleInputChange} /><br></br><br></br> */}

              <input
                type="text"
                placeholder="Zip"
                className="form-control"
                name="zip" onChange={handleInputChange} />
            </div>

          </Modal.Body>
        )}
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={saveMedicalOffice}>Submit</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}