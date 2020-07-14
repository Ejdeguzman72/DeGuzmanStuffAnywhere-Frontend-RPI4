import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const FajitasBtnComponent = () => {
    return (
        <Button variant="outline-info">
            <Link to="/fajitas-recipe">
                Click Here!
            </Link>
        </Button>
    )
}

export default FajitasBtnComponent;