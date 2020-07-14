import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const StuffedGreenPeppersBtnComponent = () => {
    return (
        <Button variant="outline-info">
            <Link to="/stuffed-green-peppers-recipe">
                Click Here!
            </Link>
        </Button>
    )
}

export default StuffedGreenPeppersBtnComponent;