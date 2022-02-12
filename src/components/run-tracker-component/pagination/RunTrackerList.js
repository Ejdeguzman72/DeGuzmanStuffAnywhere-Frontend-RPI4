import React, { useState, useEffect } from 'react';
import RunTrackerService from '../../../services/run-tracker-service';
import { Link } from 'react-router-dom';
import AddRunInfoModalComponent from '../AddRunInfoModalComponent';
import Pagination from "@material-ui/lab/Pagination";

const RunTrackerList = () => {
    const [runs, setRuns] = useState([]);
    const [currentRun, setCurrentRun] = useState(null);
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
            params['runDate'] = searchTitle;
        }

        if (page) {
            params['page'] = page - 1;
        }

        if (pageSize) {
            params['size'] = pageSize;
        }

        return params;
    }

    const retrieveRuns = () => {
        const params = getRequestParams(searchTitle, page, pageSize);
        
        RunTrackerService.getAllRunsPagination(params)
            .then(response => {
                const { runs, totalPages } = response.data;

                setRuns(runs);
                setCount(totalPages);
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    };

    useEffect(retrieveRuns, [page, pageSize]);

    const refreshList = () => {
        retrieveRuns();
        setCurrentRun(null);
        setCurrentIndex(-1);
    }

    const handlePageChange = (event, value) => {
        setpage(value);
    }

    const handlePageSizeChange = (event) => {
        setPageSize(event.target.value);
        setpage(1);
    }

    const setActiveRun = (run, index) => {
        setCurrentRun(run);
        setCurrentIndex(index);
    }

    const removeAllRuns = () => {
        RunTrackerService.deleteAllRunsInfo()
            .then(response => {
                setRuns(response.data);


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
                <h4>Run Tracker List</h4>


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
                    {runs &&
                        runs.map((run, index) => (
                            <li
                                className={
                                    "list-group-item selected-book" + (index === currentIndex ? "active" : "")

                                }
                                onClick={() => setActiveRun(run, index)}
                                key={index}
                            >
                                {'Run Time: ' + run.runTime + '  ' + 'Run Distance: ' + run.runDistance + '  ' + 'Run Date: ' + run.runDate}
                            </li>
                        ))}
                </ul>
                <br></br>
                <button
                    className="m-3 btn btn-sm btn-danger"
                    onClick={removeAllRuns}
                >
                    Delete All
                </button>
                <AddRunInfoModalComponent />
                <br></br>
            </div>
            <br></br>
            <div className="col-md-6">
                {currentRun ? (
                    <div>
                        <h4>Run Information</h4>
                        <hr></hr>
                        <div>
                            <label>
                                <strong>Run Time:</strong>
                            </label>{" "}
                            {currentRun.runTime}
                        </div>
                        <div>
                            <label>
                                <strong>Run Distance:</strong>
                            </label>{" "}
                            {currentRun.runDistance}
                        </div>
                        <div>
                            <label>
                                <strong>Date:</strong>
                            </label>{" "}
                            {currentRun.runDate}
                        </div>
                        <div>
                            <label>
                                <strong>User:</strong>
                            </label>{" "}
                            {currentRun.user.username}
                        </div>
                        <Link
                            to={"/update-book-information" + currentRun.run_id}
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

export default RunTrackerList;