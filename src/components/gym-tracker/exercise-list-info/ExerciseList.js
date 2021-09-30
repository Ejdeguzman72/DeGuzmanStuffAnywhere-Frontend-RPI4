import React, { useState, useEffect } from 'react';
import ExerciseService from '../../services/ExerciseService';
import { Link } from 'react-router-dom';
import Pagination from "@material-ui/lab/Pagination";

const ExerciseList = () => {
    const [exercises, setExercises] = useState([]);
    const [currentExercise, setCurrentExercise] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(-1);
    const [searchTitle, setSearchTitle] = useState("");
    const [page, setPage] = useState(1);
    const [count, setCount] = useState(0);
    const [pageSize, setPageSize] = useState(10);

    const onChangeSearchTitle = (event) => {
        const searchTitle = event.target.value;
        setSearchTitle(searchTitle);
    };

    const pageSizes = [10, 15, 20];

    const getRequestParams = (searchTitle, page, pageSize) => {
        let params = {};

        if (searchTitle) {
            params['exerciseName'] = searchTitle;
        }

        if (page) {
            params['page'] = page - 1;
        }

        if (pageSize) {
            params['size'] = pageSize;
        }

        return params;
    }

    const retrieveExercises = () => {

        const params = getRequestParams(searchTitle, page, pageSize);

        ExerciseService.getAllExerciseInformation(params)
            .then(response => {
                // const { exercises, totalPages } = response.data;
                const { exercises } = response.data.exercise;
                const { totalPages } = response.data.TotalPages;
                setExercises(exercises);
                setCount(totalPages);
                console.log(response.data.TotalPages)
            })
            .catch(error => {
                console.log(error);
            });
    };

    useEffect(retrieveExercises, [page, pageSize]);

    const refreshList = () => {
        retrieveExercises();
        setCurrentExercise(null);
        setCurrentIndex(-1);
    }

    const handlePageChange = (event, value) => {
        setPage(value);
    }

    const setActiveExercise = (exercise, index) => {
        setCurrentExercise(exercise);
        setCurrentIndex(index);
    }

    const handlePageSizeChange = (event) => {
        setPageSize(event.target.value);
        setPage(1);
    }

    return (
        <div>
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
                    <h4>Exercise List</h4>


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
                        {exercises &&
                            exercises.map((exercise, index) => (
                                <li
                                    className={
                                        "list-group-item selected-book" + (index === currentIndex ? "active" : "")

                                    }
                                    onClick={() => setActiveExercise(exercise, index)}
                                    key={index}
                                >
                                    {exercise.exerciseName}
                                </li>
                            ))}
                    </ul>
                    <button
                        className="m-3 btn btn-sm btn-danger"
                        // onClick={removeAllBooks}
                    >
                        Delete All
                    </button>
                    {/* <button
                    className="m-3 btn btn-primary"
                    onClick={removeAllBooks}
                >
                    Add Book Information
                </button> */}
                    {/* <AddBookRecommendation /> */}
                </div>
                <div className="col-md-6">
                    {currentExercise ? (
                        <div>
                            <h4>Book Information</h4>
                            <div>
                                <label>
                                    <strong>Title:</strong>
                                </label>{" "}
                                {currentExercise.exerciseName}
                            </div>
                            <div>
                                <label>
                                    <strong>Author:</strong>
                                </label>{" "}
                                {currentExercise.sets}
                            </div>
                            <div>
                                <label>
                                    <strong>Description:</strong>
                                </label>{" "}
                                {currentExercise.reps}
                            </div>

                            <Link
                                to={"/update-book-information" + currentExercise.exerciseid}
                                className="badge badge-warning"
                            >
                                Edit
                            </Link>
                        </div>
                    ) : (
                        <div>
                            <br></br>
                            <p>Please click on a exercise...</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ExerciseList;