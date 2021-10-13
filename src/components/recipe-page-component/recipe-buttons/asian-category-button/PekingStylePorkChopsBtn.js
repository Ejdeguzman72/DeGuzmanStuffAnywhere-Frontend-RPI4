import React from  'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const PekingStylePorkChopBtn = () => {
    return (
        <Button variant="outline-info">
            <Link to="/peking-style-porkchop-recipe">
                Click Here!
            </Link>
        </Button>
    )
}

export default PekingStylePorkChopBtn;