import React from  'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const UkoyRecipeBtn = () => {
    return (
        <Button variant="outline-info">
            <Link to="/ukoy-recipe">
                Click Here!
            </Link>
        </Button>
    )
}

export default UkoyRecipeBtn;