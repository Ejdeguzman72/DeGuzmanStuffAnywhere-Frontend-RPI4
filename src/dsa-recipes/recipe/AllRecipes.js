import React from 'react';
import recipeJson from '../json/recipes.js'
import RecipeList from './RecipeList';

const AllRecipes = () => {
    return (
        <div>
            <RecipeList recipes={recipeJson.list} />
        </div>
    )
}

export default AllRecipes;