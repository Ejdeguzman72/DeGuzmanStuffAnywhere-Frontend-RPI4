import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Button, Modal, Row, Col, Form } from 'react-bootstrap';
import NameDropdown from '../../dropdown-components/NameDropdown';
import TransactionTypeDropdown from '../../dropdown-components/TransactionTypeDropdown';

export default function AddAutoTransactionModalComponent() {

  const initialState = {
    autoTransactionId: 0,
    autoTransactionDate: "",
    shopName: "",
    transactionType: "",
    amount: 0,
    person: ""
  }

  const [autoTransaction,setAutoTransaction] = useState(initialState);
  const [submitted,setSubmitted] = useState(false);

  const handleInputChange  = (event) => {
    const { name,value } = event.target;
    setAutoTransaction({ ...autoTransaction, [name]:value });
  };

  const saveAutoTransaction = () => {
    let data = {
      autoTransactionDate: autoTransaction.autoTransactionDate,
      shopName: autoTransaction.shopName,
      transactionType: autoTransaction.transactionType,
      amount: autoTransaction.amount,
      person: autoTransaction.person
    };

    Axios.post('localhost:8080/app/auto-transactions/add-auto-transaction-information',data)
      .then(response => {
        setAutoTransaction({
          autoTransactionId: response.data.autoTransactionId,
          autoTransactionDate: response.data.autoTransactionDate,
          shopName: response.data.shopName,
          transactionType: response.data.transactioNType,
          amount: response.data.amount,
          person: response.data.person
        });
        setSubmitted(true);
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
              <input type="text" placeholder="Enter Amount" className="input" name="amount" onChange={handleInputChange} /><br></br><br></br>
              <input type="text" placeholder="Repair Shop" className="input" name="repairShop" onChange={handleInputChange}/><br></br><br></br>
              <Form.Group controlId="paymentDate">
                  <Form.Label>Select Date</Form.Label>
                  <Form.Control type="date" name="autoTransactionDate" placeholder="Date" onChange={handleInputChange} />
                </Form.Group>
              {/* <input type="text" placeholder="Transaction Type" className="input" name="transactionType" onChange={handleInputChange}/><br></br><br></br> */}
              <Form.Control as="select" name="transactionType" onChange={handleInputChange} >
                  <option value="" disabled selected>Transaction Type</option>
                  {/* <option value="Rent">Rent</option>
                  <option value="Home Gas">Home Gas</option>
                  <option value="Electric">Electric</option>
                  <option value="Cable">Cable</option>
                  <option value="Internet">Internet</option>
                  <option value="Phones">Phones</option>
                  <option value="Auto Insurance">Auto Insurance</option>
                  <option value="Medical Insurance">Medical Insurance</option>
                  <option value="Mortgage">Mortgage</option>
                  <option value="Homeowner's Insurance">Homeowner's Insurance</option>
                  <option value="Groceries">Grcoeries</option>
                  <option value="Restuarant">Restaurant</option>
                  <option value="Office Supplies">Office Supplies</option>
                  <option value="Social">Social</option>
                  <option value="Vacation">Vacation</option> */}
                  <option>Oil Change</option>
                  <option>Brakes</option>
                  <option>Bumper</option>
                  <option>Car Detailing</option>
                  <option>General Auto Maintenance</option>
                  <option>Auto Accident</option>
                  <option>Medical Copay</option>
                  {/* <option>Prescription Payment</option>
                  <option value="Amazon">Amazon</option> */}
                </Form.Control><br></br>
              {/* <input type="text" placeholder="Entity" className="input" name="entity" onChange={handleInputChange}/><br></br><br></br> */}
              <TransactionTypeDropdown />
              <br></br>
                <NameDropdown />
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