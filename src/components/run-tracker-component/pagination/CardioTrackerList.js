import React, { useState, useEffect } from 'react';
import CardioTrackerService from '../../../services/CardioTrackerService';
import { Link } from 'react-router-dom';
import AddCardioInfoModalComponent from '../AddCardioInfoModalComponent';
import Pagination from "@material-ui/lab/Pagination";

const CardioTrackerList = () => {
    const [entries, setEntries] = useState([]);
    const [currentEntry, setCurrentEntry] = useState(null);
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
            params['cDate'] = searchTitle;
        }

        if (page) {
            params['page'] = page - 1;
        }

        if (pageSize) {
            params['size'] = pageSize;
        }

        return params;
    }

    const retrieveCardio = () => {
        const params = getRequestParams(searchTitle, page, pageSize);
        
        CardioTrackerService.getAllCardioPagination(params)
            .then(response => {
                const { entries, totalPages } = response.data;
                console.log(response.data)
                setEntries(entries);
                setCount(totalPages);
            })
            .catch(error => {
                console.log(error);
            });
    };

    useEffect(retrieveCardio, [page, pageSize]);

    const refreshList = () => {
        retrieveCardio();
        setCurrentEntry(null);
        setCurrentIndex(-1);
    }

    const handlePageChange = (event, value) => {
        setpage(value);
    }

    const handlePageSizeChange = (event) => {
        setPageSize(event.target.value);
        setpage(1);
    }

    const setActiveCardio = (cardio, index) => {
        setCurrentEntry(cardio);
        setCurrentIndex(index);
    }

    const removeAllCardio = () => {
        CardioTrackerService.deleteAllCardioInfo()
            .then(response => {
                setEntries(response.data);
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
                <h4>Cardio Tracker</h4>


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
                    {entries &&
                        entries.map((entry, index) => (
                            <li
                                className={
                                    "list-group-item selected-book" + (index === currentIndex ? "active" : "")

                                }
                                onClick={() => setActiveCardio(entry, index)}
                                key={index}
                            >
                                <p><strong>{entry.cTime} - {entry.cDistance}miles</strong></p>
                                <p><strong>{entry.user.username}</strong></p>
                            </li>
                        ))}
                </ul>
                <br></br>
                <button
                    className="m-3 btn btn-sm btn-danger"
                    onClick={removeAllCardio}
                >
                    Delete All
                </button>
                <AddCardioInfoModalComponent />
                <br></br>
            </div>
            <br></br>
            <div className="col-md-6">
                {currentEntry ? (
                    <div>
                        <h4>Cardio Information</h4>
                        <hr></hr>
                        <div>
                            <label>
                                <strong>Time:</strong>
                            </label>{" "}
                            {currentEntry.cTime}
                        </div>
                        <div>
                            <label>
                                <strong>Distance:</strong>
                            </label>{" "}
                            {currentEntry.cDistance}
                        </div>
                        <div>
                            <label>
                                <strong>Date:</strong>
                            </label>{" "}
                            {currentEntry.cDate}
                        </div>
                        <div>
                            <label>
                                <strong>User:</strong>
                            </label>{" "}
                            {currentEntry.user.username}
                        </div>
                        <div>
                            <label>
                                <strong>Type:</strong>
                            </label>{" "}
                            {currentEntry.cardioType.descr}
                        </div>
                        <Link
                            to={"/update-run/" + currentEntry.cardioId}
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

export default CardioTrackerList;