import React, { useState, useEffect } from 'react';
import { Button, Col, Row, Form } from 'react-bootstrap';
import GeneralTransactionService from '../../../services/GeneralTrxService';
import { GeneralFinanceTabsComponent } from '../../tab-components/general-finance-tabs-components';
import UserDropdown from '../../dropdown-components/UserDropdown';
import TransactionTypeDropdown from '../../dropdown-components/TransactionTypeDropdown';

const GeneralTransaction = props => {
    const initialState = {
        transaction_id: 0,
        amount: 0,
        payment_date: "",
        entity: "",
        transaction_type_id: 0,
        user_id: 0
    };

    const [currentTransaction, setCurrentTransaction] = useState(initialState);
    const [message, setMessage] = ("");

    const handleTransactionType = (transaction_type_id) => {
        setCurrentTransaction({
            ...currentTransaction, transaction_type_id: transaction_type_id
        })
    }

    const handleUser = (user_id) => {
        setCurrentTransaction({
            ...currentTransaction, user_id: user_id
        });
    }

    const getTransaction = (transaction_id) => {
        GeneralTransactionService.getTransactionById(transaction_id)
            .then(response => {
                setCurrentTransaction(response.data);
                console.log(response.data)
            })
            .catch(error => {
                console.log(error);
            });
    };

    useEffect(() => {
        getTransaction(props.match.params.transaction_id);
    }, [props.match.params.transaction_id]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setCurrentTransaction({ ...currentTransaction, [name]: value });
    };

    const updateTransaction = () => {
        GeneralTransactionService.updateTransactionInformation(currentTransaction.transaction_id, currentTransaction)
            .then(response => {
                console.log(response.data);
                alert("The transaction was updated successfully");
            })
            .catch(error => {
                console.log(error);
            });
    };

    const deleteTransaction = () => {
        GeneralTransactionService.deleteTransaction(currentTransaction.transaction_id)
            .then(response => {
                console.log(response.data);
                props.history.push("/general-finance");
            })
            .catch(error => {
                console.log(error);
            });
    };

    return (
        <div>
            <br></br>
            <GeneralFinanceTabsComponent />
            <div id="white-background">
                <br></br>
                {currentTransaction ? (
                    <div className="edit form">
                        <h4>General Expenses</h4>
                        <form className="update-book-container">
                            <div className="form-group">
                                <label htmlFor="amount">Amount</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="amount"
                                    name="amount"
                                    value={currentTransaction.amount.toFixed(2)}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="paymentDate">Payment Date</label>
                                <Form.Group controlId="paymentDate">
                                    <Form.Label>Select Date</Form.Label>
                                    <Form.Control type="date" name="paymentDate" placeholder="Date" onChange={handleInputChange} />
                                </Form.Group>
                            </div>
                            <div className="form-group">
                                <label htmlFor="entity">Entity</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="entity"
                                    name="entity"
                                    value={currentTransaction.entity}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="transaction_type_id">Transaction Type</label>
                                <TransactionTypeDropdown
                                    handleTransactionType={handleTransactionType}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="user_id">User</label>
                                <UserDropdown
                                    handleUser={handleUser}
                                />
                            </div>
                        </form>
                    </div>
                ) : (
                    <div>
                        <Button className="badge badge-danger mr-2" onClick={() => updateTransaction(true)}>
                            Update
                        </Button>
                    </div>
                )}

                <br></br>
                <Row>
                    <Col md={4}>

                    </Col>
                    <Col md={2}>
                        <div>
                            <Button type="submit" size="lg" variant="dark" onClick={updateTransaction}>Update</Button>
                        </div>
                    </Col>
                    <Col md={2}>
                        <div>
                            <Button type="submit" size="lg" variant="outline-danger" onClick={deleteTransaction}>
                                Delete
                            </Button>
                        </div>
                    </Col>
                    <Col md={4}>

                    </Col>
                </Row>
                <p>{message}</p>
            </div>
        </div>
    )
}

export default GeneralTransaction;

