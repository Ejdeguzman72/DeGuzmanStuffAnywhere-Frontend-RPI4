import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const BakedRedSnapperBtn  =  () => {
    return (
        <Button variant="outline-info">
            <Link to="baked-red-snapper-recipe">
                Click Here!
            </Link>
        </Button>
    )
}

export default BakedRedSnapperBtn;