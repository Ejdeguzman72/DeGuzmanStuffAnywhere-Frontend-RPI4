import React from  'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const PecanPieBtnComponent = () => {
    return (
        <Button variant="outline-info">
            <Link to="/pecan-pie-recipe">
                Click Here!
            </Link>
        </Button>
    )
}

export default PecanPieBtnComponent;