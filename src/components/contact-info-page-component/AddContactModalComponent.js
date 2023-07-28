import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Button, Modal, Row, Col, Form } from 'react-bootstrap';
import '../../style-sheets/contact-info-styles.css';

const AddContactModalComponent = () => {

  const initialState = {
    personId: 0,
    firstname: "",
    middleInitial: "",
    lastname: "",
    address01: "",
    address02: "",
    city: "",
    state: "",
    zipcode: "",
    birthdate: "",
    age: 0,
    email: "",
    phone: ""
  }

  const [show, setShow] = useState(false);
  const [contact, setContact] = useState("");
  const [submitted, setSubmitted] = useState(false);


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setContact({ ...contact, [name]: value });
  }

  const saveContactInformation = () => {

    const data = {
      personId: contact.personId,
      firstname: contact.firstname,
      middleInitial: contact.middleInitial,
      lastname: contact.lastname,
      address01: contact.address01,
      address02: contact.address02,
      city: contact.city,
      state: contact.state,
      zipcode: contact.zipcode,
      birthdate: contact.birthdate,
      age: contact.age,
      email: contact.email,
      phone: contact.phone
    }

    Axios.post('http://localhost:8080/app/person-info/add-person-information', data)
      .then(response => {
        setContact({
          personId: response.data.personId,
          firstname: response.data.firstname,
          middleInitial: response.data.middleInitial,
          lastname: response.data.lastname,
          address01: response.data.address01,
          address02: response.data.address02,
          city: response.data.city,
          state: response.data.state,
          zipcode: response.data.zipcode,
          birthdate: response.data.birthdate,
          age: response.data.age,
          email: response.data.email,
          phone: response.data.phone
        });
        setSubmitted(true);
        // window.location.reload();
      })
      .catch(error => (
        alert('Application is facing issue: ' + error)
      ));
  }

  const newContact = () => {
    setContact(initialState);
    setSubmitted(false);
  }

  return (
    <>
      <Button variant="info" size="lg" onClick={handleShow}>
        Add Contact Info
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Contact Information</Modal.Title>
        </Modal.Header>

        {
          submitted ? (
            <Modal.Body>
              <div>
                <h4>Contact Info has been added successfully</h4>
                <Button className="btn btn-success" onClick={newContact} size="lg" variant="info">
                  Add
                </Button>
              </div>
            </Modal.Body>
          ) : (
            <Modal.Body size="lg">
              Please fill out the following information:
              <br></br>
              <div className="modal-container">
                <div className="form-group">
                  <input
                    type="text"
                    id="firstname"
                    placeholder="First Name"
                    name="firstname"
                    value={contact.firstname}
                    className="form-control"
                    onChange={handleInputChange} />
                  <br></br>

                  <input
                    type="text"
                    id="middle_initial"
                    placeholder="Middle Initial"
                    className="form-control"
                    name="middle_initial"
                    value={contact.middleInitial}
                    onChange={handleInputChange} />
                  <br></br>

                  <input
                    type="text"
                    id="lastname"
                    placeholder="Last Name"
                    className="form-control"
                    name="lastname"
                    value={contact.lastname}
                    onChange={handleInputChange} />
                  <br></br>

                  <input
                    type="text"
                    id="address01"
                    placeholder="Address01"
                    className="form-control"
                    name="address01"
                    value={contact.address01}
                    onChange={handleInputChange} />
                  <br></br>

                  <input
                    type="text"
                    id="address02"
                    name="address02"
                    placeholder="Address02"
                    className="form-control"
                    value={contact.address02}
                    onChange={handleInputChange} />
                  <br></br>

                  <input
                    type="text"
                    id="city"
                    placeholder="City"
                    className="form-control"
                    value={contact.city}
                    name="city"
                    onChange={handleInputChange} />
                  <br></br>

                  {/* <input
                type="text"
                id="state"
                placeholder="State"
                className="contact-input"
                value={contact.state}
                name="state"
                onChange={handleInputChange} />
              <br></br><br></br> */}

                  <select
                    id="state"
                    name="state"
                    value={contact.state}
                    type="number"
                    className="form-control"
                    onChange={handleInputChange} >
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
                  </select>
                  <br></br>
                  <input
                    type="text"
                    id="zipcode"
                    placeholder="Zip Code"
                    className="form-control"
                    name="zipcode"
                    value={contact.zipcode}
                    onChange={handleInputChange} />
                  <br></br>

                  <input
                    type="text"
                    id="birthdate"
                    placeholder="Birthdate"
                    className="form-control"
                    name="birthdate"
                    value={contact.birthdate}
                    onChange={handleInputChange} />
                  <br></br>

                  <input
                    type="number"
                    id="age"
                    placeholder="Age"
                    className="form-control"
                    name="age"
                    value={contact.age}
                    onChange={handleInputChange} />
                  <br></br>

                  <input
                    type="text"
                    id="email"
                    placeholder="Email"
                    className="form-control"
                    name="email"
                    value={contact.email}
                    onChange={handleInputChange} />
                  <br></br>

                  <input
                    type="text"
                    id="phone"
                    placeholder="Phone"
                    className="form-control"
                    name="phone"
                    value={contact.phone}
                    onChange={handleInputChange} />
                  <br></br>

                </div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
              </div>
            </Modal.Body>
          )}

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={saveContactInformation}>Submit</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddContactModalComponent;