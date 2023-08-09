import React, { useState, useEffect } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import RestaurantRecommendationService from '../../services/RestaurantRecommendationsService';
import RestaurantTabComponent from './../tab-components/RestaurantTabComponent';
import RestaurantTypeDropdown from '../dropdown-components/RestaurantTypeDropdown';

const Restaurant = props => {
    const initialState = {
        restaurantId: 0,
        name: "",
        address: "",
        city: "",
        state: "",
        zip: "",
        restaurantTypeId: 0
    };

    const [currentRestaurant, setCurrentRestaurant] = useState(initialState);
    const [message, setMessage] = ("");

    const handleRestaurantType = (restaurantTypeId) => {
        setCurrentRestaurant({
            ...currentRestaurant, restaurantTypeId: restaurantTypeId
        });
    }

    const getRestaurant = (restaurantId) => {
        RestaurantRecommendationService.getRestaurantById(restaurantId)
            .then(response => {
                setCurrentRestaurant(response.data.restaurant);
            })
            .catch(error => {
                console.log(error);
            });
    };

    useEffect(() => {
        getRestaurant(props.match.params.restaurantId);
    }, [props.match.params.restaurantId]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setCurrentRestaurant({ ...currentRestaurant, [name]: value });
    };

    const updateContact = () => {
        RestaurantRecommendationService.updateRestaurantInformation(currentRestaurant.restaurantId, currentRestaurant)
            .then(response => {
                alert("The restaurant was updated successfully");
            })
            .catch(error => {
                console.log(error);
            });
    };

    const deleteContact = () => {
        RestaurantRecommendationService.deleteRestaurantInformation(currentRestaurant.restaurantId)
            .then(response => {
                props.history.push("/restaurant-recommendations-grid");
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
                                <label htmlFor="state">State</label>
                                <select
                                    id="state"
                                    name="state"
                                    className="form-control"
                                    value={currentRestaurant.state}
                                    type="text"
                                    onChange={handleInputChange} >
                                    <option value="Please choose a Restaurant Type">Please Choose a State</option>
                                    <option value="Alabama">Alabama</option>
                                    <option value="Alaska">Alaska</option>
                                    <option value="Arizona">Arizona</option>
                                    <option value="Arkansas">Arkansas</option>
                                    <option value="California">California</option>
                                    <option value="Colorado">Colorado</option>
                                    <option value="Conneticut">Conneticut</option>
                                    <option value="Delaware">Delaware</option>
                                    <option value="Florida">Florida</option>
                                    <option value="Georgia">Georgia</option>
                                    <option value="Hawaii">Hawaii</option>
                                    <option value="Idaho">Idaho</option>
                                    <option value="Illinois">Illinois</option>
                                    <option value="Indiana">Indiana</option>
                                    <option value="Iowa">Iowa</option>
                                    <option value="Kansas">Kansas</option>
                                    <option value="Kentucky">Kentucky</option>
                                    <option value="Louisiana">Louisiana</option>
                                    <option value="Maine">Maine</option>
                                    <option value="Maryland">Maryland</option>
                                    <option value="Massachussetts">Massachussetts</option>
                                    <option value="Michigan">Michigan</option>
                                    <option value="Minnesota">Minnesota</option>
                                    <option value="Mississippi">Mississippi</option>
                                    <option value="Missouri">Missouri</option>
                                    <option value="Montana">Montana</option>
                                    <option value="Nebraska">Nebraska</option>\
                                    <option value="Nevaada">Nevada</option>
                                    <option value="New Hampshire">New Hampshire</option>
                                    <option value="New Jersey">New Jersey</option>
                                    <option value="New Mexico">New Mexico</option>
                                    <option value="New York">New York</option>
                                    <option value="North Carolina">North Carolina</option>
                                    <option value="North Dakota">North Dakota</option>
                                    <option value="Ohio">Ohio</option>
                                    <option value="Oklahoma">Oklahoma</option>
                                    <option value="Oregon">Oregon</option>
                                    <option value="Pennsylvania">Pennsylvania</option>
                                    <option value="Rhode Island">Rhode Island</option>
                                    <option value="South Carolina">South Carolina</option>
                                    <option value="South Dakota">South Dakota</option>
                                    <option value="Tennessee">Tennessee</option>
                                    <option value="Texas">Texas</option>
                                    <option value="Utah">Utah</option>
                                    <option value="Vermont">Vermont</option>
                                    <option value="Virginia">Virginia</option>
                                    <option value="Washington">Washington</option>
                                    <option value="West Virginia">West Virginia</option>
                                    <option value="Wisconsin">Wisconsin</option>
                                    <option value="Wyoming">Wyoming</option>
                                </select>
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
                            <div className="form-group">
                                <label htmlFor="restaurant_type_id">Restaurant Type</label><br></br>
                                <RestaurantTypeDropdown
                                    handleRestaurantType={handleRestaurantType}
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

