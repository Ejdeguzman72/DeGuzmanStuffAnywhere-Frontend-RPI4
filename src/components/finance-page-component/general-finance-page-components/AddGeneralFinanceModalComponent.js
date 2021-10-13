import React, { useState, useEffect } from 'react';
import { Button, Modal, Row, Col, Form } from 'react-bootstrap';
import Axios from 'axios';
import NameDropdown from '../../dropdown-components/NameDropdown';
import TransactionTypeDropdown from '../../dropdown-components/TransactionTypeDropdown';

export default function AddGeneralFinanceModalComponent() {

  const initialState = {
    transaction_id: 0,
    amount: 0,
    paymentDate: "",
    transactionType: "",
    entity: "",
    person: ""
  }

  const [generalTransaction, setGeneralTransaction] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setGeneralTransaction({ ...generalTransaction, [name]: value });
  };

  const saveGeneralTransaction = () => {
    let data = {
      transaction_id: generalTransaction.transaction_id,
      amount: generalTransaction.amount,
      paymentDate: generalTransaction.paymentDate,
      transactionType: generalTransaction.transactionType,
      entity: generalTransaction.entity,
      person: generalTransaction.person
    };

    Axios.post('localhost:8080/app/general-transaction/add-transaction-information', data)
      .then(response => {
        setGeneralTransaction({
          transasction_id: response.data.transction_id,
          amount: response.data.amount,
          paymentDate: response.data.paymentDate,
          transactionType: response.data.transactionType,
          entity: response.data.entity,
          person: response.data.person
        })
        setSubmitted(true);
        console.log(data);
        //window.location.reload();
      })
  }

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const newGeneralTransaction = () => {
    setGeneralTransaction(initialState);
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
          <Modal.Title>Add Transaction Information</Modal.Title>
        </Modal.Header>

        {submitted ? (
          <Modal.Body>
            <div>
              <h4>Transaction Information has been added</h4>
              <Button className="btn btn-success" onClick={newGeneralTransaction} size="lg" variant="info">
                Add
              </Button>
            </div>
          </Modal.Body>
        ) : (
            <Modal.Body>
              <h4>Please fill out the following information:</h4>
              <br></br>
              <div className="modal-container">
                <input type="text" placeholder="Enter Amount" className="input" name="amount" onChange={handleInputChange} /><br></br><br></br>
                {/* <input type="text" placeholder="Payment Date" className="input" name="paymentDate" onChange={handleInputChange} /><br></br><br></br> */}
                <Form.Group controlId="paymentDate">
                  <Form.Label>Select Date</Form.Label>
                  <Form.Control type="date" name="paymentDate" placeholder="Date of Birth" onChange={handleInputChange} />
                </Form.Group>
                {/* <input type="text" placeholder="Transaction Type" className="input" name="transactionType" onChange={handleInputChange} /><br></br><br></br> */}
                {/* <input type="text" placeholder="Entity" className="input" name="entity" onChange={handleInputChange} /><br></br><br></br> */}
                <Form.Control as="select" name="entity" onChange={handleInputChange} >
                  <option value="" disabled selected>Entity</option>
                  <option value="Rent">ShopRite</option>
                  <option value="StateFarm">Statefarm</option>
                  <option value="AT&T">AT&T</option>
                  <option value="Optimum">Optimum</option>
                  <option value="PSEG">PSEG</option>
                  <option value="Walmart">Walmart</option>
                  <option value="99 Ranch Market">99 Ranch Market</option>
                  <option value="Target">Target</option>
                  <option value="Hulu">Hulu</option>
                  <option value="Gas Station">Gas Station</option>
                  <option value="Restuarant">Restaurant</option>
                  <option value="Amazon">Amazon</option>
                  <option value="Shopping Mall">Shopping Mall</option>
                  <option value="Hmart">HMART</option>
                </Form.Control><br></br>
                <Form.Control as="select" name="transactionType" onChange={handleInputChange} >
                  <option value="" disabled selected>Transaction Type</option>
                  <option value="Rent">Rent</option>
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
                  <option value="Vacation">Vacation</option>
                  {/* <option>Oil Change</option>
                  <option>Brakes</option>
                  <option>Bumper</option>
                  <option>Car Detailing</option>
                  <option>General Auto Maintenance</option>
                  <option>Auto Accident</option>
                  <option>Medical Copay</option>
                  <option>Prescription Payment</option> */}
                  <option value="Amazon">Amazon</option>
                </Form.Control><br></br>
                {/* <input type="text" placeholder="Person" className="input" name="person" onChange={handleInputChange} /><br></br><br></br> */}
                <NameDropdown />
                <br></br>
                <TransactionTypeDropdown />
              </div>

            </Modal.Body>
          )}
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={saveGeneralTransaction}>Submit</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}