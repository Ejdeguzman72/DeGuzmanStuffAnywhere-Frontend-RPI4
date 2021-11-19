import React from  'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ChilaquilesRecipeBtn = () => {
    return (
        <Button variant="outline-info">
            <Link to="/chilaquiles-recipe">
                Click Here!
            </Link>
        </Button>
    )
}

export default ChilaquilesRecipeBtn;