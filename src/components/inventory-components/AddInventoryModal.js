import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Button, Modal, Row, Col, Form } from 'react-bootstrap';
import '../../style-sheets/contact-info-styles.css';

const AddInventoryModal = () => {

  const initialState = {
    inventoryId: 0,
    name: "",
    description: "",
    condition: "",
    location1: "",
    quantity: 0
  }

  const [show, setShow] = useState(false);
  const [inventory, setInventory] = useState("");
  const [submitted, setSubmitted] = useState(false);


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInventory({ ...inventory, [name]: value });
  }

  const saveInventory = () => {

    const data = {
     name: inventory.name,
     description: inventory.description,
     condition: inventory.condition,
     location: inventory.location,
     quantity: inventory.quantity
    }

    Axios.post('http://localhost:8080/app/inventory/add', data)
      .then(response => {
        setInventory({
          name: response.data.name,
          description: response.data.description,
          condition: response.data.condition,
          location: response.data.location,
          quantity: response.data.quantity
        });
        setSubmitted(true);
      })
      .catch(error => (
        alert('Application is facing issue: ' + error)
      ));
  }

  const newInventory = () => {
    setInventory(initialState);
    setSubmitted(false);
  }

  return (
    <>
      <Button variant="info" size="lg" onClick={handleShow}>
        Add Inventory
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Inventory</Modal.Title>
        </Modal.Header>

        {
          submitted ? (
            <Modal.Body>
              <div>
                <h4>Inventory has been added successfully</h4>
                <Button className="btn btn-success" onClick={newInventory} size="lg" variant="info">
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
                    id="name"
                    placeholder="Name"
                    name="name"
                    value={inventory.name}
                    className="form-control"
                    onChange={handleInputChange} />
                  <br></br>

                  <input
                    type="text"
                    id="description"
                    placeholder="Description"
                    className="form-control"
                    name="description"
                    value={inventory.description}
                    onChange={handleInputChange} />
                  <br></br>

                  <input
                    type="text"
                    id="condition"
                    placeholder="Condition"
                    className="form-control"
                    name="condition"
                    value={inventory.condition}
                    onChange={handleInputChange} />
                  <br></br>

                  <input
                    type="text"
                    id="location"
                    placeholder="Location"
                    className="form-control"
                    name="location"
                    value={inventory.location1}
                    onChange={handleInputChange} />
                  <br></br>

                  <input
                    type="text"
                    id="quantity"
                    name="quantity"
                    placeholder="Quantity"
                    className="form-control"
                    value={inventory.quantity}
                    onChange={handleInputChange} />
                  <br></br>

                </div>
                <br></br>
                <br></br>
              </div>
            </Modal.Body>
          )}

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={saveInventory}>Submit</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddInventoryModal;