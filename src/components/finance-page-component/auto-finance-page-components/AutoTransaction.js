import React, { useState, useEffect } from 'react';
import { Button, Col, Row, Form } from 'react-bootstrap';
import AutoTransactionService from '../../../services/AutoTrxService';
import { AutoFinanceTabsComponent } from '../../tab-components/AutoFinanceTabsComponent';
import AutoRepairShopDropdown from '../../dropdown-components/AutoRepairShopDropdown';
import VehicleDropdownComponent from '../../dropdown-components/VehicleDropdownComponent';
import UserDropdown from '../../dropdown-components/UserDropdown';
import TransactionTypeDropdown from '../../dropdown-components/TransactionTypeDropdown';

const AutoTransaction = props => {
    const initialState = {
        autoTrxId: 0,
        amount: 0,
        autoTrxDate: "",
        vehicleId: 0,
        autoShopId: 0,
        trxTypeId: 0,
        userId: 0,
    };

    const [currentTransaction, setCurrentTransaction] = useState(initialState);
    const [message, setMessage] = ("");

    const handleTransactionType = (trxTypeId) => {
        setCurrentTransaction({
            ...currentTransaction, trxTypeId: trxTypeId
        })
    }

    const handleAutoShop = (autoShopId) => {
        setCurrentTransaction({
            ...currentTransaction, autoShopId: autoShopId
        })
    }

    const handleVehicle = (vehicleId) => {
        setCurrentTransaction({
            ...currentTransaction, vehicleId: vehicleId
        });
    }

    const handleUser = (userId) => {
        setCurrentTransaction({
            ...currentTransaction, userId: userId
        });
    }

    const getTransaction = (autoTrxId) => {
        AutoTransactionService.getAutoTransactionDTOById(autoTrxId)
            .then(response => {
                setCurrentTransaction(response.data.transaction);
                console.log(response.data)
            })
            .catch(error => {
                console.log(error);
            });
    };

    useEffect(() => {
        getTransaction(props.match.params.autoTrxId);
    }, [props.match.params.autoTrxId]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setCurrentTransaction({ ...currentTransaction, [name]: value });
    };

    const updateTransaction = () => {
        AutoTransactionService.updateAutoTransaction(currentTransaction.autoTrxId, currentTransaction)
            .then(response => {
                console.log(response.data);
                alert("The transaction was updated successfully");
            })
            .catch(error => {
                console.log(error);
            });
    };

    const deleteTransaction = () => {
        AutoTransactionService.deleteAutoTransaction(currentTransaction.autoTrxId)
            .then(response => {
                console.log(response.data);
                props.history.push("/auto-finance-table");
            })
            .catch(error => {
                console.log(error);
            });
    };

    return (
        <div>
            <br></br>
            <AutoFinanceTabsComponent />
            <div id="white-background">
                <br></br>
                {currentTransaction ? (
                    <div className="edit form">
                        <h4>Auto Transaction Expenses</h4>
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
                                <label htmlFor="autoTrxDate">Payment Date</label>
                                <Form.Group controlId="autoTrxDate">
                                    <Form.Label>Select Date</Form.Label>
                                    <Form.Control type="date" name="autoTrxDate" placeholder="Date" onChange={handleInputChange} />
                                </Form.Group>
                            </div>
                            <div className="form-group">
                                <label htmlFor="autoShopId">Auto Repair Shop</label>
                                <AutoRepairShopDropdown
                                    handleAutoShop={handleAutoShop}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="vehicleId">Vehicle</label>
                                <VehicleDropdownComponent
                                    handleVehicle={handleVehicle}
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

export default AutoTransaction;

