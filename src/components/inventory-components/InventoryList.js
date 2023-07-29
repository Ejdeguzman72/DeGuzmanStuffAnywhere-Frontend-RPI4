import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Row, Button } from 'react-bootstrap';
import Pagination from "@material-ui/lab/Pagination";
import InventoryService from '../../services/InventoryService';
import AddInventoryModal from './AddInventoryModal';

const InventoryList = () => {
    const [inventorys, setInventorys] = useState([]);
    const [currentInventory, setCurrentInventory] = useState(null);
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
            params['name'] = searchTitle;
        }

        if (page) {
            params['page'] = page - 1;
        }

        if (pageSize) {
            params['size'] = pageSize;
        }

        return params;
    }

    const retrieveInventory = () => {
        const params = getRequestParams(searchTitle, page, pageSize);

        InventoryService.getAllInventoryPagination(params)
            .then(response => {
                const { persons, totalPages } = response.data;
                setInventorys(persons);
                setCount(totalPages);

                console.log(response.data)
            })
            .catch(error => {
                console.log(error);
            });
    };

    useEffect(retrieveInventory, [page, pageSize]);

    const refreshList = () => {
        retrieveInventory();
        setCurrentInventory(null);
        setCurrentIndex(-1);
    }

    const handlePageChange = (event, value) => {
        setpage(value);
    }

    const handlePageSizeChange = (event) => {
        setPageSize(event.target.value);
        setpage(1);
    }

    const setActiveInventory = (item, index) => {
        setCurrentInventory(item);
        setCurrentIndex(index);
    }

    const removeAllInventory = () => {
        InventoryService.deleteAllInventory()
            .then(response => {
                setInventorys(response.data);
                console.log(response.data);

                window.location.reload();
            })
            .catch(error => {
                console.log(error);
            });
    };

    const findByName = () => {
        InventoryService.findByName(searchTitle)
            .then(response => {
                setInventorys(response.data);
                console.log(response.data);
            })
    }

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
                            onClick={findByName}
                        >
                            Search
                        </button>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <h4>Inventory List</h4>


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

               {inventorys}
                <br></br>
                <Row>
                    <AddInventoryModal />
                    <Button
                        size="lg"
                        className="btn-danger delete-all-btn" 
                        onClick={removeAllInventory}
                    >
                        Delete All
                    </Button>
                </Row>
            </div>
            <div className="col-md-6">
                {currentInventory ? (
                    <div>
                        <h4>Inventory Info:</h4>
                        <div>
                            <label>
                                <strong>Name:</strong>
                            </label>{" "}
                            {currentInventory.name}
                        </div>
                        <div>
                            <label>
                                <strong>Description:</strong>
                            </label>{" "}
                            {currentInventory.description}
                        </div>
                        <div>
                            <label>
                                <strong>Condition:</strong>
                            </label>{" "}
                            {currentInventory.condition}
                        </div>
                        <div>
                            <label>
                                <strong>Location:</strong>
                            </label>{" "}
                            {currentInventory.location}
                        </div>
                        <div>
                            <label>
                                <strong>Quantity:</strong>
                            </label>{" "}
                            {currentInventory.quantity}
                        </div>

                        <Link
                            to={"/update-contact/" + currentInventory.inventoryId}
                            className="badge badge-warning"
                        >
                            Edit
                        </Link>
                    </div>
                ) : (
                        <div>
                            <br></br>
                            <p>Please click on an item...</p>
                        </div>
                    )}
            </div>
        </div>
    )
}

export default InventoryList;