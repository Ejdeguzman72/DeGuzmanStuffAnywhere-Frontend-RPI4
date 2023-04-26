import React, { useState, useEffect } from 'react';
import { Button, Col, Row, Form } from 'react-bootstrap';
import AutoTransactionService from '../../../services/auto-transaction-service';
import { AutoFinanceTabsComponent } from '../../tab-components/auto-finance-tabs-component';
import AutoRepairShopDropdown from '../../dropdown-components/AutoRepairShopDropdown';
import VehicleDropdownComponent from '../../dropdown-components/VehicleDropdownComponent';
import UserDropdown from '../../dropdown-components/UserDropdown';
import TransactionTypeDropdown from '../../dropdown-components/TransactionTypeDropdown';

const AutoTransaction = props => {
    const initialState = {
        auto_transaction_id: 0,
        amount: 0,
        auto_transaction_date: "",
        vehicle_id: 0,
        auto_shop_id: 0,
        transaction_type_id: 0,
        user_id: 0,
    };

    const [currentTransaction, setCurrentTransaction] = useState(initialState);
    const [message, setMessage] = ("");

    const handleTransactionType = (transaction_type_id) => {
        setCurrentTransaction({
            ...currentTransaction, transaction_type_id: transaction_type_id
        })
    }

    const handleAutoShop = (auto_shop_id) => {
        setCurrentTransaction({
            ...currentTransaction, auto_shop_id: auto_shop_id
        })
    }

    const handleVehicle = (vehicle_id) => {
        setCurrentTransaction({
            ...currentTransaction, vehicle_id: vehicle_id
        });
    }

    const handleUser = (user_id) => {
        setCurrentTransaction({
            ...currentTransaction, user_id: user_id
        });
    }

    const getTransaction = (auto_transaction_id) => {
        AutoTransactionService.getAutoTransactionDTOById(auto_transaction_id)
            .then(response => {
                setCurrentTransaction(response.data);
                console.log(response.data)
            })
            .catch(error => {
                console.log(error);
            });
    };

    useEffect(() => {
        getTransaction(props.match.params.auto_transaction_id);
    }, [props.match.params.auto_transaction_id]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setCurrentTransaction({ ...currentTransaction, [name]: value });
    };

    const updateTransaction = () => {
        AutoTransactionService.updateAutoTransaction(currentTransaction.auto_transaction_id, currentTransaction)
            .then(response => {
                console.log(response.data);
                alert("The transaction was updated successfully");
            })
            .catch(error => {
                console.log(error);
            });
    };

    const deleteTransaction = () => {
        AutoTransactionService.deleteAutoTransaction(currentTransaction.auto_transaction_id)
            .then(response => {
                console.log(response.data);
                props.history.push("/auto-finance");
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
                                    value={currentTransaction.amount}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="auto_transaction_date">Payment Date</label>
                                <Form.Group controlId="auto_transaction_date">
                                    <Form.Label>Select Date</Form.Label>
                                    <Form.Control type="date" name="auto_transaction_date" placeholder="Date" onChange={handleInputChange} />
                                </Form.Group>
                            </div>
                            <div className="form-group">
                                <label htmlFor="auto_shop_id">Auto Repair Shop</label>
                                <AutoRepairShopDropdown
                                    handleAutoShop={handleAutoShop}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="vehicle_id">Vehicle</label>
                                <VehicleDropdownComponent
                                    handleVehicle={handleVehicle}
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

export default AutoTransaction;

