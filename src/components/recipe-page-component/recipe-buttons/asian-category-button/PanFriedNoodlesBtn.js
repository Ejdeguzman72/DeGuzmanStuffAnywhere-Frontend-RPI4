import React from  'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const PanFriedNoodlesBtn = () => {
    return (
        <Button variant="outline-info">
            <Link to="/pan-fried-noodles-recipe">
                Click Here!
            </Link>
        </Button>
    )
}

export default PanFriedNoodlesBtn;