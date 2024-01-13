import React, { useState, useEffect } from 'react'
import Axios from 'axios';

function RecipeTypeDropdown(props) {
    const [types, setTypes] = useState([]);
    const [singleType, setSingleType] = useState([]);

    useEffect(function () {
        Axios.get('http://192.168.1.36:8080/app/recipe-types/all')
            .then((response) => setTypes(response.data.list))
            .catch((error) => {
                return "Error: " + error
            });
    }, []);

    const handleChange = (event) => {
        props.handleRecipeTypeChange(event.target.value);
    }

    return (
        <select 
            id="recipeTypeId"
            name="recipeTypeId"
            className="form-control"
            value={types.recipeTypeId}
            type="number"
            onChange={handleChange}
        >
            <option value="0">Select A Recipe Type</option>
            {types.map((type) => (
                <option key={type.recipeTypeId} value={type.recipeTypeId}>
                    {type.descr}
                </option>
            ))}
        </select>
    );
}

export default RecipeTypeDropdown;