import React from  'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const PineappleUpsideDownCakeBtn = () => {
    return (
        <Button variant="outline-info">
            <Link to="/pineapple-upside-down-cake-recipe">
                Click Here!
            </Link>
        </Button>
    )
}

export default PineappleUpsideDownCakeBtn;