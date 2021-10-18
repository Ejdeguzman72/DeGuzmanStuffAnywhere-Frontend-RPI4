import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const FrenchToastREcipeBtn = () => {
    return (
        <Button variant="outline-info">
            <Link to="french-toast-recipe">
                Click Here!
            </Link>
        </Button>
    )
}

export default FrenchToastREcipeBtn;