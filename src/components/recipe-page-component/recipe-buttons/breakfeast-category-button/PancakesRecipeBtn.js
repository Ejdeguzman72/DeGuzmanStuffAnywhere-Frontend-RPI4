import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const PancakeRecipeBtn = () => {
    return (
        <Button variant="outline-info">
            <Link to="pancake-recipe">
                Click Here!
            </Link>
        </Button>
    )
}

export default PancakeRecipeBtn;