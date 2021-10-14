import React from  'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ArrozCaldoBtn = () => {
    return (
        <Button variant="outline-info">
            <Link to="/arroz-caldo-recipe">
                Click Here!
            </Link>
        </Button>
    )
}

export default ArrozCaldoBtn;