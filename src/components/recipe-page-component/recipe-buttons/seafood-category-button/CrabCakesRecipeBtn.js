import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CrabCakesRecipeBtn  =  () => {
    return (
        <Button variant="outline-info">
            <Link to="crab-cakes-recipe">
                Click Here!
            </Link>
        </Button>
    )
}

export default CrabCakesRecipeBtn;