import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Row, Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import RecipeService from '../../../services/RecipeService';
import AddRecipeModal from '../AddRecipeModal';

function FilipinoRecipesList() {
    const [recipes, setRecipes] = useState({ list: [] });
    const [currentRecipe, setCurrentRecipe] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(-1);
    const [show, setShow] = useState(false);
    const [page, setPage] = useState(1);
    const recipesPerPage = 5;

    const handleClose = () => {
        setShow(false);
        setCurrentRecipe(null)
        setCurrentIndex(-1)
    }

    const setActiveRecipe = (recipe, index) => {
        setCurrentRecipe(recipe);
        console.log(recipe)
        setCurrentIndex(index);
        setShow(true);
    }

    useEffect(() => {
        const recipeTypeId = 7;
        RecipeService.getRecipesByType(recipeTypeId, page)
            .then(response => {
                console.log(response.data);
                setRecipes(response.data);
            })
            .catch(error => {
                console.error("Error in fetching data: " + error);
            });
    }, [page]);

    const totalPages = Math.ceil(recipes.list.length / recipesPerPage);

    const handlePageChange = (newPage) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setPage(newPage);
        }
    }

    const recipesToDisplay = recipes.list.slice(
        (page - 1) * recipesPerPage,
        page * recipesPerPage
    )

    return (
        <><div>
            <ul className="list-group">
                {recipesToDisplay &&
                    recipesToDisplay.map((recipe, index) => (
                        <li
                            className={"list-group-item selected-book" + (index === currentIndex ? "active" : "")}
                            onClick={() => setActiveRecipe(recipe, index)}
                            key={index}
                        >
                            <p><strong>Recipe: </strong>{recipe.name}</p>
                            <p><strong>Category: </strong>{recipe.descr}</p>
                        </li>
                    ))}
            </ul>
            <br></br>
            <div>
                <Button className="button-margin" variant="info" size="lg" onClick={() => handlePageChange(page - 1)}>Previous</Button>
                <span className="text">Page {page} of {totalPages}</span>
                <Button className="button-margin" variant="info" size="lg" onClick={() => handlePageChange(page + 1)}>Next</Button>
            </div>
            <Row>
                <AddRecipeModal />
            </Row>
        </div><div className="col-md-4">
                {
                    currentRecipe ? (
                        <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
                            <Modal.Header closeButton>
                                <Modal.Title>Recipe Information</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <div className="recipe-modal-container">
                                    <div className="form-group">
                                        <p>Name: {currentRecipe.name}</p>
                                        <p>Category: {currentRecipe.descr}</p>
                                        <p>Ingredients</p>
                                        <ul>
                                            {currentRecipe.ingredients.map((ingredient, index) => (
                                                <li
                                                    key={index}>{ingredient}</li>
                                            ))}
                                        </ul>
                                        <p>Directions</p>
                                        <ul>
                                            {currentRecipe.directions.map((direction, index) => (
                                                <li key={index}>{direction}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="primary" onClick={handleClose}>
                                    Close
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    ) : null
                }

            </div></>
    );
}

export default FilipinoRecipesList;
