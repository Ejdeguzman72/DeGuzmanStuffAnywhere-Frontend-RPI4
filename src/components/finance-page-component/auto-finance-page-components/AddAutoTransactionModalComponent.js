import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Button, Modal, Row, Col, Form } from 'react-bootstrap';
import AutoRepairShopDropdown from '../../dropdown-components/AutoRepairShopDropdown';
import UserDropdown from '../../dropdown-components/UserDropdown';
import TransactionTypeDropdown from '../../dropdown-components/TransactionTypeDropdown';
import VehicleDropdownComponent from '../../dropdown-components/VehicleDropdownComponent';

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

  const handleAutoShop = (auto_shop_id) => {
    setAutoTransaction({
      ...autoTransaction, auto_shop_id: auto_shop_id
    })
  }

  const handleVehicle = (vehicle_id) => {
    setAutoTransaction({
      ...autoTransaction, vehicle_id: vehicle_id
    })
  }

  const handleTransactionType = (transaction_type_id) => {
    setAutoTransaction({
      ...autoTransaction, transaction_type_id: transaction_type_id
    })
  }

  const handleUser = (user_id) => {
    setAutoTransaction({
      ...autoTransaction, user_id: user_id
    })
  }

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
                className="form-control"
                name="amount" onChange={handleInputChange} />
                
                <br></br>

              <Form.Group controlId="auto_transaction_date">
                <Form.Label>Select Date</Form.Label>
                <Form.Control className="form-control" type="date" name="auto_transaction_date" placeholder="Date (MM/DD/YY)" onChange={handleInputChange} />
              </Form.Group>

              <AutoRepairShopDropdown 
                handleAutoShop={handleAutoShop}
              />
              <br></br>

              <VehicleDropdownComponent 
                handleVehicle={handleVehicle}
              />

              <br></br>

              <TransactionTypeDropdown 
                handleTransactionType={handleTransactionType}
              />

              <br></br>

              <UserDropdown 
                handleUser={handleUser}
              />
              <br></br>
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