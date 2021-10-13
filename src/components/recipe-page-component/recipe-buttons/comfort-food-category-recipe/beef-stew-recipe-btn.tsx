import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// needs to show both variants of the beef stew
// brown sauce
// red sauce
const BeefStewBtnComponent = () => {
    return (
        <Button variant="outline-info">
            <Link to="/beef-stew-recipe">
                Click Here!
            </Link>
        </Button>
    )
}

export default BeefStewBtnComponent;