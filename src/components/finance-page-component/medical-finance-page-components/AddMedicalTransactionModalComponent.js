import React, { useState, useEffect } from 'react';
import { Button, Modal, Row, Col, Form } from 'react-bootstrap';
import Axios from 'axios';
import '../../../style-sheets/medical-finance-page.css';
import UserDropdown from '../../dropdown-components/UserDropdown';
import MedicalOfficeDropdown from '../../dropdown-components/MedicalOfficeDropdown';
import TransactionTypeDropdown from '../../dropdown-components/TransactionTypeDropdown';
import MedicalTransactionService from '../../../services/MedicalTrxService';

export default function AddMedicalFinanceModalComponent() {

  const initialState = {
    medTrxId: 0,
    amount: 0,
    medTrxDate: "",
    medicalOfficeId: 0,
    trxTypeId: 0,
    userId: 0
  }

  const [medicalTransaction, setMedicalTransaction] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setMedicalTransaction({ ...medicalTransaction, [name]: value });
  };

  const handleMedicalOffice = (medicalOfficeId) => {
    setMedicalTransaction({
      ...medicalTransaction, medicalOfficeId: medicalOfficeId
    });
    console.log(medicalOfficeId)
  }

  const handleTransactionType = (trxTypeId) => {
    setMedicalTransaction({
      ...medicalTransaction, trxTypeId: trxTypeId
    })
  }

  const handleUser = (userId) => {
    setMedicalTransaction({
      ...medicalTransaction, userId: userId
    });
  }

  const saveMedicalTransaction = () => {
    let data = {
      amount: medicalTransaction.amount,
      medTrxDate: medicalTransaction.medTrxDate,
      medicalOfficeId: medicalTransaction.medicalOfficeId,
      trxTypeId: medicalTransaction.trxTypeId,
      userId: medicalTransaction.userId
    };

    Axios.post('http://localhost:8080/app/medical-transactions/add', data)
      .then(response => {
        setMedicalTransaction({
          amount: response.data.amount,
          medTrxDate: response.data.medTrxDate,
          medicalOfficeId: response.data.medicalOfficeId,
          trxTypeId: response.data.trxTypeId,
          userId: response.data.userId
        });
        setSubmitted(true);

        console.log(data);

        window.location.reload();
      })
  }

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const newMedicalTransaction = () => {
    setMedicalTransaction(initialState);
    setSubmitted(false);
  }

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
          <Modal.Title>Add Medical Transaction Information</Modal.Title>
        </Modal.Header>

        {submitted ? (
          <Modal.Body>
            <div>
              <h4>Medical Transaction has been added successfully</h4>
              <Button className="btn btn-success" onClick={newMedicalTransaction} size="lg" variant="info">
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
                type="number"
                placeholder="Enter Amount ($0.00)"
                className="form-control"
                name="amount"
                onChange={handleInputChange} />
              <Form.Group controlId="medTrxDate">
                <Form.Label>Select Date (MM/DD/YYYY)</Form.Label>
                <Form.Control type="date" name="medTrxDate" placeholder="Date (MM/DD/YYYY)" onChange={handleInputChange} />
              </Form.Group>

              <MedicalOfficeDropdown
                handleMedicalOffice={handleMedicalOffice}
              />
              <br></br>
              <TransactionTypeDropdown 
                handleTransactionType={handleTransactionType}
              /><br></br>

              <UserDropdown
                handleUser={handleUser}
              />
            </div>

          </Modal.Body>
        )}
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={saveMedicalTransaction}>Submit</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}