import React from  'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const BlackEyedPeasAndHamHock = () => {
    return (
        <Button variant="outline-info">
            <Link to="/black-eyed-peas-and-ham-hock-recipe">
                Click Here!
            </Link>
        </Button>
    )
}

export default BlackEyedPeasAndHamHock;