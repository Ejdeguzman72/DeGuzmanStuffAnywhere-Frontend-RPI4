import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CornedBeefRecipeBtn = () => {
    return (
        <Button variant="outline-info">
            <Link to="corned-beef-recipe">
                Click Here!
            </Link>
        </Button>
    )
}

export default CornedBeefRecipeBtn;