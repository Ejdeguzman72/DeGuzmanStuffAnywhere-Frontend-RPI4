import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CheeseSpinachQuicheRecipeBtn = () => {
    return (
        <Button variant="outline-info">
            <Link to="quiche-recipe">
                Click Here!
            </Link>
        </Button>
    )
}

export default CheeseSpinachQuicheRecipeBtn;