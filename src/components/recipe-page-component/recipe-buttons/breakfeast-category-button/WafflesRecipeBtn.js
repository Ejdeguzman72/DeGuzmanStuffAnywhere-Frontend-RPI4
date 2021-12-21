import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const WafflesRecipeBtn = () => {
    return (
        <Button variant="outline-info">
            <Link to="/waffles-recipe">
                Click Here!
            </Link>
        </Button>
    )
}

export default WafflesRecipeBtn;