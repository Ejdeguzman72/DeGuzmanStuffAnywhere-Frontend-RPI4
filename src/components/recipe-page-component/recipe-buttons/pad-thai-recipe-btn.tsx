import React from  'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const PadThaiRecipeBtnComponent = () => {
    return (
        <Button variant="outline-info">
            <Link to="/pad-thai-recipe">
                Click Here!
            </Link>
        </Button>
    )
}

export default PadThaiRecipeBtnComponent;