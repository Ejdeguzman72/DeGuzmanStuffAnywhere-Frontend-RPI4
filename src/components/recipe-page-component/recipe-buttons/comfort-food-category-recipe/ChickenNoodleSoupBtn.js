import React from  'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ChickenNoodleSoupBtn = () => {
    return (
        <Button variant="outline-info">
            <Link to="/chicken-noodle-soup-recipe">
                Click Here!
            </Link>
        </Button>
    )
}

export default ChickenNoodleSoupBtn;