import React, { useState} from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import Axios from 'axios';
import TransactionTypeDropdown from '../../dropdown-components/TransactionTypeDropdown';
import UserDropdown from '../../dropdown-components/UserDropdown';
import GeneralTrxService from '../../../services/GeneralTrxService';

export default function AddGeneralFinanceModalComponent() {

  const initialState = {
    genTrxId: 0,
    amount: 0,
    paymentDate: "",
    entity: "",
    trxTypeId: 0,
    userId: 0
  }

  const [generalTransaction, setGeneralTransaction] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setGeneralTransaction({ ...generalTransaction, [name]: value });
  };

  const handleTransactionType = (trxTypeId) => {
    setGeneralTransaction({
      ...generalTransaction, trxTypeId: trxTypeId
    })
  }
 
  const handleUser = (userId) => {
    setGeneralTransaction({
      ...generalTransaction, userId: userId
    })
  }

  const saveGeneralTransaction = () => {
    let data = {
      genTrxId: generalTransaction.genTrxId,
      amount: generalTransaction.amount,
      paymentDate: generalTransaction.paymentDate,
      entity: generalTransaction.entity,
      trxTypeId: generalTransaction.trxTypeId,
      userId: generalTransaction.userId
    };

    GeneralTrxService.addGeneralTransactionInformation(data)
      .then(response => {
        setGeneralTransaction({
          genTrxId: response.data.genTrxId,
          amount: response.data.amount,
          entity: response.data.entity,
          paymentDate: response.data.paymentDate,
          trxTypeId: response.data.trxTypeId,
          userId: response.data.userId
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
                className="form-control"
                name="amount"
                onChange={handleInputChange} /><br></br>

              <Form.Group
                controlId="paymentDate"
              >
                <Form.Label>Select Date</Form.Label>
                <Form.Control type="date" name="paymentDate" placeholder="Payment Date (MM/DD/YYYY)" onChange={handleInputChange} />
              </Form.Group>

              <Form.Control as="select" name="entity" onChange={handleInputChange} className="form-control">
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

              <TransactionTypeDropdown 
                handleTransactionType={handleTransactionType}
              />
              
              <br></br>

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
          <Button variant="primary" onClick={saveGeneralTransaction}>Submit</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}