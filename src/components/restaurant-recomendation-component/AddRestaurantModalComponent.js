import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Button, Modal, Row, Col, Form } from 'react-bootstrap';
import '../../style-sheets/restaurant-recs-styles.css';
import RestaurantTypeDropdown from '../dropdown-components/RestaurantTypeDropdown';
import { jwtHelper } from '../../helper/jwt';

const jwt = jwtHelper();

const AddRestaurantModalComponent = ({ props }) => {
  const [show, setShow] = useState(false);
  const [restaurant, setRestaurant] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const initialState = {
    restaurant_id: 0,
    name: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    restaurant_type_id: 0
  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setRestaurant({ ...restaurant, [name]: value });
  }

  const handleStateChange = (state) => {
    setRestaurant({
      ...restaurant, state: state
    })
  }

  const handleRestaurantType = (restaurant_type_id) => {
    setRestaurant({
      ...restaurant, restaurant_type_id: restaurant_type_id
    });
  }

  const saveRestaurantInformation = () => {

    const data = {
      restaurant_id: restaurant.restaurant_id,
      name: restaurant.name,
      address: restaurant.address,
      city: restaurant.city,
      state: restaurant.state,
      zip: restaurant.zip,
      restaurant_type_id: restaurant.restaurant_type_id
    }

    Axios.post('http://localhost:8080/app/restaurants/add-restaurant-information', data)
      .then(response => {
        console.log(data + " thios is data")
        setRestaurant({
          restaurant_id: response.data.restaurant_id,
          name: response.data.name,
          address: response.data.address,
          city: response.data.city,
          state: response.data.state,
          zip: response.data.zip,
          restaurant_type_id: response.data.restaurant_type_id
        });
        console.log(data + " this is data")
        setSubmitted(true);

        window.location.reload();
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
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Restaurants Information</Modal.Title>
        </Modal.Header>
        {
          submitted ? (
            <Modal.Body>
              <div>
                <h4>Restaurant Information has been added</h4>
                <Button className="btn btn-success" onClick={newRestaurant} size="lg" variant="info">
                  Add
                </Button>
              </div>
            </Modal.Body>
          ) : (
            <Modal.Body size="lg">
              Please fill out the following information:
              <br></br>
              <div className="modal-container">
                <input
                  type="text"
                  placeholder="Restaurant Name"
                  id="name"
                  name="name"
                  className="form-control"
                  value={restaurant.name}
                  onChange={handleInputChange} />
                <br></br>

                <input
                  type="text"
                  placeholder="Address"
                  id="address"
                  name="address"
                  className="form-control"
                  value={restaurant.address}
                  onChange={handleInputChange} />
                <br></br>

                <input
                  type="text"
                  placeholder="City"
                  id="city"
                  name="city"
                  className="form-control"
                  value={restaurant.city}
                  onChange={handleInputChange} />
                <br></br>

                <select
                  id="state"
                  name="state"
                  value={restaurant.state}
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
                  placeholder="Zip Code"
                  id="zip"
                  name="zip"
                  className="form-control"
                  value={restaurant.zip}
                  onChange={handleInputChange} />
                <br></br>
                
                <RestaurantTypeDropdown 
                  handleRestaurantType={handleRestaurantType}
                />
                <br></br>
              </div>
            </Modal.Body>
          )
        }

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

export default AddRestaurantModalComponent;