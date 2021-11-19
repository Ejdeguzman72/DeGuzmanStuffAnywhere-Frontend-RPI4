import React from  'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const RedVelvetCakeBtn = () => {
    return (
        <Button variant="outline-info">
            <Link to="/red-velvet-cake-recipe">
                Click Here!
            </Link>
        </Button>
    )
}

export default RedVelvetCakeBtn;