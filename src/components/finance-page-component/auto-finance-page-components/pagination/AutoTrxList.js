import React, { useState, useEffect } from 'react';
import AutoTransactionService from '../../../../services/auto-transaction-service';
import { Link } from 'react-router-dom';
import AddAutoTransactionModalComponent from '../AddAutoTransactionModalComponent';
import Pagination from "@material-ui/lab/Pagination";

const AutoTrxList = () => {
    const [transactions, setTransactions] = useState([]);
    const [currentTransaction, setCurrentTransaction] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(-1);
    const [searchTitle, setSearchTitle] = useState("");

    const [page, setpage] = useState(1);
    const [count, setCount] = useState(0);
    const [pageSize, setPageSize] = useState(10);

    const onChangeSearchTitle = (event) => {
        const searchTitle = event.target.value;
        setSearchTitle(searchTitle);
    };

    const pageSizes = [10,15,20];

    const getRequestParams = (searchTitle, page, pageSize) => {
        let params = {};

        if (searchTitle) {
            params['autoTransactionDate'] = searchTitle;
        }

        if (page) {
            params['page'] = page - 1;
        }

        if (pageSize) {
            params['size'] = pageSize;
        }

        return params;
    }

    const retrieveTransactions = () => {
        const params = getRequestParams(searchTitle, page, pageSize);
        
        AutoTransactionService.getAllAutoTransactionsPagination(params)
            .then(response => {
                const { transactions, totalPages } = response.data;

                setTransactions(transactions);
                setCount(totalPages);
            })
            .catch(error => {
                console.log(error);
            });
    };

    useEffect(retrieveTransactions, [page, pageSize]);

    const refreshList = () => {
        retrieveTransactions();
        setCurrentTransaction(null);
        setCurrentIndex(-1);
    }

    const handlePageChange = (event, value) => {
        setpage(value);
    }

    const handlePageSizeChange = (event) => {
        setPageSize(event.target.value);
        setpage(1);
    }

    const setActiveTransactions = (transaction, index) => {
        setCurrentTransaction(transaction);
        setCurrentIndex(index);
    }

    const removeAllTransactions = () => {
        AutoTransactionService.deleteAllTransactions
            .then(response => {
                setTransactions(response.data);


                window.location.reload();
            })
            .catch(error => {
                console.log(error);
            });
    };

    // const findByName = () => {
    //     RunTrackerService.findBookByName(searchTitle)
    //         .then(response => {
    //             setExercises(response.data);
    //             console.log(response.data);
    //         })
    // }

    return (
        <div className="list row">
            <div className="col-md-8">
                <div className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search By Title"
                        value={searchTitle}
                        onChange={onChangeSearchTitle}
                    />
                    <div className="input-group-append">
                        <button
                            className="btn btn-outline-secondary"
                            type="button"
                            // onClick={findByName}
                        >
                            Search
                        </button>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <h4>Auto Transaction List</h4>

                <div className="mt-3">
                    {"Items per Page: "}
                    <select onChange={handlePageSizeChange} value={pageSize}>
                        {pageSizes.map((size) => (
                            <option key={size} value={size}>
                                {size}
                            </option>
                        ))}
                    </select>

                    <Pagination
                        className="my-3"
                        count={count}
                        page={page}
                        siblingCount={1}
                        boundaryCount={1}
                        variant="outlined"
                        shape="rounded"
                        onChange={handlePageChange}
                    />
                </div>


                <ul className="list-group">
                    {transactions &&
                        transactions.map((transaction, index) => (
                            <li
                                className={
                                    "list-group-item selected-book" + (index === currentIndex ? "active" : "")

                                }
                                onClick={() => setActiveTransactions(transaction, index)}
                                key={index}
                            >
                                {'Amount: ' + transaction.amount + ' ' + 'Payment Date: ' + transaction.autoTransactionDate + 'Transaction Type: ' + transaction.transactionType.descr}
                            </li>
                        ))}
                </ul>
                <br></br>
                <button
                    className="m-3 btn btn-sm btn-danger"
                    onClick={removeAllTransactions}
                >
                    Delete All
                </button>
                <AddAutoTransactionModalComponent />
            </div>
            <div className="col-md-6">
                {currentTransaction ? (
                    <div>
                        <h4>Transaction Information</h4>
                        <hr></hr>
                        <div>
                            <label>
                                <strong>Amount:</strong>
                            </label>{" "}
                            {currentTransaction.amount}
                        </div>
                        <div>
                            <label>
                                <strong>Payment Date:</strong>
                            </label>{" "}
                            {currentTransaction.autoTransactionDate}
                        </div>
                        <div>
                            <label>
                                <strong>Make:</strong>
                            </label>{" "}
                            {currentTransaction.vehicle.make}
                        </div>
                        <div>
                            <label>
                                <strong>Model:</strong>
                            </label>{" "}
                            {currentTransaction.vehicle.model}
                        </div>
                        <div>
                            <label>
                                <strong>Year:</strong>
                            </label>{" "}
                            {currentTransaction.vehicle.year}
                        </div>
                        <div>
                            <label>
                                <strong>Auto Shop Name:</strong>
                            </label>{" "}
                            {currentTransaction.autoShop.autoShopName}
                        </div>
                        <div>
                            <label>
                                <strong>Auto Shop Address:</strong>
                            </label>{" "}
                            {currentTransaction.autoShop.address}
                        </div>
                        <div>
                            <label>
                                <strong>Auto Shop City:</strong>
                            </label>{" "}
                            {currentTransaction.autoShop.city}
                        </div>
                        <div>
                            <label>
                                <strong>Auto Shop State:</strong>
                            </label>{" "}
                            {currentTransaction.autoShop.state}
                        </div>
                        <div>
                            <label>
                                <strong>Auto Shop Zip:</strong>
                            </label>{" "}
                            {currentTransaction.autoShop.zip}
                        </div>
                        <div>
                            <label>
                                <strong>Transaction Type:</strong>
                            </label>{" "}
                            {currentTransaction.transactionType.descr}
                        </div>
                        <div>
                            <label>
                                <strong>User:</strong>
                            </label>{" "}
                            {currentTransaction.user.username}
                        </div>
                        <Link
                            to={"/update-book-information" + currentTransaction.auto_transaction_id}
                            className="badge badge-warning"
                        >
                            Edit
                        </Link>
                    </div>
                ) : (
                        <div>
                            <br></br>
                            <p>Please click on a run entry...</p>
                        </div>
                    )}
            </div>
        </div>
    )
}

export default AutoTrxList;