import React, { useState, useEffect } from 'react';
import { Button, Col, Row, Form } from 'react-bootstrap';
import MedicalTransactionService from '../../../services/medical-transaction-service';
import { MedicalTabsComponent } from '../../tab-components/medical-tabs-component';
import UserDropdown from '../../dropdown-components/UserDropdown';
import TransactionTypeDropdown from '../../dropdown-components/TransactionTypeDropdown';
import MedicalOfficeDropdown from '../../dropdown-components/MedicalOfficeDropdown';

const MedicalTransaction = props => {
    const initialState = {
        medical_transaction_id: 0,
        amount: 0,
        medical_transaction_date: "",
        medical_office_id: 0,
        transaction_type_id: 0,
        user_id: 0
    };

    const [currentTransaction, setCurrentTransaction] = useState(initialState);
    const [message, setMessage] = ("");

    const handleMedicalOffice = (medical_office_id) => {
        setCurrentTransaction({
            ...currentTransaction, medical_office_id: medical_office_id
        });
    }

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

    const getMedicalTransaction = (medical_transaction_id) => {
        MedicalTransactionService.getTransactionById(medical_transaction_id)
            .then(response => {
                setCurrentTransaction(response.data);
                console.log(response.data)
            })
            .catch(error => {
                console.log(error);
            });
    };

    useEffect(() => {
        getMedicalTransaction(props.match.params.medical_transaction_id);
    }, [props.match.params.medical_transaction_id]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setCurrentTransaction({ ...currentTransaction, [name]: value });
    };

    const updateMedicalTransaction = () => {
        MedicalTransactionService.updateMedicalTransaction(currentTransaction.medical_transaction_id, currentTransaction)
            .then(response => {
                console.log(response.data);
                alert("The transaction was updated successfully");
            })
            .catch(error => {
                console.log(error);
            });
    };

    const deleteMedicalTransaction = () => {
        MedicalTransactionService.deleteMedicalTransaction(currentTransaction.medical_transaction_id)
            .then(response => {
                console.log(response.data);
                props.history.push("/medical-finance");
            })
            .catch(error => {
                console.log(error);
            });
    };

    return (
        <div>
            <br></br>
            <MedicalTabsComponent />
            <div id="white-background">
                <br></br>
                {currentTransaction ? (
                    <div className="edit form">
                        <h4>Medical Expenses</h4>
                        <form className="update-book-container">
                            <div className="form-group">
                                <label htmlFor="amount">Amount</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="amount"
                                    name="amount"
                                    value={currentTransaction.amount}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="medical_transaction_date">Payment Date</label>
                                <Form.Group controlId="medical_transaction_date">
                                    <Form.Label>Select Date</Form.Label>
                                    <Form.Control type="date" name="medical_transaction_date" placeholder="Date" onChange={handleInputChange} />
                                </Form.Group>
                            </div>
                            <div className="form-group">
                                <label htmlFor="entity">Entity</label>
                                <MedicalOfficeDropdown
                                    handleMedicalOffice={handleMedicalOffice}
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
                        <Button className="badge badge-danger mr-2" onClick={() => updateMedicalTransaction(true)}>
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
                            <Button type="submit" size="lg" variant="dark" onClick={updateMedicalTransaction}>Update</Button>
                        </div>
                    </Col>
                    <Col md={2}>
                        <div>
                            <Button type="submit" size="lg" variant="outline-danger" onClick={deleteMedicalTransaction}>
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

export default MedicalTransaction;

