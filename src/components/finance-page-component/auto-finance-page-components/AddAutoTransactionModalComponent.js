import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Button, Modal, Row, Col, Form } from 'react-bootstrap';
import AutoRepairShopDropdown from '../../dropdown-components/AutoRepairShopDropdown';
import UserDropdown from '../../dropdown-components/UserDropdown';
import TransactionTypeDropdown from '../../dropdown-components/TransactionTypeDropdown';
import VehicleDropdownComponent from '../../dropdown-components/VehicleDropdownComponent';

export default function AddAutoTransactionModalComponent() {

  const initialState = {
    autoTrxId: 0,
    amount: 0,
    autoTrxDate: "",
    autoShopId: 0,
    vehicleId: 0,
    trxTypeId: 0,
    userId: 0
  }

  const [autoTransaction, setAutoTransaction] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setAutoTransaction({ ...autoTransaction, [name]: value });
  };

  const handleAutoShop = (autoShopId) => {
    setAutoTransaction({
      ...autoTransaction, autoShopId: autoShopId
    })
  }

  const handleVehicle = (vehicleId) => {
    setAutoTransaction({
      ...autoTransaction, vehicleId: vehicleId
    })
  }

  const handleTransactionType = (trxTypeId) => {
    setAutoTransaction({
      ...autoTransaction, trxTypeId: trxTypeId
    })
  }

  const handleUser = (userId) => {
    setAutoTransaction({
      ...autoTransaction, userId: userId
    })
  }

  const saveAutoTransaction = () => {
    let data = {
      autoTrxId: autoTransaction.autoTrxId,
      amount: autoTransaction.amount,
      autoTrxDate: autoTransaction.autoTrxDate,
      autoShopId: autoTransaction.autoShopId,
      vehicleId: autoTransaction.vehicleId,
      trxTypeId: autoTransaction.trxTypeId,
      userId: autoTransaction.userId
    };

    Axios.post('http://localhost:8080/app/auto-transactions/add', data)
      .then(response => {
        setAutoTransaction({
          autoTrxId: response.data.autoTrxId,
          amount: response.data.amount,
          autoTrxDate: response.data.autoTrxDate,
          autoShopId: response.data.autoShopId,
          vehicleId: response.data.vehicleId,
          trxTypeId: response.data.trxTypeId,
          userId: response.data.userId
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

              <Form.Group controlId="autoTrxDate">
                <Form.Label>Select Date</Form.Label>
                <Form.Control className="form-control" type="date" name="autoTrxDate" placeholder="Date (MM/DD/YY)" onChange={handleInputChange} />
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