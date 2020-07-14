import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const BakedZitibtnComponent  =  () => {
    return (
        <Button variant="outline-info">
            <Link to="baked-ziti=recipe">
                Click Here!
            </Link>
        </Button>
    )
}

export default BakedZitibtnComponent;