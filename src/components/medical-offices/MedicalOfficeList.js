import React, { useState, useEffect } from 'react';
import MedicalOfficeService from '../../services/MedicalOfficeService';
import { Link } from 'react-router-dom';
import AddMedicalOfficeModalComponent from './AddMedicalOfficeModalComponent';
import Pagination from "@material-ui/lab/Pagination";

const MedicalOfficeList = () => {
    const [medicalOffices, setMedicalOffices] = useState([]);
    const [currentMedicalOffice, setCurrentMedicalOffice] = useState(null);
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

    const retrieveMedicalOffices = () => {
        const params = getRequestParams(searchTitle, page, pageSize);
        
        MedicalOfficeService.getAllMedicalOfficeInfo(params)
            .then(response => {
                const { medicalOffices, totalPages } = response.data;

                setMedicalOffices(medicalOffices);
                setCount(totalPages);
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    };

    useEffect(retrieveMedicalOffices, [page, pageSize]);

    const refreshList = () => {
        retrieveMedicalOffices();
        setCurrentMedicalOffice(null);
        setCurrentIndex(-1);
    }

    const handlePageChange = (event, value) => {
        setpage(value);
    }

    const handlePageSizeChange = (event) => {
        setPageSize(event.target.value);
        setpage(1);
    }

    const setActiveMedicalOffice = (book, index) => {
        setCurrentMedicalOffice(book);
        setCurrentIndex(index);
    }

    const removeAllMedicalOffices = () => {
        MedicalOfficeService.deleteAllMedicalOffices()
            .then(response => {
                setMedicalOffices(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    };

    const findByName = () => {
        MedicalOfficeService.findBookByName(searchTitle)
            .then(response => {
                setMedicalOffices(response.data);
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
                <h4>Medical Office List</h4>


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
                    {medicalOffices &&
                        medicalOffices.map((medicalOffice, index) => (
                            <li
                                className={
                                    "list-group-item selected-book" + (index === currentIndex ? "active" : "")

                                }
                                onClick={() => setActiveMedicalOffice(medicalOffice, index)}
                                key={index}
                            >
                                {medicalOffice.name}
                            </li>
                        ))}
                </ul>
                <button
                    className="m-3 btn btn-sm btn-danger"
                    onClick={removeAllMedicalOffices}
                >
                    Delete All
                </button>
                {/* <button
                    className="m-3 btn btn-primary"
                    onClick={removeAllBooks}
                >
                    Add Book Information
                </button> */}
                <AddMedicalOfficeModalComponent />
            </div>
            <div className="col-md-6">
                {currentMedicalOffice ? (
                    <div>
                        <h4>Medical Office Information</h4>
                        <div>
                            <label>
                                <strong>Name of Office:</strong>
                            </label>{" "}
                            {currentMedicalOffice.name}
                        </div>
                        <div>
                            <label>
                                <strong>Address:</strong>
                            </label>{" "}
                            {currentMedicalOffice.address}
                        </div>
                        <div>
                            <label>
                                <strong>City:</strong>
                            </label>{" "}
                            {currentMedicalOffice.city}
                        </div>
                        <div>
                            <label>
                                <strong>State:</strong>
                            </label>{" "}
                            {currentMedicalOffice.state}
                        </div>
                        <div>
                            <label>
                                <strong>Zip:</strong>
                            </label>{" "}
                            {currentMedicalOffice.zip}
                        </div>

                        <Link
                            to={"/update-book-information" + currentMedicalOffice.book_id}
                            className="badge badge-warning"
                        >
                            Edit
                        </Link>
                    </div>
                ) : (
                        <div>
                            <br></br>
                            <p>Please click on a medical office...</p>
                        </div>
                    )}
            </div>
        </div>
    )
}

export default MedicalOfficeList;