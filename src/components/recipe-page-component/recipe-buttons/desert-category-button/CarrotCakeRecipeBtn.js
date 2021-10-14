import React from  'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CarrotCakeRecipeBtn = () => {
    return (
        <Button variant="outline-info">
            <Link to="/carrot-cake-recipe">
                Click Here!
            </Link>
        </Button>
    )
}

export default CarrotCakeRecipeBtn;