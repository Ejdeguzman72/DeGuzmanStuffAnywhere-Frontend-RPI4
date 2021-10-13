import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const StuffedShellsRecipeBtn  =  () => {
    return (
        <Button variant="outline-info">
            <Link to="stuffed-shells-recipe">
                Click Here!
            </Link>
        </Button>
    )
}

export default StuffedShellsRecipeBtn;