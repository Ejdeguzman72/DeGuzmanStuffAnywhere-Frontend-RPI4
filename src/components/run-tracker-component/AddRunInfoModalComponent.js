import React, { useState, useEffect } from 'react';
import { Button, Modal, Row, Col } from 'react-bootstrap';
import NameDropdown from '../dropdown-components/NameDropdown';

export default function AddRunInfoModalComponent() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="info" size="lg" onClick={handleShow}>
        Add Run
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Run Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Please fill out the following information:
          <br></br>
          <div className="modal-container"> 
            <input type="text" placeholder="Date of Run" className="input"/><br></br><br></br>
            <input type="text" placeholder="Distance" className="input"/><br></br><br></br>
            <input type="text" placeholder="Time" className="input"/><br></br><br></br>
            <NameDropdown />
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