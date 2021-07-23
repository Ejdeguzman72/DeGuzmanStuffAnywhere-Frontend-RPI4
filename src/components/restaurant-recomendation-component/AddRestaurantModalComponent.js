import React, { useState, useEffect } from 'react';
import { Button, Modal, Row, Col } from 'react-bootstrap';

export default function AddRestaurantModalComponent() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
            <input type="text" placeholder="Restaurant Name" className="input" /><br></br><br></br>
            <input type="text" placeholder="Address" className="input"/><br></br><br></br>
            <input type="text" placeholder="City" className="input"/><br></br><br></br>
            <input type="text" placeholder="State" className="input"/><br></br><br></br>
            <input type="text" placeholder="Zip Code" className="input"/><br></br><br></br>
            <input type="text" placeholder="Restaurant Type" className="input"/><br></br><br></br>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Submit</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}