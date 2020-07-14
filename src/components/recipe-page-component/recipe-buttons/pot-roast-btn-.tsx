import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const PotRoastBtn = () => {
    return (
        <Button variant="outline-info">
            <Link to="/pot-roast-recipe">
                Click Here!
            </Link>
        </Button>
    )
}

export default PotRoastBtn;