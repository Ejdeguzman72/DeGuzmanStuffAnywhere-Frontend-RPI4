import React, { useState, useEffect } from 'react';
import { Button, Col, Row, Form } from 'react-bootstrap';
import MedicalTransactionService from '../../../services/MedicalTrxService';
import { MedicalTabsComponent } from '../../tab-components/medical-tabs-component';
import UserDropdown from '../../dropdown-components/UserDropdown';
import TransactionTypeDropdown from '../../dropdown-components/TransactionTypeDropdown';
import MedicalOfficeDropdown from '../../dropdown-components/MedicalOfficeDropdown';

const MedicalTransaction = props => {
    const initialState = {
        medTrxId: 0,
        amount: 0,
        medTrxDate: "",
        medicalOfficeId: 0,
        trxTypeId: 0,
        userId: 0
    };

    const [currentTransaction, setCurrentTransaction] = useState(initialState);
    const [message, setMessage] = ("");

    const handleMedicalOffice = (medicalOfficeId) => {
        setCurrentTransaction({
            ...currentTransaction, medicalOfficeId: medicalOfficeId
        });
    }

    const handleTransactionType = (trxTypeId) => {
        setCurrentTransaction({
            ...currentTransaction, trxTypeId: trxTypeId
        })
    }

    const handleUser = (userId) => {
        setCurrentTransaction({
            ...currentTransaction, userId: userId
        });
    }

    const getMedicalTransaction = (medTrxId) => {
        MedicalTransactionService.getTransactionById(medTrxId)
            .then(response => {
                setCurrentTransaction(response.data.transaction);
                console.log(response.data)
            })
            .catch(error => {
                console.log(error);
            });
    };

    useEffect(() => {
        getMedicalTransaction(props.match.params.medTrxId);
    }, [props.match.params.medTrxId]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setCurrentTransaction({ ...currentTransaction, [name]: value });
    };

    const updateMedicalTransaction = () => {
        MedicalTransactionService.updateMedicalTransaction(currentTransaction.medTrxId, currentTransaction)
            .then(response => {
                console.log(response.data);
                alert("The transaction was updated successfully");
            })
            .catch(error => {
                console.log(error);
            });
    };

    const deleteMedicalTransaction = () => {
        MedicalTransactionService.deleteMedicalTransaction(currentTransaction.medTrxId)
            .then(response => {
                console.log(response.data);
                props.history.push("/medical-finance-table");
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
                                    value={currentTransaction.amount.toFixed(2)}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="medTrxDate">Payment Date</label>
                                <Form.Group controlId="medTrxDate">
                                    <Form.Label>Select Date</Form.Label>
                                    <Form.Control type="date" name="medTrxDate" placeholder="Date" onChange={handleInputChange} />
                                </Form.Group>
                            </div>
                            <div className="form-group">
                                <label htmlFor="medicalOfficeId">Entity</label>
                                <MedicalOfficeDropdown
                                    handleMedicalOffice={handleMedicalOffice}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="trxTypeId">Transaction Type</label>
                                <TransactionTypeDropdown
                                    handleTransactionType={handleTransactionType}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="userId">User</label>
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

