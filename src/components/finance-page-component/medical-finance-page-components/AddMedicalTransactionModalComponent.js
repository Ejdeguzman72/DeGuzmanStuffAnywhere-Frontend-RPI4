import React, { useState, useEffect } from 'react';
import { Button, Modal, Row, Col, Form } from 'react-bootstrap';
import Axios from 'axios';
import TransactionTypeDropdown from '../../dropdown-components/TransactionTypeDropdown';
import NameDropdown from '../../dropdown-components/NameDropdown';
import FacilityDropdown from '../../dropdown-components/FacilityDropdown';

export default function AddMedicalFinanceModalComponent() {

  const initialState = {
    medicalTransactionId:0,
    facillity:"",
    medicalTransactionDate:"",
    amount:0,
    transactionType:"",
    person:""
  }

  const [medicalTransaction,setMedicalTransaction] = useState(initialState);
  const [submitted,setSubmitted] = useState(false);

  const handleInputChange = (event) => {
    const { name,value } = event.target;
    setMedicalTransaction({ ...medicalTransaction, [name]:value });
  };

  const saveMedicalTransaction = () => {
    let data = {
      facillity: medicalTransaction.facillity,
      medicalTransactionDate: medicalTransaction.medicalTransactionDate,
      amount: medicalTransaction.amount,
      transactionType: medicalTransaction.transactionType,
      person: medicalTransaction.person
    };

    Axios.post('http://ec2-54-162-1-238.compute-1.amazonaws.com:8080/app/medical-transactions/add-medical-transaction',data)
      .then(response => {
        setMedicalTransaction({
          medicalTransactionId: response.data.medicalTransactionId,
          facillity: response.data.facillity,
          medicalTransactionDate: response.data.medicalTransactionDate,
          amount: response.data.amount,
          transactionType: response.data.transactionType,
          person: response.data.person
        });
        setSubmitted(true);
        console.log(data);
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
            <input type="text" placeholder="Enter Amount" className="input" name="amount" onChange={handleInputChange} /><br></br><br></br>
            <input type="text" placeholder="Facility" className="input" name="facillity" onChange={handleInputChange} /><br></br><br></br>
            {/* <input type="text" placeholder="Payment Date" className="input" name="paymentDate" onChange={handleInputChange} /><br></br><br></br> */}
            <Form.Group controlId="medicalTransactionDate">
                  <Form.Label>Select Date</Form.Label>
                  <Form.Control type="date" name="medicalTransactionDate" placeholder="Date" onChange={handleInputChange} />
                </Form.Group>
            {/* <input type="text" placeholder="Transaction Type" className="input" name="transactioNType" onChange={handleInputChange} /><br></br><br></br> */}
            <Form.Control as="select" name="transactionType" onChange={handleInputChange} >
                  <option value="" disabled selected>Transaction Type</option>
                  <option value="Rent">Rent</option>
                  <option value="Home Gas">Home Gas</option>
                  <option value="Electric">Electric</option>
                  <option value="Cable">Cable</option>
                  <option value="Internet">Internet</option>
                  <option value="Phones">Phones</option>
                  <option value="Auto Insurance">Auto Insurance</option>
                </Form.Control><br></br>
            {/* <input type="text" placeholder="Person" className="input" name="person" onChange={handleInputChange} /><br></br><br></br> */}
            <TransactionTypeDropdown /><br></br>
            <NameDropdown /><br></br>
            <FacilityDropdown />
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