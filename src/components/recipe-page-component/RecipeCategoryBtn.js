import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const RecipeCategoryBtn = () => {
    return (
        <Link to="/recipe-categories">
            <Button variant="info" size="lg">Categories </Button>
        </Link>
    )
}

export default RecipeCategoryBtn;