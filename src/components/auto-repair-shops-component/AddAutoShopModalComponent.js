import React, { useState, useEffect } from 'react';
import { Button, Modal, Row, Col, Form } from 'react-bootstrap';
import Axios from 'axios';
import StateDropDownComponent from '../dropdown-components/StateDropDownComponent';

export default function AddAutoShopModalComponent() {

  const initialState = {
    autoShopId: 0,
    autoShopName: "",
    address: "",
    city: "",
    state: "",
    zip: ""
  }

  const [autoShop, setAutoShop] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setAutoShop({ ...autoShop, [name]: value });
  };

  const saveAutoShop = () => {
    let data = {
      autoShopId: autoShop.autoShopId,
      autoShopName: autoShop.autoShopName,
      address: autoShop.address,
      city: autoShop.city,
      state: autoShop.state,
      zip: autoShop.zip
    };

    Axios.post('http://localhost:8080/app/auto-repair-shops/add', data)
      .then(response => {
        setAutoShop({
          autoShopId: response.data.autoShopId,
          autoShopName: response.data.autoShopName,
          address: response.data.address,
          city: response.data.city,
          state: response.data.state,
          zip: response.data.zip
        });
        setSubmitted(true);
      })
  }

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const newAutoShop = () => {
    setAutoShop(initialState);
    setSubmitted(false);
  }

  return (
    <>
      <Button variant="info" size="lg" onClick={handleShow}>
        Add Auto Shop
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Auto Shop Information</Modal.Title>
        </Modal.Header>

        {submitted ? (
          <Modal.Body>
            <div>
              <h4>Automotive Repair Shop Information has been added successfully</h4>
              <Button className="btn btn-success" onClick={newAutoShop} size="lg" variant="info">
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
                placeholder="Enter Shop Name"
                className="form-control"
                name="autoShopName"
                onChange={handleInputChange} /><br></br>

              <input
                type="text"
                placeholder="Address"
                className="form-control"
                name="address" onChange={handleInputChange} /><br></br>

              <input
                type="text"
                placeholder="City"
                className="form-control"
                name="city" onChange={handleInputChange} /><br></br>

              <select
                id="state"
                name="state"
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
                placeholder="Zip"
                className="form-control"
                name="zip" onChange={handleInputChange} /><br></br>
            </div>

          </Modal.Body>
        )}
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={saveAutoShop}>Submit</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}