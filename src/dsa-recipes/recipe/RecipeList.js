import React, { useState } from 'react';
import Recipe from './Recipe'
import Accordion from 'react-bootstrap/Accordion';
import Pagination from 'react-bootstrap/Pagination'

const RecipeList = ({ recipes }) => {

    const itemsPerPage = 20;
    const [currentPage, setCurrentPage] = useState(1);

    const indexOfLastRecipe = currentPage * itemsPerPage;
    const indexOfFirstRecipe = indexOfLastRecipe - itemsPerPage;
    const currentRecipes = recipes.slice(indexOfFirstRecipe, indexOfLastRecipe);

    const totalPages = Math.ceil(recipes.length / itemsPerPage);

    const handlePagination = (page) => {
        setCurrentPage(page);
    }

    return (
        <div>
            <Accordion>
                {currentRecipes.map((recipe, index) => (
                    <Recipe key={index} recipe={recipe} />
                ))}
            </Accordion>
            <Pagination>
                {Array.from({ length: totalPages }).map((_, index) => (
                    <Pagination.Item
                        key={index}
                        active={index + 1 === currentPage}
                        onClick={() => handlePagination(index + 1)}
                        className="pagination-btn"
                    >
                        {index + 1}
                    </Pagination.Item>
                ))}
            </Pagination>
        </div>
    )
}

export default RecipeList;