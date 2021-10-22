import React from  'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LumpiaRecipeBtn = () => {
    return (
        <Button variant="outline-info">
            <Link to="/lumpia-recipe">
                Click Here!
            </Link>
        </Button>
    )
}

export default LumpiaRecipeBtn;