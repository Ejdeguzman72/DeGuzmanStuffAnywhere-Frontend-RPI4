import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const StuffedClamsRecipeBtn  =  () => {
    return (
        <Button variant="outline-info">
            <Link to="/stuffed-clams-recipe">
                Click Here!
            </Link>
        </Button>
    )
}

export default StuffedClamsRecipeBtn;