import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const BreakfeastStrataBtn = () => {
    return (
        <Button variant="outline-info">
            <Link to="breakfeast-strata-recipe">
                Click Here!
            </Link>
        </Button>
    )
}

export default BreakfeastStrataBtn;