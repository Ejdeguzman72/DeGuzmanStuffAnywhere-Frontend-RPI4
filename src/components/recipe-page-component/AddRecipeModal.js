import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import RecipeService from '../../services/RecipeService';
import RecipeTypeDropdown from '../dropdown-components/RecipeTypeDropdown';

const AddRecipeModal = () => {
    const initialState = {
        recipeId: 0,
        name: "",
        ingredients: [],
        directions: [],
        recipeTypeId: 0
    };

    const [recipe, setRecipe] = useState(initialState);
    const [submitted, setSubmitted] = useState(false);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setRecipe({ ...recipe, [name]: value });
    };

    const handleRestaurantTypeChange = (recipeTypeId) => {
        setRecipe({
            ...recipe, recipeTypeId: recipeTypeId
        })
    }

    const saveRecipe = () => {
        let data = {
            recipeId: recipe.recipeId,
            ingredients: recipe.ingredients,
            directions: recipe.directions,
            recipeTypeId: recipe.recipeTypeId
        };

        RecipeService.addRecipeInformation(data)
            .then(response => {
                setRecipe({
                    recipeId: response.data.recipeId,
                    name: response.data.name,
                    ingredients: response.data.ingredients,
                    directions: response.data.directions,
                    recipeTypeId: response.data.recipeTypeId
                });
                setSubmitted(true);

                window.location.reload();
            })
            .catch(error => {
                console.log(error);
            });
    }

    const newRecipe = () => {
        setRecipe(initialState);
        setSubmitted(false);
    }

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleOpen = () => setShow(true);

    return (
        <div>
            <Button className="add-music-btn" variant="info" size="lg" onClick={handleOpen}>
                Add Recipe
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                className
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add Recipe</Modal.Title>
                </Modal.Header>

                {submitted ? (
                    <Modal.Body>
                        <div>
                            <h4>{recipe.name} has been added</h4>
                            <Button className="btn btn-success" onClick={newRecipe} size="lg" variant="info">
                                Add
                                </Button>
                        </div>
                    </Modal.Body>
                ) : (
                    <Modal.Body>
                        Please fill out the following information:
                        <br></br>
                        <div className="modal-container">
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    required
                                    value={recipe.name}
                                    onChange={handleInputChange}
                                    name="name"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="ingredients">Ingredients</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="ingredients"
                                    required
                                    value={recipe.ingredients}
                                    onChange={handleInputChange}
                                    name="ingredients"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="directions">Directions</label>
                                <input
                                    type="textarea"
                                    className="form-control"
                                    id="directions"
                                    required
                                    value={recipe.directions}
                                    onChange={handleInputChange}
                                    name="directions"
                                />
                            </div>
                            <RecipeTypeDropdown handleRestaurantTypeChange={handleRestaurantTypeChange} />
                        </div>

                    </Modal.Body>
                )}
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={saveRecipe}>Submit</Button>
                </Modal.Footer>
            </Modal>
        </div>

    )
}


export default AddRecipeModal;