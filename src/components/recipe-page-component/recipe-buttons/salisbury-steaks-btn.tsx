import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SalisburySteakBtnComponent = () => {
    return (
        <Button variant="outline-info">
            <Link to="salisbury-steaks-recipe">
                Click Here!
            </Link>
        </Button>
    )
}

export default SalisburySteakBtnComponent;