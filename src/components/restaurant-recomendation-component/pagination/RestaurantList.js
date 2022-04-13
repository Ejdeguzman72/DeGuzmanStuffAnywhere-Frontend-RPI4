import React, { useState, useEffect } from 'react';
import RestaurantRecommendationService from '../../../services/RestaurantRecommendationsService';
import { Link } from 'react-router-dom';
import AddRestaurantModalComponent from '../AddRestaurantModalComponent';
import Pagination from "@material-ui/lab/Pagination";

const RestaurantList = () => {
    const [restaurants, setRestaurants] = useState([]);
    const [currentRestaurant, setCurrentRestaurant] = useState(null);
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

    const retrieveRestaurants = () => {
        const params = getRequestParams(searchTitle, page, pageSize);
        
        RestaurantRecommendationService.getAllRestaurants(params)
            .then(response => {
                const { restaurants, totalPages } = response.data;

                setRestaurants(restaurants);
                setCount(totalPages);
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    };

    useEffect(retrieveRestaurants, [page, pageSize]);

    const refreshList = () => {
        retrieveRestaurants();
        setCurrentRestaurant(null);
        setCurrentIndex(-1);
    }

    const handlePageChange = (event, value) => {
        setpage(value);
    }

    const handlePageSizeChange = (event) => {
        setPageSize(event.target.value);
        setpage(1);
    }

    const setActiveRestaurant = (restaurant, index) => {
        setCurrentRestaurant(restaurant);
        setCurrentIndex(index);
    }

    const removeAllRestaurants = () => {
        RestaurantRecommendationService.deleteAllRestaurants()
            .then(response => {
                setRestaurants(response.data);


                window.location.reload();
            })
            .catch(error => {
                console.log(error);
            });
    };

    const findByName = () => {
        RestaurantRecommendationService.findBookByName(searchTitle)
            .then(response => {
                setRestaurants(response.data);
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
                <h4>Restaurant List</h4>


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
                    {restaurants &&
                        restaurants.map((restaurant, index) => (
                            <li
                                className={
                                    "list-group-item selected-book" + (index === currentIndex ? "active" : "")

                                }
                                onClick={() => setActiveRestaurant(restaurant, index)}
                                key={index}
                            >
                                <p><strong>{restaurant.name} - </strong><strong>{restaurant.restaurantType.descr}</strong></p>
                            </li>
                        ))}
                </ul>
                <br></br>
                <button
                    className="m-3 btn btn-sm btn-danger"
                    onClick={removeAllRestaurants}
                >
                    Delete All
                </button>
                <AddRestaurantModalComponent />
            </div>
            <div className="col-md-6">
                {currentRestaurant ? (
                    <div>
                        <h4>Restaurant Information</h4>
                        <hr></hr>
                        <div>
                            <label>
                                <strong>Name:</strong>
                            </label>{" "}
                            {currentRestaurant.name}
                        </div>
                        <div>
                            <label>
                                <strong>Restaurant Type:</strong>
                            </label>{" "}
                            {currentRestaurant.restaurantType.restaurantDescr}
                        </div>
                        <div>
                            <label>
                                <strong>Address:</strong>
                            </label>{" "}
                            {currentRestaurant.address}
                        </div>
                        <div>
                            <label>
                                <strong>City:</strong>
                            </label>{" "}
                            {currentRestaurant.city}
                        </div>
                        <div>
                            <label>
                                <strong>State</strong>
                            </label>{" "}
                            {currentRestaurant.state}
                        </div>
                        <div>
                            <label>
                                <strong>Zip:</strong>
                            </label>{" "}
                            {currentRestaurant.zip}
                        </div>
                        <Link
                            to={"/update-restaurant/" + currentRestaurant.restaurant_id}
                            className="badge badge-warning"
                        >
                            Edit
                        </Link>
                    </div>
                ) : (
                        <div>
                            <br></br>
                            <p>Please click on a Restaurant...</p>
                        </div>
                    )}
            </div>
        </div>
    )
}

export default RestaurantList;