import React, { useState, useEffect } from 'react';
import AutoShopService from '../../services/AutoShopService';
import { Link } from 'react-router-dom';
import { Row, Button } from 'react-bootstrap';
import Pagination from "@material-ui/lab/Pagination";
import AddAutoShopModalComponent from './AddAutoShopModalComponent';

const AutoShopList = () => {
    const [autoShops, setAutoShops] = useState([]);
    const [currentShop, setCurrentShop] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(-1);
    const [searchTitle, setSearchTitle] = useState("");

    const [page, setPage] = useState(1);
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
            params['autoShopName'] = searchTitle;
        }

        if (page) {
            params['page'] = page - 1;
        }

        if (pageSize) {
            params['size'] = pageSize;
        }

        return params;
    }

    const retrieveAutoShops = () => {
        const params = getRequestParams(searchTitle, page, pageSize);
        
        AutoShopService.getAllAutoShops(params)
            .then(response => {
                const { autoShops, totalPages } = response.data;
                setAutoShops(autoShops);
                setCount(totalPages);

                console.log(response.data)
            })
            .catch(error => {
                console.log(error);
            });
    };

    useEffect(retrieveAutoShops, [page, pageSize]);

    const refreshList = () => {
        retrieveAutoShops();
        setCurrentShop(null);
        setCurrentIndex(-1);
    }

    const handlePageChange = (event, value) => {
        setPage(value);
    }

    const handlePageSizeChange = (event) => {
        setPageSize(event.target.value);
        setPage(1);
    }

    const setActiveShop = (shop, index) => {
        setCurrentShop(shop);
        setCurrentIndex(index);
    }

    const removeAllShops = () => {
        AutoShopService.deleteAllShopInformation()
            .then(response => {
                setAutoShops(response.data);
                console.log(response.data);

                window.location.reload();
            })
            .catch(error => {
                console.log(error);
            });
    };

    const findByName = () => {
        AutoShopService.getSongByTitle(searchTitle)
            .then(response => {
                setAutoShops(response.data);
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
                <h4>Auto Repair Shop List</h4>


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
                    {autoShops &&
                        autoShops.map((autoShop, index) => (
                            <li
                            className={
                                "list-group-item selected-book" + (index === currentIndex ? "active" : "")
                                
                            }
                            onClick={() => setActiveShop(autoShop, index)}
                            key={index}
                            >
                                {autoShop.autoShopName}
                            </li>
                        ))}
                </ul>
                <br></br>
                <Row>
                    <AddAutoShopModalComponent />
                    <Button
                        size="sm"
                        className="btn-danger delete-all-btn" 
                        onClick={removeAllShops}
                    >
                        Delete All
                    </Button>
                </Row>
            </div>
            <div className="col-md-6">
                {currentShop ? (
                    <div>
                        <h4>Information</h4>
                        <div>
                            <label>
                                <strong>Name:</strong>
                            </label>{" "}
                            {currentShop.autoShopName}
                        </div>
                        <div>
                            <label>
                                <strong>Address:</strong>
                            </label>{" "}
                            {currentShop.address}
                        </div>
                        <div>
                            <label>
                                <strong>City:</strong>
                            </label>{" "}
                            {currentShop.city}
                        </div>
                        <div>
                            <label>
                                <strong>State:</strong>
                            </label>{" "}
                            {currentShop.state}
                        </div>
                        <div>
                            <label>
                                <strong>Zip:</strong>
                            </label>{" "}
                            {currentShop.zip}
                        </div>
                        <Link
                            to={"/update-autoshop/" + currentShop.autoShopId}
                            className="badge badge-warning"
                        >
                            Edit
                        </Link>
                    </div>
                ) : (
                        <div>
                            <br></br>
                            <p>Please click on a tutorial...</p>
                        </div>
                    )}
            </div>
        </div>
    )
}

export default AutoShopList;