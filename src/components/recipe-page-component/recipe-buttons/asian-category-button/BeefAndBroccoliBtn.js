import React from  'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const BeefAndBroccoliRecipeBtn = () => {
    return (
        <Button variant="outline-info">
            <Link to="/beef-and=broccoli-recipe">
                Click Here!
            </Link>
        </Button>
    )
}

export default BeefAndBroccoliRecipeBtn;