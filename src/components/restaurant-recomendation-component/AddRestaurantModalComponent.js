import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Button, Modal, Row, Col, Form } from 'react-bootstrap';
import RestaurantTypeDropdown from '../dropdown-components/RestaurantTypeDropdown';

export default function AddRestaurantModalComponent(props) {
  const [show, setShow] = useState(false);
  const [restaurant, setRestaurant] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const initialState = {
    restaurantid: 0,
    name: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    restaurantType: null
  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setRestaurant({ ...restaurant, [name]: value });
  }

  const saveRestaurantInformation = () => {

    const data = {
      restaurantid: restaurant.restaurantid,
      name: restaurant.name,
      address: restaurant.address,
      city: restaurant.city,
      state: restaurant.state,
      zip: restaurant.zip,
      restaurantType: restaurant.restaurantType
    }

    Axios.post('http://localhost:8080/app/restaurants/add-restaurant-information')
      .then(response => {
        setRestaurant({
          restaurantid: response.data.restaurantid,
          name: response.data.name,
          address: response.data.address,
          city: response.data.city,
          state: response.data.state,
          zip: response.data.zip,
          restaurantType: response.data.restaurantType
        });
        console.log(data);
        setSubmitted(true);
        // window.location.reload();
      })
      .catch(error => (
        alert('Application is facing issue: ' + error)
      ));
  }

  const newRestaurant = () => {
    setRestaurant(initialState);
    setSubmitted(false);
  }

  return (
    <>
      <Button variant="info" size="lg" onClick={handleShow}>
        Add Restaurant
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Restaurants Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Please fill out the following information:
          <br></br>
          <div className="modal-container">
            <input type="text" placeholder="Restaurant Name" className="input" onChange={handleInputChange}/><br></br><br></br>
            <input type="text" placeholder="Address" className="input" onChange={handleInputChange}/><br></br><br></br>
            <input type="text" placeholder="City" className="input" onChange={handleInputChange}/><br></br><br></br>
            <input type="text" placeholder="State" className="input" onChange={handleInputChange}/><br></br><br></br>
            <input type="text" placeholder="Zip Code" className="input" onChange={handleInputChange}/><br></br><br></br>
            <RestaurantTypeDropdown/>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={saveRestaurantInformation}>Submit</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}