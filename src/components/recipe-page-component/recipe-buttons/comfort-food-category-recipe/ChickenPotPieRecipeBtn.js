import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ChickenPotPieRecipeBtn = () => {
    return (
        <Button variant="outline-info">
            <Link to="chicken-pot-pie-recipe">
                Click Here!
            </Link>
        </Button>
    )
}

export default ChickenPotPieRecipeBtn;