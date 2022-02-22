import React, { useState, useEffect } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import RestaurantRecommendationService from '../../services/RestaurantRecommendationsService';
import RestaurantTabComponent from './../tab-components/RestaurantTabComponent';

const Restaurant = props => {
    const initialState = {
        restaurant_id: 0,
        name: "",
        address: "",
        city: "",
        state: "",
        zip: "",
        descr: ""
    };

    const [currentRestaurant, setCurrentRestaurant] = useState(initialState);
    const [message, setMessage] = ("");

    const getRestaurant = (restaurantId) => {
        RestaurantRecommendationService.getRestaurantById(restaurantId)
            .then(response => {
                setCurrentRestaurant(response.data);
                console.log(restaurantId + "skljasdhfalskdjhfaslkjdfh");
            })
            .catch(error => {
                console.log(error);
            });
    };

    useEffect(() => {
        getRestaurant(props.match.params.restaurant_id);
    }, [props.match.params.restaurant_id]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setCurrentRestaurant({ ...currentRestaurant, [name]: value });
    };

    const updateContact = () => {
        RestaurantRecommendationService.updateRestaurantInformation(currentRestaurant.restaurant_id, currentRestaurant)
            .then(response => {
                console.log(response.data);
                // setMessage("The book was updated successfully");
            })
            .catch(error => {
                console.log(error);
            });
    };

    const deleteContact = () => {
        RestaurantRecommendationService.deleteRestaurantInformation(currentRestaurant.restaurant_id)
            .then(response => {
                console.log(response.data);
                props.history.push("/restaurant-recommendations");
            })
            .catch(error => {
                console.log(error);
            });
    };

    return (
        <div>
            <br></br>
            <RestaurantTabComponent />
            <div id="white-background">
                <br></br>
                {currentRestaurant ? (
                    <div className="edit form">
                        <h4>Restaurant Info</h4>
                        <form className="update-book-container">
                            <div className="form-group">
                                <label htmlFor="name">Restaurant Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    name="name"
                                    value={currentRestaurant.name}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="descr">Address</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="address"
                                    name="address"
                                    value={currentRestaurant.address}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="descr">City</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="city"
                                    name="city"
                                    value={currentRestaurant.city}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="descr">State</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="state"
                                    name="state"
                                    value={currentRestaurant.state}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="descr">Zip</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="zip"
                                    name="zip"
                                    value={currentRestaurant.zip}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </form>
                    </div>
                ) : (
                    <div>
                        <Button className="badge badge-danger mr-2" onClick={() => updateContact(true)}>
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
                            <Button type="submit" size="lg" variant="dark" onClick={updateContact}>Update</Button>
                        </div>
                    </Col>
                    <Col md={2}>
                        <div>
                            <Button type="submit" size="lg" variant="outline-danger" onClick={deleteContact}>
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

export default Restaurant;

