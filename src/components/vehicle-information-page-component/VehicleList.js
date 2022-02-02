import React, { useState, useEffect } from 'react';
import VehicleInformationService from '../../services/VehicleInformationService';
import { Link } from 'react-router-dom';
import AddVehicleInfoModalComponent from './AddVehicleInfoModalComponent';
import Pagination from "@material-ui/lab/Pagination";

const VehicleList = () => {
    const [vehicles, setVehicles] = useState([]);
    const [currentVehicle, setCurrentVehicle] = useState(null);
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
            params['vehicles'] = searchTitle;
        }

        if (page) {
            params['page'] = page - 1;
        }

        if (pageSize) {
            params['size'] = pageSize;
        }

        return params;
    }

    const retrieveVehicles = () => {
        const params = getRequestParams(searchTitle, page, pageSize);
        
        VehicleInformationService.getAllVehicles(params)
            .then(response => {
                const { vehicles, totalPages } = response.data;

                setVehicles(vehicles);
                setCount(totalPages);
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    };

    useEffect(retrieveVehicles, [page, pageSize]);

    const refreshList = () => {
        retrieveVehicles();
        setCurrentVehicle(null);
        setCurrentIndex(-1);
    }

    const handlePageChange = (event, value) => {
        setpage(value);
    }

    const handlePageSizeChange = (event) => {
        setPageSize(event.target.value);
        setpage(1);
    }

    const setActiveVehicle = (vehicle, index) => {
        setCurrentVehicle(vehicle);
        setCurrentIndex(index);
    }

    const removeAllVehicles = () => {
        VehicleInformationService.deleteAllVehicles()
            .then(response => {
                setVehicles(response.data);


                window.location.reload();
            })
            .catch(error => {
                console.log(error);
            });
    };

    const findByName = () => {
        VehicleInformationService.findBookByName(searchTitle)
            .then(response => {
                setVehicles(response.data);
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
                <h4>Vehicle List</h4>


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
                    {vehicles &&
                        vehicles.map((vehicle, index) => (
                            <li
                                className={
                                    "list-group-item selected-book" + (index === currentIndex ? "active" : "")

                                }
                                onClick={() => setActiveVehicle(vehicle, index)}
                                key={index}
                            >
                                {vehicle.make + ' ' + vehicle.model + ' ' + vehicle.year}
                            </li>
                        ))}
                </ul>
                <button
                    className="m-3 btn btn-sm btn-danger"
                    onClick={removeAllVehicles}
                >
                    Delete All
                </button>
                <AddVehicleInfoModalComponent />
            </div>
            <div className="col-md-6">
                {currentVehicle ? (
                    <div>
                        <h4>Vehicle Information</h4>
                        <div>
                            <label>
                                <strong>Make:</strong>
                            </label>{" "}
                            {currentVehicle.make}
                        </div>
                        <div>
                            <label>
                                <strong>Model:</strong>
                            </label>{" "}
                            {currentVehicle.model}
                        </div>
                        <div>
                            <label>
                                <strong>Year:</strong>
                            </label>{" "}
                            {currentVehicle.year}
                        </div>
                        <div>
                            <label>
                                <strong>Capacity:</strong>
                            </label>{" "}
                            {currentVehicle.capacity}
                        </div>
                        <div>
                            <label>
                                <strong>Transmission:</strong>
                            </label>{" "}
                            {currentVehicle.transmission}
                        </div>
                        <Link
                            to={"/update-book-information" + currentVehicle.vehicle_id}
                            className="badge badge-warning"
                        >
                            Edit
                        </Link>
                    </div>
                ) : (
                        <div>
                            <br></br>
                            <p>Please click on a Vehicle...</p>
                        </div>
                    )}
            </div>
        </div>
    )
}

export default VehicleList;