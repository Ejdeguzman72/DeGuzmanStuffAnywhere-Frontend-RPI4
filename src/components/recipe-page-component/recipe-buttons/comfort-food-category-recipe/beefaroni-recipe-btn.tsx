import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const BeefaroniBtnComponent = () => {
    return (
        <Button variant="outline-info">
            <Link to="/beefaroni-recipe">
                Click Here!
            </Link>
        </Button>
    )
}

export default BeefaroniBtnComponent;