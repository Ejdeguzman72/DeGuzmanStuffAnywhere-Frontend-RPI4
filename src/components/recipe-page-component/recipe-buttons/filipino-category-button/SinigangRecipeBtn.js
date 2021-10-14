import React from  'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SinigangRecipeBtn = () => {
    return (
        <Button variant="outline-info">
            <Link to="/sinigang-recipe">
                Click Here!
            </Link>
        </Button>
    )
}

export default SinigangRecipeBtn;