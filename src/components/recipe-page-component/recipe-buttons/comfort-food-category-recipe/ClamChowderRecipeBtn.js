import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ClamChowderRecipeBtn = () => {
    return (
        <Button variant="outline-info">
            <Link to="clam-chowder-recipe">
                Click Here!
            </Link>
        </Button>
    )
}

export default ClamChowderRecipeBtn;