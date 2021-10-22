import React from  'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const EggFuYungRecipeBtn = () => {
    return (
        <Button variant="outline-info">
            <Link to="/egg-fu-yung-recipe">
                Click Here!
            </Link>
        </Button>
    )
}

export default EggFuYungRecipeBtn;