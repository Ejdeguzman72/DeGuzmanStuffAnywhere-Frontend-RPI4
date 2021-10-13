import React from 'react';
import { Button } from 'react-bootstrap';
import MeatsauceBtnComponent from './meat-sauce-btn';
import { Link } from 'react-router-dom';

const MeatloafbtnComponent = () => {
    return (
        <Button variant="outline-info">
            <Link to="/meatloaf-recipe">
                Click Here!
            </Link>
        </Button>
    )
}

export default MeatloafbtnComponent;