import React, { useState, useEffect } from 'react';
import { Button, Modal, Row, Col, Form } from 'react-bootstrap';
import Axios from 'axios';
import '../../../style-sheets/medical-finance-page.css';

export default function AddMedicalFinanceModalComponent() {

  const initialState = {
    medical_transaction_id: 0,
    amount: 0,
    medical_transaction_date: "",
    medical_office_id: 0,
    transaction_type_id: 0,
    user_id: 0
  }

  const [medicalTransaction, setMedicalTransaction] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setMedicalTransaction({ ...medicalTransaction, [name]: value });
  };

  const saveMedicalTransaction = () => {
    let data = {
      medical_transaction_id: medicalTransaction.medical_transaction_id,
      amount: medicalTransaction.amount,
      medical_transaction_date: medicalTransaction.medical_transaction_date,
      medical_office_id: medicalTransaction.medical_office_id,
      transaction_type_id: medicalTransaction.transaction_type_id,
      user_id: medicalTransaction.user_id
    };

    Axios.post('http://localhost:8080/app/medical-transactions/add-medical-transaction', data)
      .then(response => {
        setMedicalTransaction({
          medical_transaction_id: response.data.medicamedical_transaction_idlTransactionId,
          amount: response.data.amount,
          medical_transaction_date: response.data.medical_transaction_date,
          medical_office_id: response.data.medical_office_id,
          transaction_type_id: response.data.transaction_type_id,
          user_id: response.data.user_id
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
                className="medicalTrx-input"
                name="amount"
                onChange={handleInputChange} /><br></br><br></br>

              <Form.Group controlId="medical_transaction_date">
                <Form.Label>Select Date (MM/DD/YYYY)</Form.Label>
                <Form.Control type="date" name="medical_transaction_date" placeholder="Date (MM/DD/YYYY)" onChange={handleInputChange} />
              </Form.Group>

              <select 
                id="medical_office_id"
                name="medical_office_id" 
                type="number"
                onChange={handleInputChange}
                className="medicalTrx-input" >
                  <option value="" disabled selected>Select A Medical Office:</option>
                  <option value="20">Hackensack University Medical Center</option>
                  <option value="21">Frank Mastriano</option>
                  <option value="21">Desgning Smiles</option>
                  <option value="21">Eye Care Insights: Dr. Floyd Smith Optometrist</option>
              </select><br></br><br></br>

              <select 
                id="transaction_type_id"
                name="transaction_type_id" 
                type="number"
                onChange={handleInputChange}
                className="medicalTrx-input" >
                  <option value="" disabled selected>Select A Transaction Type:</option>
                  <option value="20">Medical Copay</option>
                  <option value="21">Medical Prescription</option>
              </select><br></br><br></br>

              <select
                id="user_id"
                name="user_id"
                type="number"
                onChange={handleInputChange}
                className="medicalTrx-input" >
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
          <Button variant="primary" onClick={saveMedicalTransaction}>Submit</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}