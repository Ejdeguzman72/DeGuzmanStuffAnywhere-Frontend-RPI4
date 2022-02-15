import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Button, Modal, Row, Col, Form } from 'react-bootstrap';
import NameDropdown from '../../dropdown-components/UserDropdown';
import TransactionTypeDropdown from '../../dropdown-components/TransactionTypeDropdown';

export default function AddAutoTransactionModalComponent() {

  const initialState = {
    auto_transaction_id: 0,
    amount: 0,
    auto_transaction_date: "",
    auto_shop_id: 0,
    vehicle_id: 0,
    transaction_type_id: 0,
    person: ""
  }

  const [autoTransaction, setAutoTransaction] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setAutoTransaction({ ...autoTransaction, [name]: value });
  };

  const saveAutoTransaction = () => {
    let data = {
      auto_transaction_id: autoTransaction.auto_transaction_id,
      amount: autoTransaction.amount,
      auto_transaction_date: autoTransaction.auto_transaction_date,
      auto_shop_id: autoTransaction.auto_shop_id,
      vehicle_id: autoTransaction.vehicle_id,
      transaction_type_id: autoTransaction.transaction_type_id,
      user_id: autoTransaction.user_id
    };

    Axios.post('http://localhost:8080/app/auto-transactions/add-auto-transaction-information', data)
      .then(response => {
        setAutoTransaction({
          auto_transaction_id: response.data.auto_transaction_id,
          amount: response.data.amount,
          auto_transaction_date: response.data.auto_transaction_date,
          auto_shop_id: response.data.auto_shop_id,
          vehicle_id: response.data.vehicle_id,
          transaction_type_id: response.data.transaction_type_id,
          user_id: response.data.user_id
        });
        setSubmitted(true);

        window.location.reload();

        console.log(data);
      })
  }

  const newAutoTransaction = () => {
    setAutoTransaction(initialState);
    setSubmitted(false);
  }

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="info" size="lg" onClick={handleShow}>
        Add Transaction
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Auto Transaction Info</Modal.Title>
        </Modal.Header>
        {submitted ? (
          <Modal.Body>
            <div>
              <h4>Auto Transaction Information has been added successfully</h4>
              <Button className="btn btn-success" onClick={newAutoTransaction} size="lg" variant="info">
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
                placeholder="Enter Amount ($0.00)"
                className="autoTrx-input"
                name="amount" onChange={handleInputChange} /><br></br><br></br>

              <Form.Group controlId="auto_transaction_date">
                <Form.Label>Select Date</Form.Label>
                <Form.Control type="date" name="auto_transaction_date" placeholder="Date (MM/DD/YY)" onChange={handleInputChange} />
              </Form.Group>

              <select
                name="auto_shop_id"
                type="number"
                onChange={handleInputChange}
                className="autoTrx-input"
                id="auto_shop_id" >
                <option value="Select an Auto Shop" disabled selected>Select an Auto Shop</option>
                <option value="1">Anita Tire</option>
                <option value="2">Westwood Auto Techs</option>
                <option value="3">M.G.H Auto Services</option>
                <option value="4">D&G Auto Repairs</option>
                <option value="5">Star Auto Repair INC</option>
                <option value="6">Pascack Automotive Repair INC</option>
              </select><br></br><br></br>

              <select
                name="vehicle_id"
                type="number"
                onChange={handleInputChange}
                id="vehicle_id"
                className="autoTrx-input" >
                <option value="Select a Vehicle" disabled selected>Select a Vehicle</option>
                <option value="1">Honda Shadow 2016</option>
                <option value="1000">Ford Focus 2013</option>
              </select><br></br><br></br>

              <select
                name="transaction_type_id"
                type="number"
                onChange={handleInputChange}
                id="transaction_type_id"
                className="autoTrx-input" >
                <option value="Select a Transaction Type" disabled selected>Transaction Type</option>
                <option value="14">Oil Change</option>
                <option value="15">Brakes</option>
                <option value="16">Bumper</option>
                <option value="17">Car Detailing</option>
                <option value="18">General Auto Maintenance</option>
                <option value="19">Collision Maintenance</option>
              </select><br></br><br></br>

              <select
                id="user_id"
                name="user_id"
                type="number"
                onChange={handleInputChange}
                className="autoTrx-input" >
                <option value="Please choose a User">Please Choose a User</option>
                <option value="2">global</option>
              </select><br></br><br></br>
            </div>

          </Modal.Body>
        )}
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={saveAutoTransaction}>Submit</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}