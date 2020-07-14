import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const PulledPorkBtn = () => {
    return (
        <Button variant="outline-info">
            <Link to="/pulled-port-recipe">
                Click Here!
            </Link>
        </Button>
    )
}

export default PulledPorkBtn;