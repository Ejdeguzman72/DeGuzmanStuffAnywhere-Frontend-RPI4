import React, { useState, useEffect } from 'react';
import RecipeService from '../../../services/RecipeService';
import { Link } from 'react-router-dom';
import { Row, Button } from 'react-bootstrap';
import Pagination from "@material-ui/lab/Pagination";

const MainRecipeList = () => {
    const [recipes, setRecipes] = useState([]);
    const [currentRecipe, setCurrentRecipe] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(-1);
    const [searchTitle, setSearchTitle] = useState("");

    const [page, setpage] = useState(1);
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

    const retrieveRecipes = () => {
        const params = getRequestParams(searchTitle, page, pageSize);

        RecipeService.getAllRecipesPagination(params)
            .then(response => {
                const { recipes, totalPages } = response.data;
                setRecipes(recipes);
                setCount(totalPages);
            })
            .catch(error => {
                console.log(error);
            });
    };

    useEffect(retrieveRecipes, [page, pageSize]);

    const refreshList = () => {
        retrieveRecipes();
        setCurrentRecipe(null);
        setCurrentIndex(-1);
    }

    const handlePageChange = (event, value) => {
        setpage(value);
    }

    const handlePageSizeChange = (event) => {
        setPageSize(event.target.value);
        setpage(1);
    }

    const setActiveRecipe = (recipe, index) => {
        setCurrentRecipe(recipe);
        setCurrentIndex(index);
    }

    const findByName = () => {
        RecipeService.getRecipeByName(searchTitle)
            .then(response => {
                setRecipes(response.data);
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
                <h4>Recipe Library</h4>
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
                    {recipes &&
                        recipes.map((recipe, index) => (
                            <li
                                className={
                                    "list-group-item selected-book" + (index === currentIndex ? "active" : "")

                                }
                                onClick={() => setActiveRecipe(recipe, index)}
                                key={index}
                            >
                                <p><strong>Recipe: </strong>{recipe.name}</p>
                                <p><strong>Category: </strong>{recipe.recipeType.descr}</p>

                            </li>
                        ))}
                </ul>
                <br></br>
            </div>
            <div className="col-md-6">
                {currentRecipe ? (
                    <div>
                        <h4>Recipe Information</h4>
                        <hr></hr>
                        <div>
                            <label>
                                <strong>Name:</strong>
                            </label>{" "}
                            {currentRecipe.name}
                        </div>
                        <div>
                            <label>
                                <strong>Category:</strong>
                            </label>{" "}
                            {currentRecipe.recipeType.descr}
                        </div>
                        <p><strong>
                            Ingredients</strong></p>
                        <ul>
                            {currentRecipe.ingredients.map((ingredient, index) => (
                                <li
                                    key={index}>{ingredient}</li>
                            ))}
                        </ul>
                        <p><strong>Directions</strong></p>
                        <ul>
                            {currentRecipe.directions.map((direction, index) => (
                                <li key={index}>{direction}</li>
                            ))}
                        </ul>
                        <Link
                            to={"/update-recipe/" + currentRecipe.recipeId}
                            className="badge badge-warning"
                        >
                            Edit
                        </Link>
                    </div>
                ) : (
                    <div>
                        <br></br>
                    </div>
                )}
            </div>
        </div>
    )
}

export default MainRecipeList;