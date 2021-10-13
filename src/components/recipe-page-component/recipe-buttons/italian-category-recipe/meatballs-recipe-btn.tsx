import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MeatballBtnComponent = () => {
    return (
        <Button variant="outline-info">
            <Link to="/meatball-recipe">
                Click Here!
            </Link>
        </Button>
    )
}

export default MeatballBtnComponent;