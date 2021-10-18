import React, { useState, useEffect } from 'react';
import { Button, Modal, Row, Col } from 'react-bootstrap';
import Axios from 'axios';

export default function AddCarInfoModalComponent() {

  const intialState = {
    carid: 0,
    make: "",
    model: "",
    year: "",
    capacity: 0,
    transmission: ""
  }

  const [car,setCar] = useState(intialState);
  const [submitted,setSubmitted] = useState(false);

  const handleInputChange = (event) => {
    const { name,value } = event.target;
    setCar({ ...car, [name]:value });
  };

  const saveCar = () => {
    let data = {
      make: car.make,
      model: car.model,
      year: car.year,
      capacity: car.capacity,
      transmission: car.transmission
    };

    Axios.post('http://localhost:8080/app/cars/add-a-car',data)
      .then(response => {
        setCar({
          car_id: response.data.car_id,
          make: response.data.make,
          model: response.data.model,
          year: response.data.year,
          capacity: response.data.capacity,
          transmission: response.data.transmission
        });
        setSubmitted(true);
        console.log(data);
      })
  }

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const newCar = () => {
    setCar(intialState);
    setSubmitted(false);
  }


  return (
    <>
      <Button variant="info" size="lg" onClick={handleShow}>
        Add Car
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Vehicle Information</Modal.Title>
        </Modal.Header>
        
          {submitted ? (
            <Modal.Body>
              <div>
                <h4>Car Information has been added successfully</h4>
                <Button className="btn btn-success" onClick={newCar} size="lg" variant="info">
                  Add 
                </Button>
              </div>
            </Modal.Body>
          ) : (
          <Modal.Body>
            <h4>Please fill out the following information:</h4>
            <br></br>
            <div className="modal-container"> 
              <input type="text" placeholder="Make" className="input" name="make" onChange={handleInputChange}/><br></br><br></br>
              <input type="text" placeholder="Model" className="input" name="model" onChange={handleInputChange}/><br></br><br></br>
              <input type="text" placeholder="Year" className="input" name="year" onChange={handleInputChange}/><br></br><br></br>
              <input type="text" placeholder="Capacity" className="input"  name="capacity" onChange={handleInputChange}/><br></br><br></br>
              <input type="text" placeholder="Transmission" className="input" name="transmission" onChange={handleInputChange}/><br></br><br></br>
            </div>  
        </Modal.Body>
          )}
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={saveCar}>Submit</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}