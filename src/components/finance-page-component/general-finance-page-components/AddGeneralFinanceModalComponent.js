import React, { useState, useEffect } from 'react';
import { Button, Modal, Row, Col, Form } from 'react-bootstrap';
import Axios from 'axios';
import NameDropdown from '../../dropdown-components/NameDropdown';
import TransactionTypeDropdown from '../../dropdown-components/TransactionTypeDropdown';

export default function AddGeneralFinanceModalComponent(props) {

  const initialState = {
    transaction_id: 0,
    amount: 0,
    payment_date: "",
    entity: "",
    transaction_type_id: 0,
    user_id: 0
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
      payment_date: generalTransaction.payment_date,
      entity: generalTransaction.entity,
      transaction_type_id: generalTransaction.transaction_type_id,
      user_id: generalTransaction.user_id
    };

    Axios.post('http://localhost:8080/app/general-transactions/add-general-transaction-information', data)
      .then(response => {
        setGeneralTransaction({
          transasction_id: response.data.transction_id,
          amount: response.data.amount,
          entity: response.data.entity,
          payment_date: response.data.payment_date,
          transaction_type_id: response.data.transaction_type_id,
          user_id: response.data.user_id
        })
        setSubmitted(true);

        console.log(data);

        window.location.reload();
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

              <input
                type="text"
                placeholder="Enter Amount ($0.00)"
                className="generalTrx-input"
                name="amount"
                onChange={handleInputChange} /><br></br><br></br>

              <Form.Group 
                controlId="payment_date" 
                className="generalTrx-input"
                >
                <Form.Label>Select Date</Form.Label>
                <Form.Control type="date" name="payment_date" placeholder="Payment Date (MM/DD/YYYY)" onChange={handleInputChange} />
              </Form.Group><br></br>

              <Form.Control as="select" name="entity" onChange={handleInputChange} className="generalTrx-input">
                <option value="" disabled selected>Choose An Entity For Payment</option>
                <option value="Rent">Rent</option>
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

              <select
                name="transaction_type_id"
                type="number"
                onChange={handleInputChange}
                id="transaction_type_id"
                className="generalTrx-input" >
                <option value="Select a Transaction Type" disabled selected>Transaction Type</option>
                <option value="1">Rent</option>
                <option value="2">Gas</option>
                <option value="3">Electric</option>
                <option value="4">Cable</option>
                <option value="5">Internet</option>
                <option value="6">Phone</option>
                <option value="7">Insurance</option>
                <option value="8">Mortgage</option>
                <option value="9">Groceries</option>
                <option value="10">Restaurant</option>
                <option value="11">School Supplies</option>
                <option value="12">Social Outing</option>
                <option value="13">Vacation Expenses</option>
              </select><br></br><br></br>

              <select
                id="user_id"
                name="user_id"
                type="number"
                onChange={handleInputChange}
                className="generalTrx-input" >
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
          <Button variant="primary" onClick={saveGeneralTransaction}>Submit</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}